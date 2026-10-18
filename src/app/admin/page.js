'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FiGrid, FiPlus, FiSearch, FiTrash2, FiPackage, FiArrowUpRight } from 'react-icons/fi';
import { readAllOrders } from '../../lib/adminData';
import { productPrice } from '../../lib/pricing';
import { getSupabase } from '../../lib/supabase';
import './admin.css';
import BrandLogo from '../../components/BrandLogo';
import AdminDashboard from '../../components/AdminDashboard';
import AdminCoupons from '../../components/AdminCoupons';
import AdminComboSizing from '../../components/AdminComboSizing';
import { comboItemColors, comboColorCombinationCount, comboItemSizes, comboCombinationCount, getComboItems, createClothingCombo } from '../../lib/comboSizing';
import { stockTotal } from '../../lib/sizeStock';
import AdminProductSizes from '../../components/AdminProductSizes';
import AdminProductImages from '../../components/AdminProductImages';
import AdminCategoryImage from '../../components/AdminCategoryImage';
import AdminProductColors from '../../components/AdminProductColors';
import InventoryOverview from '../../components/InventoryOverview';
import StockNotepad from '../../components/StockNotepad';
import CostNotepad from '../../components/CostNotepad';
const emptyProduct = { name: '', description: '', price: '', discount_percent: 0, is_combo: false, combo_items: [], sweater_sizes: [], denim_sizes: [], size_charts: {}, category: '', image: '', sizes: ['S', 'M', 'L', 'XL'], thumbnails: [], colors: [], stock: 0, size_stock: {}, combo_stock: null, active: false, featured: false };
const money = n => '৳' + Number(n).toFixed(2);
export default function Admin() {
  const workspace = useRef(null);
  const [stockNotepadOpened, setStockNotepadOpened] = useState(false);
  const [session, setSession] = useState(null), [ready, setReady] = useState(false), [allowed, setAllowed] = useState(false);
  const [tab, setTab] = useState('Overview'), [notice, setNotice] = useState(''), [busy, setBusy] = useState(false);
  useEffect(() => { if(workspace.current) workspace.current.scrollTop = 0; }, [tab]);
  const [products, setProducts] = useState([]), [orders, setOrders] = useState([]), [messages, setMessages] = useState([]), [categories, setCategories] = useState([]);
  const [search, setSearch] = useState(''), [editing, setEditing] = useState(null), [categoryName, setCategoryName] = useState(''), [categoryImage, setCategoryImage] = useState('');
  const load = useCallback(async () => {
    const db = getSupabase();
    const results = await Promise.all([db.from('products').select('*').order('created_at', { ascending: false }), readAllOrders(db), db.from('messages').select('*').order('created_at', { ascending: false }), db.from('categories').select('*').order('name')]);
    const error = results.find(r => r.error)?.error;
    if (error) throw error;
    setProducts(results[0].data); setOrders(results[1].data); setMessages(results[2].data); setCategories(results[3].data);
  }, []);
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
  }, [load]);
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
      if (editing.is_combo && comboCombinationCount(getComboItems(editing)) > 1024) throw new Error('This combo has more than 1,024 size combinations. Reduce the sizes or split it into separate combos.');
      if (editing.is_combo && comboColorCombinationCount(getComboItems(editing)) > 1024) throw new Error('Select fewer colors to keep this combo within 1,024 color combinations.');
      const payload = { ...editing, price: Number(editing.price), discount_percent: Number(editing.discount_percent || 0), stock: Number(editing.stock), colors: editing.is_combo ? comboItemColors(getComboItems(editing).map(item => ({...item,name:item.name.trim()}))) : [...new Set(editing.colors || [])], combo_items: getComboItems(editing).map(item => ({...item,name:item.name.trim(),colors:[...new Set(item.colors || [])]})), sizes: editing.is_combo ? comboItemSizes(getComboItems(editing).map(item => ({...item,name:item.name.trim()}))) : [...new Set(editing.sizes || [])], thumbnails: [...new Set(editing.thumbnails || [])].filter(url => url && url !== editing.image) };
      delete payload.created_at; delete payload.id;
      if (!Number.isFinite(payload.discount_percent) || payload.discount_percent < 0 || payload.discount_percent > 100) throw new Error('Enter a discount between 0 and 100%.');
      if (!payload.image) throw new Error('Upload at least one product image.');
      if (payload.is_combo && (payload.combo_items.length < 2 || payload.combo_items.some(item => !item.name.trim() || !item.sizes.length))) throw new Error('Add at least two combo items, each with a name and available sizes.');
      if (payload.is_combo && (new Set(payload.combo_items.map(item => item.name.toLowerCase())).size !== payload.combo_items.length || payload.combo_items.some(item => /[·:]/.test(item.name) || item.sizes.some(size => /[·:]/.test(size))))) throw new Error('Use distinct item names without colons or middle dots in names and sizes.');
      if (editing.is_combo && editing.combo_stock != null) {
        payload.size_stock = null;
        payload.combo_stock = Object.fromEntries(payload.combo_items.map(item => [item.id,Object.fromEntries(item.sizes.map(size => [size,Number(editing.combo_stock[item.id]?.[size] || 0)]))]));
        if (Object.values(payload.combo_stock).some(quantities => Object.values(quantities).some(quantity => !Number.isInteger(quantity) || quantity < 0 || quantity > 1000000))) throw new Error('Enter whole stock quantities from 0 to 1,000,000 for each piece size.');
        payload.stock = Math.min(...payload.combo_items.map(item => stockTotal(item.sizes,payload.combo_stock[item.id])));
      } else if (editing.size_stock != null) {
        payload.size_stock = Object.fromEntries(payload.sizes.map(size => [size, Number(editing.size_stock[size] || 0)]));
        if (Object.values(payload.size_stock).some(quantity => !Number.isInteger(quantity) || quantity < 0 || quantity > 1000000)) throw new Error('Enter whole quantities from 0 to 1,000,000 for each size.');
        payload.stock = stockTotal(payload.sizes, payload.size_stock);
      }
      if (!payload.sizes.length) throw new Error('Select at least one size.');
      for (const url of [payload.image, ...payload.thumbnails]) {
        const parsed = new URL(url);
        if (parsed.protocol !== 'https:' || !['images.unsplash.com', 'stvokejqndakitzpracv.supabase.co'].includes(parsed.hostname)) throw new Error('Use an uploaded Supabase image or an Unsplash HTTPS URL.');
      }
      const query = editing.id ? getSupabase().from('products').update(payload).eq('id', editing.id) : getSupabase().from('products').insert(payload);
      const { error } = await query; if (error) throw error; setEditing(null);
    }, editing.active ? 'Product published. It is now visible on the storefront.' : 'Product saved as a draft. Enable Publish on storefront to make it visible to customers.');
  }
  async function uploadCategoryImage(file) {
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 5242880) throw new Error('Choose a JPEG, PNG or WebP image up to 5 MB.');
    const bucket = getSupabase().storage.from('product-images');
    const path = `categories/${crypto.randomUUID()}.${file.type.split('/')[1]}`;
    const { error } = await bucket.upload(path, file);
    if (error) throw error;
    return bucket.getPublicUrl(path).data.publicUrl;
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
  const customers = Object.values(orders.filter(order => !order.customer_hidden).reduce((all, o) => { const c = all[o.phone] || { name: o.customer_name, email: o.email, phone: o.phone, count: 0, spent: 0 }; c.count++; if(o.status !== 'cancelled') c.spent += Number(o.total); all[o.phone] = c; return all; }, {}));
  const update = (table, id, patch) => action(async () => { const { error } = await getSupabase().from(table).update(patch).eq('id', id); if (error) throw error; }, 'Updated.');
  async function deleteProduct(product) {
    if (!window.confirm(`Permanently delete ${product.name}? Existing order history will be retained.`)) return;
    await action(async () => {
      const {data,error}=await getSupabase().from('products').delete().eq('id',product.id).select('id');
      if(error)throw error;
      if(!data?.length)throw new Error('This product was already removed or could not be deleted. Refresh and try again.');
    }, 'Product deleted.');
  }
  async function deleteOrder(order) {
    if (!window.confirm(`Permanently delete order #${order.id.slice(0,8)} for ${order.customer_name}, including its line items? Stock and coupon usage will not be restored.`)) return;
    await action(async () => {
      const {data,error}=await getSupabase().from('orders').delete().eq('id',order.id).select('id');
      if(error)throw error;
      if(!data?.length)throw new Error('This order was already removed or could not be deleted. Refresh and try again.');
    }, 'Order deleted.');
  }
  async function deleteCustomer(customer) {
    if (!window.confirm(`Remove ${customer.name} (${customer.phone}) from the Customers list? Their order history will be kept.`)) return;
    await action(async () => {
      const {data,error}=await getSupabase().from('orders').update({customer_hidden:true}).eq('phone',customer.phone).select('id');
      if(error)throw error;
      if(!data?.length)throw new Error('This customer was already removed or could not be updated. Refresh and try again.');
    }, 'Customer removed from the list. Order history retained.');
  }
  const orderList = list => <div className="admin-stack">{list.length === 0 && <div className="admin-empty">No orders yet. New checkout orders will appear here.</div>}{list.map(o => <article className="admin-card" key={o.id}><div className="admin-row"><div><strong>{o.customer_name}</strong><p>{new Date(o.created_at).toLocaleString()} · #{o.id.slice(0,8)}</p></div><strong>{money(o.total)}</strong><select aria-label={`Status for order ${o.id}`} value={o.status} disabled={busy} onChange={e => update('orders',o.id,{status:e.target.value})}>{['pending','confirmed','shipped','delivered','cancelled'].map(s => <option key={s}>{s}</option>)}</select><button type="button" className="admin-danger admin-delete-action" disabled={busy} aria-label={`Delete order ${o.id}`} onClick={()=>deleteOrder(o)}><FiTrash2 aria-hidden="true"/>Delete</button></div><details><summary>Order details</summary><p>{o.email} · {o.phone}</p><p>{o.address}</p>{o.district && <p>{o.area}, {o.district} · {o.delivery_zone === 'inside_dhaka' ? 'Inside Dhaka city' : 'Outside Dhaka city'}</p>}{o.delivery_notes && <p>Delivery notes: {o.delivery_notes}</p>}<p>Subtotal: {money(o.subtotal ?? o.total)} · Delivery: {money(o.delivery_charge || 0)}</p>{Number(o.discount_amount)>0 && <p>Coupon {o.coupon_code}: −{money(o.discount_amount)}</p>}<p>Cash on delivery</p>{o.order_items.map(i => <p key={i.id}>{i.name} · {i.size}{i.color ? ` · ${i.color}` : ''} × {i.quantity} — {money(i.price * i.quantity)}</p>)}{o.status === 'cancelled' && <p>Restock returned items manually after confirming the return.</p>}</details></article>)}</div>;
  return <div className="admin-shell"><aside className="admin-sidebar"><Link className="admin-brand" href="/"><BrandLogo className="w-44 h-11" /><span>ADMINISTRATION</span></Link><nav>{['Overview','Products','Stocks','Categories','Orders','Customers','Coupons','Messages','Stock Notepad','Costs Notepad'].map(t => <button className={tab === t ? 'selected' : ''} key={t} onClick={() => {if(t==='Stock Notepad')setStockNotepadOpened(true);setTab(t);setSearch('');}}>{t}{t === 'Orders' && <span className="admin-order-count" aria-label={`${orders.length} total orders`}>{orders.length.toLocaleString()}</span>}{t === 'Messages' && <span>{messages.filter(m=>!m.read).length}</span>}</button>)}</nav><div className="admin-sidebar-bottom"><small>{session.user.email}</small><Link href="/" target="_blank">View storefront ↗</Link><button onClick={() => getSupabase().auth.signOut()}>Sign out</button></div></aside><section ref={workspace} className="admin-main"><div className="admin-content"><header className="admin-row"><div><p className="admin-eyebrow">YOUR STORE / {tab.toUpperCase()}</p><h1>{tab}{tab === 'Orders' && <span className="admin-heading-count" aria-label={`${orders.length} total orders`}>{orders.length.toLocaleString()}</span>}</h1></div>{tab !== 'Stocks' && <button className="admin-secondary" disabled={busy} onClick={() => action(async()=>{},'Data refreshed.')}>Refresh</button>}</header>{notice && <p className="admin-notice" role="status">{notice}</p>}
  {tab === 'Overview' && <AdminDashboard orders={orders} products={products} onNavigate={tab=>{setTab(tab);setSearch('');}}/>}
  {tab === 'Products' && <><div className="admin-row admin-products-toolbar"><div className="admin-products-search"><FiSearch aria-hidden="true"/><input aria-label="Search products" placeholder="Search products or categories" value={search} onChange={e=>setSearch(e.target.value)}/></div><button type="button" className="admin-add-product" onClick={()=>setEditing({...emptyProduct,category:categories[0]?.name||''})}><FiPlus aria-hidden="true"/><span>Add product</span></button></div><div className="admin-table-wrap"><table><thead><tr><th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Visibility</th><th className="admin-actions-column">Action</th></tr></thead><tbody>{visible.map(p=><tr key={p.id}><td><strong>{p.name}</strong></td><td>{p.category}</td><td>{Number(p.discount_percent)>0 ? <><strong>{money(productPrice(p))}</strong><br/><del>{money(p.price)}</del><span> · {p.discount_percent}% off</span></> : money(p.price)}</td><td>{p.stock}</td><td><span className={`admin-badge ${p.active?'live':''}`}>{p.active?'Published':'Draft'}</span></td><td className="admin-actions-column"><div className="admin-table-actions"><button type="button" className="admin-secondary" disabled={busy} onClick={()=>setEditing({...p,sizes:p.sizes || [],thumbnails:[...new Set(p.thumbnails || [])].filter(url=>url !== p.image),colors:p.colors || []})}>Edit</button><button type="button" className="admin-danger admin-delete-action" disabled={busy} aria-label={`Delete product ${p.name}`} onClick={()=>deleteProduct(p)}><FiTrash2 aria-hidden="true"/>Delete</button></div></td></tr>)}</tbody></table>{!visible.length&&<div className="admin-empty">Add your first product to start selling.</div>}</div></>}
  {tab === 'Categories' && <div className="category-manager">
    <div className="category-intro"><p>Organize your catalog into collections customers can explore.</p><span>{categories.length} {categories.length === 1 ? 'category' : 'categories'}</span></div>
    <section className="category-create" aria-labelledby="new-category-title"><div className="category-create-heading"><span className="category-icon"><FiPlus aria-hidden="true" /></span><div><h2 id="new-category-title">Create a category</h2><p>Add a name and cover image for your collection.</p></div></div>
      <form onSubmit={e=>{e.preventDefault();action(async()=>{const name=categoryName.trim();if(!name)throw new Error('Enter a category name.');if(categories.some(c=>c.name.toLowerCase()===name.toLowerCase()))throw new Error('A category with this name already exists.');const {error}=await getSupabase().from('categories').insert({name,image:categoryImage});if(error)throw error;setCategoryName('');setCategoryImage('');},'Category created.');}}><AdminCategoryImage image={categoryImage} busy={busy} label="New category image" onUpload={file=>action(async()=>setCategoryImage(await uploadCategoryImage(file)),'Image ready. Add the category to save it.')}/><label htmlFor="new-category-name">Category name<input id="new-category-name" placeholder="e.g. New arrivals, Footwear, Essentials" required maxLength={80} value={categoryName} onChange={e=>setCategoryName(e.target.value)}/></label><button disabled={busy || !categoryName.trim() || !categoryImage}><FiPlus aria-hidden="true" />Add category</button></form>
    </section>
    <div className="category-toolbar"><div><h2>Your categories</h2><p>Manage collections and their products.</p></div><div className="category-search"><FiSearch aria-hidden="true"/><input aria-label="Search categories" placeholder="Search categories…" value={search} onChange={e=>setSearch(e.target.value)}/></div></div>
    <div className="category-grid">{categories.filter(c=>c.name.toLowerCase().includes(search.toLowerCase())).map(c=>{const items=products.filter(p=>p.category===c.name);const published=items.filter(p=>p.active).length;return <article className="category-tile" key={c.name}><AdminCategoryImage image={c.image} busy={busy} label={`${c.name} image`} onUpload={file=>action(async()=>{const image=await uploadCategoryImage(file);const {error}=await getSupabase().from('categories').update({image}).eq('name',c.name);if(error)throw error;},'Category image updated.')}/><div className="category-tile-top"><span className="category-icon"><FiGrid aria-hidden="true"/></span><span className={`category-state ${items.length ? 'has-products' : ''}`}>{items.length ? 'In use' : 'Empty collection'}</span></div><h3>{c.name}</h3><div className="category-count"><FiPackage aria-hidden="true"/><strong>{items.length}</strong><span>{items.length===1?'product':'products'}</span></div><p className="category-published">{published} published · {items.length-published} draft</p><div className="category-tile-actions"><button className="category-view" onClick={()=>{setTab('Products');setSearch(c.name);}}>View products<FiArrowUpRight aria-hidden="true"/></button><button className="category-delete" aria-label={`Delete ${c.name}`} title={items.length?'Move or delete this category’s products before deleting it.':`Delete ${c.name}`} disabled={busy||items.length>0} onClick={()=>{if(window.confirm(`Delete ${c.name}?`))action(async()=>{const {error}=await getSupabase().from('categories').delete().eq('name',c.name);if(error)throw error;},'Category deleted.');}}><FiTrash2 aria-hidden="true"/></button></div>{items.length>0&&<p className="category-delete-hint">Remove its products before deleting this category.</p>}</article>;})}</div>
    {!categories.filter(c=>c.name.toLowerCase().includes(search.toLowerCase())).length&&<div className="category-empty"><FiGrid aria-hidden="true"/><h3>{search?'No matching categories':'Your first collection starts here'}</h3><p>{search?'Try a different name or clear your search.':'Create a category above, then add products to it.'}</p>{search&&<button className="admin-secondary" onClick={()=>setSearch('')}>Clear search</button>}</div>}
  </div>}
  {tab === 'Orders' && <><input placeholder="Search orders by customer, email or order ID" aria-label="Search orders" value={search} onChange={e=>setSearch(e.target.value)}/>{orderList(orders.filter(o=>`${o.customer_name} ${o.email} ${o.id}`.toLowerCase().includes(search.toLowerCase())))}</>}
  {tab === 'Customers' && <div className="admin-table-wrap"><table><thead><tr><th>Customer</th><th>Email</th><th>Phone</th><th>Orders</th><th>Ordered value</th><th>Actions</th></tr></thead><tbody>{customers.map(c=><tr key={c.phone}><td>{c.name}</td><td>{c.email}</td><td>{c.phone}</td><td>{c.count}</td><td>{money(c.spent)}</td><td><button type="button" className="admin-danger admin-delete-action" disabled={busy} aria-label={`Delete customer entry for ${c.name}`} onClick={()=>deleteCustomer(c)}><FiTrash2 aria-hidden="true"/>Delete</button></td></tr>)}</tbody></table>{!customers.length&&<div className="admin-empty">Customers appear after their first order.</div>}</div>}
  {tab === 'Coupons' && <AdminCoupons />}
  {tab === 'Stocks' && <InventoryOverview products={products} onRefresh={load} onEdit={product=>{setTab('Products');setEditing({...product,sizes:product.sizes || [],thumbnails:product.thumbnails || [],colors:product.colors || []});}} disabled={busy}/>}
  {stockNotepadOpened && <div hidden={tab !== 'Stock Notepad'}><StockNotepad products={products}/></div>}
  {tab === 'Costs Notepad' && <CostNotepad />}
  {tab === 'Messages' && <div className="admin-stack">{!messages.length&&<div className="admin-empty">Your inbox is clear.</div>}{messages.map(m=><article className="admin-card" key={m.id}><div className="admin-row"><h2>{m.subject}</h2><span className="admin-badge">{m.read?'Read':'New'}</span></div><p>{m.name} · <a href={`mailto:${m.email}`}>{m.email}</a> · {new Date(m.created_at).toLocaleString()}</p><p style={{whiteSpace:'pre-wrap'}}>{m.message}</p><button className="admin-secondary" disabled={busy} onClick={()=>update('messages',m.id,{read:!m.read})}>Mark {m.read?'unread':'read'}</button></article>)}</div>}
  </div></section>{editing&&<div className="admin-modal" onClick={e => { if (!busy && e.target === e.currentTarget) setEditing(null); }}><div className="admin-modal-card admin-product-editor"><div className="admin-row product-editor-heading"><div><h2>{editing.id?'Edit product':'New product'}</h2><p>Details, sizes and stock—all in one place.</p></div><button className="admin-secondary" disabled={busy} onClick={()=>setEditing(null)}>Close</button></div><form onSubmit={saveProduct}><section className="product-editor-section"><h3>Product details</h3><div className="admin-form-grid">{[['name','Product name','text'],['price','Price (BDT ৳)','number']].map(([key,label,type])=><label key={key}>{label}<input required type={type} min="0" step={key==='price'?'0.01':'1'} maxLength={200} value={editing[key]} onChange={e=>setEditing({...editing,[key]:e.target.value})}/></label>)}<label>Category<select required value={editing.category} onChange={e=>setEditing({...editing,category:e.target.value})}><option value="">Select category</option>{categories.map(c=><option key={c.name}>{c.name}</option>)}</select></label><label>Product discount (%)<input type="number" min="0" max="100" step="0.01" value={editing.discount_percent ?? 0} onChange={e=>setEditing({...editing,discount_percent:e.target.value})}/><small>Set to 0 to remove the discount. Applies before coupon discounts.</small>{editing.price !== '' && <p>Customer price: <strong>{money(productPrice(editing))}</strong></p>}</label></div><label>Description<textarea value={editing.description} onChange={e=>setEditing({...editing,description:e.target.value})}/></label></section><section className="product-editor-section"><h3>Sizes, stock & colors</h3><label className="admin-check product-combo-choice"><input type="checkbox" checked={Boolean(editing.is_combo)} disabled={busy} onChange={event=>setEditing({...editing,is_combo:event.target.checked,size_stock:event.target.checked?null:{},combo_stock:event.target.checked?{}:null,combo_items:getComboItems(editing).length ? getComboItems(editing) : createClothingCombo(),sizes:event.target.checked?editing.sizes:['S','M','L','XL']})}/><span>Sell as a combo<small>Include pants and a shirt, sweater or another top.</small></span></label>{editing.is_combo ? <><AdminComboSizing products={products} product={editing} disabled={busy} onChange={setEditing}/>{editing.combo_stock == null && <p className="admin-combo-note">Current combo stock: {editing.stock}. Use “Set individual size stock” above to enter quantities for each piece.</p>}</> : <AdminProductSizes sizes={editing.sizes || []} quantities={editing.size_stock} stock={editing.stock} onStockChange={stock=>setEditing({...editing,stock})} onQuantityChange={size_stock=>setEditing({...editing,size_stock})} disabled={busy} onChange={sizes=>setEditing({...editing,sizes})}/>}{!editing.is_combo && <AdminProductColors colors={editing.colors || []} onChange={colors=>setEditing({...editing,colors})}/>}</section><section className="product-editor-section"><h3>Product photos</h3><AdminProductImages images={[...new Set([editing.image,...(editing.thumbnails || [])].filter(Boolean))]} busy={busy} onUpload={upload} onChange={images=>setEditing(current=>({...current,image:images[0] || '',thumbnails:images.slice(1)}))}/></section><section className="product-editor-section product-publishing"><h3>Visibility</h3><label className="admin-check"><input type="checkbox" checked={editing.active} onChange={e=>setEditing({...editing,active:e.target.checked})}/>Publish on storefront</label><label className="admin-check"><input type="checkbox" checked={editing.featured} onChange={e=>setEditing({...editing,featured:e.target.checked})}/>Feature on homepage (published products only)</label></section><div className="product-editor-footer"><p role="status">{notice || 'Changes apply when you save.'}</p><button type="button" className="admin-secondary" disabled={busy} onClick={()=>setEditing(null)}>Cancel</button><button disabled={busy}>{busy?'Saving…':'Save product'}</button></div></form></div></div>}</div>;
}
