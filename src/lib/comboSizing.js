export const SWEATER_SIZES = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL', '6XL'];
export const DENIM_SIZES = Array.from({length: 23}, (_, index) => String(index + 26));
export const SIZE_MEASUREMENTS = {
  sweater: [['chest', 'Chest width (flat)'], ['shoulder', 'Shoulder'], ['length', 'Body length'], ['sleeve', 'Sleeve length']],
  denim: [['waist', 'Waist circumference'], ['hip', 'Hip circumference'], ['inseam', 'Inseam'], ['thigh', 'Thigh width (flat)'], ['opening', 'Leg opening (flat)']],
};
export const comboSizeLabel = (sweater, denim) => `Sweater: ${sweater} · Denim: ${denim}`;
export function comboSizes(sweaters = [], denims = []) {
  return [...new Set(sweaters)].flatMap(sweater => [...new Set(denims)].map(denim => comboSizeLabel(sweater, denim)));
}
// Legacy products remain readable while the universal migration is being applied.
export function getComboItems(product) {
  if (product.combo_items?.length) return product.combo_items;
  if (!product.sweater_sizes?.length && !product.denim_sizes?.length) return [];
  return [['sweater','Sweater'],['denim','Denim']].map(([id,name]) => ({
    id, name, sizes: product[`${id}_sizes`] || [], unit: 'in',
    measurements: SIZE_MEASUREMENTS[id].map(([,label]) => label),
    chart: Object.fromEntries(Object.entries(product.size_charts?.[id] || {}).map(([size,row]) =>
      [size,Object.fromEntries(SIZE_MEASUREMENTS[id].filter(([key]) => typeof row[key] === 'number').map(([key,label]) => [label,row[key]]))])),
  }));
}
export function comboItemSizes(items) {
  if (!items.length || items.some(item => !item.name.trim() || !item.sizes.length)) return [];
  return items.reduce((pairs,item) => pairs.flatMap(pair => [...new Set(item.sizes)].map(size =>
    `${pair ? `${pair} · ` : ''}${item.name}: ${size}`)), ['']);
}
export function comboCombinationCount(items) {
  return items.length ? items.reduce((count,item) => count * item.sizes.length,1) : 0;
}
export function comboItemSize(item, selection = {}) {
  const chosen = selection[item.id];
  return item.sizes.includes(chosen) ? chosen : item.sizes.length === 1 ? item.sizes[0] : '';
}
export function selectedComboSize(product, selection) {
  const items = getComboItems(product);
  if (!items.length || items.some(item => !comboItemSize(item,selection))) return '';
  return items.map(item => `${item.name}: ${comboItemSize(item,selection)}`).join(' · ');
}

export function createClothingCombo() {
  return [
    {id:'pants',name:'Pants',colors:[],sizes:[],measurements:['Waist circumference','Length'],unit:'in',chart:{}},
    {id:'top',name:'T-shirt',colors:[],sizes:[],measurements:['Chest width (flat)','Body length','Sleeve length'],unit:'in',chart:{}},
  ];
}

export const isPants = name => /pant|denim|jean|trouser/i.test(name);

export function hasComboItemColors(product) {
  return Boolean(product?.is_combo && getComboItems(product).some(item => Array.isArray(item.colors)));
}
export function comboColorCombinationCount(items) {
  return items.reduce((count,item) => count * Math.max(1,item.colors?.length || 0),1);
}
export function comboItemColors(items) {
  const colored = items.filter(item => item.colors?.length);
  if (!colored.length) return [];
  return colored.reduce((pairs,item) => pairs.flatMap(pair => [...new Set(item.colors)].map(color =>
    `${pair ? `${pair} · ` : ''}${item.name}: ${color}`)), ['']);
}
export function comboItemColor(item, selection = {}) {
  const colors = item.colors || [];
  const chosen = selection[item.id];
  return colors.includes(chosen) ? chosen : colors.length === 1 ? colors[0] : '';
}
// null means a required color has not been chosen; empty text means no color options.
export function selectedComboColor(product, selection) {
  const items = getComboItems(product).filter(item => item.colors?.length);
  if (items.some(item => !comboItemColor(item,selection))) return null;
  return items.map(item => `${item.name}: ${comboItemColor(item,selection)}`).join(' · ');
}
