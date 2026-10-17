begin;

alter table public.products add column if not exists combo_items jsonb not null default '[]';
drop trigger if exists validate_combo_product on public.products;

-- Preserve existing selection labels exactly, so saved carts and historical orders match.
do $$
declare
  product record;
  kind text;
  columns jsonb;
  item_chart jsonb;
  row_chart jsonb;
  size_row record;
  metric record;
  items jsonb;
begin
  for product in select * from public.products where is_combo and combo_items = '[]'::jsonb loop
    items := '[]';
    foreach kind in array array['sweater','denim'] loop
      columns := case kind when 'sweater' then '{"chest":"Chest width (flat)","shoulder":"Shoulder","length":"Body length","sleeve":"Sleeve length"}'::jsonb
        else '{"waist":"Waist circumference","hip":"Hip circumference","inseam":"Inseam","thigh":"Thigh width (flat)","opening":"Leg opening (flat)"}'::jsonb end;
      item_chart := '{}';
      for size_row in select * from jsonb_each(coalesce(product.size_charts -> kind,'{}'::jsonb)) loop
        row_chart := '{}';
        for metric in select * from jsonb_each(size_row.value) loop
          if columns ? metric.key then row_chart := row_chart || jsonb_build_object(columns ->> metric.key,metric.value); end if;
        end loop;
        item_chart := item_chart || jsonb_build_object(size_row.key,row_chart);
      end loop;
      items := items || jsonb_build_array(jsonb_build_object(
        'id',kind,'name',case kind when 'sweater' then 'Sweater' else 'Denim' end,
        'sizes',case kind when 'sweater' then to_jsonb(product.sweater_sizes) else to_jsonb(product.denim_sizes) end,
        'unit','in','chart',item_chart,
        'measurements',case kind when 'sweater' then '["Chest width (flat)","Shoulder","Body length","Sleeve length"]'::jsonb
          else '["Waist circumference","Hip circumference","Inseam","Thigh width (flat)","Leg opening (flat)"]'::jsonb end));
    end loop;
    update public.products set combo_items=items where id=product.id;
  end loop;
end;
$$;

create or replace function public.validate_combo_product()
returns trigger language plpgsql set search_path = public as $$
declare
  item jsonb;
  option_value jsonb;
  column_value jsonb;
  size_row record;
  metric record;
  item_ids text[] := '{}';
  item_names text[] := '{}';
  labels text[];
  pairs text[] := array[''];
  next_pairs text[];
  prefix text;
  size_label text;
begin
  if jsonb_typeof(new.combo_items) is distinct from 'array' then raise exception 'Combo items must be an array'; end if;
  if not new.is_combo then return new; end if;
  if jsonb_array_length(new.combo_items) not between 2 and 6 then raise exception 'A combo needs 2 to 6 items'; end if;
  for item in select value from jsonb_array_elements(new.combo_items) loop
    if jsonb_typeof(item) is distinct from 'object'
      or jsonb_typeof(item->'id') is distinct from 'string'
      or coalesce(item->>'id','') !~ '^[a-zA-Z0-9_-]{1,64}$'
      or jsonb_typeof(item->'name') is distinct from 'string'
      or coalesce(length(btrim(item->>'name')),0) not between 1 and 60
      or item->>'name' <> btrim(item->>'name') or item->>'name' ~ '[·:]'
      or item->>'id' = any(item_ids) or lower(item->>'name') = any(item_names) then
      raise exception 'Combo items need unique identifiers and names without colons or middle dots';
    end if;
    item_ids := array_append(item_ids,item->>'id');
    item_names := array_append(item_names,lower(item->>'name'));
    if jsonb_typeof(item->'sizes') is distinct from 'array' then raise exception 'Choose available options for every combo item'; end if;
    if jsonb_array_length(item->'sizes') not between 1 and 50 then raise exception 'Each combo item needs 1 to 50 options'; end if;
    labels := '{}';
    for option_value in select value from jsonb_array_elements(item->'sizes') loop
      size_label := option_value #>> '{}';
      if jsonb_typeof(option_value) is distinct from 'string' or coalesce(length(size_label),0) not between 1 and 40
        or size_label <> btrim(size_label) or size_label ~ '[·:]' or size_label = any(labels) then
        raise exception 'Combo options must be distinct nonempty labels without colons or middle dots';
      end if;
      labels := array_append(labels,size_label);
    end loop;
    if cardinality(pairs) * cardinality(labels) > 1024 then raise exception 'Limit combos to 1024 option combinations'; end if;
    next_pairs := '{}';
    foreach prefix in array pairs loop
      foreach size_label in array labels loop
        next_pairs := array_append(next_pairs, case when prefix = '' then '' else prefix || ' · ' end || (item->>'name') || ': ' || size_label);
      end loop;
    end loop;
    pairs := next_pairs;
    if jsonb_typeof(item->'unit') is distinct from 'string' or item->>'unit' not in ('in','cm') then raise exception 'Choose inches or centimetres for measurements'; end if;
    if jsonb_typeof(item->'measurements') is distinct from 'array' then raise exception 'Measurement columns must be an array'; end if;
    if jsonb_array_length(item->'measurements') > 8 then raise exception 'Limit charts to 8 measurement columns'; end if;
    labels := '{}';
    for column_value in select value from jsonb_array_elements(item->'measurements') loop
      size_label := column_value #>> '{}';
      if jsonb_typeof(column_value) is distinct from 'string' or coalesce(length(size_label),0) not between 1 and 60
        or size_label <> btrim(size_label) or size_label = any(labels) then raise exception 'Use distinct measurement column names'; end if;
      labels := array_append(labels,size_label);
    end loop;
    if jsonb_typeof(item->'chart') is distinct from 'object' then raise exception 'Size chart must be an object'; end if;
    for size_row in select * from jsonb_each(item->'chart') loop
      if jsonb_typeof(size_row.value) is distinct from 'object' then raise exception 'Invalid size chart row'; end if;
      for metric in select * from jsonb_each(size_row.value) loop
        if not (metric.key = any(labels)) or jsonb_typeof(metric.value) is distinct from 'number' then raise exception 'Invalid measurement column or value'; end if;
        if metric.value::text::numeric <= 0 or metric.value::text::numeric > 1000 then raise exception 'Measurements must be greater than zero and at most 1000'; end if;
      end loop;
    end loop;
  end loop;
  new.sizes := pairs;
  return new;
end;
$$;

create trigger validate_combo_product before insert or update on public.products
  for each row execute function public.validate_combo_product();
update public.products set combo_items=combo_items where is_combo;
notify pgrst, 'reload schema';
commit;
