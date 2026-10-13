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
 const catalog = await db.query('select id,name,price,active,featured,stock from public.products order by created_at desc');
 console.log('Saved products:', JSON.stringify(catalog.rows));
 await db.query('begin');
 await db.query('set local role anon');
 const visible = await db.query('select id,name,price from public.products where active=true');
 console.log('Publicly visible products:', JSON.stringify(visible.rows));
 await db.query('rollback');
} catch(e){await db.query('rollback').catch(()=>{});console.error('Verification failed:',e.code||e.name,e.message.replaceAll(password,'[redacted]'));process.exitCode=1;}
finally{await db.end();}
