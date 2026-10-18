import AdminSizeStock from './AdminSizeStock';
const CLOTHING = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL', '6XL', 'One Size'];
const NUMERIC = Array.from({ length: 23 }, (_, index) => String(index + 26));
const KIDS = ['3–6 months', '6–12 months', '1–2 years', '2–3 years', '3–4 years', '4–5 years', '5–6 years', '7–8 years', '9–10 years', '11–12 years', '13–14 years', '15–16 years'];
export default function AdminProductSizes({ sizes = [], onChange, quantities, onQuantityChange, stock, onStockChange, disabled = false }) {
  const known = [...CLOTHING, ...NUMERIC, ...KIDS];
  const existing = sizes.filter(size => !known.includes(size));
  function options(values) {
    return <div className="admin-size-options">{values.map(size => <label key={size} className={`admin-size-option ${sizes.includes(size) ? 'selected' : ''}`}>
      <input type="checkbox" checked={sizes.includes(size)} onChange={() => onChange(sizes.includes(size) ? sizes.filter(value => value !== size) : [...sizes, size])} />
      <span>{size}</span>
    </label>)}</div>;
  }
  return <fieldset className="admin-product-sizes" disabled={disabled}>
    <legend>Sizes & stock <span>{sizes.length} selected</span></legend>
    <p>Select shirt sizes or pants waist sizes, then enter the stock for each.</p>
    <p className="admin-size-group-title">Add shirt sizes</p>
    {options(quantities != null ? CLOTHING.filter(size=>!sizes.includes(size)) : CLOTHING)}
    <p className="admin-size-group-title">Add pants waist sizes (inches)</p>{options(quantities != null ? NUMERIC.filter(size=>!sizes.includes(size)) : NUMERIC)}
    <details className="admin-size-more"><summary>Kids sizes</summary>
      <p className="admin-size-group-title">Kids sizes</p>{options(KIDS)}
    </details>
    {quantities == null && existing.length > 0 && <div><p className="admin-size-group-title">Existing custom sizes</p>{options(existing)}</div>}
    <AdminSizeStock sizes={sizes} value={quantities} onChange={onQuantityChange} onRemoveSize={size=>onChange(sizes.filter(value=>value!==size))} stock={stock} onStockChange={onStockChange} disabled={disabled}/>
    {!sizes.length && <p className="admin-size-required">Select at least one size before saving.</p>}
  </fieldset>;
}
