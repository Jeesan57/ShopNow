import ProductColorSelector from './ProductColorSelector';
import { getComboItems, isPants, comboItemSize, comboItemColor } from '../lib/comboSizing';

function SizeChart({ item }) {
  const rows = item.sizes.filter(size => item.measurements.some(label => typeof item.chart?.[size]?.[label] === 'number'));
  if (!rows.length) return null;
  return <details className="mt-3 rounded-lg border border-border px-3 py-2">
    <summary className="cursor-pointer text-xs font-medium min-h-7 content-center">{item.name} size chart</summary>
    <div className="pt-3 min-w-0">
      <p className="text-[11px] leading-5 text-muted-foreground mb-2">Actual measurements in {item.unit === 'cm' ? 'centimetres' : 'inches'}. Compare with an item that fits you. Widths marked “flat” are measured across one side.</p>
      <div className="overflow-x-auto"><table className="w-full text-left text-[11px] whitespace-nowrap"><caption className="sr-only">{item.name} measurements ({item.unit})</caption>
        <thead><tr><th scope="col" className="p-2 border-b border-border">Size / option</th>{item.measurements.map(label => <th key={label} scope="col" className="p-2 border-b border-border font-medium">{label} ({item.unit})</th>)}</tr></thead>
        <tbody>{rows.map(size => <tr key={size}><th scope="row" className="p-2 border-b border-border font-medium">{size}</th>{item.measurements.map(label => <td key={label} className="p-2 border-b border-border tabular-nums">{item.chart?.[size]?.[label] ?? '—'}</td>)}</tr>)}</tbody>
      </table></div>
    </div>
  </details>;
}

export default function ComboSizeSelector({ product, value, onChange, colors = {}, onColorChange }) {
  return <div className="space-y-5 min-w-0">
    <p className="text-xs text-muted-foreground leading-5">Choose your size for each piece.</p>
    {getComboItems(product).map(item => <div key={item.id} className="min-w-0">
      <fieldset><legend className="text-xs font-medium mb-3">{item.name}{isPants(item.name) && ' · Waist size (inches)'}<span className="ml-2 text-muted-foreground font-normal">{comboItemSize(item,value) || (isPants(item.name) ? 'Select waist size' : 'Select size')}</span></legend>
        <div className="flex flex-wrap gap-2">{item.sizes.map(size => <button key={size} type="button" aria-label={`${item.name} ${isPants(item.name) ? 'waist size' : 'size'} ${size}${isPants(item.name) && /^\d+(\.\d+)?$/.test(size) ? ' inches' : ''}`} aria-pressed={comboItemSize(item,value) === size} onClick={() => onChange({...value,[item.id]:size})} className={`min-w-11 min-h-11 px-3 py-2 rounded-md border text-xs font-medium focus-visible:outline-2 focus-visible:outline-primary ${comboItemSize(item,value) === size ? 'border-foreground bg-foreground/5 ring-1 ring-foreground' : 'border-border hover:border-primary'}`}>{size}</button>)}</div>
      </fieldset>
      {item.colors?.length > 0 && <div className="mt-3"><ProductColorSelector label={`${item.name} color`} colors={item.colors} selectedColor={comboItemColor(item,colors) || 'Select color'} onChange={color => onColorChange?.({...colors,[item.id]:color})}/></div>}
      <SizeChart item={item}/>
    </div>)}
  </div>;
}
