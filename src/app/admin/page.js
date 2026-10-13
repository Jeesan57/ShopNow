'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiGrid, FiPlus, FiSearch, FiTrash2, FiPackage, FiArrowUpRight } from 'react-icons/fi';
import { getSupabase } from '../../lib/supabase';
import './admin.css';
import BrandLogo from '../../components/BrandLogo';
import AdminProductSizes from '../../components/AdminProductSizes';
import AdminProductImages from '../../components/AdminProductImages';
import AdminProductColors from '../../components/AdminProductColors';
import CostNotepad from '../../components/CostNotepad';
const emptyProduct = { name: '', description: '', price: '', category: '', image: '', sizes: ['S', 'M', 'L', 'XL'], thumbnails: [], colors: [], stock: 0, active: false, featured: false };
const money = n => '৳' + Number(n).toFixed(2);
export default function Admin() {
  const [session, setSession] = useState(null), [ready, setReady] = useState(false), [allowed, setAllowed] = useState(false);
  const [tab, setTab] = useState('Overview'), [notice, setNotice] = useState(''), [busy, setBusy] = useState(false);
  const [products, setProducts] = useState([]), [orders, setOrders] = useState([]), [messages, setMessages] = useState([]), [categories, setCategories] = useState([]);
  const [search, setSearch] = useState(''), [editing, setEditing] = useState(null), [categoryName, setCategoryName] = useState('');
  async function load() {
    const db = getSupabase();
    const results = await Promise.all([db.from('products').select('*').order('created_at', { ascending: false }), db.from('orders').select('*,order_items(*)').order('created_at', { ascending: false }), db.from('messages').select('*').order('created_at', { ascending: false }), db.from('categories').select('*').order('name')]);
    const error = results.find(r => r.error)?.error;
    if (error) throw error;
    setProducts(results[0].data); setOrders(results[1].data); setMessages(results[2].data); setCategories(results[3].data);
  }
  useEffect(() => {
    let alive = true;
    let subscription;
    try {
      const db = getSupabase();
      async function verify(nextSession) {
        if (!alive) return;
        setSession(nextSession); setReady(false); setAllowed(false);
        try {
          if (nextSession) {
            const { data, error } = await db.from('admin_users').select('user_id').eq('user_id', nextSession.user.id).maybeSingle();
            if (error) throw error;
            if (alive) setAllowed(Boolean(data));
            if (data) await load();
          }
        } catch (e) { if (alive) setNotice(e.message); }
        finally { if (alive) setReady(true); }
      }
      db.auth.getSession().then(({ data }) => verify(data.session));
      subscription = db.auth.onAuthStateChange((_event, nextSession) => { setTimeout(() => verify(nextSession), 0); }).data.subscription;
    } catch (e) { setNotice(e.message); setReady(true); }
    return () => { alive = false; subscription?.unsubscribe(); };
  }, []);
  async function action(fn, success) {
    setBusy(true); setNotice('');
    try { await fn(); await load(); setNotice(success); }
    catch (e) { setNotice(e.message); }
    finally { setBusy(false); }
  }
  async function login(e) {
    e.preventDefault(); setBusy(true); setNotice('');
    const form = new FormData(e.currentTarget);
    try { const { error } = await getSupabase().auth.signInWithPassword({ email: form.get('email'), password: form.get('password') }); if (error) throw error; }
    catch (e) { setNotice(e.message); }
    finally { setBusy(false); }
  }
  async function saveProduct(e) {
    e.preventDefault();
    await action(async () => {
      const payload = { ...editing, price: Number(editing.price), stock: Number(editing.stock), colors: [...new Set(editing.colors || [])], sizes: [...new Set(editing.sizes || [])], thumbnails: [...new Set(editing.thumbnails || [])].filter(url => url && url !== editing.image) };
      delete payload.created_at; delete payload.id;
      if (!payload.image) throw new Error('Upload at least one product image.');
      if (!payload.sizes.length) throw new Error('Select at least one size.');
      for (const url of [payload.image, ...payload.thumbnails]) {
        const parsed = new URL(url);
        if (parsed.protocol !== 'https:' || !['images.unsplash.com', 'stvokejqndakitzpracv.supabase.co'].includes(parsed.hostname)) throw new Error('Use an uploaded Supabase image or an Unsplash HTTPS URL.');
      }
      const query = editing.id ? getSupabase().from('products').update(payload).eq('id', editing.id) : getSupabase().from('products').insert(payload);
      const { error } = await query; if (error) throw error; setEditing(null);
    }, editing.active ? 'Product published. It is now visible on the storefront.' : 'Product saved as a draft. Enable Publish on storefront to make it visible to customers.');
  }
  async function upload(files) {
    if (!files.length) return;
    setBusy(true); setNotice('');
    const uploaded = [];
    try {
      for (const file of files) {
        if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 5242880) throw new Error(`${file.name}: choose a JPEG, PNG or WebP image up to 5 MB.`);
      }
      const db = getSupabase();
      for (const file of files) {
        const path = `${crypto.randomUUID()}.${file.type.split('/')[1]}`;
        const { error } = await db.storage.from('product-images').upload(path, file);
        if (error) throw error;
        uploaded.push(db.storage.from('product-images').getPublicUrl(path).data.publicUrl);
      }
      setNotice(`${uploaded.length} ${uploaded.length === 1 ? 'image uploaded' : 'images uploaded'}. Save the product to apply your changes.`);
    } catch (e) {
      setNotice(`${uploaded.length ? `${uploaded.length} of ${files.length} images uploaded. ` : ''}${e.message}`);
    } finally {
      if (uploaded.length) setEditing(current => {
        if (!current) return current;
        const images = [...new Set([current.image, ...(current.thumbnails || []), ...uploaded].filter(Boolean))];
        return { ...current, image: images[0], thumbnails: images.slice(1) };
      });
      setBusy(false);
    }
  }
  if (!ready) return <div className="admin-login">Checking access…</div>;
  if (!session || !allowed) return <div className="admin-login"><div className="admin-login-card"><Link href="/"><BrandLogo /></Link><p className="admin-eyebrow">STORE MANAGEMENT</p><h1>Your store, in control.</h1><p>Sign in with your approved administrator account.</p><p role="status">{notice}</p>{session ? <><p>This account does not have administrator access. Add its user ID to the admin_users table through Supabase.</p><button onClick={() => getSupabase().auth.signOut()}>Sign out</button></> : <form onSubmit={login}><label>Email<input name="email" type="email" autoComplete="username" required /></label><label>Password<input name="password" type="password" autoComplete="current-password" required /></label><button disabled={busy}>{busy ? 'Signing in…' : 'Sign in →'}</button></form>}</div></div>;
  const visible = products.filter(p => `${p.name} ${p.category}`.toLowerCase().includes(search.toLowerCase()));
  const customers = Object.values(orders.reduce((all, o) => { const c = all[o.phone] || { name: o.customer_name, email: o.email, phone: o.phone, count: 0, spent: 0 }; c.count++; if(o.status !== 'cancelled') c.spent += Number(o.total); all[o.phone] = c; return all; }, {}));
  const revenue = orders.filter(o => o.status === 'delivered').reduce((sum, o) => sum + Number(o.total), 0);
  const update = (table, id, patch) => action(async () => { const { error } = await getSupabase().from(table).update(patch).eq('id', id); if (error) throw error; }, 'Updated.');
  const orderList = list => <div className="admin-stack">{list.length === 0 && <div className="admin-empty">No orders yet. New checkout orders will appear here.</div>}{list.map(o => <article className="admin-card" key={o.id}><div className="admin-row"><div><strong>{o.customer_name}</strong><p>{new Date(o.created_at).toLocaleString()} · #{o.id.slice(0,8)}</p></div><strong>{money(o.total)}</strong><select aria-label={`Status for order ${o.id}`} value={o.status} disabled={busy} onChange={e => update('orders',o.id,{status:e.target.value})}>{['pending','confirmed','shipped','delivered','cancelled'].map(s => <option key={s}>{s}</option>)}</select></div><details><summary>Order details</summary><p>{o.email} · {o.phone}</p><p>{o.address}</p>{o.district && <p>{o.area}, {o.district} · {o.delivery_zone === 'inside_dhaka' ? 'Inside Dhaka city' : 'Outside Dhaka city'}</p>}{o.delivery_notes && <p>Delivery notes: {o.delivery_notes}</p>}<p>Subtotal: {money(o.subtotal ?? o.total)} · Delivery: {money(o.delivery_charge || 0)}</p><p>Cash on delivery</p>{o.order_items.map(i => <p key={i.id}>{i.name} · {i.size}{i.color ? ` · ${i.color}` : ''} × {i.quantity} — {money(i.price * i.quantity)}</p>)}{o.status === 'cancelled' && <p>Restock returned items manually after confirming the return.</p>}</details></article>)}</div>;
  return <div className="admin-shell"><aside className="admin-sidebar"><Link className="admin-brand" href="/"><BrandLogo className="w-44 h-11" /><span>ADMINISTRATION</span></Link><nav>{['Overview','Products','Categories','Orders','Customers','Messages','Costs Notepad'].map(t => <button className={tab === t ? 'selected' : ''} key={t} onClick={() => {setTab(t);setSearch('');}}>{t}{t === 'Messages' && <span>{messages.filter(m=>!m.read).length}</span>}</button>)}</nav><div className="admin-sidebar-bottom"><small>{session.user.email}</small><Link href="/" target="_blank">View storefront ↗</Link><button onClick={() => getSupabase().auth.signOut()}>Sign out</button></div></aside><section className="admin-main"><header className="admin-row"><div><p className="admin-eyebrow">YOUR STORE / {tab.toUpperCase()}</p><h1>{tab}</h1></div><button className="admin-secondary" disabled={busy} onClick={() => action(async()=>{},'Data refreshed.')}>Refresh</button></header>{notice && <p className="admin-notice" role="status">{notice}</p>}
  {tab === 'Overview' && <><div className="admin-stats">{[['Delivered revenue',money(revenue)],['Orders',orders.length],['Active products',products.filter(p=>p.active).length],['Low stock',products.filter(p=>p.stock<5).length]].map(([label,value])=><div className="admin-card" key={label}><p>{label}</p><h2>{value}</h2></div>)}</div><h2>Latest orders</h2>{orderList(orders.slice(0,5))}<h2>Inventory attention</h2><div className="admin-card">{products.filter(p=>p.stock<5).map(p=><p key={p.id}>{p.name} — {p.stock} remaining</p>)}{products.every(p=>p.stock>=5)&&<p>All products have sufficient stock.</p>}</div></>}
  {tab === 'Products' && <><div className="admin-row"><input aria-label="Search products" placeholder="Search products or categories" value={search} onChange={e=>setSearch(e.target.value)}/><button onClick={()=>setEditing({...emptyProduct,category:categories[0]?.name||''})}>+ Add product</button></div><div className="admin-table-wrap"><table><thead><tr><th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Visibility</th><th>Action</th></tr></thead><tbody>{visible.map(p=><tr key={p.id}><td><strong>{p.name}</strong></td><td>{p.category}</td><td>{money(p.price)}</td><td>{p.stock}</td><td><span className={`admin-badge ${p.active?'live':''}`}>{p.active?'Published':'Draft'}</span></td><td><button className="admin-secondary" onClick={()=>setEditing({...p,sizes:p.sizes || [],thumbnails:[...new Set(p.thumbnails || [])].filter(url=>url !== p.image),colors:p.colors || []})}>Edit</button></td></tr>)}</tbody></table>{!visible.length&&<div className="admin-empty">Add your first product to start selling.</div>}</div></>}
  {tab === 'Categories' && <div className="category-manager">
    <div className="category-intro"><p>Organize your catalog into collections customers can explore.</p><span>{categories.length} {categories.length === 1 ? 'category' : 'categories'}</span></div>
    <section className="category-create" aria-labelledby="new-category-title"><div className="category-create-heading"><span className="category-icon"><FiPlus aria-hidden="true" /></span><div><h2 id="new-category-title">Create a category</h2><p>Give your next collection a simple, recognizable name.</p></div></div>
      <form onSubmit={e=>{e.preventDefault();action(async()=>{const name=categoryName.trim();if(!name)throw new Error('Enter a category name.');if(categories.some(c=>c.name.toLowerCase()===name.toLowerCase()))throw new Error('A category with this name already exists.');const {error}=await getSupabase().from('categories').insert({name});if(error)throw error;setCategoryName('');},'Category created.');}}><label htmlFor="new-category-name">Category name<input id="new-category-name" placeholder="e.g. New arrivals, Footwear, Essentials" required maxLength={80} value={categoryName} onChange={e=>setCategoryName(e.target.value)}/></label><button disabled={busy || !categoryName.trim()}><FiPlus aria-hidden="true" />Add category</button></form>
    </section>
    <div className="category-toolbar"><div><h2>Your categories</h2><p>Manage collections and their products.</p></div><div className="category-search"><FiSearch aria-hidden="true"/><input aria-label="Search categories" placeholder="Search categories…" value={search} onChange={e=>setSearch(e.target.value)}/></div></div>
    <div className="category-grid">{categories.filter(c=>c.name.toLowerCase().includes(search.toLowerCase())).map(c=>{const items=products.filter(p=>p.category===c.name);const published=items.filter(p=>p.active).length;return <article className="category-tile" key={c.name}><div className="category-tile-top"><span className="category-icon"><FiGrid aria-hidden="true"/></span><span className={`category-state ${items.length ? 'has-products' : ''}`}>{items.length ? 'In use' : 'Empty collection'}</span></div><h3>{c.name}</h3><div className="category-count"><FiPackage aria-hidden="true"/><strong>{items.length}</strong><span>{items.length===1?'product':'products'}</span></div><p className="category-published">{published} published · {items.length-published} draft</p><div className="category-tile-actions"><button className="category-view" onClick={()=>{setTab('Products');setSearch(c.name);}}>View products<FiArrowUpRight aria-hidden="true"/></button><button className="category-delete" aria-label={`Delete ${c.name}`} title={items.length?'Move or delete this category’s products before deleting it.':`Delete ${c.name}`} disabled={busy||items.length>0} onClick={()=>{if(window.confirm(`Delete ${c.name}?`))action(async()=>{const {error}=await getSupabase().from('categories').delete().eq('name',c.name);if(error)throw error;},'Category deleted.');}}><FiTrash2 aria-hidden="true"/></button></div>{items.length>0&&<p className="category-delete-hint">Remove its products before deleting this category.</p>}</article>;})}</div>
    {!categories.filter(c=>c.name.toLowerCase().includes(search.toLowerCase())).length&&<div className="category-empty"><FiGrid aria-hidden="true"/><h3>{search?'No matching categories':'Your first collection starts here'}</h3><p>{search?'Try a different name or clear your search.':'Create a category above, then add products to it.'}</p>{search&&<button className="admin-secondary" onClick={()=>setSearch('')}>Clear search</button>}</div>}
  </div>}
  {tab === 'Orders' && <><input placeholder="Search orders by customer, email or order ID" aria-label="Search orders" value={search} onChange={e=>setSearch(e.target.value)}/>{orderList(orders.filter(o=>`${o.customer_name} ${o.email} ${o.id}`.toLowerCase().includes(search.toLowerCase())))}</>}
  {tab === 'Customers' && <div className="admin-table-wrap"><table><thead><tr><th>Customer</th><th>Email</th><th>Phone</th><th>Orders</th><th>Ordered value</th></tr></thead><tbody>{customers.map(c=><tr key={c.phone}><td>{c.name}</td><td>{c.email}</td><td>{c.phone}</td><td>{c.count}</td><td>{money(c.spent)}</td></tr>)}</tbody></table>{!customers.length&&<div className="admin-empty">Customers appear after their first order.</div>}</div>}
  {tab === 'Costs Notepad' && <CostNotepad />}
  {tab === 'Messages' && <div className="admin-stack">{!messages.length&&<div className="admin-empty">Your inbox is clear.</div>}{messages.map(m=><article className="admin-card" key={m.id}><div className="admin-row"><h2>{m.subject}</h2><span className="admin-badge">{m.read?'Read':'New'}</span></div><p>{m.name} · <a href={`mailto:${m.email}`}>{m.email}</a> · {new Date(m.created_at).toLocaleString()}</p><p style={{whiteSpace:'pre-wrap'}}>{m.message}</p><button className="admin-secondary" disabled={busy} onClick={()=>update('messages',m.id,{read:!m.read})}>Mark {m.read?'unread':'read'}</button></article>)}</div>}
  </section>{editing&&<div className="admin-modal" onClick={e => { if (!busy && e.target === e.currentTarget) setEditing(null); }}><div className="admin-modal-card"><div className="admin-row"><h2>{editing.id?'Edit product':'New product'}</h2><button className="admin-secondary" disabled={busy} onClick={()=>setEditing(null)}>Close</button></div><form onSubmit={saveProduct}><div className="admin-form-grid">{[['name','Product name','text'],['price','Price (BDT ৳)','number'],['stock','Stock quantity','number']].map(([key,label,type])=><label key={key}>{label}<input required type={type} min="0" step={key==='price'?'0.01':'1'} maxLength={200} value={editing[key]} onChange={e=>setEditing({...editing,[key]:e.target.value})}/></label>)}<label>Category<select required value={editing.category} onChange={e=>setEditing({...editing,category:e.target.value})}><option value="">Select category</option>{categories.map(c=><option key={c.name}>{c.name}</option>)}</select></label></div><label>Description<textarea value={editing.description} onChange={e=>setEditing({...editing,description:e.target.value})}/></label><AdminProductSizes sizes={editing.sizes || []} disabled={busy} onChange={sizes=>setEditing({...editing,sizes})}/><AdminProductColors colors={editing.colors || []} onChange={colors=>setEditing({...editing,colors})}/><AdminProductImages images={[...new Set([editing.image,...(editing.thumbnails || [])].filter(Boolean))]} busy={busy} onUpload={upload} onChange={images=>setEditing(current=>({...current,image:images[0] || '',thumbnails:images.slice(1)}))}/><label className="admin-check"><input type="checkbox" checked={editing.active} onChange={e=>setEditing({...editing,active:e.target.checked})}/>Publish on storefront</label><label className="admin-check"><input type="checkbox" checked={editing.featured} onChange={e=>setEditing({...editing,featured:e.target.checked})}/>Feature on homepage (published products only)</label><p role="status">{notice}</p><div className="admin-row"><button disabled={busy}>{busy?'Saving…':'Save product'}</button>{editing.id&&<button type="button" className="admin-danger" disabled={busy} onClick={()=>{if(window.confirm('Delete this product permanently? Existing order history is retained.'))action(async()=>{const {error}=await getSupabase().from('products').delete().eq('id',editing.id);if(error)throw error;setEditing(null);},'Product deleted.');}}>Delete product</button>}</div></form></div></div>}</div>;
}
