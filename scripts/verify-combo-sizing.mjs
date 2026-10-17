import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {comboSizes,selectedComboSize,comboItemSizes,getComboItems,comboItemColors,selectedComboColor,hasComboItemColors} from '../src/lib/comboSizing.js';
import {cartItemKey} from '../src/lib/productColors.js';
const {PGlite}=await import(process.argv[2] || '@electric-sql/pglite');
const db=new PGlite();
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
  for (const name of ['004_product_colors','005_discounts_coupons','007_combo_sizing']) await db.exec(await readFile(new URL(`../supabase/migrations/${name}.sql`, import.meta.url),'utf8'));

  const sizes=comboSizes(['S','M'],['30','32']);
  assert.equal(selectedComboSize({sweater_sizes:['M'],denim_sizes:['32']},{sweater:'M',denim:''}),'Sweater: M · Denim: 32');
  await db.exec(`update products set is_combo=true,sweater_sizes=array['S','M'],denim_sizes=array['30','32'],price=1500,stock=5,size_charts='{"sweater":{"M":{"chest":21}},"denim":{"32":{"waist":32}}}' where id=1`);
  assert.deepEqual((await db.query('select sizes from products where id=1')).rows[0].sizes,sizes);
  await db.exec("update products set sizes=array['forged'] where id=1");
  assert.deepEqual((await db.query('select sizes from products where id=1')).rows[0].sizes,sizes);
  const quote=async size=>(await db.query('select quote_checkout($1::jsonb,$2) result',[JSON.stringify([{id:1,size,quantity:1}]),''])).rows[0].result;
  assert.equal((await quote(sizes[3])).subtotal,1500);
  for(const size of ['M','Sweater: M · Denim: 34','']) await assert.rejects(quote(size));
  await assert.rejects(db.exec("update products set denim_sizes='{}' where id=1"));
  await assert.rejects(db.exec(`update products set size_charts='{"sweater":{"M":{"chest":0}}}' where id=1`));
  await assert.rejects(db.exec(`update products set size_charts='{"denim":{"32":{"waist":"32"}}}' where id=1`));
  await db.exec("insert into coupons(code,discount_type,discount_value) values('COMBO10','percent',10)");
  const items=JSON.stringify([{id:1,size:sizes[3],quantity:1}]);
  const id=(await db.query("select place_order_bd('Combo buyer','','01712345678','Test address',$1::jsonb,'Dhaka','Mirpur','inside_dhaka','','COMBO10',1420) id",[items])).rows[0].id;
  const order=(await db.query('select * from orders where id=$1',[id])).rows[0];
  assert.equal(Number(order.total),1420);
  assert.equal((await db.query('select size from order_items where order_id=$1',[id])).rows[0].size,sizes[3]);
  assert.equal((await db.query('select stock from products where id=1')).rows[0].stock,4);
  assert.equal((await db.query("select quote_checkout('[{\"id\":2,\"size\":\"M\",\"quantity\":1}]'::jsonb,'') result")).rows[0].result.subtotal,1.15);
  await db.exec(await readFile(new URL('../supabase/migrations/008_universal_combos.sql',import.meta.url),'utf8'));
  const migrated=(await db.query('select * from products where id=1')).rows[0];
  assert.deepEqual(migrated.sizes,sizes,'Legacy cart selection labels must remain unchanged');
  assert.equal(migrated.combo_items[0].chart.M['Chest width (flat)'],21);
  assert.equal(selectedComboSize(migrated,{sweater:'M',denim:'32'}),sizes[3]);
  const itemsConfig=[
    {id:'tee',name:'T-shirt',sizes:['S','M'],measurements:['Chest width (flat)'],unit:'cm',chart:{M:{'Chest width (flat)':54}}},
    {id:'shoe',name:'Shoes',sizes:['41','42'],measurements:['Foot length'],unit:'cm',chart:{'42':{'Foot length':26.5}}},
    {id:'bottle',name:'Water bottle',sizes:['500 ml'],measurements:[],unit:'in',chart:{}}
  ];
  const update=async items=>db.query('update products set combo_items=$1::jsonb,stock=10 where id=1',[JSON.stringify(items)]);
  await update(itemsConfig);
  const generic=(await db.query('select * from products where id=1')).rows[0];
  assert.deepEqual(generic.sizes,comboItemSizes(itemsConfig));
  assert.deepEqual(getComboItems(generic),itemsConfig);
  assert.equal(selectedComboSize(generic,{tee:'M',shoe:'42'}),'T-shirt: M · Shoes: 42 · Water bottle: 500 ml');
  assert.equal(selectedComboSize(generic,{tee:'M'}),'');
  const genericChoice=selectedComboSize(generic,{tee:'M',shoe:'42',bottle:'500 ml'});
  assert.equal(genericChoice,'T-shirt: M · Shoes: 42 · Water bottle: 500 ml');
  assert.equal((await quote(genericChoice)).subtotal,1500);
  await assert.rejects(quote('T-shirt: M · Shoes: 43 · Water bottle: 500 ml'));
  await assert.rejects(quote(sizes[3]));
  const patch=(index,value)=>itemsConfig.map((item,i)=>i===index?{...item,...value}:item);
  for(const bad of [
    itemsConfig.slice(0,1),[...itemsConfig,...itemsConfig],
    patch(1,{id:'tee'}),patch(1,{name:'t-SHIRT'}),patch(0,{name:'T-shirt: blue'}),
    patch(0,{sizes:[]}),patch(0,{sizes:['M','M']}),patch(0,{sizes:[null]}),patch(0,{sizes:['M · Shoes: 42']}),
    patch(0,{chart:{M:{'Chest width (flat)':0}}}),patch(0,{chart:{M:{'Chest width (flat)':'54'}}}),
    patch(0,{chart:{M:{'Unknown metric':54}}}),patch(0,{unit:'feet'}),patch(0,{measurements:null}),
    itemsConfig.map(item=>({...item,sizes:Array.from({length:50},(_,i)=>String(i))}))
  ]) await assert.rejects(update(bad),'Malformed combo configuration must be rejected');
  const genericOrderId=(await db.query("select place_order_bd('Universal buyer','','01712345678','Test address',$1::jsonb,'Dhaka','Mirpur','inside_dhaka','','COMBO10',1420) id",[JSON.stringify([{id:1,size:genericChoice,quantity:1}])])).rows[0].id;
  assert.equal((await db.query('select size from order_items where order_id=$1',[genericOrderId])).rows[0].size,genericChoice);
  assert.equal(Number((await db.query('select total from orders where id=$1',[genericOrderId])).rows[0].total),1420);
  assert.equal((await db.query('select stock from products where id=1')).rows[0].stock,9);
  assert.equal((await db.query('select size from order_items where order_id=$1',[id])).rows[0].size,sizes[3],'Historical orders retain their selection labels');
  assert.equal((await db.query('select sizes from products where id=2')).rows[0].sizes[0],'M');
  await db.exec("update products set colors=array['Black'] where id=1");
  await db.exec(await readFile(new URL('../supabase/migrations/009_combo_colors.sql',import.meta.url),'utf8'));
  assert.deepEqual((await db.query('select colors from products where id=1')).rows[0].colors,['Black'],'Migration preserves legacy combo-wide colors');
  const coloredConfig=itemsConfig.map((item,index)=>({...item,colors:index===0?['Black','White']:index===1?['Gray','Blue']:[]}));
  await update(coloredConfig);
  const coloredProduct=(await db.query('select * from products where id=1')).rows[0];
  const colorLabels=comboItemColors(coloredConfig);
  const singleColors={...coloredProduct,combo_items:coloredConfig.map(item=>({...item,colors:item.colors.slice(0,1)}))};
  assert.equal(selectedComboColor(singleColors,{}),'T-shirt: Black · Shoes: Gray','Single colors auto-select');
  assert.equal(selectedComboColor(singleColors,{tee:'Removed color'}),'T-shirt: Black · Shoes: Gray','Stale selections fall back to the only available color');
  assert.equal(selectedComboColor({...singleColors,combo_items:[coloredConfig[0],...singleColors.combo_items.slice(1)]},{}),null,'Multiple colors still require a choice');
  assert.deepEqual(coloredProduct.colors,colorLabels);
  assert.ok(hasComboItemColors(coloredProduct));
  assert.equal(selectedComboColor(coloredProduct,{tee:'Black'}),null,'Every colored piece requires a choice');
  assert.equal(selectedComboColor(coloredProduct,{tee:'Black',shoe:'Red'}),null);
  assert.equal(selectedComboColor(coloredProduct,{tee:'Black',shoe:'Gray'}),'T-shirt: Black · Shoes: Gray');
  await db.exec("update products set colors=array['forged'] where id=1");
  assert.deepEqual((await db.query('select colors from products where id=1')).rows[0].colors,colorLabels);
  const colorQuote=async color=>(await db.query('select quote_checkout($1::jsonb,$2) result',[JSON.stringify([{id:1,size:genericChoice,color,quantity:1}]),''])).rows[0].result;
  for(const color of ['', 'Black', 'T-shirt: Black', 'T-shirt: Black · Shoes: Red']) await assert.rejects(colorQuote(color));
  assert.equal((await colorQuote(colorLabels[0])).subtotal,1500);
  const badColors=[null,['Black','Black'],['Black · Shoes: Blue'],[null],Array.from({length:31},(_,i)=>String(i))];
  for(const colors of badColors) await assert.rejects(update(coloredConfig.map((item,index)=>index===0?{...item,colors}:item)));
  await assert.rejects(update(coloredConfig.map(item=>({...item,colors:Array.from({length:18},(_,i)=>`Color ${i}`)}))));
  const pairItems=[{id:1,size:genericChoice,color:colorLabels[0],quantity:1},{id:1,size:genericChoice,color:colorLabels[1],quantity:1}];
  assert.notEqual(cartItemKey(pairItems[0]),cartItemKey(pairItems[1]),'Different per-piece colors remain separate cart variants');
  const coloredOrder=(await db.query("select place_order_bd('Color buyer','','01712345678','Test address',$1::jsonb,'Dhaka','Mirpur','inside_dhaka','','COMBO10',2770) id",[JSON.stringify(pairItems)])).rows[0].id;
  assert.deepEqual((await db.query('select color from order_items where order_id=$1 order by id',[coloredOrder])).rows.map(row=>row.color),colorLabels.slice(0,2));
  assert.equal(Number((await db.query('select total from orders where id=$1',[coloredOrder])).rows[0].total),2770);
  assert.equal((await db.query('select stock from products where id=1')).rows[0].stock,8);
  await update(coloredConfig.map(item=>({...item,colors:[]})));
  const noColor=(await db.query('select * from products where id=1')).rows[0];
  assert.deepEqual(noColor.colors,[]);
  assert.equal(selectedComboColor(noColor,{}),'');
  assert.equal((await colorQuote('')).subtotal,1500);
  await assert.rejects(colorQuote(colorLabels[0]));
  assert.deepEqual((await db.query('select color from order_items where order_id=$1 order by id',[coloredOrder])).rows.map(row=>row.color),colorLabels.slice(0,2),'Historical color snapshots remain unchanged');
  console.log('Verified legacy migration, universal sizes, per-piece colors, required choices, tampering/invalid combinations, chart bounds, single pricing/coupons, distinct cart variants, order color snapshots, stock and ordinary products.');
} finally {await db.close();}
