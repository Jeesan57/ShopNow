import { notFound } from 'next/navigation';
import { getServerProduct } from '../../../lib/serverCatalog';
import { SITE_URL, pageMetadata, jsonLd } from '../../../lib/seo';
import ProductDetail from './ProductDetail';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getServerProduct(id);
  if (!product) return { title: 'Product Not Found', robots: { index: false, follow: true } };
  const description = (product.description || `Shop ${product.name} at Auvora BD. Price ৳${product.price}. Cash on delivery across Bangladesh.`).replace(/\s+/g, ' ').slice(0, 160);
  return pageMetadata(product.name, description, `/product/${product.id}`, product.image);
}
export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = await getServerProduct(id);
  if (!product) notFound();
  const url = `${SITE_URL}/product/${product.id}`;
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Product', '@id': `${url}#product`, name: product.name, description: product.description || product.name,
      image: [product.image, ...(product.thumbnails || [])].filter(Boolean), sku: String(product.id), category: product.category,
      offers: { '@type': 'Offer', url, priceCurrency: 'BDT', price: product.price, availability: product.stock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock', seller: { '@id': `${SITE_URL}/#organization` } } },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Shop', item: `${SITE_URL}/shop` },
      { '@type': 'ListItem', position: 3, name: product.name, item: url },
    ] },
  ] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} /><ProductDetail key={product.id} initialProduct={product} /></>;
}
