import { colorHex } from '../lib/productColors';
export default function ProductColorSelector({ colors = [], selectedColor, onChange, label = 'Color' }) {
  if (!colors.length) return null;
  return <fieldset>
    <legend className="text-xs font-medium text-foreground mb-2">{label} <span className="font-normal text-muted-foreground ml-2">{selectedColor}</span></legend>
    <div className="flex flex-wrap gap-1">
      {colors.map(color => <button key={color} type="button" aria-label={`${label}: ${color}`} aria-pressed={selectedColor === color} onClick={() => onChange(color)}
        className={`w-11 h-11 rounded-full p-1.5 border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${selectedColor === color ? 'border-foreground' : 'border-transparent hover:border-input'}`} title={color}>
        <span aria-hidden="true" className="block w-full h-full rounded-full border border-black/15" style={{ backgroundColor: colorHex(color) }} />
      </button>)}
    </div>
  </fieldset>;
}
