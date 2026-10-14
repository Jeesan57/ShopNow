export function productPrice(product) {
  const original = Number(product.original_price ?? product.price);
  const percent = Number(product.discount_percent || 0);
  if (!Number.isFinite(original) || !Number.isFinite(percent)) return 0;
  const cents = BigInt(Math.round(original * 100));
  const basisPoints = BigInt(Math.round(Math.min(100, Math.max(0, percent)) * 100));
  return Number((cents * (10000n - basisPoints) + 5000n) / 10000n) / 100;
}
export function normalizeProduct(product) {
  return { ...product, original_price: Number(product.original_price ?? product.price), price: productPrice(product) };
}
