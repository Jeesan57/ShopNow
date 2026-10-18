import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const { PGlite } = await import(process.argv[2] || '@electric-sql/pglite');
const db = new PGlite();
try {
  await db.exec(`create role anon; create role authenticated;
    create function public.is_admin() returns boolean language sql stable as $$ select current_setting('test.admin',true)='yes' $$;`);
  await db.exec(await readFile(new URL('../supabase/migrations/014_dashboard_targets.sql',import.meta.url),'utf8'));
  await db.exec('set role anon');
  await assert.rejects(db.query('select * from dashboard_targets'),/permission denied/);
  await db.exec("reset role; set role authenticated; set test.admin='no'");
  assert.equal((await db.query('select * from dashboard_targets')).rows.length,0);
  await assert.rejects(db.exec("insert into dashboard_targets(month,revenue_target) values('2026-10-01',10000)"),/row-level security/);
  await db.exec("set test.admin='yes'");
  await db.exec("insert into dashboard_targets(month,revenue_target) values('2026-10-01',10000)");
  await db.exec("insert into dashboard_targets(month,revenue_target) values('2026-10-01',20000) on conflict(month) do update set revenue_target=excluded.revenue_target");
  assert.equal(Number((await db.query('select revenue_target from dashboard_targets')).rows[0].revenue_target),20000);
  await assert.rejects(db.exec("insert into dashboard_targets(month,revenue_target) values('2026-11-02',20000)"),/check constraint/);
  await assert.rejects(db.exec("insert into dashboard_targets(month,revenue_target) values('2026-11-01',0)"),/check constraint/);
  await db.exec("set test.admin='no'");
  assert.equal((await db.query('select * from dashboard_targets')).rows.length,0);
  assert.equal((await db.query("update dashboard_targets set revenue_target=1 returning month")).rows.length,0);
  console.log('Verified monthly target persistence, upsert, valid month/amount constraints, and admin-only access.');
} finally {await db.close();}
