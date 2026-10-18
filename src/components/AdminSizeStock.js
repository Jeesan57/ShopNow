import { stockTotal } from '../lib/sizeStock';

export default function AdminSizeStock({ sizes, value, onChange, stock = 0, onStockChange, disabled, combo = false, onRemoveSize, itemName = '' }) {
  const tracking = value != null;
  return <fieldset className="admin-product-sizes admin-size-stock" disabled={disabled}>
    <legend>{itemName ? `${itemName} stock` : combo ? 'Combo stock by size' : 'Stock quantity'}</legend>
    <div className="stock-editor-toolbar">
      <p>{tracking ? (combo ? 'Enter available sets for each size combination.' : 'Enter how many pieces you have in each size.') : 'This product still uses shared stock. Enter individual size quantities to switch.'}</p>
      {!tracking && <button type="button" className="admin-secondary" onClick={() => onChange(Object.fromEntries(sizes.map(size => [size, 0])))}>{combo ? 'Set stock for each combination' : 'Set stock for each size'}</button>}
    </div>
    {tracking ? <>
      {sizes.length ? <div className="stock-editor-table-wrap"><table className="stock-editor-table">
        <caption className="sr-only">Available stock for each size</caption>
        <thead><tr><th scope="col">{combo ? 'Size combination' : 'Size'}</th><th scope="col">Available quantity</th></tr></thead>
        <tbody>{sizes.map(size => <tr key={size}>
          <th scope="row"><span className="stock-size-label">{size}</span></th>
          <td><input aria-label={`Stock quantity for ${itemName ? `${itemName} ` : ''}${size}`} required type="number" inputMode="numeric" min="0" max="1000000" step="1" value={value[size] ?? 0} onFocus={event => event.target.select()} onChange={event => onChange({...value, [size]: event.target.value})}/>{onRemoveSize && <button type="button" className="stock-remove-size" aria-label={`Remove ${itemName ? `${itemName} ` : ''}size ${size}`} onClick={()=>onRemoveSize(size)}>×</button>}</td>
        </tr>)}</tbody>
        <tfoot><tr><th scope="row">Total stock</th><td aria-live="polite">{stockTotal(sizes, value).toLocaleString()} <span>{combo ? 'sets' : 'pieces'}</span></td></tr></tfoot>
      </table></div> : <p className="stock-editor-empty">Select sizes above to enter stock quantities.</p>}
      <p className="stock-editor-note">{combo ? '0 means this combination is sold out. Quantities are for complete sets and are shared across colors.' : '0 means sold out. Colors share the same size stock.'}</p>
    </> : <label className="stock-editor-shared">Available quantity<input required type="number" min="0" step="1" value={stock} onChange={event => onStockChange(event.target.value)}/></label>}
  </fieldset>;
}
