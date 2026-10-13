begin;
alter table public.products add column if not exists colors text[] not null default '{}';
alter table public.order_items add column if not exists color text not null default '';
alter table public.products add constraint product_colors_valid check (cardinality(colors)<=32 and array_position(colors,null) is null and not(''=any(colors)));
create or replace function public.place_order_bd(p_name text,p_email text,p_phone text,p_address text,p_items jsonb,p_district text,p_area text,p_zone text,p_notes text) returns uuid language plpgsql security definer set search_path=public as $$
declare v_id uuid; v_item jsonb; v_product products%rowtype; v_qty integer; v_total numeric:=0; v_size text; v_color text; v_fee numeric; v_phone text;
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
 insert into orders(customer_name,email,phone,address,total) values(trim(p_name),lower(trim(p_email)),v_phone,trim(p_address),0) returning id into v_id;
 for v_item in select value from jsonb_array_elements(p_items) order by (value->>'id')::bigint loop
  v_qty := (v_item->>'quantity')::integer; v_size:=v_item->>'size'; v_color:=coalesce(v_item->>'color','');
  select * into v_product from products where id=(v_item->>'id')::bigint and active for update;
  if not found or v_qty is null or v_qty not between 1 and 100 or v_product.stock < v_qty or v_size is null or not(v_size=any(v_product.sizes)) then raise exception 'An item is unavailable, out of stock, or has an invalid size'; end if;
  if (cardinality(v_product.colors)>0 and not(v_color=any(v_product.colors))) or (cardinality(v_product.colors)=0 and v_color<>'') then raise exception 'Choose an available color for %', v_product.name; end if;
  insert into order_items(order_id,product_id,name,size,color,quantity,price) values(v_id,v_product.id,v_product.name,v_size,v_color,v_qty,v_product.price);
  update products set stock=stock-v_qty where id=v_product.id;
  v_total:=v_total+v_product.price*v_qty;
 end loop;
 update orders set subtotal=v_total,delivery_charge=v_fee,total=v_total+v_fee,district=p_district,area=trim(p_area),delivery_zone=p_zone,delivery_notes=trim(coalesce(p_notes,'')) where id=v_id;
 return v_id;
end; $$;
revoke all on function public.place_order_bd(text,text,text,text,jsonb,text,text,text,text) from public;
grant execute on function public.place_order_bd(text,text,text,text,jsonb,text,text,text,text) to anon,authenticated;
notify pgrst, 'reload schema';
commit;
