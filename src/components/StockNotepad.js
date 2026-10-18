'use client';
import { useEffect, useRef, useState } from 'react';
import { FiPlus, FiTrash2, FiRefreshCw } from 'react-icons/fi';
import { getSupabase } from '../lib/supabase';
import StockColorSelect from './StockColorSelect';
import { PRODUCT_COLORS } from '../lib/productColors';
import { getComboItems } from '../lib/comboSizing';

const blankRow = () => ({ key: crypto.randomUUID(), item: '', size: '', color: '', quantity: '' });
export default function StockNotepad({ products = [] }) {
  const noteEditor = useRef(null);
  const [sheets, setSheets] = useState([]);
  const [current, setCurrent] = useState(null);
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [rows, setRows] = useState([]);
  const [dirty, setDirty] = useState(false);
  const [busy, setBusy] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState('');
  const colorChoices = [...new Set([
    ...PRODUCT_COLORS.map(color => color.name),
    ...products.flatMap(product => product.is_combo ? getComboItems(product).flatMap(piece => piece.colors || []) : product.colors || []),
    ...rows.map(row => row.color).filter(Boolean),
  ])];
  const total = rows.reduce((sum, row) => sum + Number(row.quantity || 0), 0);
  async function refresh() {
    const { data, error } = await getSupabase().from('stock_notes').select('*').order('updated_at', { ascending: false });
    if (error) throw error;
    setSheets(data);
  }
  useEffect(() => {
    let alive = true;
    getSupabase().from('stock_notes').select('*').order('updated_at', { ascending: false }).then(({ data, error }) => {
      if (!alive) return;
      if (error) setNotice(error.message);
      else setSheets(data);
      setRows([blankRow()]);
      setLoading(false);
    });
    return () => { alive = false; };
  }, []);
  useEffect(() => {
    function warn(event) { if (dirty) { event.preventDefault(); event.returnValue = ''; } }
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);
  function open(sheet) {
    if (dirty && !window.confirm('Discard unsaved changes to this stock note?')) return;
    setCurrent(sheet || null);
    setTitle(sheet?.title || '');
    setNotes(sheet?.notes || '');
    setRows(sheet ? sheet.items.map(row => ({ ...row, quantity: String(row.quantity), key: crypto.randomUUID() })) : [blankRow()]);
    setDirty(false); setNotice('');
  }
  function edit(key, field, value) {
    setRows(previous => previous.map(row => row.key === key ? { ...row, [field]: value } : row));
    setDirty(true); setNotice('');
  }
  function addProduct(product) {
    let additions;
    if (product.is_combo && product.combo_stock != null) {
      additions = getComboItems(product).flatMap(piece => piece.sizes.map(size => ({ ...blankRow(), item: `${product.name} — ${piece.name}`.slice(0,200), size, quantity: String(product.combo_stock[piece.id]?.[size] || 0) })));
    } else if (product.size_stock != null) {
      additions = product.sizes.map(size => ({ ...blankRow(), item: product.name, size, quantity: String(product.size_stock[size] || 0) }));
    } else additions = [{ ...blankRow(), item: product.name, quantity: String(product.stock || 0) }];
    const existing = rows.filter(row => row.item || row.size || row.color || row.quantity !== '');
    if (existing.length + additions.length > 200) { setNotice('A note can contain up to 200 rows.'); return; }
    setRows([...existing, ...additions]); setDirty(true); setNotice(`${product.name} quantities copied into this note.`);
    requestAnimationFrame(()=>noteEditor.current?.scrollIntoView({behavior:'smooth',block:'start'}));
  }
  async function save(event) {
    event.preventDefault(); setBusy(true); setNotice('');
    try {
      const payload = { title: title.trim(), notes, items: rows.map(row => ({ item: row.item.trim(), size: row.size.trim(), color: row.color.trim(), quantity: Number(row.quantity) })) };
      if (!payload.title || !rows.length || rows.some(row => row.quantity === '') || payload.items.some(row => !row.item || !Number.isInteger(row.quantity) || row.quantity < 0 || row.quantity > 1000000)) throw new Error('Enter a title, item names, and whole stock quantities from 0 to 1,000,000.');
      const db = getSupabase();
      const result = current ? await db.from('stock_notes').update(payload).eq('id', current.id).eq('revision', current.revision).select().maybeSingle() : await db.from('stock_notes').insert(payload).select().single();
      if (result.error) throw result.error;
      if (!result.data) throw new Error('This note changed elsewhere. Reopen its saved version before editing.');
      setCurrent(result.data); setDirty(false);
      await refresh(); setNotice('Stock note saved.');
    } catch (error) { setNotice(error.message); }
    finally { setBusy(false); }
  }
  async function remove() {
    if (!current || !window.confirm(`Delete “${current.title}”${dirty ? ' and its unsaved changes' : ''}?`)) return;
    setBusy(true); setNotice('');
    try {
      const { data, error } = await getSupabase().from('stock_notes').delete().eq('id', current.id).eq('revision', current.revision).select('id').maybeSingle();
      if (error) throw error;
      if (!data) throw new Error('This note changed elsewhere. Reopen it before deleting.');
      setCurrent(null); setTitle(''); setNotes(''); setRows([blankRow()]); setDirty(false);
      await refresh(); setNotice('Stock note deleted.');
    } catch (error) { setNotice(error.message); }
    finally { setBusy(false); }
  }
  if (loading) return <p role="status">Loading stock notes…</p>;
  return <div className="cost-notepad stock-notepad">
    <p className="stock-notepad-intro">Save stock counts and restock reminders. Monitor current inventory in Stocks.</p>
    <div className="cost-toolbar">
      <select aria-label="Open saved stock note" disabled={busy} value={current?.id || ''} onChange={event => open(sheets.find(sheet => sheet.id === event.target.value))}><option value="">New stock note</option>{sheets.map(sheet => <option key={sheet.id} value={sheet.id}>{sheet.title}</option>)}</select>
      <button type="button" className="admin-secondary" disabled={busy} onClick={() => open(null)}><FiPlus aria-hidden="true"/>New note</button>
      <button type="button" className="admin-secondary" aria-label="Refresh saved stock notes" disabled={busy} onClick={async () => { setBusy(true); try { await refresh(); setNotice('Saved notes refreshed.'); } catch (error) { setNotice(error.message); } finally { setBusy(false); } }}><FiRefreshCw aria-hidden="true"/></button>
      {current && <button type="button" className="cost-delete" disabled={busy} aria-label="Delete stock note" onClick={remove}><FiTrash2 aria-hidden="true"/></button>}
    </div>
    <form ref={noteEditor} className="cost-editor" onSubmit={save}>
      <fieldset disabled={busy}>
        <label className="cost-title-label">Note title<input required maxLength={120} placeholder="e.g. October stock count" value={title} onChange={event => { setTitle(event.target.value); setDirty(true); }}/></label>
        <label className="stock-note-copy">Copy product quantities<select aria-label="Copy product stock" value="" onChange={event=>{const product=products.find(item=>String(item.id)===event.target.value);if(product)addProduct(product);}}><option value="">Choose a product (optional)</option>{products.map(product=><option key={product.id} value={product.id}>{product.name}</option>)}</select></label>
        <div className="stock-record-toolbar"><h3 className="stock-record-heading">Stock note items</h3><button type="button" className="admin-danger stock-delete-all" disabled={busy || !rows.some(row=>row.item || row.size || row.color || row.quantity !== '')} onClick={()=>{
          if (!window.confirm('Delete all items from this stock note? Save the note to apply this change.')) return;
          setRows([blankRow()]); setDirty(true); setNotice('All items cleared. Add an item before saving.');
        }}><FiTrash2 aria-hidden="true"/>Delete all items</button></div>
        <div className="cost-table-wrap stock-note-table"><table><caption className="sr-only">Stock quantities by item, size, and color</caption>
          <thead><tr><th scope="col">Item / clothing type</th><th scope="col">Size / waist</th><th scope="col">Color (optional)</th><th scope="col">Stock qty</th><th scope="col"><span className="sr-only">Remove</span></th></tr></thead>
          <tbody>{rows.map((row, index) => <tr key={row.key}>
            <td><input required aria-label={`Item ${index + 1}`} maxLength={200} placeholder="e.g. Polo shirt" value={row.item} onChange={event => edit(row.key, 'item', event.target.value)}/></td>
            <td><input aria-label={`Size ${index + 1}`} maxLength={1000} placeholder="M or 32" value={row.size} onChange={event => edit(row.key, 'size', event.target.value)}/></td>
            <td><StockColorSelect label={`Color ${index + 1}`} colors={colorChoices} value={row.color} disabled={busy} onChange={color=>edit(row.key, 'color', color)}/></td>
            <td><input required aria-label={`Stock quantity ${index + 1}`} type="number" inputMode="numeric" min="0" max="1000000" step="1" placeholder="0" value={row.quantity} onChange={event => edit(row.key, 'quantity', event.target.value)}/></td>
            <td><button type="button" className="cost-delete" aria-label={`Remove row ${index + 1}`} disabled={rows.length === 1} onClick={() => { setRows(rows.filter(item => item.key !== row.key)); setDirty(true); }}><FiTrash2 aria-hidden="true"/></button></td>
          </tr>)}</tbody>
        </table></div>
        <button type="button" className="cost-add" disabled={rows.length >= 200} onClick={() => { setRows([...rows, blankRow()]); setDirty(true); }}><FiPlus aria-hidden="true"/>Add item</button>
        <label className="stock-note-notes">Notes<textarea rows={3} maxLength={10000} placeholder="Supplier, delivery date, items to restock…" value={notes} onChange={event => { setNotes(event.target.value); setDirty(true); }}/></label>
        <div className="cost-bottom"><div className="cost-total"><span>Total pieces</span><strong aria-live="polite">{total.toLocaleString()}</strong></div><button type="submit">{busy ? 'Saving…' : 'Save stock note'}</button></div>
      </fieldset>
      <p className="cost-status" role="status">{notice || (dirty ? 'Unsaved changes' : current ? 'Saved' : 'Add items and quantities to begin.')}</p>
    </form>
  </div>;
}
