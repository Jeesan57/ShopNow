import { productPrice } from '../lib/pricing';
export default function ProductPrice({ product, className = '' }) {
  const price = productPrice(product);
  const original = Number(product.original_price ?? product.price);
  const money = value => '৳' + value.toLocaleString('en-BD', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return <span className={`inline-flex flex-wrap items-baseline gap-2 ${className}`}>
    <span>{money(price)}</span>
    {original > price && <><del className="text-xs font-normal text-muted-foreground" aria-label={`Original price ${money(original)}`}>{money(original)}</del><span className="text-[10px] font-medium text-primary">{Number(product.discount_percent)}% off</span></>}
  </span>;
}
