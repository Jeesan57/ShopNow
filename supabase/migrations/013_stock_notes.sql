begin;

create or replace function public.valid_stock_note_items(p_items jsonb)
returns boolean language plpgsql immutable set search_path=public as $$
declare item jsonb;
begin
  if p_items is null or jsonb_typeof(p_items) <> 'array' then return false; end if;
  if jsonb_array_length(p_items) not between 1 and 200 then return false; end if;
  for item in select value from jsonb_array_elements(p_items) loop
    if jsonb_typeof(item) is distinct from 'object'
      or jsonb_typeof(item->'item') is distinct from 'string'
      or coalesce(length(btrim(item->>'item')),0) not between 1 and 200
      or jsonb_typeof(item->'size') is distinct from 'string' or length(item->>'size')>1000
      or jsonb_typeof(item->'color') is distinct from 'string' or length(item->>'color')>40
      or jsonb_typeof(item->'quantity') is distinct from 'number' then return false; end if;
    if (item->>'quantity') !~ '^[0-9]+$' or (item->>'quantity')::numeric > 1000000 then return false; end if;
  end loop;
  return true;
end; $$;

create table public.stock_notes (
  id uuid primary key default gen_random_uuid(),
  title text not null check(length(btrim(title)) between 1 and 120),
  items jsonb not null check(public.valid_stock_note_items(items)),
  notes text not null default '' check(length(notes)<=10000),
  revision bigint not null default 1,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.stock_note_revision()
returns trigger language plpgsql set search_path=public as $$
begin
  new.revision:=old.revision+1;
  new.created_at:=old.created_at;
  new.updated_at:=clock_timestamp();
  return new;
end; $$;
create trigger stock_note_revision before update on public.stock_notes
for each row execute function public.stock_note_revision();

alter table public.stock_notes enable row level security;
create policy "Admin stock notes" on public.stock_notes for all to authenticated
using(public.is_admin()) with check(public.is_admin());
grant select,insert,update,delete on public.stock_notes to authenticated;

notify pgrst, 'reload schema';
commit;
