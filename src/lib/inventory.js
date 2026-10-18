import { getComboItems } from './comboSizing.js';

export function inventoryGroups(product) {
  if (product.is_combo && product.combo_stock != null) {
    return getComboItems(product).map(piece => ({ id: piece.id, name: piece.name, rows: piece.sizes.map(size => ({ size, quantity: Number(product.combo_stock[piece.id]?.[size] || 0) })) }));
  }
  if (product.size_stock != null) return [{ id: 'sizes', name: product.is_combo ? 'Size combinations' : 'Available sizes', rows: product.sizes.map(size => ({ size, quantity: Number(product.size_stock[size] || 0) })) }];
  return [{ id: 'shared', name: 'Shared stock', rows: [{ size: 'All sizes', quantity: Number(product.stock || 0) }] }];
}
export function inventoryStatus(product) {
  if (Number(product.stock || 0) <= 0) return 'out';
  if (Number(product.stock) < 5 || inventoryGroups(product).some(group => group.rows.some(row => row.quantity > 0 && row.quantity < 5))) return 'low';
  return 'in';
}
export const INVENTORY_STATUS = { in: 'In stock', low: 'Low stock', out: 'Out of stock' };
