import assert from 'node:assert/strict';
import { analyticsLocation, safeSearchTerm, publicAnalyticsPath, purchaseItems, analyticsItem } from '../src/lib/analytics.js';
assert.equal(publicAnalyticsPath('/admin'),false);
assert.equal(publicAnalyticsPath('/admin/orders'),false);
assert.equal(publicAnalyticsPath('/product/123'),true);
assert.equal(publicAnalyticsPath('/favourites'),true);
assert.equal(analyticsLocation('https://www.auvorabd.com/checkout?email=test@example.com#phone=01712345678'),'https://www.auvorabd.com/checkout');
assert.equal(analyticsLocation('https://www.auvorabd.com/shop?search=private&category=Men&utm_source=facebook'),'https://www.auvorabd.com/shop?utm_source=facebook');
assert.equal(analyticsLocation('https://www.auvorabd.com/admin?utm_source=facebook'),'');
assert.equal(analyticsLocation('https://preview.vercel.app/'),'');
assert.equal(safeSearchTerm('01712345678'),'');assert.equal(safeSearchTerm('person@example.com'),'');assert.equal(safeSearchTerm('Polo shirt'),'Polo shirt');
const products=[{id:1,name:'Shirt',category:'Men',price:100,original_price:100,discount_percent:20,quantity:3,size:'M',color:'Black'},{id:2,name:'Pants',price:50,quantity:2,size:'32',color:'Navy'}];
assert.equal(analyticsItem(products[0]).price,80);
for(const discount of [0,0.01,10,25.99,100,339.99,340,999]){
 const items=purchaseItems(products,discount);
 assert.ok(items.every(item=>item.price>=0&&Number.isInteger(item.quantity)));
 assert.equal(items.reduce((sum,item)=>sum+item.quantity,0),5);
 assert.equal(Math.round(items.reduce((sum,item)=>sum+item.price*item.quantity,0)*100),Math.round(Math.max(0,340-discount)*100));
}
assert.ok(purchaseItems(products,10).every(item=>!('email' in item)&&!('phone' in item)));
console.log('Verified analytics route/URL exclusions, sensitive search filtering, BDT item pricing, and exact coupon allocation.');
