export const PRODUCT_COLORS = [
  { name: 'Black', hex: '#202020' }, { name: 'White', hex: '#ffffff' },
  { name: 'Navy', hex: '#25334d' }, { name: 'Blue', hex: '#4779b0' },
  { name: 'Olive', hex: '#8b9560' }, { name: 'Green', hex: '#39745a' },
  { name: 'Brown', hex: '#826046' }, { name: 'Beige', hex: '#d6c3a5' },
  { name: 'Gray', hex: '#929292' }, { name: 'Charcoal', hex: '#4b4b4b' },
  { name: 'Red', hex: '#bf4242' }, { name: 'Maroon', hex: '#743641' },
  { name: 'Pink', hex: '#dfa4b5' }, { name: 'Purple', hex: '#8969a9' },
  { name: 'Yellow', hex: '#eccd59' }, { name: 'Orange', hex: '#df8b4d' },
  { name: 'Cream', hex: '#f2ead6' }, { name: 'Teal', hex: '#377c7c' },
];
export function colorHex(name) { return PRODUCT_COLORS.find(color => color.name === name)?.hex || '#b4b4b4'; }
export function cartItemKey(item) { return JSON.stringify([item.id, item.size, item.color || '']); }
export function matchesCartItem(item, id, size, color = '') { return item.id === id && item.size === size && (item.color || '') === color; }
