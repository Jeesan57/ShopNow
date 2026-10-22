import { useId, useState } from 'react';
import { getComboItems, comboCombinationCount, DENIM_SIZES, SWEATER_SIZES, isPants } from '../lib/comboSizing';

import { stockTotal } from '../lib/sizeStock';
import AdminSizeStock from './AdminSizeStock';
import AdminChartTemplate from './AdminChartTemplate';
import AdminProductColors from './AdminProductColors';

const TYPES = ['Pants','Denim','T-shirt','Sweater','Hoodie','Shirt','Jacket','Kurti'];
const standardMeasurements = name => isPants(name) ? ['Waist circumference','Length'] : ['Chest width (flat)','Body length'];

function ComboItemEditor({ item, index, products, onChange, onRemove, stock, onStockChange }) {
  const [customSize, setCustomSize] = useState('');
  const [measurement, setMeasurement] = useState('');
  const typeSuggestionsId = useId();
  const common = isPants(item.name) ? ['28','30','32','34','36','38','40','42'] : ['XS','S','M','L','XL','XXL'];
  function sizes(values) {
    return <div className="admin-size-options">{values.map(size => <label key={size} className={`admin-size-option ${item.sizes.includes(size) ? 'selected' : ''}`}><input type="checkbox" checked={item.sizes.includes(size)} onChange={() => onChange({...item,sizes:item.sizes.includes(size) ? item.sizes.filter(value => value !== size) : [...item.sizes,size]})}/><span>{size}</span></label>)}</div>;
  }
  function addSize() {
    const size = customSize.trim();
    if (!size || /[·:]/.test(size)) return;
    onChange({...item,sizes:[...new Set([...item.sizes,size])]});
    setCustomSize('');
  }
  function addMeasurement() {
    const label = measurement.trim();
    if (!label) return;
    onChange({...item,measurements:[...new Set([...item.measurements,label])]});
    setMeasurement('');
  }
  function updateMeasurement(size,label,value) {
    const row = {...item.chart?.[size]};
    if (value === '') delete row[label]; else row[label] = Number(value);
    onChange({...item,chart:{...item.chart,[size]:row}});
  }
  return <section className="admin-combo-item" aria-label={`${item.name || 'Clothing'} configuration`}>
    <div className="admin-row combo-piece-heading"><h3><span className="admin-combo-step">{index + 1}</span>{item.name || 'Clothing item'}</h3><span className="combo-piece-count">{item.sizes.length} sizes{stock != null && ` · ${stockTotal(item.sizes,stock)} pieces`}</span>{onRemove && <button type="button" className="admin-secondary" onClick={onRemove}>Remove item</button>}</div>
    <label>Clothing type<input required maxLength={60} pattern="[^:·]+" list={typeSuggestionsId} value={item.name} placeholder="Choose or type a clothing type" onChange={event => onChange({...item,name:event.target.value})}/></label>
    <datalist id={typeSuggestionsId}>{TYPES.map(type => <option key={type} value={type}/>)}</datalist>
    <fieldset className="admin-combo-size-picker"><legend>{isPants(item.name) ? 'Add waist sizes (inches)' : 'Add sizes'} <span>{stock == null ? `${item.sizes.length} selected` : 'Click a size to add it'}</span></legend>{sizes(stock != null ? common.filter(size=>!item.sizes.includes(size)) : [...new Set([...common,...item.sizes])])}</fieldset>
    {stock != null && <AdminSizeStock itemName={item.name} sizes={item.sizes} value={stock} onChange={onStockChange} onRemoveSize={size=>onChange({...item,sizes:item.sizes.filter(value=>value!==size)})}/>}
    <details className="admin-combo-more admin-combo-colors"><summary>Available colors <span>{item.colors?.length ? `${item.colors.length} selected` : 'Optional'}</span></summary><AdminProductColors colors={item.colors || []} onChange={colors => onChange({...item,colors})}/></details>
    <details className="admin-combo-more"><summary>More sizes & options</summary>
      {sizes([...new Set([...DENIM_SIZES,...SWEATER_SIZES,'One Size'])].filter(size => !common.includes(size) && !item.sizes.includes(size)))}
      <div className="admin-combo-entry"><label>Custom size<input maxLength={40} pattern="[^:·]*" value={customSize} placeholder="e.g. 29 or Free Size" onChange={event => setCustomSize(event.target.value)} onKeyDown={event => {if(event.key === 'Enter') {event.preventDefault();addSize();}}}/></label><button type="button" className="admin-secondary" disabled={!customSize.trim() || /[·:]/.test(customSize)} onClick={addSize}>Add size</button></div>
      <label>Use sizes from a saved product<select value="" onChange={event => {const source = products.find(product => String(product.id) === event.target.value);if(source) onChange({...item,sizes:[...source.sizes]});}}><option value="">Choose a product</option>{products.map(product => <option key={product.id} value={product.id}>{product.name}</option>)}</select></label>
      <p className="admin-combo-note">Copies sizes only. Enter stock quantities separately for this combo.</p>
    </details>
    <details className="admin-combo-chart">
      <summary>Measurements & size chart <span>Optional</span></summary>
      <AdminChartTemplate item={item} products={products} onChange={onChange}/><p className="admin-combo-note">Enter actual measurements for the selected sizes. Leave unknown values blank.</p>
      {!item.sizes.length && <p className="admin-combo-note">Select available sizes above first.</p>}
      <label>Unit<select value={item.unit} onChange={event => onChange({...item,unit:event.target.value})}><option value="in">Inches</option><option value="cm">Centimetres</option></select></label>
      {!item.measurements.length && <button type="button" className="admin-secondary" onClick={() => onChange({...item,measurements:standardMeasurements(item.name)})}>Add standard measurements</button>}
      {item.sizes.length > 0 && item.measurements.length > 0 && <div className="admin-table-wrap"><table><thead><tr><th>Size</th>{item.measurements.map(label => <th key={label}>{label} ({item.unit})</th>)}</tr></thead><tbody>{item.sizes.map(size => <tr key={size}><th scope="row">{size}</th>{item.measurements.map(label => <td key={label}><input aria-label={`${item.name} ${size} ${label} (${item.unit})`} type="number" min="0.01" max="1000" step="0.01" placeholder="—" value={item.chart?.[size]?.[label] ?? ''} onChange={event => updateMeasurement(size,label,event.target.value)}/></td>)}</tr>)}</tbody></table></div>}
      <details className="admin-combo-more"><summary>Customise chart columns</summary>
        <p className="admin-combo-note">Use “flat” or “circumference” in labels where needed. Changing units does not convert values.</p>
        <div className="admin-combo-entry"><label>Measurement name<input maxLength={60} value={measurement} placeholder="e.g. Shoulder width" onChange={event => setMeasurement(event.target.value)} onKeyDown={event => {if(event.key === 'Enter') {event.preventDefault();addMeasurement();}}}/></label><button type="button" className="admin-secondary" disabled={!measurement.trim() || item.measurements.length >= 8} onClick={addMeasurement}>Add</button></div>
        <div className="admin-combo-columns">{item.measurements.map(label => <button key={label} type="button" className="admin-secondary" aria-label={`Remove ${label} column`} onClick={() => onChange({...item,measurements:item.measurements.filter(value => value !== label),chart:Object.fromEntries(Object.entries(item.chart || {}).map(([size,row]) => [size,Object.fromEntries(Object.entries(row).filter(([key]) => key !== label))]))})}>{label} ×</button>)}</div>
      </details>
    </details>
  </section>;
}

export default function AdminComboSizing({ product, products = [], onChange, disabled }) {
  const items = getComboItems(product);
  const count = comboCombinationCount(items);
  const savedProducts = products.filter(value => value.id !== product.id && !value.is_combo);
  return <fieldset disabled={disabled} className="admin-combo-sizing">
    <div className="admin-combo-intro"><h3>Combo items</h3><p>Add sizes and stock for each piece below. Each order takes one piece from each item.</p></div>
    {items.every(item => !Array.isArray(item.colors)) && product.colors?.length > 0 && <p className="admin-combo-note">Previous combo-wide colors: {product.colors.join(', ')}. Choose available colors for each piece below before saving; these replace the combo-wide colors.</p>}
    {product.combo_stock == null && <div className="admin-combo-stock-enable"><p>Track each piece separately, for example pants 30: 10 pieces and shirt M: 12 pieces.</p><button type="button" className="admin-secondary" onClick={() => onChange({...product,size_stock:null,combo_stock:Object.fromEntries(items.map(item => [item.id,Object.fromEntries(item.sizes.map(size => [size,0]))]))})}>Set individual size stock</button><small>Enter current quantities for every piece before saving. Existing stock is not divided automatically.</small></div>}
    {items.map((item,index) => <ComboItemEditor key={item.id} item={item} index={index} stock={product.combo_stock != null ? product.combo_stock[item.id] || {} : null} onStockChange={quantities=>onChange({...product,combo_stock:{...product.combo_stock,[item.id]:quantities}})} products={savedProducts} onRemove={items.length > 2 ? () => onChange({...product,combo_items:items.filter(value => value.id !== item.id)}) : undefined} onChange={next => onChange({...product,combo_items:items.map(value => value.id === item.id ? next : value)})}/>)}
    {product.combo_stock != null && <div className="combo-stock-summary"><div><strong>Available combo sets</strong><p>Based on the item with the fewest pieces in stock.</p></div><span>{Math.min(...items.map(item=>stockTotal(item.sizes,product.combo_stock[item.id]))) || 0}</span></div>}
    <p className="admin-combo-note">Each order uses one piece from each selected size. Colors share size stock. Stock is managed within this combo product.</p>
    {count > 1024 && <p role="alert" className="admin-size-required">Too many size combinations. Select fewer sizes before saving.</p>}
  </fieldset>;
}
