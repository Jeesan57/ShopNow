'use client';
import { useEffect, useState } from 'react';
import { FiPlus, FiTrash2 } from 'react-icons/fi';
import { getSupabase } from '../lib/supabase';
const money = n => '৳' + Number(n).toLocaleString('en-BD', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const blankItem = () => ({ key: crypto.randomUUID(), label: '', quantity: '1', price: '' });
const lineTotal = item => Math.round(Number(item.quantity || 0) * Math.round(Number(item.price || 0) * 100)) / 100;
export default function CostNotepad() {
  const [sheets, setSheets] = useState([]), [id, setId] = useState(null), [version, setVersion] = useState(null);
  const [title, setTitle] = useState(''), [notes, setNotes] = useState(''), [items, setItems] = useState([]);
  const [busy, setBusy] = useState(false), [loading, setLoading] = useState(true), [dirty, setDirty] = useState(false), [notice, setNotice] = useState('');
  const total = items.reduce((sum,item) => sum + Math.round(lineTotal(item)*100), 0) / 100;
  async function refresh() {
    const {data,error} = await getSupabase().from('cost_notes').select('*').order('updated_at', {ascending:false});
    if(error) throw error;
    setSheets(data);
  }
  useEffect(() => {
    let alive=true;
    async function init() {
      try {
        const {data,error}=await getSupabase().from('cost_notes').select('*').order('updated_at',{ascending:false});
        if(error) throw error;
        if(alive) {setSheets(data);setItems([blankItem()]);}
      } catch(e) {if(alive)setNotice(e.message);}
      finally {if(alive)setLoading(false);}
    }
    init();
    return ()=>{alive=false;};
  }, []);
  useEffect(() => {
    function warn(e) { if(dirty){e.preventDefault();e.returnValue='';} }
    window.addEventListener('beforeunload',warn);
    return ()=>window.removeEventListener('beforeunload',warn);
  }, [dirty]);
  function edit(key, field, value) {setItems(prev=>prev.map(i=>i.key===key?{...i,[field]:value}:i));setDirty(true);}
  function open(sheet) {
    if(dirty && !window.confirm('Discard unsaved changes?')) return;
    setId(sheet?.id || null);setVersion(sheet?.updated_at || null);setTitle(sheet?.title || '');setNotes(sheet?.notes || '');
    setItems(sheet ? sheet.items.map(i=>({...i,key:crypto.randomUUID(),quantity:String(i.quantity),price:String(i.price)})) : [blankItem()]);
    setDirty(false);setNotice('');
  }
  async function save(e) {
    e.preventDefault();setNotice('');setBusy(true);
    try {
      const data = {title:title.trim(),notes,items:items.map(i=>({label:i.label.trim(),quantity:Number(i.quantity),price:Number(i.price)}))};
      if(!data.title || !data.items.length || data.items.some(i=>!i.label || !Number.isFinite(i.quantity) || i.quantity<=0 || !Number.isFinite(i.price) || i.price<0))throw new Error('Enter a title and valid expense descriptions, quantities, and costs.');
      const db=getSupabase();
      const result=id ? await db.from('cost_notes').update({...data,updated_at:new Date().toISOString()}).eq('id',id).eq('updated_at',version).select().maybeSingle() : await db.from('cost_notes').insert(data).select().single();
      if(result.error)throw result.error;
      if(!result.data)throw new Error('This note changed elsewhere. Reopen the saved version before editing.');
      setId(result.data.id);setVersion(result.data.updated_at);setDirty(false);await refresh();setNotice('Cost note saved.');
    } catch(e){setNotice(e.message);}finally{setBusy(false);}
  }
  async function remove(sheet) {
    if(!window.confirm(`Permanently delete “${sheet.title}”?`))return;
    setBusy(true);
    try {
      const {error}=await getSupabase().from('cost_notes').delete().eq('id',sheet.id);
      if(error)throw error;
      if(id===sheet.id){setId(null);setVersion(null);setTitle('');setNotes('');setItems([blankItem()]);setDirty(false);}
      await refresh();setNotice('Cost note deleted.');
    }catch(e){setNotice(e.message);}finally{setBusy(false);}
  }
  if(loading)return <p role="status">Loading cost notes…</p>;
  return (
    <div className="cost-notepad">
      <div className="cost-toolbar">
        <select aria-label="Open saved cost note" disabled={busy} value={id || ''} onChange={e=>open(sheets.find(sheet=>sheet.id===e.target.value) || null)}>
          <option value="">New note</option>
          {sheets.map(sheet=><option key={sheet.id} value={sheet.id}>{sheet.title}</option>)}
        </select>
        <button className="admin-secondary" disabled={busy} onClick={()=>open(null)}><FiPlus aria-hidden="true"/>New</button>
        {id && <button className="cost-delete" disabled={busy} aria-label="Delete saved note" onClick={()=>remove(sheets.find(sheet=>sheet.id===id))}><FiTrash2 aria-hidden="true"/></button>}
      </div>
      <form className="cost-editor" onSubmit={save}>
        <fieldset disabled={busy}>
          <label className="cost-title-label">Title<input required maxLength={120} placeholder="Name this cost note" value={title} onChange={e=>{setTitle(e.target.value);setDirty(true);}}/></label>
          <div className="cost-table-wrap"><table>
            <thead><tr><th>Expense</th><th>Qty</th><th>Unit cost (৳)</th><th>Amount</th><th><span className="sr-only">Remove</span></th></tr></thead>
            <tbody>{items.map(item=><tr key={item.key}>
              <td><input required aria-label="Expense description" placeholder="Expense name" maxLength={200} value={item.label} onChange={e=>edit(item.key,'label',e.target.value)}/></td>
              <td><input required aria-label="Quantity" type="number" min="0.01" max="100000" step="0.01" value={item.quantity} onChange={e=>edit(item.key,'quantity',e.target.value)}/></td>
              <td><input required aria-label="Unit cost" type="number" min="0" max="99999999" step="0.01" placeholder="0.00" value={item.price} onChange={e=>edit(item.key,'price',e.target.value)}/></td>
              <td className="cost-amount">{money(lineTotal(item))}</td>
              <td><button type="button" className="cost-delete" aria-label="Remove expense" disabled={items.length===1} onClick={()=>{setItems(items.filter(i=>i.key!==item.key));setDirty(true);}}><FiTrash2 aria-hidden="true"/></button></td>
            </tr>)}</tbody>
          </table></div>
          <button type="button" className="cost-add" disabled={items.length>=200} onClick={()=>{setItems([...items,blankItem()]);setDirty(true);}}><FiPlus aria-hidden="true"/>Add expense</button>
          <details className="cost-notes"><summary>{notes ? 'Notes' : 'Add notes (optional)'}</summary><label className="sr-only" htmlFor="cost-note-text">Notes</label><textarea id="cost-note-text" rows={3} maxLength={10000} placeholder="Write a reminder…" value={notes} onChange={e=>{setNotes(e.target.value);setDirty(true);}}/></details>
          <div className="cost-bottom"><div className="cost-total"><span>Total</span><strong>{money(total)}</strong></div><button type="submit">{busy?'Saving…':'Save note'}</button></div>
        </fieldset>
        <p className="cost-status" role="status">{notice || (dirty ? 'Unsaved changes' : id ? 'Saved' : 'Amounts in Bangladeshi taka (৳)')}</p>
      </form>
    </div>
  );
}
