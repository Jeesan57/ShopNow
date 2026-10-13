const CLOTHING = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL', '6XL', 'One Size'];
const NUMERIC = Array.from({ length: 23 }, (_, index) => String(index + 26));
const KIDS = ['3–6 months', '6–12 months', '1–2 years', '2–3 years', '3–4 years', '4–5 years', '5–6 years', '7–8 years', '9–10 years', '11–12 years', '13–14 years', '15–16 years'];
export default function AdminProductSizes({ sizes = [], onChange, disabled = false }) {
  const known = [...CLOTHING, ...NUMERIC, ...KIDS];
  const existing = sizes.filter(size => !known.includes(size));
  function options(values) {
    return <div className="admin-size-options">{values.map(size => <label key={size} className={`admin-size-option ${sizes.includes(size) ? 'selected' : ''}`}>
      <input type="checkbox" checked={sizes.includes(size)} onChange={() => onChange(sizes.includes(size) ? sizes.filter(value => value !== size) : [...sizes, size])} />
      <span>{size}</span>
    </label>)}</div>;
  }
  return <fieldset className="admin-product-sizes" disabled={disabled}>
    <legend>Available sizes <span>{sizes.length} selected</span></legend>
    <p>Select the sizes customers can order.</p>
    {options(CLOTHING)}
    <details className="admin-size-more"><summary>Numeric and kids sizes</summary>
      <p className="admin-size-group-title">Numeric sizes · trousers and footwear</p>{options(NUMERIC)}
      <p className="admin-size-group-title">Kids sizes</p>{options(KIDS)}
    </details>
    {existing.length > 0 && <div><p className="admin-size-group-title">Existing custom sizes</p>{options(existing)}</div>}
    {!sizes.length && <p className="admin-size-required">Select at least one size before saving.</p>}
  </fieldset>;
}
