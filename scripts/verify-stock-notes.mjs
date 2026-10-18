import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const { PGlite } = await import(process.argv[2] || '@electric-sql/pglite');
const db = new PGlite();
try {
  await db.exec(`create role anon; create role authenticated;
    create function public.is_admin() returns boolean language sql stable as $$ select current_setting('test.admin',true)='yes' $$;`);
  await db.exec(await readFile(new URL('../supabase/migrations/013_stock_notes.sql', import.meta.url), 'utf8'));
  const items = [{item:'Pants',size:'30',color:'Black',quantity:10},{item:'Shirt',size:'M',color:'',quantity:12}];
  await db.exec('set role anon');
  await assert.rejects(db.query('select * from stock_notes'), /permission denied/);
  await db.exec("reset role; set role authenticated; set test.admin='no'");
  assert.equal((await db.query('select * from stock_notes')).rows.length,0);
  await assert.rejects(db.query('insert into stock_notes(title,items) values($1,$2::jsonb)',['Private stock',JSON.stringify(items)]), /row-level security/);
  await db.exec("set test.admin='yes'");
  const note = (await db.query('insert into stock_notes(title,items) values($1,$2::jsonb) returning *',['October count',JSON.stringify(items)])).rows[0];
  assert.deepEqual(note.items,items);
  assert.equal(Number(note.revision),1);
  const changed = (await db.query("update stock_notes set notes='Restock shirts' where id=$1 and revision=1 returning *",[note.id])).rows[0];
  assert.equal(Number(changed.revision),2);
  assert.equal((await db.query("update stock_notes set notes='stale' where id=$1 and revision=1 returning *",[note.id])).rows.length,0);
  for (const invalid of [[],[{...items[0],quantity:-1}],[{...items[0],quantity:1.5}],[{...items[0],quantity:'10'}],[{...items[0],item:''}]]) {
    await assert.rejects(db.query('insert into stock_notes(title,items) values($1,$2::jsonb)',['Invalid',JSON.stringify(invalid)]),/check constraint/);
  }
  await db.exec("set test.admin='no'");
  assert.equal((await db.query('select * from stock_notes')).rows.length,0);
  assert.equal((await db.query('delete from stock_notes where id=$1 returning id',[note.id])).rows.length,0);
  await db.exec("set test.admin='yes'");
  assert.equal((await db.query('delete from stock_notes where id=$1 and revision=2 returning id',[note.id])).rows.length,1);
  console.log('Verified stock note persistence, revisions, stale-update protection, quantity validation, deletion, and admin-only access.');
} finally { await db.close(); }
