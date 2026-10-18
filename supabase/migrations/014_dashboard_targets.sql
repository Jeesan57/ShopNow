begin;
create table public.dashboard_targets (
  month date primary key check(extract(day from month)=1),
  revenue_target numeric(14,2) not null check(revenue_target>0 and revenue_target<=999999999999.99),
  updated_at timestamptz not null default now()
);
alter table public.dashboard_targets enable row level security;
create policy "Admin dashboard targets" on public.dashboard_targets for all to authenticated
using(public.is_admin()) with check(public.is_admin());
grant select,insert,update,delete on public.dashboard_targets to authenticated;
notify pgrst, 'reload schema';
commit;
