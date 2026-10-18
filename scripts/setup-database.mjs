import pg from 'pg';
import { readFile } from 'node:fs/promises';
import { createInterface } from 'node:readline';
const input = createInterface({ input: process.stdin });
process.stdout.write('Provide database password on stdin (not stored):\n');
const password = await new Promise(resolve => input.once('line', resolve));
input.close();
const ca = process.env.SUPABASE_DB_CA ? await readFile(process.env.SUPABASE_DB_CA, 'utf8') : undefined;
const client = new pg.Client({ host: 'db.stvokejqndakitzpracv.supabase.co', port: 5432, database: 'postgres', user: 'postgres', password, ssl: { rejectUnauthorized: true, ...(ca ? { ca } : {}) }, connectionTimeoutMillis: 15000 });
try {
  await client.connect();
  await client.query('create table if not exists public.shopnow_migrations (name text primary key, applied_at timestamptz not null default now()); alter table public.shopnow_migrations enable row level security;');
  for (const name of ['001_shop', '002_bangladesh_checkout', '003_cost_notes', '004_product_colors', '005_discounts_coupons', '006_customer_list', '007_combo_sizing', '008_universal_combos', '009_combo_colors', '010_category_images', '011_size_stock', '012_combo_piece_stock', '013_stock_notes', '014_dashboard_targets']) {
    const { rows } = await client.query('select name from public.shopnow_migrations where name=$1', [name]);
    if (rows.length) { console.log(`${name}: already applied.`); continue; }
    const sql = (await readFile(new URL(`../supabase/migrations/${name}.sql`, import.meta.url), 'utf8')).replace(/^begin;\s*/i, '').replace(/commit;\s*$/i, '');
    await client.query('begin');
    try {
      await client.query(sql);
      await client.query('insert into public.shopnow_migrations(name) values($1)', [name]);
      await client.query('commit');
      console.log(`${name}: applied.`);
    } catch (error) { await client.query('rollback'); throw error; }
  }
  const email = process.env.ADMIN_EMAIL;
  if(email) {
    const { rows } = await client.query('insert into public.admin_users(user_id) select id from auth.users where lower(email)=lower($1) on conflict do nothing returning user_id',[email]);
    console.log(rows.length ? 'Administrator authorized.' : 'No new administrator added. Create the Auth user first, or check existing access.');
  }
} catch (e) { console.error('Database setup failed:', e.code || e.name, e.message.replaceAll(password, '[redacted]')); process.exitCode = 1; }
finally { await client.end(); }
