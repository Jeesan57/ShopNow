'use client';
import { useEffect, useRef } from 'react';
import { analyticsEcommerce } from './analytics';

export default function useProductAnalytics(product, enabled = true, source = 'Product page') {
  const last = useRef('');
  useEffect(() => {
    if (!enabled || !product) { last.current = ''; return; }
    const key = String(product.id);
    if (last.current === key) return;
    if (analyticsEcommerce('view_item', [{ ...product, quantity: 1 }], { item_list_name: source })) last.current = key;
  }, [product, enabled, source]);
}
