import { PRODUCT_COLORS, colorHex } from '../lib/productColors';
export default function AdminProductColors({ colors = [], onChange }) {
  const choices = [...PRODUCT_COLORS, ...colors.filter(name => !PRODUCT_COLORS.some(color => color.name === name)).map(name => ({ name, hex: colorHex(name) }))];
  return <fieldset className="admin-product-colors">
    <legend>Available colors</legend>
    <p>Select the colors customers can order. Leave empty for products without color options.</p>
    <div className="admin-color-grid">{choices.map(color => <label key={color.name} className={`admin-color-option ${colors.includes(color.name) ? 'selected' : ''}`}>
      <input type="checkbox" checked={colors.includes(color.name)} onChange={() => onChange(colors.includes(color.name) ? colors.filter(name => name !== color.name) : [...colors, color.name])} />
      <span aria-hidden="true" className="admin-color-swatch" style={{ backgroundColor: color.hex }} />{color.name}
    </label>)}</div>
  </fieldset>;
}
