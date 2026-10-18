begin;
alter table public.products add column if not exists combo_stock jsonb default null;

create or replace function public.validate_combo_piece_stock()
returns trigger language plpgsql set search_path=public as $$
declare item jsonb; size_label text; quantities jsonb; cleaned jsonb := '{}'; total bigint; sets bigint := null;
begin
  if not new.is_combo then new.combo_stock := null; return new; end if;
  if new.combo_stock is null then return new; end if;
  if jsonb_typeof(new.combo_stock) <> 'object' then raise exception 'Combo stock must contain quantities for each piece'; end if;
  for item in select value from jsonb_array_elements(new.combo_items) loop
    quantities := coalesce(new.combo_stock->(item->>'id'),'{}');
    if jsonb_typeof(quantities) <> 'object' then raise exception 'Enter size stock for each combo piece'; end if;
    total:=0;
    for size_label in select jsonb_array_elements_text(item->'sizes') loop
      if not(quantities ? size_label) then quantities:=quantities || jsonb_build_object(size_label,0); end if;
      if jsonb_typeof(quantities->size_label) <> 'number' or (quantities->>size_label) !~ '^[0-9]+$'
        or (quantities->>size_label)::numeric > 1000000 then raise exception 'Piece stock must be whole numbers from 0 to 1000000'; end if;
      total:=total+(quantities->>size_label)::integer;
    end loop;
    select coalesce(jsonb_object_agg(key,value),'{}') into quantities from jsonb_each(quantities) where key in (select jsonb_array_elements_text(item->'sizes'));
    cleaned:=cleaned || jsonb_build_object(item->>'id',quantities);
    sets:=least(sets,total);
  end loop;
  new.combo_stock:=cleaned;
  new.size_stock:=null;
  new.stock:=coalesce(sets,0)::integer;
  return new;
end; $$;
drop trigger if exists zzzz_validate_combo_piece_stock on public.products;
create trigger zzzz_validate_combo_piece_stock before insert or update on public.products
for each row execute function public.validate_combo_piece_stock();

-- Validate all cart lines together: different combinations can consume the same piece size.
create or replace function public.check_combo_piece_stock(p_product public.products,p_items jsonb)
returns void language plpgsql set search_path=public as $$
declare piece jsonb; size_label text; needed bigint;
begin
  if not p_product.is_combo or p_product.combo_stock is null then return; end if;
  for piece in select value from jsonb_array_elements(p_product.combo_items) loop
    for size_label in select jsonb_array_elements_text(piece->'sizes') loop
      select coalesce(sum((value->>'quantity')::integer),0) into needed from jsonb_array_elements(p_items)
      where (value->>'id')::bigint=p_product.id and ((piece->>'name') || ': ' || size_label)=any(string_to_array(value->>'size',' · '));
      if needed > coalesce((p_product.combo_stock->(piece->>'id')->>size_label)::integer,0) then
        raise exception 'Insufficient stock for % size %',piece->>'name',size_label;
      end if;
    end loop;
  end loop;
end; $$;
revoke all on function public.check_combo_piece_stock(public.products,jsonb) from public;

create or replace function public.deduct_combo_piece_stock(p_stock jsonb,p_pieces jsonb,p_size text,p_qty integer)
returns jsonb language plpgsql set search_path=public as $$
declare piece jsonb; label text; size_label text; remaining integer;
begin
  if p_stock is null then return null; end if;
  for piece in select value from jsonb_array_elements(p_pieces) loop
    select part into label from unnest(string_to_array(p_size,' · ')) part where starts_with(part,(piece->>'name') || ': ');
    size_label:=substring(label from length(piece->>'name')+3);
    remaining:=coalesce((p_stock->(piece->>'id')->>size_label)::integer,0)-p_qty;
    if size_label is null or remaining<0 then raise exception 'Insufficient stock for %',piece->>'name'; end if;
    p_stock:=jsonb_set(p_stock,array[piece->>'id',size_label],to_jsonb(remaining));
  end loop;
  return p_stock;
end; $$;
revoke all on function public.deduct_combo_piece_stock(jsonb,jsonb,text,integer) from public;

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
  if v_product.size_stock is not null and coalesce((v_product.size_stock->>(v_item->>'size'))::integer,0) < (select sum((value->>'quantity')::integer) from jsonb_array_elements(p_items) where (value->>'id')::bigint=v_product.id and value->>'size'=v_item->>'size') then raise exception 'The selected size has insufficient stock'; end if;
  perform check_combo_piece_stock(v_product,p_items);
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
  if v_product.size_stock is not null and coalesce((v_product.size_stock->>v_size)::integer,0) < v_qty then raise exception 'The selected size has insufficient stock'; end if;
  update products set stock=stock-v_qty,
    combo_stock=case when is_combo and combo_stock is not null then deduct_combo_piece_stock(combo_stock,combo_items,v_size,v_qty) else combo_stock end,
    size_stock=case when size_stock is null then null else jsonb_set(size_stock,array[v_size],to_jsonb((size_stock->>v_size)::integer-v_qty)) end
    where id=v_product.id;
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
