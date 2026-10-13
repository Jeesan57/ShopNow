import { SITE_URL } from '../lib/seo';
import { getServerCatalog } from '../lib/serverCatalog';
export const dynamic = 'force-dynamic';
export default async function sitemap() {
  const { products } = await getServerCatalog();
  return [
    ...['', '/shop', '/about', '/contact'].map(path => ({ url: `${SITE_URL}${path || '/'}` })),
    ...products.map(product => ({ url: `${SITE_URL}/product/${product.id}`, ...(product.updated_at ? { lastModified: new Date(product.updated_at) } : {}) })),
  ];
}
