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
 await db.query('begin');
 const admin=await db.query("select id from auth.users where lower(email)='auvorabd.official@gmail.com'");
 await db.query("select set_config('request.jwt.claim.sub',$1,true)",[admin.rows[0].id]);
 await db.query('set local role authenticated');
 const created=await db.query('insert into public.cost_notes(title,items,notes) values($1,$2::jsonb,$3) returning id',['Verification only',JSON.stringify([{label:'Boxes',quantity:3,price:12.5}]),'Verification']);
 const selected=await db.query('select * from public.cost_notes where id=$1',[created.rows[0].id]);
 if(selected.rows.length!==1)throw new Error('Administrator cannot reopen saved notes');
 await db.query('update public.cost_notes set notes=$1 where id=$2',['Updated',created.rows[0].id]);
 console.log('PASS: Approved administrator can save, reopen and edit cost notes.');
 await db.query('reset role');
 await db.query("select set_config('request.jwt.claim.sub',$1,true)",['00000000-0000-0000-0000-000000000001']);
 await db.query('set local role authenticated');
 const hidden=await db.query('select id from public.cost_notes where id=$1',[created.rows[0].id]);
 if(hidden.rows.length)throw new Error('Non-admin user can read private cost notes');
 console.log('PASS: Non-admin accounts cannot read cost notes.');
 await db.query('savepoint no_write');
 try {await db.query('insert into public.cost_notes(title,items) values($1,$2::jsonb)',['Denied',JSON.stringify([{label:'Denied',quantity:1,price:1}])]);throw new Error('Non-admin can create notes');}
 catch(e){if(e.code!=='42501')throw e;await db.query('rollback to savepoint no_write');}
 console.log('PASS: Non-admin accounts cannot save cost notes.');
 await db.query('set local role anon');
 await db.query('savepoint anonymous_access');
 try {const visible=await db.query('select * from public.cost_notes');if(visible.rows.length)throw new Error('Anonymous visitor can see cost notes');}
 catch(e){if(e.code!=='42501')throw e;await db.query('rollback to savepoint anonymous_access');}
 console.log('PASS: Public visitors cannot access cost notes.');
 await db.query('reset role');
 await db.query('rollback');
 console.log('All temporary verification records rolled back.');
} catch(e){await db.query('rollback').catch(()=>{});console.error('Verification failed:',e.code||e.name,e.message.replaceAll(password,'[redacted]'));process.exitCode=1;}
finally{await db.end();}
