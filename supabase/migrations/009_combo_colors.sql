begin;

-- Keep old combo-wide color choices until an admin configures colors per piece.
-- Build canonical labels in products.colors so existing checkout/order validation
-- and the order_items.color snapshot validate and preserve all piece choices.
create or replace function public.validate_combo_colors()
returns trigger language plpgsql set search_path=public as $$
declare
  item jsonb;
  color_value jsonb;
  label text;
  labels text[];
  pairs text[] := array[''];
  next_pairs text[];
  prefix text;
  has_colors boolean := false;
begin
  if not new.is_combo then return new; end if;
  if not exists(select 1 from jsonb_array_elements(new.combo_items) configured(value) where configured.value ? 'colors') then
    return new;
  end if;
  for item in select value from jsonb_array_elements(new.combo_items) loop
    if jsonb_typeof(item->'colors') is distinct from 'array' then raise exception 'Set available colors for each combo piece, or leave its colors empty'; end if;
    if jsonb_array_length(item->'colors') > 30 then raise exception 'Limit each combo piece to 30 colors'; end if;
    labels := '{}';
    for color_value in select value from jsonb_array_elements(item->'colors') loop
      label := color_value #>> '{}';
      if jsonb_typeof(color_value) is distinct from 'string' or coalesce(length(label),0) not between 1 and 40
        or label <> btrim(label) or label ~ '[·:]' or label = any(labels) then
        raise exception 'Use distinct color names without colons or middle dots';
      end if;
      labels := array_append(labels,label);
    end loop;
    if cardinality(labels) = 0 then continue; end if;
    has_colors := true;
    if cardinality(pairs) * cardinality(labels) > 1024 then raise exception 'Limit combos to 1024 color combinations'; end if;
    next_pairs := '{}';
    foreach prefix in array pairs loop
      foreach label in array labels loop
        next_pairs := array_append(next_pairs,case when prefix='' then '' else prefix || ' · ' end || (item->>'name') || ': ' || label);
      end loop;
    end loop;
    pairs := next_pairs;
  end loop;
  new.colors := case when has_colors then pairs else array[]::text[] end;
  return new;
end;
$$;

-- The universal combo validation trigger runs first (triggers run alphabetically).
drop trigger if exists zz_validate_combo_colors on public.products;
create trigger zz_validate_combo_colors before insert or update on public.products
  for each row execute function public.validate_combo_colors();
update public.products set combo_items=combo_items where is_combo;
notify pgrst, 'reload schema';
commit;
