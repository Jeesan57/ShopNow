'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FiSearch, FiRefreshCw, FiPackage, FiArrowUpRight, FiClipboard, FiLayers, FiCheckCircle, FiAlertTriangle, FiXCircle } from 'react-icons/fi';
import { inventoryGroups, inventoryStatus, INVENTORY_STATUS } from '../lib/inventory';

const metrics = [
  { key: 'all', label: 'All products', hint: 'Your complete inventory', Icon: FiLayers },
  { key: 'in', label: 'In stock', hint: 'Healthy stock levels', Icon: FiCheckCircle },
  { key: 'low', label: 'Low stock', hint: 'Some quantities below 5', Icon: FiAlertTriangle },
  { key: 'out', label: 'Out of stock', hint: 'Ready to restock', Icon: FiXCircle },
];
const quantityStatus = quantity => quantity <= 0 ? 'out' : quantity < 5 ? 'low' : 'in';

export default function InventoryOverview({ products, onRefresh, onEdit, onCopy, disabled }) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [selectedId, setSelectedId] = useState('');
  const [attentionOnly, setAttentionOnly] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [notice, setNotice] = useState('');
  const counts = { all: products.length, in: 0, low: 0, out: 0 };
  products.forEach(product => counts[inventoryStatus(product)]++);
  const visible = products.filter(product => `${product.name} ${product.category}`.toLowerCase().includes(query.toLowerCase()) && (filter === 'all' || inventoryStatus(product) === filter));
  const product = visible.find(item => String(item.id) === selectedId) || visible[0];
  const displayedProducts = selectedId === '' ? visible : product ? [product] : [];

  async function refresh() {
    setRefreshing(true); setNotice('');
    try { await onRefresh(); setNotice('Inventory refreshed just now.'); }
    catch (error) { setNotice(error.message); }
    finally { setRefreshing(false); }
  }

  return <section className="inventory-overview" aria-label="Product inventory">
    <header className="inventory-heading">
      <div><h2>Stock overview</h2><p>A clear view of what’s available and what needs restocking.</p></div>
      <button type="button" className="admin-secondary inventory-refresh" disabled={refreshing || disabled} onClick={refresh}>
        <FiRefreshCw aria-hidden="true" className={refreshing ? 'inventory-spinning' : ''}/>{refreshing ? 'Updating…' : 'Refresh stock'}
      </button>
    </header>

    <div className="inventory-metrics">
      {metrics.map(({ key, label, hint, Icon }) => <button type="button" key={key} className={`inventory-metric ${key} ${filter === key ? 'is-selected' : ''}`} aria-pressed={filter === key} onClick={() => setFilter(key)}>
        <span className="inventory-metric-top"><span>{label}</span><Icon aria-hidden="true"/></span>
        <strong>{counts[key]}</strong><small>{hint}</small>
      </button>)}
    </div>

    <div className="inventory-panel">
      <div className="inventory-controls">
        <label className="inventory-product-select">Select product
          <select aria-label="Choose product stock" value={selectedId === '' ? '' : product?.id || ''} onChange={event => setSelectedId(event.target.value)}>
            <option value="">All products</option>
            {visible.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
          </select>
        </label>
        <label className="inventory-search-label">Find a product
          <span className="inventory-search"><FiSearch aria-hidden="true"/><input aria-label="Search inventory" placeholder="Name or category" value={query} onChange={event => setQuery(event.target.value)}/></span>
        </label>
        <label className="inventory-filter-label">Stock status
          <select aria-label="Stock status" value={filter} onChange={event => setFilter(event.target.value)}>
            <option value="all">All statuses</option>{Object.entries(INVENTORY_STATUS).map(([key, label]) => <option key={key} value={key}>{label}</option>)}
          </select>
        </label>
      </div>

      {displayedProducts.length ? displayedProducts.map(item => <InventoryProductStock key={item.id} product={item} attentionOnly={attentionOnly} setAttentionOnly={setAttentionOnly} disabled={disabled} onCopy={onCopy} onEdit={onEdit}/>) : <div className="inventory-empty"><FiPackage aria-hidden="true"/><h3>{products.length ? 'No products match your filters' : 'Your inventory is empty'}</h3><p>{products.length ? 'Try another product name or choose a different stock status.' : 'Add a product to start tracking stock.'}</p>{products.length > 0 && <button type="button" className="admin-secondary" onClick={() => { setQuery(''); setFilter('all'); }}>Clear filters</button>}</div>}
    </div>
    <p className="inventory-update" role="status">{notice || 'Refresh stock to load the latest order deductions.'}</p>
  </section>;
}

function InventoryProductStock({ product, attentionOnly, setAttentionOnly, disabled, onCopy, onEdit }) {
  const groups = product ? inventoryGroups(product) : [];
  const sizeRows = groups.flatMap(group => group.rows);
  const low = sizeRows.filter(row => row.quantity > 0 && row.quantity < 5).length;
  const soldOut = sizeRows.filter(row => row.quantity <= 0).length;
  const isIndividualCombo = product?.is_combo && product.combo_stock != null;

  return <article className="inventory-product-stock">
        <div className="inventory-product-header">
          <div className="inventory-product-image">{product.image ? <Image src={product.image} alt="" fill sizes="64px" className="object-cover"/> : <FiPackage aria-hidden="true"/>}</div>
          <div className="inventory-product-title">
            <p>{product.category || 'Product'}<span>{product.is_combo ? 'Combo' : 'Single product'}</span><span>{product.active ? 'Published' : 'Draft'}</span></p>
            <h3>{product.name}</h3><span className={`inventory-status ${inventoryStatus(product)}`}>{INVENTORY_STATUS[inventoryStatus(product)]}</span>
          </div>
          <div className="inventory-product-total"><span>{product.is_combo ? 'Available sets' : 'Available pieces'}</span><strong>{Number(product.stock || 0).toLocaleString()}</strong></div>
        </div>

        <div className="inventory-detail-toolbar">
          <div><h3>Stock by {isIndividualCombo ? 'item & size' : 'size'}</h3><p>{sizeRows.length} {sizeRows.length === 1 ? 'size entry' : 'size entries'}{low + soldOut > 0 && <span> · {low + soldOut} need attention</span>}</p></div>
          <div className="inventory-size-filter" role="group" aria-label="Size visibility">
            <button type="button" aria-pressed={!attentionOnly} onClick={() => setAttentionOnly(false)}>All sizes</button>
            <button type="button" aria-pressed={attentionOnly} onClick={() => setAttentionOnly(true)}>Needs attention <span>{low + soldOut}</span></button>
          </div>
        </div>

        <div className={`inventory-groups ${groups.length === 1 ? 'single' : ''}`}>
          {groups.map(group => {
            const displayed = attentionOnly ? group.rows.filter(row => row.quantity < 5) : group.rows;
            return <section className="inventory-group" key={group.id}>
              <header><div><FiPackage aria-hidden="true"/><h4>{group.name}</h4></div><span><strong>{group.rows.reduce((total, row) => total + row.quantity, 0).toLocaleString()}</strong> {product.is_combo && !isIndividualCombo ? 'sets' : 'pieces'}</span></header>
              <div className="inventory-size-scroll"><table>
                <caption className="sr-only">{product.name}, {group.name} stock</caption>
                <thead><tr><th scope="col">Size / waist</th><th scope="col">On hand</th><th scope="col">Status</th></tr></thead>
                <tbody>{displayed.map(row => <tr key={row.size} className={quantityStatus(row.quantity)}>
                  <th scope="row"><span className="inventory-size-name">{row.size}</span></th><td>{row.quantity.toLocaleString()}</td><td><span className={`inventory-status ${quantityStatus(row.quantity)}`}>{row.quantity <= 0 ? 'Sold out' : row.quantity < 5 ? 'Low stock' : 'In stock'}</span></td>
                </tr>)}{!displayed.length && <tr><td className="inventory-healthy" colSpan={3}><FiCheckCircle aria-hidden="true"/>All sizes have healthy stock.</td></tr>}</tbody>
              </table></div>
              <footer>{group.rows.length} {group.rows.length === 1 ? 'size' : 'sizes'}<span>{group.rows.filter(row => row.quantity === 0).length} sold out</span></footer>
            </section>;
          })}
        </div>

        <div className="inventory-panel-footer">
          <p><FiRefreshCw aria-hidden="true"/><span>{isIndividualCombo ? 'Orders deduct from each selected piece and size.' : product.size_stock != null ? 'Orders deduct from the selected size.' : 'Orders deduct from shared product stock.'}<small>Low stock is 1–4. Colors share stock for each size.</small></span></p>
          <div>{onCopy && <button type="button" className="admin-secondary" disabled={disabled} onClick={() => onCopy(product)}><FiClipboard aria-hidden="true"/>Copy to note</button>}<button type="button" className="inventory-edit" disabled={disabled} onClick={() => onEdit(product)}>Edit stock<FiArrowUpRight aria-hidden="true"/></button></div>
        </div>

  </article>;
}
