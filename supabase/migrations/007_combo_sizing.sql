begin;

alter table public.products
  add column if not exists is_combo boolean not null default false,
  add column if not exists sweater_sizes text[] not null default '{}',
  add column if not exists denim_sizes text[] not null default '{}',
  add column if not exists size_charts jsonb not null default '{}';

create or replace function public.validate_combo_product()
returns trigger language plpgsql set search_path = public as $$
declare
  section record;
  size_row record;
  measurement record;
begin
  if jsonb_typeof(new.size_charts) is distinct from 'object' then
    raise exception 'Size charts must be an object';
  end if;
  for section in select * from jsonb_each(new.size_charts) loop
    if section.key not in ('sweater','denim') or jsonb_typeof(section.value) <> 'object' then
      raise exception 'Invalid size chart section';
    end if;
    for size_row in select * from jsonb_each(section.value) loop
      if jsonb_typeof(size_row.value) <> 'object' then raise exception 'Invalid size chart row'; end if;
      for measurement in select * from jsonb_each(size_row.value) loop
        if (section.key = 'sweater' and measurement.key not in ('chest','shoulder','length','sleeve'))
          or (section.key = 'denim' and measurement.key not in ('waist','hip','inseam','thigh','opening'))
          or jsonb_typeof(measurement.value) <> 'number' then
          raise exception 'Invalid size chart measurement';
        end if;
        if measurement.value::text::numeric <= 0 or measurement.value::text::numeric > 200 then
          raise exception 'Measurements must be greater than zero and at most 200 inches';
        end if;
      end loop;
    end loop;
  end loop;
  if new.is_combo then
    if cardinality(new.sweater_sizes) not between 1 and 12
       or cardinality(new.denim_sizes) not between 1 and 32 then
      raise exception 'Choose available sizes for both combo items';
    end if;
    if exists(select 1 from unnest(new.sweater_sizes || new.denim_sizes) s
      where s is null or s <> btrim(s) or length(s) not between 1 and 40 or s ~ '[·:]') then
      raise exception 'Invalid combo size label';
    end if;
    select array_agg('Sweater: ' || s.label || ' · Denim: ' || d.label order by s.position,d.position)
      into new.sizes
      from unnest(new.sweater_sizes) with ordinality s(label,position)
      cross join unnest(new.denim_sizes) with ordinality d(label,position);
  end if;
  return new;
end;
$$;

drop trigger if exists validate_combo_product on public.products;
create trigger validate_combo_product before insert or update on public.products
  for each row execute function public.validate_combo_product();

notify pgrst, 'reload schema';
commit;
