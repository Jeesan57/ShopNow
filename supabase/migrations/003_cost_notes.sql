begin;
create table public.cost_notes (
 id uuid primary key default gen_random_uuid(),
 title text not null check(length(trim(title)) between 1 and 120),
 items jsonb not null default '[]' check(jsonb_typeof(items)='array' and jsonb_array_length(items) between 1 and 200),
 notes text not null default '' check(length(notes)<=10000),
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now()
);
alter table public.cost_notes enable row level security;
create policy "Admin cost notes" on public.cost_notes for all to authenticated using(public.is_admin()) with check(public.is_admin());
grant select,insert,update,delete on public.cost_notes to authenticated;
commit;
