'use client';
import { normalizeProduct } from '../lib/pricing';
import { createContext, useContext, useEffect, useState } from 'react';
const CatalogContext = createContext({ products: [], categories: [], loading: true, error: '' });
export function CatalogProvider({ children, initialCatalog }) {
  const [state, setState] = useState(initialCatalog || { products: [], categories: [], loading: true, error: '' });
  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        const { getSupabase } = await import('../lib/supabase');
        const db = getSupabase();
        const [catalog, categories] = await Promise.all([db.from('products').select('*').eq('active', true).order('created_at', { ascending: false }), db.from('categories').select('name').order('name')]);
        if (catalog.error || categories.error) throw catalog.error || categories.error;
        if (alive) setState({ products: catalog.data.map(normalizeProduct), categories: categories.data.map(c => c.name), loading: false, error: '' });
      } catch (e) { if (alive) setState({ products: [], categories: [], loading: false, error: e.message }); }
    }
    // Use server-rendered data during hydration; refresh once its cache window expires.
    const refreshTimer = initialCatalog ? window.setTimeout(load, 60000) : null;
    if (!initialCatalog) load();
    window.addEventListener('focus', load);
    return () => { alive = false; window.clearTimeout(refreshTimer); window.removeEventListener('focus', load); };
  }, [initialCatalog]);
  return <CatalogContext.Provider value={state}>{state.error && <div role="alert" className="p-4 text-center bg-red-50 text-red-800">The catalog is temporarily unavailable. Please try again later.</div>}{children}</CatalogContext.Provider>;
}
export function useCatalog() { return useContext(CatalogContext); }
