'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FiSearch, FiArrowUpRight, FiArrowDownRight, FiShoppingBag, FiUsers, FiDollarSign, FiPackage, FiMapPin, FiAlertTriangle } from 'react-icons/fi';
import { currentMonth, monthLabel, monthSummary, shiftMonth, changePercent, performanceBuckets, productPerformance, districtActivity } from '../lib/adminAnalytics';
import { inventoryStatus, INVENTORY_STATUS } from '../lib/inventory';
import { productPrice } from '../lib/pricing';
import DashboardTarget from './DashboardTarget';

const money = value => '৳' + Number(value || 0).toLocaleString('en-BD', { maximumFractionDigits: 2 });
const number = value => Number(value || 0).toLocaleString();
const compact = value => new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(value);
const orderLabels = { pending: 'Pending', confirmed: 'Confirmed', shipped: 'Shipped', delivered: 'Delivered', cancelled: 'Cancelled' };

function Delta({ current, previous }) {
  const change = changePercent(current, previous);
  if (change === null) return <span className="dashboard-delta neutral">No previous-month baseline</span>;
  const Icon = change < 0 ? FiArrowDownRight : FiArrowUpRight;
  return <span className={`dashboard-delta ${change < 0 ? 'down' : change > 0 ? 'up' : 'neutral'}`}><Icon aria-hidden="true"/>{Math.abs(change).toFixed(1)}% <small>vs previous month</small></span>;
}

function PerformanceChart({ orders, month, measure, onMeasureChange }) {
  const [frequency, setFrequency] = useState('monthly');
  const [active, setActive] = useState(null);
  const buckets = performanceBuckets(orders, month, frequency, measure);
  const top = Math.max(1, ...buckets.map(bucket => bucket.value));
  const power = 10 ** Math.floor(Math.log10(top));
  const maximum = measure === 'orders' ? Math.max(4, Math.ceil(top / 4) * 4) : Math.ceil(top / power) * power;
  const selected = buckets.find(bucket => bucket.key === active);
  const total = buckets.reduce((sum, bucket) => sum + bucket.value, 0);
  return <section className="dashboard-card dashboard-performance">
    <header className="dashboard-card-heading"><div><h2>Performance</h2><p>{measure === 'revenue' ? 'Delivered order revenue' : 'Orders received'} · grouped by order date</p></div><select aria-label="Chart interval" value={frequency} onChange={event => { setFrequency(event.target.value); setActive(null); }}><option value="monthly">Monthly</option><option value="daily">Daily</option></select></header>
    <div className="dashboard-chart-controls"><div className="dashboard-chart-switch" role="group" aria-label="Chart metric"><button type="button" aria-pressed={measure === 'revenue'} onClick={() => onMeasureChange('revenue')}>Revenue</button><button type="button" aria-pressed={measure === 'orders'} onClick={() => onMeasureChange('orders')}>Orders</button></div><p aria-live="polite">{selected ? `${frequency === 'monthly' ? monthLabel(selected.key) : `${selected.label} ${monthLabel(month)}`}: ${measure === 'revenue' ? money(selected.value) : number(selected.value)}` : `${measure === 'revenue' ? money(total) : number(total)} ${frequency === 'monthly' ? 'over 12 months' : 'this month'}`}</p></div>
    <div className="dashboard-plot">
      <div className="dashboard-chart-grid" aria-hidden="true">{[4, 3, 2, 1, 0].map(step => <div key={step}><span>{measure === 'revenue' ? '৳' : ''}{compact(maximum * step / 4)}</span><i/></div>)}</div>
      <div className={`dashboard-bars ${frequency}`} style={{ gridTemplateColumns: `repeat(${buckets.length},minmax(0,1fr))` }}>
        {buckets.map((bucket, index) => <div className="dashboard-bar-column" key={bucket.key}><button type="button" aria-label={`${frequency === 'monthly' ? monthLabel(bucket.key) : `${bucket.label} ${monthLabel(month)}`}: ${measure === 'revenue' ? money(bucket.value) : `${number(bucket.value)} orders`}`} className={active === bucket.key ? 'is-active' : ''} onMouseEnter={() => setActive(bucket.key)} onMouseLeave={() => setActive(null)} onFocus={() => setActive(bucket.key)} onBlur={() => setActive(null)} onClick={() => setActive(bucket.key)}><span style={{ height: `${Math.max(.8, bucket.value / maximum * 100)}%`, opacity: bucket.value ? 1 : .2 }}/></button><span className="dashboard-bar-label">{frequency === 'monthly' || index === 0 || (index + 1) % 5 === 0 ? bucket.label : ''}</span></div>)}
      </div>
    </div>
    <p className="dashboard-chart-caption">{frequency === 'monthly' ? `12 months ending ${monthLabel(month)}` : monthLabel(month)} · {measure === 'revenue' ? 'Revenue includes delivery charges on delivered orders.' : 'Order counts include cancelled orders.'}</p>
  </section>;
}

export default function AdminDashboard({ orders, products, onNavigate }) {
  const [month, setMonth] = useState(currentMonth);
  const [search, setSearch] = useState('');
  const [measure, setMeasure] = useState('revenue');
  const selected = monthSummary(orders, month);
  const previous = monthSummary(orders, shiftMonth(month, -1));
  const query = search.trim().toLowerCase();
  const performance = productPerformance(products, selected.orders).filter(product => `${product.name} ${product.category}`.toLowerCase().includes(query)).slice(0, 5);
  const recent = selected.orders.filter(order => `${order.customer_name} ${order.phone} ${order.id}`.toLowerCase().includes(query)).slice(0, 5);
  const locations = districtActivity(selected.orders);
  const attention = products.filter(product => inventoryStatus(product) !== 'in');
  const metrics = [
    { label: 'Delivered revenue', value: money(selected.revenue), Icon: FiDollarSign, current: selected.revenue, previous: previous.revenue, action: () => setMeasure('revenue') },
    { label: 'Orders received', value: number(selected.orders.length), Icon: FiShoppingBag, current: selected.orders.length, previous: previous.orders.length, action: () => onNavigate('Orders') },
    { label: 'Customers', value: number(selected.customers), Icon: FiUsers, current: selected.customers, previous: previous.customers, action: () => onNavigate('Customers') },
  ];
  return <div className="admin-dashboard">
    <div className="dashboard-toolbar"><label className="dashboard-search"><FiSearch aria-hidden="true"/><input aria-label="Search dashboard" placeholder="Search products or customers" value={search} onChange={event => setSearch(event.target.value)}/></label><label className="dashboard-month">Reporting month<input aria-label="Dashboard reporting month" type="month" required max="9999-12" value={month} onChange={event => { if (/^\d{4}-(0[1-9]|1[0-2])$/.test(event.target.value)) setMonth(event.target.value); }}/></label></div>
    <div className="dashboard-kpis">{metrics.map(({ label, value, Icon, current, previous: baseline, action }) => <button type="button" className="dashboard-kpi" key={label} onClick={action}><span>{label}<Icon aria-hidden="true"/></span><strong>{value}</strong><Delta current={current} previous={baseline}/></button>)}<button type="button" className="dashboard-kpi dashboard-stock-kpi" onClick={() => onNavigate('Stocks')}><span>Stock attention<FiPackage aria-hidden="true"/></span><strong>{number(attention.length)}<small> / {products.length}</small></strong><span className="dashboard-delta neutral">Current inventory · review stock <FiArrowUpRight aria-hidden="true"/></span></button></div>
    <div className="dashboard-workspace">
      <div className="dashboard-primary">
        <PerformanceChart orders={orders} month={month} measure={measure} onMeasureChange={setMeasure}/>
        <section className="dashboard-card dashboard-products"><header className="dashboard-card-heading"><div><h2>Product performance</h2><p>Sales and open orders · {monthLabel(month)}</p></div><button type="button" className="dashboard-text-button" onClick={() => onNavigate('Products')}>View products<FiArrowUpRight aria-hidden="true"/></button></header><div className="dashboard-table-scroll"><table><caption className="sr-only">Product sales and current inventory</caption><thead><tr><th scope="col">Product</th><th scope="col">Sold</th><th scope="col">Open orders</th><th scope="col">Stock now</th><th scope="col">Price</th></tr></thead><tbody>{performance.map(product => <tr key={product.id}><th scope="row"><div className="dashboard-product-cell"><span className="dashboard-product-thumb">{product.image ? <Image src={product.image} alt="" fill sizes="34px" className="object-cover"/> : <FiPackage aria-hidden="true"/>}</span><span>{product.name}<small>{product.category}</small></span></div></th><td>{product.sold}</td><td>{product.pending}</td><td><span className={`inventory-status ${inventoryStatus(product)}`} title={INVENTORY_STATUS[inventoryStatus(product)]}>{product.stock} {product.is_combo ? 'sets' : 'pcs'}</span></td><td>{money(productPrice(product))}</td></tr>)}{!performance.length && <tr><td colSpan={5} className="dashboard-table-empty">No products match this view.</td></tr>}</tbody></table></div><p className="dashboard-card-footnote">Sold units count delivered orders. Open orders exclude delivered and cancelled orders.</p></section>
        <section className="dashboard-card dashboard-recent"><header className="dashboard-card-heading"><div><h2>Recent orders</h2><p>{monthLabel(month)} · Bangladesh time</p></div><button type="button" className="dashboard-text-button" onClick={() => onNavigate('Orders')}>Manage orders<FiArrowUpRight aria-hidden="true"/></button></header><div className="dashboard-table-scroll"><table><caption className="sr-only">Recent orders in the reporting month</caption><thead><tr><th scope="col">Order</th><th scope="col">Customer</th><th scope="col">Date</th><th scope="col">Status</th><th scope="col">Amount</th></tr></thead><tbody>{recent.map(order => <tr key={order.id}><th scope="row">#{order.id.slice(0, 8)}</th><td>{order.customer_name}<small className="dashboard-cell-subtitle">{order.district || order.phone}</small></td><td>{new Date(order.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'Asia/Dhaka' })}</td><td><span className={`dashboard-order-status ${order.status}`}>{orderLabels[order.status] || order.status}</span></td><td>{money(order.total)}</td></tr>)}{!recent.length && <tr><td colSpan={5} className="dashboard-table-empty">No orders match this reporting month.</td></tr>}</tbody></table></div></section>
      </div>
      <aside className="dashboard-secondary" aria-label="Monthly goals and activity">
        <DashboardTarget key={month} month={month} revenue={selected.revenue} refreshKey={orders}/>
        <section className="dashboard-card dashboard-locations"><header className="dashboard-card-heading"><div><h2>Orders by location</h2><p>Delivery districts · {monthLabel(month)}</p></div><FiMapPin aria-hidden="true"/></header>{locations.length ? <div className="dashboard-location-list">{locations.map(location => <div className="dashboard-location" key={location.name}><div><span>{location.name}</span><strong>{location.count} <small>{location.count === 1 ? 'order' : 'orders'}</small></strong></div><span className="dashboard-location-track"><i style={{ width: `${location.count / Math.max(1, ...locations.map(item => item.count)) * 100}%` }}/></span></div>)}</div> : <p className="dashboard-placeholder">Location activity will appear when orders arrive.</p>}<p className="dashboard-card-footnote">Top five districts. Cancelled orders are excluded.</p></section>
        {attention.length > 0 && <div className="dashboard-stock-alert"><FiAlertTriangle aria-hidden="true"/><p><strong>{attention.length} {attention.length === 1 ? 'product needs' : 'products need'} stock attention</strong><span>Review low quantities and sold-out products in Stocks.</span></p><button type="button" className="dashboard-text-button" onClick={() => onNavigate('Stocks')}>Review stock<FiArrowUpRight aria-hidden="true"/></button></div>}
      </aside>
    </div>
  </div>;
}
