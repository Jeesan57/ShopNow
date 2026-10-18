const dhakaDate = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Dhaka', year: 'numeric', month: '2-digit', day: '2-digit' });
export function localDateKey(value) {
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return '';
  const parts = Object.fromEntries(dhakaDate.formatToParts(date).map(part => [part.type, part.value]));
  return `${parts.year}-${parts.month}-${parts.day}`;
}
export const currentMonth = () => localDateKey(new Date()).slice(0, 7);
export function shiftMonth(month, offset) {
  const [year, number] = month.split('-').map(Number);
  const date = new Date(Date.UTC(year, number - 1 + offset, 1));
  return date.toISOString().slice(0, 7);
}
export const monthLabel = month => new Date(`${month}-01T12:00:00Z`).toLocaleDateString('en', { month: 'long', year: 'numeric', timeZone: 'Asia/Dhaka' });
export function monthSummary(orders, month) {
  const selected = orders.filter(order => localDateKey(order.created_at).startsWith(month));
  const delivered = selected.filter(order => order.status === 'delivered');
  return {
    orders: selected,
    revenue: delivered.reduce((sum, order) => sum + Math.round(Number(order.total || 0) * 100), 0) / 100,
    customers: new Set(selected.filter(order => order.status !== 'cancelled').map(order => order.phone).filter(Boolean)).size,
    delivered: delivered.length,
  };
}
export function changePercent(current, previous) {
  return previous === 0 ? current === 0 ? 0 : null : (current - previous) / previous * 100;
}
export function performanceBuckets(orders, month, frequency, measure) {
  const keys = frequency === 'daily'
    ? Array.from({ length: new Date(Date.UTC(Number(month.slice(0, 4)), Number(month.slice(5)), 0)).getUTCDate() }, (_, index) => `${month}-${String(index + 1).padStart(2, '0')}`)
    : Array.from({ length: 12 }, (_, index) => shiftMonth(month, index - 11));
  const amounts = new Map(keys.map(key => [key, 0]));
  for (const order of orders) {
    const date = localDateKey(order.created_at);
    if (!date) continue;
    const key = frequency === 'daily' ? date : date.slice(0, 7);
    if (!amounts.has(key) || (measure === 'revenue' && order.status !== 'delivered')) continue;
    amounts.set(key, amounts.get(key) + (measure === 'revenue' ? Math.round(Number(order.total || 0) * 100) : 1));
  }
  return keys.map(key => ({ key, value: amounts.get(key) / (measure === 'revenue' ? 100 : 1), label: frequency === 'daily' ? String(Number(key.slice(-2))) : new Date(`${key}-01T12:00:00Z`).toLocaleDateString('en', { month: 'short', timeZone: 'Asia/Dhaka' }) }));
}
export function productPerformance(products, orders) {
  return products.map(product => {
    let sold = 0;
    const pendingOrders = new Set();
    for (const order of orders) for (const item of order.order_items || []) {
      if (String(item.product_id) !== String(product.id)) continue;
      if (order.status === 'delivered') sold += Number(item.quantity || 0);
      else if (order.status !== 'cancelled') pendingOrders.add(order.id);
    }
    return { ...product, sold, pending: pendingOrders.size };
  }).sort((a, b) => b.sold - a.sold || b.pending - a.pending || a.name.localeCompare(b.name));
}
export function districtActivity(orders) {
  const counts = new Map();
  for (const order of orders.filter(order => order.status !== 'cancelled')) {
    const location = order.district || 'Not recorded';
    counts.set(location, (counts.get(location) || 0) + 1);
  }
  return Array.from(counts, ([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count).slice(0, 5);
}
