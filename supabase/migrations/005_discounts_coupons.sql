begin;
alter table public.products add column if not exists discount_percent numeric(5,2) not null default 0 check(discount_percent between 0 and 100);
alter table public.orders add column if not exists discount_amount numeric(12,2) not null default 0 check(discount_amount>=0);
alter table public.orders add column if not exists coupon_code text not null default '';
create table if not exists public.coupons (
 id uuid primary key default gen_random_uuid(),
 code text not null unique check(code=upper(code) and code ~ '^[A-Z0-9_-]{3,40}$'),
 discount_type text not null check(discount_type in ('percent','fixed')),
 discount_value numeric(12,2) not null check(discount_value>0),
 min_subtotal numeric(12,2) not null default 0 check(min_subtotal>=0),
 max_discount numeric(12,2) check(max_discount>0),
 starts_at timestamptz, expires_at timestamptz,
 usage_limit integer check(usage_limit>0), used_count integer not null default 0 check(used_count>=0),
 active boolean not null default true, created_at timestamptz not null default now(),
 check(discount_type<>'percent' or discount_value<=100),
 check(starts_at is null or expires_at is null or expires_at>starts_at)
);
alter table public.coupons enable row level security;
create policy "Admin coupon management" on public.coupons for all to authenticated using(is_admin()) with check(is_admin());
grant select,insert,update,delete on public.coupons to authenticated;

create or replace function public.quote_checkout(p_items jsonb,p_coupon text default '') returns jsonb language plpgsql security definer set search_path=public as $$
declare v_item jsonb; v_product products%rowtype; v_qty integer; v_subtotal numeric:=0; v_discount numeric:=0; v_code text; v_coupon coupons%rowtype; v_color text;
begin
 if p_items is null or jsonb_typeof(p_items)<>'array' or jsonb_array_length(p_items) not between 1 and 100 then raise exception 'Your cart is empty or too large'; end if;
 for v_item in select value from jsonb_array_elements(p_items) loop
  v_qty:=(v_item->>'quantity')::integer;
  select * into v_product from products where id=(v_item->>'id')::bigint and active;
  if not found or v_qty is null or v_qty not between 1 and 100 or not coalesce((v_item->>'size')=any(v_product.sizes),false) then raise exception 'An item is unavailable or has an invalid size or quantity'; end if;
  v_color:=coalesce(v_item->>'color','');
  if (cardinality(v_product.colors)>0 and not(v_color=any(v_product.colors))) or (cardinality(v_product.colors)=0 and v_color<>'') then raise exception 'Choose an available color for %',v_product.name; end if;
  if v_product.stock < (select sum((value->>'quantity')::integer) from jsonb_array_elements(p_items) where (value->>'id')::bigint=v_product.id) then raise exception 'An item has insufficient stock'; end if;
  v_subtotal:=v_subtotal+round(v_product.price*(1-v_product.discount_percent/100),2)*v_qty;
 end loop;
 v_code:=upper(trim(coalesce(p_coupon,'')));
 if v_code<>'' then
  select * into v_coupon from coupons where code=v_code and active;
  if not found or (v_coupon.starts_at is not null and v_coupon.starts_at>clock_timestamp()) or (v_coupon.expires_at is not null and v_coupon.expires_at<=clock_timestamp()) or (v_coupon.usage_limit is not null and v_coupon.used_count>=v_coupon.usage_limit) then raise exception 'This coupon is invalid, expired, or no longer available'; end if;
  if v_subtotal<v_coupon.min_subtotal then raise exception 'This coupon requires a minimum merchandise subtotal of ৳%',v_coupon.min_subtotal; end if;
  v_discount:=case when v_coupon.discount_type='percent' then round(v_subtotal*v_coupon.discount_value/100,2) else v_coupon.discount_value end;
  if v_coupon.max_discount is not null then v_discount:=least(v_discount,v_coupon.max_discount); end if;
  v_discount:=least(v_discount,v_subtotal);
 end if;
 return jsonb_build_object('subtotal',v_subtotal,'discount',v_discount,'coupon_code',v_code);
end; $$;
revoke all on function public.quote_checkout(jsonb,text) from public;
grant execute on function public.quote_checkout(jsonb,text) to anon,authenticated;

-- Replace the previous signature so default parameters never produce ambiguous RPC calls.
drop function if exists public.place_order_bd(text,text,text,text,jsonb,text,text,text,text);
create or replace function public.place_order_bd(p_name text,p_email text,p_phone text,p_address text,p_items jsonb,p_district text,p_area text,p_zone text,p_notes text,p_coupon text default '',p_expected_total numeric default null) returns uuid language plpgsql security definer set search_path=public as $$
declare v_id uuid; v_item jsonb; v_product products%rowtype; v_qty integer; v_total numeric:=0; v_size text; v_color text; v_fee numeric; v_phone text; v_quote jsonb; v_discount numeric; v_code text; v_price numeric;
begin
 v_phone := regexp_replace(translate(trim(coalesce(p_phone,'')), '০১২৩৪৫৬৭৮৯', '0123456789'), '[[:space:]()-]', '', 'g');
 if left(v_phone,4)='+880' then v_phone:='0'||substring(v_phone from 5);
 elsif left(v_phone,3)='880' then v_phone:='0'||substring(v_phone from 4); end if;
 if v_phone !~ '^01[3-9][0-9]{8}$' then raise exception 'Enter a valid Bangladesh mobile number, such as 01712345678'; end if;
 if p_district is null or not exists(select 1 from bd_districts where name=p_district) or length(trim(coalesce(p_area,''))) not between 2 and 150 then raise exception 'Choose a district and enter your area or upazila'; end if;
 if length(coalesce(p_notes,''))>1000 then raise exception 'Delivery notes must be under 1000 characters'; end if;
 if p_zone='inside_dhaka' and p_district<>'Dhaka' then raise exception 'Inside Dhaka delivery is only available within Dhaka city'; end if;
 select fee into v_fee from delivery_zones where code=p_zone;
 if not found then raise exception 'Choose a valid delivery area'; end if;
 p_email := lower(trim(coalesce(p_email,'')));
 if p_name is null or p_address is null then raise exception 'Enter your name and delivery address'; end if;
 if length(trim(p_name)) not between 1 and 200 or length(p_email)>254 or (p_email<>'' and p_email !~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$') or length(trim(p_phone)) not between 5 and 40 or length(trim(p_address)) not between 5 and 1000 then raise exception 'Enter valid contact and shipping details'; end if;
 if p_items is null or jsonb_typeof(p_items) <> 'array' or jsonb_array_length(p_items) not between 1 and 100 then raise exception 'Your cart is empty or too large'; end if;
 -- Lock products in ID order before pricing, then lock the coupon for atomic usage limits.
 perform id from products where id in (select (value->>'id')::bigint from jsonb_array_elements(p_items)) order by id for update;
 v_code:=upper(trim(coalesce(p_coupon,'')));
 if v_code<>'' then perform id from coupons where code=v_code for update; end if;
 v_quote:=quote_checkout(p_items,v_code);
 v_discount:=(v_quote->>'discount')::numeric;
 if p_expected_total is not null and round(p_expected_total,2)<>(v_quote->>'subtotal')::numeric-v_discount+v_fee then raise exception 'Prices or discounts have changed. Refresh checkout and review your total before ordering.'; end if;
 insert into orders(customer_name,email,phone,address,total) values(trim(p_name),lower(trim(p_email)),v_phone,trim(p_address),0) returning id into v_id;
 for v_item in select value from jsonb_array_elements(p_items) order by (value->>'id')::bigint loop
  v_qty := (v_item->>'quantity')::integer; v_size:=v_item->>'size'; v_color:=coalesce(v_item->>'color','');
  select * into v_product from products where id=(v_item->>'id')::bigint and active for update;
  if not found or v_qty is null or v_qty not between 1 and 100 or v_product.stock < v_qty or v_size is null or not(v_size=any(v_product.sizes)) then raise exception 'An item is unavailable, out of stock, or has an invalid size'; end if;
  if (cardinality(v_product.colors)>0 and not(v_color=any(v_product.colors))) or (cardinality(v_product.colors)=0 and v_color<>'') then raise exception 'Choose an available color for %', v_product.name; end if;
  v_price:=round(v_product.price*(1-v_product.discount_percent/100),2);
  insert into order_items(order_id,product_id,name,size,color,quantity,price) values(v_id,v_product.id,v_product.name,v_size,v_color,v_qty,v_price);
  update products set stock=stock-v_qty where id=v_product.id;
  v_total:=v_total+v_price*v_qty;
 end loop;
 update orders set subtotal=v_total,delivery_charge=v_fee,total=v_total-v_discount+v_fee,discount_amount=v_discount,coupon_code=v_code,district=p_district,area=trim(p_area),delivery_zone=p_zone,delivery_notes=trim(coalesce(p_notes,'')) where id=v_id;
 if v_code<>'' then update coupons set used_count=used_count+1 where code=v_code; end if;
 return v_id;
end; $$;
revoke all on function public.place_order_bd(text,text,text,text,jsonb,text,text,text,text,text,numeric) from public;
grant execute on function public.place_order_bd(text,text,text,text,jsonb,text,text,text,text,text,numeric) to anon,authenticated;
notify pgrst, 'reload schema';
commit;
