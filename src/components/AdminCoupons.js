'use client';
import { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { getSupabase } from '../lib/supabase';
const empty = { code: '', discount_type: 'percent', discount_value: '', min_subtotal: 0, max_discount: '', starts_at: '', expires_at: '', usage_limit: '', active: true };
// Edit schedules explicitly in Bangladesh time, independent of the browser timezone.
const localDate = value => value ? new Date(new Date(value).getTime() + 6 * 3600000).toISOString().slice(0,16) : '';
const utcDate = value => value ? new Date(`${value}:00+06:00`).toISOString() : null;
export default function AdminCoupons() {
  const [coupons, setCoupons] = useState([]);
  const [editing, setEditing] = useState(null);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState('');
  async function load() {
    const { data, error } = await getSupabase().from('coupons').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    setCoupons(data);
  }
  useEffect(() => {
    let alive = true;
    getSupabase().from('coupons').select('*').order('created_at', { ascending: false }).then(({data,error}) => {
      if (!alive) return;
      if (error) setNotice('Coupons are unavailable. Apply the discounts and coupons database migration first.');
      else setCoupons(data);
    });
    return () => { alive = false; };
  }, []);
  async function save(event) {
    event.preventDefault(); setBusy(true); setNotice('');
    try {
      const payload = {
        code: editing.code.trim().toUpperCase(), discount_type: editing.discount_type, discount_value: Number(editing.discount_value),
        min_subtotal: Number(editing.min_subtotal || 0), max_discount: editing.max_discount === '' ? null : Number(editing.max_discount),
        starts_at: utcDate(editing.starts_at), expires_at: utcDate(editing.expires_at),
        usage_limit: editing.usage_limit === '' ? null : Number(editing.usage_limit), active: editing.active,
      };
      if (!/^[A-Z0-9_-]{3,40}$/.test(payload.code)) throw new Error('Use 3–40 letters, numbers, hyphens, or underscores for the code.');
      if (!(payload.discount_value>0) || (payload.discount_type==='percent' && payload.discount_value>100)) throw new Error('Enter a valid discount: percentage must be between 0 and 100.');
      if (payload.starts_at && payload.expires_at && payload.starts_at>=payload.expires_at) throw new Error('Expiry must be after the start time.');
      const query = editing.id ? getSupabase().from('coupons').update(payload).eq('id',editing.id) : getSupabase().from('coupons').insert(payload);
      const { error } = await query; if (error) throw error;
      await load(); setEditing(null); setNotice('Coupon saved.');
    } catch (error) {setNotice(error.message);} finally {setBusy(false);}
  }
  async function toggle(coupon) {
    setBusy(true); setNotice('');
    try { const {error}=await getSupabase().from('coupons').update({active:!coupon.active}).eq('id',coupon.id); if(error)throw error; await load(); }
    catch(error){setNotice(error.message);} finally{setBusy(false);}
  }
  async function deleteCoupon(coupon) {
    if (!window.confirm(`Permanently delete coupon ${coupon.code}? Existing orders will retain their coupon codes and discounts.`)) return;
    setBusy(true); setNotice('');
    try {
      const {data,error}=await getSupabase().from('coupons').delete().eq('id',coupon.id).select('id');
      if(error)throw error;
      if(!data?.length)throw new Error('This coupon was already removed or could not be deleted. Refresh and try again.');
      await load(); setNotice('Coupon deleted.');
    } catch(error){setNotice(error.message);} finally{setBusy(false);}
  }
  return <div className="admin-coupons">
    <div className="admin-row"><p>Create offers for checkout. Coupons apply after product discounts and exclude delivery fees.</p><button disabled={busy} onClick={()=>{setEditing({...empty});setNotice('');}}>Create coupon</button></div>
    {notice && <p role="status" className="admin-notice">{notice}</p>}
    <div className="admin-table-wrap"><table><thead><tr><th>Code</th><th>Discount</th><th>Minimum spend</th><th>Usage</th><th>Status</th><th>Actions</th></tr></thead><tbody>{coupons.map(coupon=><tr key={coupon.id}>
      <td><strong>{coupon.code}</strong>{coupon.expires_at && <p>Expires {new Date(coupon.expires_at).toLocaleString('en-GB',{timeZone:'Asia/Dhaka'})} Dhaka</p>}</td>
      <td>{coupon.discount_type==='percent'?`${coupon.discount_value}%`:`৳${Number(coupon.discount_value).toFixed(2)}`}{coupon.max_discount && <p>Cap ৳{coupon.max_discount}</p>}</td>
      <td>৳{Number(coupon.min_subtotal).toFixed(2)}</td><td>{coupon.used_count}{coupon.usage_limit ? ` / ${coupon.usage_limit}` : ' / unlimited'}</td>
      <td>{!coupon.active ? 'Disabled' : coupon.expires_at && new Date(coupon.expires_at)<=new Date() ? 'Expired' : coupon.starts_at && new Date(coupon.starts_at)>new Date() ? 'Scheduled' : coupon.usage_limit && coupon.used_count>=coupon.usage_limit ? 'Limit reached' : 'Active'}</td>
      <td><div className="admin-row"><button className="admin-secondary" disabled={busy} onClick={()=>{setNotice('');setEditing({...coupon,starts_at:localDate(coupon.starts_at),expires_at:localDate(coupon.expires_at),max_discount:coupon.max_discount ?? '',usage_limit:coupon.usage_limit ?? ''});}}>Edit</button><button className="admin-secondary" disabled={busy} onClick={()=>toggle(coupon)}>{coupon.active?'Disable':'Enable'}</button><button type="button" className="admin-danger admin-delete-action" disabled={busy} aria-label={`Delete coupon ${coupon.code}`} onClick={()=>deleteCoupon(coupon)}><FiTrash2 aria-hidden="true"/>Delete</button></div></td>
    </tr>)}</tbody></table>{!coupons.length && <div className="admin-empty">Create your first coupon to offer a checkout discount.</div>}</div>
    {editing && <div className="admin-modal" onClick={event=>{if(!busy && event.target===event.currentTarget)setEditing(null);}}><div className="admin-modal-card">
      <div className="admin-row"><h2>{editing.id?'Edit coupon':'Create coupon'}</h2><button className="admin-secondary" disabled={busy} onClick={()=>setEditing(null)}>Close</button></div>
      <form onSubmit={save}><fieldset disabled={busy} style={{border:0,padding:0}}>
        <label>Coupon code<input required maxLength={40} value={editing.code} placeholder="e.g. AUVORA10" onChange={event=>setEditing({...editing,code:event.target.value.toUpperCase()})}/></label>
        <div className="admin-form-grid"><label>Discount type<select value={editing.discount_type} onChange={event=>setEditing({...editing,discount_type:event.target.value})}><option value="percent">Percentage (%)</option><option value="fixed">Fixed amount (BDT)</option></select></label>
        <label>Discount value<input required type="number" min="0.01" max={editing.discount_type==='percent'?100:undefined} step="0.01" value={editing.discount_value} onChange={event=>setEditing({...editing,discount_value:event.target.value})}/></label>
        <label>Minimum merchandise subtotal (BDT)<input type="number" min="0" step="0.01" value={editing.min_subtotal} onChange={event=>setEditing({...editing,min_subtotal:event.target.value})}/></label>
        <label>Maximum discount (BDT, optional)<input type="number" min="0.01" step="0.01" value={editing.max_discount} onChange={event=>setEditing({...editing,max_discount:event.target.value})}/></label>
        <label>Starts at (Dhaka time, optional)<input type="datetime-local" value={editing.starts_at} onChange={event=>setEditing({...editing,starts_at:event.target.value})}/></label>
        <label>Expires at (Dhaka time, optional)<input type="datetime-local" value={editing.expires_at} onChange={event=>setEditing({...editing,expires_at:event.target.value})}/></label>
        <label>Total usage limit (optional)<input type="number" min="1" step="1" value={editing.usage_limit} onChange={event=>setEditing({...editing,usage_limit:event.target.value})}/></label></div>
        <label className="admin-check"><input type="checkbox" checked={editing.active} onChange={event=>setEditing({...editing,active:event.target.checked})}/>Enable coupon</label>
        {notice && <p role="alert">{notice}</p>}<button type="submit">{busy?'Saving…':'Save coupon'}</button>
      </fieldset></form>
    </div></div>}
  </div>;
}
