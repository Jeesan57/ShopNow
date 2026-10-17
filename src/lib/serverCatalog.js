import { normalizeProduct } from './pricing';
import { cache } from 'react';

async function readTable(table, query) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new Error('Supabase configuration is missing.');
  const response = await fetch(`${url}/rest/v1/${table}?${query}`, {
    headers: { apikey: key, Authorization: `Bearer ${key}` },
    next: { revalidate: 60 },
  });
  if (!response.ok) throw new Error('Catalog request failed.');
  return response.json();
}
export const getServerCatalog = cache(async () => {
  const [products, categories] = await Promise.all([
    readTable('products', 'select=*&active=eq.true&order=created_at.desc'),
    readTable('categories', 'select=*&order=name.asc'),
  ]);
  return { products: products.map(normalizeProduct), categories: categories.map(c => c.name), categoryImages: Object.fromEntries(categories.map(c => [c.name, c.image || ''])), loading: false, error: '' };
});
export const getServerProduct = cache(async (id) => {
  if (!/^\d+$/.test(String(id))) return null;
  const products = await readTable('products', `select=*&active=eq.true&id=eq.${id}&limit=1`);
  return products[0] ? normalizeProduct(products[0]) : null;
});
