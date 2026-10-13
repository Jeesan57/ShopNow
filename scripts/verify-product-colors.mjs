import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { cartItemKey, matchesCartItem } from '../src/lib/productColors.js';
const { PGlite } = await import(process.argv[2] || '@electric-sql/pglite');
const db = new PGlite();
try {
  await db.exec(`
    create role anon; create role authenticated;
    create table products(id bigint primary key,name text,price numeric,image text,sizes text[],stock integer,active boolean);
    create table orders(id uuid primary key default gen_random_uuid(),customer_name text,email text,phone text,address text,total numeric,subtotal numeric,delivery_charge numeric,district text,area text,delivery_zone text,delivery_notes text);
    create table order_items(id bigint generated always as identity,order_id uuid,product_id bigint,name text,size text,quantity integer,price numeric);
    create table bd_districts(name text); insert into bd_districts values('Dhaka');
    create table delivery_zones(code text,fee numeric); insert into delivery_zones values('inside_dhaka',70);
    insert into products values(1,'Color product',100,'image',array['M'],10,true),(2,'Plain product',50,'image',array['M'],10,true);
  `);
  await db.exec(await readFile(new URL('../supabase/migrations/004_product_colors.sql', import.meta.url), 'utf8'));
  await db.exec("update products set colors=array['Black','Olive'] where id=1");
  const order = items => db.query("select place_order_bd('Test customer','','01712345678','Test address',$1::jsonb,'Dhaka','Mirpur','inside_dhaka','') id", [JSON.stringify(items)]);
  await assert.rejects(order([{ id: 1, size: 'M', color: 'Red', quantity: 1 }]), /available color/);
  await assert.rejects(order([{ id: 1, size: 'M', quantity: 1 }]), /available color/);
  await assert.rejects(order([{ id: 2, size: 'M', color: 'Black', quantity: 1 }]), /available color/);
  assert.equal((await db.query('select count(*)::int count from orders')).rows[0].count, 0);
  const result = await order([{ id: 1, size: 'M', color: 'Black', quantity: 1, price: 0 }, { id: 1, size: 'M', color: 'Olive', quantity: 1 }]);
  const id = result.rows[0].id;
  assert.deepEqual((await db.query('select color from order_items where order_id=$1 order by id', [id])).rows.map(row => row.color), ['Black', 'Olive']);
  assert.equal(Number((await db.query('select total from orders where id=$1', [id])).rows[0].total), 270);
  assert.equal((await db.query('select stock from products where id=1')).rows[0].stock, 8);
  await assert.rejects(order([{ id: 1, size: 'M', color: 'Black', quantity: 6 }, { id: 1, size: 'M', color: 'Olive', quantity: 6 }]), /unavailable/);
  assert.equal((await db.query('select stock from products where id=1')).rows[0].stock, 8, 'Failed order must roll back stock');
  assert.equal((await db.query('select count(*)::int count from orders')).rows[0].count, 1, 'Failed order must roll back its header');
  await order([{ id: 2, size: 'M', quantity: 1 }]);
  assert.notEqual(cartItemKey({ id: 1, size: 'M', color: 'Black' }), cartItemKey({ id: 1, size: 'M', color: 'Olive' }));
  assert.ok(matchesCartItem({ id: 2, size: 'M' }, 2, 'M'));
  assert.ok(!matchesCartItem({ id: 1, size: 'M', color: 'Olive' }, 1, 'M', 'Black'));
  console.log('Verified migration, color validation, order persistence, server prices, stock rollback, separate cart variants, and products without colors.');
} finally { await db.close(); }
