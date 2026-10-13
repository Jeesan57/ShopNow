import pg from 'pg';
import { readFile } from 'node:fs/promises';
import { createInterface } from 'node:readline';
const input = createInterface({input:process.stdin});
console.log('Provide database password on stdin (not stored):');
const password = await new Promise(resolve=>input.once('line',resolve)); input.close();
const ca=await readFile(process.env.SUPABASE_DB_CA,'utf8');
const db=new pg.Client({host:'db.stvokejqndakitzpracv.supabase.co',port:5432,database:'postgres',user:'postgres',password,ssl:{ca,rejectUnauthorized:true},connectionTimeoutMillis:15000});
try {
 await db.connect();
 const admin=await db.query("select exists(select 1 from auth.users where lower(email)=$1) as user_exists, exists(select 1 from auth.users u join public.admin_users a on a.user_id=u.id where lower(u.email)=$1) as authorized",['auvorabd.official@gmail.com']);
 console.log('Admin account:',JSON.stringify(admin.rows[0]));
 await db.query('begin');
 const product=await db.query("insert into public.products(name,price,image,category,sizes,stock,active) values('Verification only',12.50,'https://images.unsplash.com/test','Men',array['M'],3,true) returning id");
 const id=product.rows[0].id;
 await db.query('set local role anon');
 const order=await db.query('select public.place_order_bd($1,$2,$3,$4,$5::jsonb,$6,$7,$8,$9) as id',['Verification','verification@example.com','01712345678','Verification address',JSON.stringify([{id,size:'M',quantity:2,price:0}]),'Dhaka','Mirpur','inside_dhaka','']);
 const stock=await db.query('select stock from public.products where id=$1',[id]);
 if(stock.rows[0].stock!==1) throw new Error('Stock reservation failed');
 console.log('PASS: Public checkout reserves stock.');
 await db.query('savepoint invalid_order');
 try {await db.query('select public.place_order_bd($1,$2,$3,$4,$5::jsonb,$6,$7,$8,$9)',['Verification','verification@example.com','01712345678','Verification address',JSON.stringify([{id,size:'M',quantity:2}]),'Dhaka','Mirpur','inside_dhaka','']);throw new Error('Out-of-stock order was accepted');}
 catch(e){if(!e.message.includes('unavailable'))throw e; await db.query('rollback to savepoint invalid_order');console.log('PASS: Overselling is rejected.');}
 await db.query('savepoint private_orders');
 try {const result=await db.query('select * from public.orders');if(result.rows.length)throw new Error('Anonymous access exposed orders');console.log('PASS: Anonymous access cannot see orders.');}
 catch(e){if(e.code!=='42501')throw e;await db.query('rollback to savepoint private_orders');console.log('PASS: Anonymous access to orders is denied.');}
 await db.query('reset role');
 const amount=await db.query('select total,subtotal,delivery_charge from public.orders where id=$1',[order.rows[0].id]);
 if(Number(amount.rows[0].subtotal)!==25 || Number(amount.rows[0].delivery_charge)!==70 || Number(amount.rows[0].total)!==95)throw new Error('Server price validation failed');
 console.log('PASS: Checkout ignores supplied prices and adds the ৳70 Dhaka delivery charge.');
 await db.query('update public.products set stock=3 where id=$1',[id]);
 await db.query('set local role anon');
 const outside=await db.query('select public.place_order_bd($1,$2,$3,$4,$5::jsonb,$6,$7,$8,$9) as id',['Verification','','+8801712345678','Verification address',JSON.stringify([{id,size:'M',quantity:1}]),'Chattogram','Kotwali','outside_dhaka','Call first']);
 await db.query('reset role');
 const outsideAmount=await db.query('select total,delivery_charge,phone,email from public.orders where id=$1',[outside.rows[0].id]);
 if(Number(outsideAmount.rows[0].total)!==142.5 || Number(outsideAmount.rows[0].delivery_charge)!==130 || outsideAmount.rows[0].phone!=='01712345678' || outsideAmount.rows[0].email!=='')throw new Error('Outside Dhaka delivery or phone normalization failed');
 console.log('PASS: Outside Dhaka delivery adds ৳130; +880 phone numbers and optional email are accepted.');
 await db.query('set local role anon');
 for(const [label,phone,district,zone,expected] of [['invalid phone','01212345678','Dhaka','inside_dhaka','mobile number'],['mismatched delivery zone','01712345678','Chattogram','inside_dhaka','only available'],['invalid district','01712345678','Invalid','outside_dhaka','district']]) {
  await db.query('savepoint bad_details');
  try {await db.query('select public.place_order_bd($1,$2,$3,$4,$5::jsonb,$6,$7,$8,$9)',['Verification','',phone,'Verification address',JSON.stringify([{id,size:'M',quantity:1}]),district,'Test area',zone,'']);throw new Error('Invalid checkout details accepted');}
  catch(e){if(!e.message.includes(expected))throw e;await db.query('rollback to savepoint bad_details');console.log('PASS: Rejected '+label+'.');}
 }
 await db.query('savepoint legacy_order');
 try {await db.query('select public.place_order($1,$2,$3,$4,$5::jsonb)',['Verification','','01712345678','Verification address',JSON.stringify([{id,size:'M',quantity:1}])]);throw new Error('Legacy checkout bypass is available');}
 catch(e){if(e.code!=='42501')throw e;await db.query('rollback to savepoint legacy_order');console.log('PASS: Public access to legacy checkout is blocked.');}
 await db.query('reset role');
 await db.query('update public.products set active=false where id=$1',[id]);
 await db.query('set local role anon');
 const hidden=await db.query('select id from public.products where id=$1',[id]);
 if(hidden.rows.length)throw new Error('Draft product exposed');
 console.log('PASS: Draft products are hidden from public access.');
 await db.query('rollback');
 console.log('Verification complete; all verification records rolled back.');
} catch(e){await db.query('rollback').catch(()=>{});console.error('Verification failed:',e.code||e.name,e.message.replaceAll(password,'[redacted]'));process.exitCode=1;}
finally{await db.end();}
