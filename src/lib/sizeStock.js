// null preserves legacy products that use one shared stock quantity.
export function sizeStock(product, size) {
  if (!product) return 0;
  if (product.is_combo && product.combo_stock != null) {
    if (!size) return 0;
    return Math.min(...(product.combo_items || []).map(item => {
      const label = size.split(' · ').find(part => part.startsWith(`${item.name}: `))?.slice(item.name.length + 2);
      return Number(product.combo_stock[item.id]?.[label] || 0);
    }));
  }
  return product.size_stock == null ? Number(product.stock || 0) : Number(product.size_stock[size] || 0);
}
export function availableSize(product) {
  return product?.sizes?.find(size => sizeStock(product, size) > 0) || '';
}
export function stockTotal(sizes, quantities) {
  return sizes.reduce((total, size) => total + Number(quantities?.[size] || 0), 0);
}
export function cartStockUsed(items, product, size) {
  if (product.is_combo && product.combo_stock != null) {
    return Math.max(0, ...(product.combo_items || []).map(piece => {
      const label = size.split(' · ').find(part => part.startsWith(`${piece.name}: `));
      return items.filter(item => String(item.id) === String(product.id) && item.size.split(' · ').includes(label)).reduce((total, item) => total + item.quantity, 0);
    }));
  }
  return items.filter(item => String(item.id) === String(product.id) && (product.size_stock == null || item.size === size)).reduce((total, item) => total + item.quantity, 0);
}

export function cartRemainingStock(items, product, size) {
  if (product.is_combo && product.combo_stock != null) {
    return Math.max(0, Math.min(...(product.combo_items || []).map(piece => {
      const label = size.split(' · ').find(part => part.startsWith(`${piece.name}: `));
      const selected = label?.slice(piece.name.length + 2);
      const used = items.filter(item => String(item.id) === String(product.id) && item.size.split(' · ').includes(label)).reduce((total, item) => total + item.quantity, 0);
      return Number(product.combo_stock[piece.id]?.[selected] || 0) - used;
    })));
  }
  return Math.max(0, sizeStock(product, size) - cartStockUsed(items, product, size));
}
