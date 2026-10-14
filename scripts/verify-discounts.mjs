import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { productPrice, normalizeProduct } from '../src/lib/pricing.js';
const { PGlite } = await import(process.argv[2] || '@electric-sql/pglite');
const db = new PGlite();
try {
  await db.exec(`
    create role anon; create role authenticated;
    create function public.is_admin() returns boolean language sql as $$ select false $$;
    create table products(id bigint primary key,name text,price numeric,image text,sizes text[],stock integer,active boolean);
    create table orders(id uuid primary key default gen_random_uuid(),customer_name text,email text,phone text,address text,total numeric,subtotal numeric,delivery_charge numeric,district text,area text,delivery_zone text,delivery_notes text);
    create table order_items(id bigint generated always as identity,order_id uuid,product_id bigint,name text,size text,quantity integer,price numeric);
    create table bd_districts(name text); insert into bd_districts values('Dhaka');
    create table delivery_zones(code text,fee numeric); insert into delivery_zones values('inside_dhaka',70),('outside_dhaka',130);
    insert into products values(1,'Color product',100,'image',array['M'],100,true),(2,'Plain product',1.15,'image',array['M'],100,true);
  `);
  for (const name of ['004_product_colors','005_discounts_coupons']) await db.exec(await readFile(new URL(`../supabase/migrations/${name}.sql`, import.meta.url),'utf8'));
  await db.exec("update products set colors=array['Black','Olive'],discount_percent=20 where id=1; update products set discount_percent=50 where id=2;");
  await db.exec(`insert into coupons(code,discount_type,discount_value,min_subtotal,max_discount,usage_limit,active,starts_at,expires_at) values
    ('SAVE10','percent',10,0,null,null,true,null,null),
    ('ONLYONCE','fixed',25,0,null,1,true,null,null),
    ('BIGSAVE','fixed',500,0,null,null,true,null,null),
    ('CAPPED','percent',50,0,15,null,true,null,null),
    ('MINIMUM','percent',10,100,null,null,true,null,null),
    ('EXPIRED','percent',10,0,null,null,true,null,now()-interval '1 day'),
    ('FUTURE','percent',10,0,null,null,true,now()+interval '1 day',null),
    ('DISABLED','percent',10,0,null,null,false,null,null);
  `);
  const one=[{id:1,size:'M',color:'Black',quantity:1,price:0}];
  const two=[...one,{id:1,size:'M',color:'Olive',quantity:1}];
  const quote = async(items,code='')=>(await db.query('select quote_checkout($1::jsonb,$2) result',[JSON.stringify(items),code])).rows[0].result;
  const order = async(items,code='',expected=null)=>(await db.query("select place_order_bd('Test customer','','01712345678','Test address',$1::jsonb,'Dhaka','Mirpur','inside_dhaka','',$2,$3::numeric) id",[JSON.stringify(items),code,expected])).rows[0].id;
  assert.equal(productPrice({price:1.15,discount_percent:50}),0.58);
  assert.equal(productPrice(normalizeProduct({price:100,discount_percent:20})),80,'Normalization must be idempotent');
  assert.equal((await quote([{id:2,size:'M',quantity:1}])).subtotal,0.58,'Server and client rounding must agree');
  assert.deepEqual(await quote(two,' save10 '),{subtotal:160,discount:16,coupon_code:'SAVE10'});
  assert.equal((await quote(two,'BIGSAVE')).discount,160,'Discount cannot consume delivery charges');
  assert.equal((await quote(two,'CAPPED')).discount,15);
  for(const code of ['EXPIRED','FUTURE','DISABLED','UNKNOWN']) await assert.rejects(quote(one,code),/invalid|expired/);
  await assert.rejects(quote(one,'MINIMUM'),/minimum/);
  await assert.rejects(quote([{id:1,size:'M',color:'Red',quantity:1}],'SAVE10'),/available color/);
  await assert.rejects(quote([{id:1,size:'M',color:'Black',quantity:1},{id:1,size:'M',color:'Olive',quantity:100}]),/insufficient stock/);
  await assert.rejects(order(two,'SAVE10',1),/Prices or discounts/);
  assert.equal((await db.query('select count(*)::int n from orders')).rows[0].n,0);
  const id=await order(two,'SAVE10',214);
  const placed=(await db.query('select * from orders where id=$1',[id])).rows[0];
  assert.equal(Number(placed.subtotal),160); assert.equal(Number(placed.discount_amount),16); assert.equal(Number(placed.delivery_charge),70); assert.equal(Number(placed.total),214);
  assert.equal(placed.coupon_code,'SAVE10');
  const lines=(await db.query('select price,color from order_items where order_id=$1 order by id',[id])).rows;
  assert.deepEqual(lines.map(line=>Number(line.price)),[80,80]); assert.deepEqual(lines.map(line=>line.color),['Black','Olive']);
  await assert.rejects(order(one,'ONLYONCE',0),/Prices or discounts/);
  assert.equal((await db.query("select used_count from coupons where code='ONLYONCE'")).rows[0].used_count,0,'Failed orders cannot consume coupons');
  await order(one,'ONLYONCE',125);
  const stock=(await db.query('select stock from products where id=1')).rows[0].stock;
  await assert.rejects(order(one,'ONLYONCE',125),/invalid|expired/);
  assert.equal((await db.query('select stock from products where id=1')).rows[0].stock,stock,'Exhausted coupon orders must not change stock');
  assert.equal((await db.query("select used_count from coupons where code='ONLYONCE'")).rows[0].used_count,1);
  const plainId=await order([{id:2,size:'M',quantity:1}],'',70.58);
  assert.equal(Number((await db.query('select total from orders where id=$1',[plainId])).rows[0].total),70.58);
  await assert.rejects(db.exec('update products set discount_percent=101 where id=1'),/check constraint/);
  await db.exec('set role anon');
  await assert.rejects(db.query('select * from coupons'),/permission denied/);
  assert.equal((await quote(one,'SAVE10')).discount,8,'Public quote works without exposing coupon table');
  await db.exec('reset role; set role authenticated');
  assert.equal((await db.query('select * from coupons')).rows.length,0,'Non-admin authenticated users cannot list coupons');
  await assert.rejects(db.exec("insert into coupons(code,discount_type,discount_value) values('ATTACK','fixed',1)"),/row-level security/);
  await db.exec('reset role');
  console.log('Verified discounts, exact rounding, coupon types/caps/minimums/schedules, usage limits, authoritative prices, order persistence, rollback, and coupon access controls.');
} finally {await db.close();}
