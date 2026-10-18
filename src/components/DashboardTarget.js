'use client';
import { useEffect, useState } from 'react';
import { FiEdit2, FiTarget, FiCheckCircle } from 'react-icons/fi';
import { getSupabase } from '../lib/supabase';
import { monthLabel } from '../lib/adminAnalytics';

const money = value => '৳' + Number(value || 0).toLocaleString('en-BD', { maximumFractionDigits: 2 });
export default function DashboardTarget({ month, revenue, refreshKey }) {
  const [record, setRecord] = useState(null);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState('');
  useEffect(() => {
    let alive = true;
    async function load() {
      setLoading(true); setNotice(''); setEditing(false); setRecord(null);
      try {
        const { data, error } = await getSupabase().from('dashboard_targets').select('*').eq('month', `${month}-01`).maybeSingle();
        if (error) throw error;
        if (alive) { setRecord(data); setDraft(data ? String(data.revenue_target) : ''); }
      } catch { if (alive) setNotice('Monthly targets are unavailable. Apply the dashboard targets SQL migration to enable them.'); }
      finally { if (alive) setLoading(false); }
    }
    load();
    return () => { alive = false; };
  }, [month, refreshKey]);
  const target = Number(record?.revenue_target || 0);
  const percent = target ? revenue / target * 100 : 0;
  async function save(event) {
    event.preventDefault(); setSaving(true); setNotice('');
    try {
      const value = Number(draft);
      if (!Number.isFinite(value) || value <= 0 || value > 999999999999.99) throw new Error('Enter a target greater than 0.');
      const { data, error } = await getSupabase().from('dashboard_targets').upsert({ month: `${month}-01`, revenue_target: value, updated_at: new Date().toISOString() }, { onConflict: 'month' }).select().single();
      if (error) throw error;
      setRecord(data); setEditing(false); setNotice('Monthly target saved.');
    } catch (error) { setNotice(error.message); }
    finally { setSaving(false); }
  }
  return <section className="dashboard-card dashboard-target">
    <header className="dashboard-card-heading"><div><h2>Monthly target</h2><p>{monthLabel(month)}</p></div><button type="button" className="dashboard-icon-button" aria-label="Edit monthly target" disabled={loading || saving} onClick={() => { setDraft(target ? String(target) : ''); setEditing(!editing); }}><FiEdit2 aria-hidden="true"/></button></header>
    {loading ? <p className="dashboard-placeholder" role="status">Loading target…</p> : <>
      <div className="dashboard-gauge" role="img" aria-label={target ? `${percent.toFixed(1)} percent of monthly target reached` : 'No monthly target set'}>
        <svg viewBox="0 0 240 145" aria-hidden="true"><path d="M 25 120 A 95 95 0 0 1 215 120" fill="none" stroke="#f0e8d8" strokeWidth="17" strokeLinecap="round"/><path d="M 25 120 A 95 95 0 0 1 215 120" fill="none" stroke="#956514" strokeWidth="17" strokeLinecap="round" pathLength="100" strokeDasharray={`${Math.min(100, percent)} 100`}/></svg>
        <div><strong>{target ? `${Math.round(percent)}%` : '—'}</strong><span>{target ? 'of monthly target' : 'Set a monthly goal'}</span></div>
      </div>
      <p className="dashboard-target-message">{!target ? 'Set a sales goal to track your progress.' : revenue >= target ? <><FiCheckCircle aria-hidden="true"/>Monthly target achieved.</> : `${money(Math.max(0, target - revenue))} remaining to reach your goal.`}</p>
      <div className="dashboard-target-values"><div><span>Target</span><strong>{target ? money(target) : 'Not set'}</strong></div><div><span>Revenue</span><strong>{money(revenue)}</strong></div></div>
      {(editing || !target) && <form className="dashboard-target-form" onSubmit={save}><label>Revenue target (৳)<input aria-label="Monthly revenue target" required type="number" min="0.01" max="999999999999.99" step="0.01" placeholder="e.g. 100000" value={draft} disabled={saving} onChange={event => setDraft(event.target.value)}/></label><button type="submit" disabled={saving}><FiTarget aria-hidden="true"/>{saving ? 'Saving…' : 'Save target'}</button></form>}
    </>}
    {notice && <p className="dashboard-target-notice" role="status">{notice}</p>}
  </section>;
}
