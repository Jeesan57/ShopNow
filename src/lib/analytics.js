import { productPrice } from './pricing.js';

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-S832ZPVY7K';
const PUBLIC_HOSTS = new Set(['auvorabd.com', 'www.auvorabd.com']);
const campaignKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'gbraid', 'wbraid'];
let initialized = false;
let previousPage = '';
let lastPage = '';

export function publicAnalyticsPath(path) {
  return /^\/(?:shop|about|contact|checkout|wishlist|favourites)?\/?$/.test(path) || /^\/product\/\d+\/?$/.test(path);
}
export function analyticsAllowed() {
  return typeof window !== 'undefined' && process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ENABLED !== 'false'
    && /^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID) && PUBLIC_HOSTS.has(window.location.hostname) && publicAnalyticsPath(window.location.pathname);
}
export function safeSearchTerm(value) {
  const term = String(value || '').trim().slice(0, 80);
  return !term || /@|(?:\+?\d[\d\s()-]{7,}\d)/.test(term) ? '' : term;
}
export function analyticsLocation(value) {
  try {
    const url = new URL(value);
    if (!PUBLIC_HOSTS.has(url.hostname) || !publicAnalyticsPath(url.pathname)) return '';
    const safe = new URL(`https://www.auvorabd.com${url.pathname}`);
    for (const key of campaignKeys) {
      const value = url.searchParams.get(key);
      if (value && value.length <= 200 && !/@|(?:\+?\d[\d\s()-]{7,}\d)/.test(value)) safe.searchParams.set(key, value);
    }
    return safe.href;
  } catch { return ''; }
}
function safeReferrer(value) {
  try {
    const url = new URL(value);
    if (PUBLIC_HOSTS.has(url.hostname)) return publicAnalyticsPath(url.pathname) ? `${url.origin}${url.pathname}` : '';
    return ['https:', 'http:'].includes(url.protocol) ? url.origin : '';
  } catch { return ''; }
}
export function initializeAnalytics() {
  if (!analyticsAllowed()) return false;
  try {
    window[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    if (!initialized) {
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
        send_page_view: false,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        page_location: analyticsLocation(window.location.href),
        page_referrer: safeReferrer(document.referrer),
      });
      initialized = true;
    }
    return true;
  } catch { return false; }
}
export function analyticsEvent(name, params = {}) {
  if (!initializeAnalytics()) return false;
  try {
    window.gtag('event', name, { ...params, send_to: GA_MEASUREMENT_ID, page_location: analyticsLocation(window.location.href) });
    return true;
  } catch { return false; }
}
export function analyticsPageView() {
  if (!analyticsAllowed()) {
    if (typeof window !== 'undefined') window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
    lastPage = ''; previousPage = '';
    return false;
  }
  const page = analyticsLocation(window.location.href);
  if (page === lastPage) return false;
  const name = window.location.pathname.startsWith('/product/') ? 'Product details' : ({ '/': 'Home', '/shop': 'Shop', '/about': 'About', '/contact': 'Contact', '/checkout': 'Checkout', '/wishlist': 'Wishlist', '/favourites': 'Favourites' })[window.location.pathname.replace(/\/$/, '') || '/'] || 'Auvora BD';
  const sent = analyticsEvent('page_view', { page_title: `${name} | Auvora BD`, page_referrer: previousPage || safeReferrer(document.referrer) });
  if (sent) { lastPage = page; previousPage = page; }
  return sent;
}
export function analyticsItem(product, quantity = 1, size = product.size || '', color = product.color || '') {
  const price = productPrice(product);
  return {
    item_id: String(product.id), item_name: String(product.name || '').slice(0, 200), item_brand: 'Auvora BD',
    item_category: String(product.category || '').slice(0, 80),
    ...(size || color ? { item_variant: [size, color].filter(Boolean).join(' / ').slice(0, 200) } : {}),
    price, quantity,
  };
}
export function analyticsEcommerce(name, products, extra = {}) {
  const items = products.map(product => analyticsItem(product, Number(product.quantity || 1)));
  return analyticsEvent(name, { currency: 'BDT', value: Math.round(items.reduce((sum, item) => sum + item.price * item.quantity, 0) * 100) / 100, items, ...extra });
}
// Distribute coupon cents across items, splitting quantity lines if needed so
// item revenue exactly matches merchandise value and excludes delivery fees.
export function purchaseItems(products, discount = 0) {
  const lines = products.map(product => ({ product, quantity: Number(product.quantity), unit: Math.round(productPrice(product) * 100) }));
  const subtotal = lines.reduce((sum, line) => sum + line.unit * line.quantity, 0);
  const coupon = Math.min(subtotal, Math.max(0, Math.round(discount * 100)));
  const allocations = lines.map(line => subtotal ? Math.floor(coupon * line.unit * line.quantity / subtotal) : 0);
  let remaining = coupon - allocations.reduce((sum, value) => sum + value, 0);
  lines.forEach((line, index) => { const add = Math.min(remaining, line.unit * line.quantity - allocations[index]); allocations[index] += add; remaining -= add; });
  return lines.flatMap((line, index) => {
    const perUnit = Math.floor(allocations[index] / line.quantity);
    const extraUnits = allocations[index] % line.quantity;
    return [[line.quantity - extraUnits, perUnit], [extraUnits, perUnit + 1]].filter(([quantity]) => quantity > 0).map(([quantity, reduction]) => ({ ...analyticsItem(line.product, quantity), price: (line.unit - reduction) / 100, ...(reduction ? { discount: reduction / 100 } : {}) }));
  });
}
export function analyticsPurchase({ id, products, discount = 0, shipping = 0, coupon = '' }) {
  if (!analyticsAllowed() || !id) return false;
  const key = `auvora-ga-purchase-${id}`;
  try { if (sessionStorage.getItem(key)) return false; } catch { /* Google's transaction ID also deduplicates purchases. */ }
  const items = purchaseItems(products, discount);
  const sent = analyticsEvent('purchase', {
    transaction_id: String(id), currency: 'BDT',
    value: Math.round(items.reduce((sum, item) => sum + item.price * item.quantity, 0) * 100) / 100,
    shipping: Number(shipping), payment_type: 'cash_on_delivery', items,
    ...(/^[A-Z0-9_-]{3,40}$/.test(coupon) ? { coupon } : {}),
  });
  if (sent) try { sessionStorage.setItem(key, '1'); } catch { /* Storage is optional. */ }
  return sent;
}
