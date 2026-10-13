'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { getSupabase } from '../lib/supabase';
const CatalogContext = createContext({ products: [], categories: [], loading: true, error: '' });
export function CatalogProvider({ children, initialCatalog }) {
  const [state, setState] = useState(initialCatalog || { products: [], categories: [], loading: true, error: '' });
  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        const db = getSupabase();
        const [catalog, categories] = await Promise.all([db.from('products').select('*').eq('active', true).order('created_at', { ascending: false }), db.from('categories').select('name').order('name')]);
        if (catalog.error || categories.error) throw catalog.error || categories.error;
        if (alive) setState({ products: catalog.data.map(p => ({ ...p, price: Number(p.price) })), categories: categories.data.map(c => c.name), loading: false, error: '' });
      } catch (e) { if (alive) setState({ products: [], categories: [], loading: false, error: e.message }); }
    }
    load();
    window.addEventListener('focus', load);
    return () => { alive = false; window.removeEventListener('focus', load); };
  }, []);
  return <CatalogContext.Provider value={state}>{state.error && <div role="alert" className="p-4 text-center bg-red-50 text-red-800">The catalog is temporarily unavailable. Please try again later.</div>}{children}</CatalogContext.Provider>;
}
export function useCatalog() { return useContext(CatalogContext); }
