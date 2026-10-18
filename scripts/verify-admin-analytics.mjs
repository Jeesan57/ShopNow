import assert from 'node:assert/strict';
import { localDateKey, shiftMonth, monthSummary, changePercent, performanceBuckets, productPerformance, districtActivity } from '../src/lib/adminAnalytics.js';
import { readAllOrders } from '../src/lib/adminData.js';
const orders = [
  {id:'1',created_at:'2026-09-30T18:30:00Z',status:'delivered',total:1000,phone:'01711111111',district:'Dhaka',order_items:[{product_id:1,quantity:2}]},
  {id:'2',created_at:'2026-10-10T12:00:00Z',status:'pending',total:200,phone:'01711111111',district:'Dhaka',order_items:[{product_id:1,quantity:1}]},
  {id:'3',created_at:'2026-10-11T12:00:00Z',status:'cancelled',total:5000,phone:'01722222222',district:'Sylhet',order_items:[{product_id:1,quantity:5}]},
  {id:'4',created_at:'2026-09-15T12:00:00Z',status:'delivered',total:500,phone:'01733333333',district:'Khulna',order_items:[]},
];
assert.equal(localDateKey(orders[0].created_at),'2026-10-01');
assert.equal(shiftMonth('2026-01',-1),'2025-12');
const selected=monthSummary(orders,'2026-10');
assert.equal(selected.revenue,1000);assert.equal(selected.orders.length,3);assert.equal(selected.customers,1);
assert.equal(monthSummary(orders,'2026-09').revenue,500);
assert.equal(changePercent(1000,500),100);assert.equal(changePercent(2,0),null);assert.equal(changePercent(0,0),0);
const revenue=performanceBuckets(orders,'2026-10','monthly','revenue');
assert.equal(revenue.length,12);assert.equal(revenue.at(-1).value,1000);
const daily=performanceBuckets(orders,'2026-10','daily','orders');
assert.equal(daily.length,31);assert.equal(daily[0].value,1);assert.equal(daily[10].value,1);
assert.equal(performanceBuckets(orders,'2024-02','daily','orders').length,29);
const performance=productPerformance([{id:1,name:'Shirt'}],selected.orders);
assert.equal(performance[0].sold,2);assert.equal(performance[0].pending,1);
assert.deepEqual(districtActivity(selected.orders),[{name:'Dhaka',count:2}]);
let ranges=[];
const db={from:()=>({select:()=>({order:()=>({order:()=>({range:async(start,end)=>{ranges.push([start,end]);return {data:Array.from({length:start===0?1000:2},(_,i)=>({id:start+i})),error:null};}})})})})};
const result=await readAllOrders(db);
assert.equal(result.data.length,1002);assert.deepEqual(ranges,[[0,999],[1000,1999]]);
console.log('Verified Bangladesh reporting dates, month comparisons, delivered revenue, daily/monthly chart data, product sales, locations, and full order pagination.');
