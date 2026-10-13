import assert from 'node:assert/strict';
const base = process.argv[2] || 'http://localhost:3000';
const origin = 'https://www.auvorabd.com';
async function read(path, status = 200) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, status, `${path}: unexpected HTTP status`);
  return response.text();
}
function canonical(html, path) {
  const href = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
  assert.ok(href, `${path}: canonical missing`);
  assert.equal(new URL(href).href, new URL(path, origin).href);
}
const home = await read('/?utm_source=chatgpt.com');
canonical(home, '/');
assert.match(home, /Online Shopping in Bangladesh/);
assert.match(home, /application\/ld\+json/);
for (const path of ['/shop', '/about', '/contact']) canonical(await read(path), path);
for (const path of ['/admin', '/checkout', '/favourites']) {
  assert.match(await read(path), /name="robots" content="noindex, nofollow"/);
}
const robots = await read('/robots.txt');
assert.ok(robots.includes(`${origin}/sitemap.xml`));
const sitemap = await read('/sitemap.xml');
assert.ok(!/\/(admin|checkout|favourites)</.test(sitemap));
const products = [...sitemap.matchAll(/<loc>https:\/\/www\.auvorabd\.com(\/product\/\d+)<\/loc>/g)];
for (const [, path] of products.slice(0, 3)) {
  const html = await read(path);
  canonical(html, path);
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  const product = scripts.flatMap(data => data['@graph'] || [data]).find(item => item['@type'] === 'Product');
  assert.ok(product, `${path}: product schema missing`);
  assert.equal(product.offers.priceCurrency, 'BDT');
  assert.ok(product.offers.price >= 0);
  assert.ok(html.includes('<h1'), `${path}: server-rendered heading missing`);
  assert.ok(!product.aggregateRating, 'Do not invent ratings');
}
await read('/product/999999999999', 404);
await read('/product/invalid', 404);
console.log(`SEO verified: canonicals, metadata, noindex, robots, sitemap, ${Math.min(products.length, 3)} products, and 404s.`);
