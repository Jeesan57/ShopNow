'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import OrderConfirmation from '../../components/OrderConfirmation';
import { FiArrowLeft, FiMapPin, FiTruck, FiShoppingBag, FiArrowRight } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { useCatalog } from '../../context/CatalogContext';
import { cartItemKey } from '../../lib/productColors';
import { getSupabase } from '../../lib/supabase';
import { districts, normalizeBangladeshPhone } from '../../lib/bangladesh';
const money = value => '৳' + Number(value).toFixed(2);
const field = 'block w-full p-3 mt-2 border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-gold-500';
export default function Checkout() {
  const { cartItems, clearCart, hydrated } = useCart();
  const { products, loading } = useCatalog();
  const [couponInput, setCouponInput] = useState(''), [coupon, setCoupon] = useState(null), [couponBusy, setCouponBusy] = useState(false), [couponError, setCouponError] = useState('');
  const couponRequest = useRef(0);
  const [busy, setBusy] = useState(false), [error, setError] = useState(''), [order, setOrder] = useState(null);
  const [district, setDistrict] = useState(''), [zone, setZone] = useState('outside_dhaka'), [rates, setRates] = useState(null);
  const [ratesError, setRatesError] = useState('');
  const [confirmationReady, setConfirmationReady] = useState(false);
  useEffect(() => {
    let alive = true;
    async function restoreConfirmation() {
      await Promise.resolve();
      try {
        const saved = JSON.parse(sessionStorage.getItem('shopnow-last-order') || 'null');
        if (alive && saved && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(saved.id) && ['name', 'phone', 'area', 'district'].every(key => typeof saved[key] === 'string')) setOrder(saved);
      } catch { /* A missing or invalid saved reference should not block checkout. */ }
      finally { if (alive) setConfirmationReady(true); }
    }
    restoreConfirmation();
    return () => { alive = false; };
  }, []);
  useEffect(() => {
    let alive = true;
    getSupabase().from('delivery_zones').select('code,label,fee').then(({data,error}) => {
      if (!alive) return;
      if(error || data.length !== 2) setRatesError('Delivery charges are temporarily unavailable. Please reload to try again.');
      else setRates(Object.fromEntries(data.map(r => [r.code, Number(r.fee)])));
    });
    return () => {alive=false;};
  }, []);
  const subtotal = Math.round(cartItems.reduce((sum,item) => sum + Number(products.find(p=>p.id===item.id)?.price || 0)*item.quantity,0)*100)/100;
  const deliveryFee = district && rates ? rates[zone] : null;
  const unavailable = !loading && cartItems.some(i => {const p=products.find(p=>p.id===i.id);return !p || !p.sizes.includes(i.size) || (p.colors?.length ? !p.colors.includes(i.color) : Boolean(i.color)) || p.stock < cartItems.filter(other=>other.id===i.id).reduce((n,other)=>n+other.quantity,0);});
  const items = cartItems.map(item=>({id:item.id,size:item.size,color:item.color || '',quantity:item.quantity}));
  const signature = JSON.stringify([items, subtotal]);
  const couponReady = !coupon || coupon.signature === signature;
  const discount = coupon && couponReady ? Number(coupon.discount) : 0;
  const payable = deliveryFee === null ? null : Math.round((subtotal - discount + deliveryFee)*100)/100;
  async function applyCoupon() {
    const code = couponInput.trim().toUpperCase();
    if (!code) {setCouponError('Enter a coupon code.');return;}
    const request = ++couponRequest.current;
    setCouponBusy(true); setCouponError(''); setCoupon(null);
    try {
      const {data,error}=await getSupabase().rpc('quote_checkout',{p_items:items,p_coupon:code});
      if(error)throw error;
      if(request!==couponRequest.current)return;
      if(Number(data.subtotal)!==subtotal)throw new Error('Product prices changed. Refresh checkout before applying your coupon.');
      setCoupon({...data,signature}); setCouponInput(data.coupon_code);
    } catch(error){if(request===couponRequest.current)setCouponError(error.message);}
    finally{if(request===couponRequest.current)setCouponBusy(false);}
  }
  function removeCoupon() {couponRequest.current++;setCoupon(null);setCouponInput('');setCouponError('');setCouponBusy(false);}
  async function submit(e) {
    e.preventDefault(); setError('');
    const form = new FormData(e.currentTarget);
    const phone = normalizeBangladeshPhone(form.get('phone'));
    if(!/^01[3-9]\d{8}$/.test(phone)) {setError('Enter a valid Bangladesh mobile number, such as 01712345678 or +8801712345678.');return;}
    if(!rates || !district || unavailable || couponBusy || !couponReady) {setError('Check your delivery details and remove unavailable items from your cart.');return;}
    setBusy(true);
    try {
      const {data,error} = await getSupabase().rpc('place_order_bd', {
        p_name:form.get('name'),p_email:form.get('email') || '',p_phone:phone,p_address:form.get('address'),
        p_district:district,p_area:form.get('area'),p_zone:zone,p_notes:form.get('notes') || '',
        p_items:items,p_coupon:coupon?.coupon_code || '',p_expected_total:payable,
      });
      if(error) throw error;
      const confirmation = { id: data, name: form.get('name').trim(), phone, area: form.get('area').trim(), district, total:payable, discount, coupon_code:coupon?.coupon_code || '' };
      try { sessionStorage.setItem('shopnow-last-order', JSON.stringify(confirmation)); } catch { /* Checkout still succeeds when browser storage is unavailable. */ }
      setOrder(confirmation); clearCart();
    } catch(e) {setError(e.message);} finally {setBusy(false);}
  }
  if (!hydrated || !confirmationReady) return <div className="max-w-3xl mx-auto px-6 py-20 text-center text-muted-foreground" role="status">Loading checkout…</div>;
  if (order && !cartItems.length) return <OrderConfirmation order={order} />;
  if (!cartItems.length) return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20" aria-labelledby="empty-cart-title">
      <Link href="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"><FiArrowLeft aria-hidden="true" />Back to shopping</Link>
      <div className="overflow-hidden bg-card border border-border rounded-3xl shadow-xl shadow-stone-900/5">
        <div className="px-6 sm:px-12 pt-10 sm:pt-12 pb-9 text-center border-b border-border bg-linear-to-b from-gold-50/80 to-card dark:from-gold-950/30">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-gold-100 dark:bg-gold-900/50 ring-8 ring-gold-50 dark:ring-gold-950/40"><FiShoppingBag className="w-9 h-9 text-gold-600 dark:text-gold-400" aria-hidden="true" /></div>
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">Ready when you are</p>
          <h1 id="empty-cart-title" className="text-3xl sm:text-4xl font-bold tracking-tight">Your cart is waiting</h1>
          <p className="text-muted-foreground max-w-md mx-auto mt-4 leading-relaxed">Find something you love and add it to your cart. Your items will appear here when you’re ready to check out.</p>
        </div>
        <div className="p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mb-8 rounded-2xl border border-border bg-muted/50 p-5">
            <div className="flex items-center gap-3"><FiTruck className="w-5 h-5 text-primary shrink-0" aria-hidden="true" /><div><p className="font-semibold text-sm">Across Bangladesh</p><p className="text-xs text-muted-foreground mt-1">Delivery inside and outside Dhaka</p></div></div>
            <div className="flex items-center gap-3"><FiShoppingBag className="w-5 h-5 text-primary shrink-0" aria-hidden="true" /><div><p className="font-semibold text-sm">Cash on delivery</p><p className="text-xs text-muted-foreground mt-1">Pay when your parcel arrives</p></div></div>
          </div>
          <div className="flex flex-col items-center gap-4"><Link href="/shop" className="inline-flex items-center justify-center gap-2 bg-gold-600 hover:bg-gold-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors w-full sm:w-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600">Explore products<FiArrowRight aria-hidden="true" /></Link><Link href="/favourites" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">View your favourites</Link></div>
        </div>
      </div>
    </section>
  );
  return <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6"><Link href="/shop" className="inline-flex items-center gap-2 text-muted-foreground mb-6"><FiArrowLeft/>Back to shopping</Link><h1 className="text-3xl font-bold mb-2">Checkout</h1><p className="text-muted-foreground mb-8">Delivery across Bangladesh. Cash on delivery.</p>{!cartItems.length?<p>Your cart is empty. <Link href="/shop" className="underline">Browse products</Link></p>:<div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start"><form onSubmit={submit} className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-5"><h2 className="font-bold text-xl flex gap-2 items-center"><FiMapPin/>Delivery details</h2><label className="block">Full name<input name="name" autoComplete="name" required maxLength={200} className={field}/></label><label className="block">Mobile number<input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="01712345678 or +8801712345678" required maxLength={30} className={field}/><span className="text-xs text-muted-foreground">We will call this number to confirm your order.</span></label><label className="block">Email (optional)<input name="email" type="email" autoComplete="email" maxLength={254} className={field}/></label><div className="grid sm:grid-cols-2 gap-5"><label className="block">District<select name="district" autoComplete="address-level1" value={district} required onChange={e=>{setDistrict(e.target.value);setZone(e.target.value==='Dhaka'?'inside_dhaka':'outside_dhaka');}} className={field}><option value="">Select district</option>{districts.map(d=><option key={d}>{d}</option>)}</select></label><label className="block">Area / Upazila / Thana<input name="area" autoComplete="address-level2" placeholder="e.g. Mirpur, Savar, Kotwali" required minLength={2} maxLength={150} className={field}/></label></div><label className="block">House, road, village & landmark<textarea name="address" autoComplete="street-address" placeholder="House/flat, road, block or village, and a nearby landmark" required minLength={5} maxLength={1000} rows={3} className={field}/></label>{district==='Dhaka'&&<fieldset className="border border-border rounded-xl p-4"><legend className="px-2 font-semibold">Delivery area</legend>{[['inside_dhaka','Inside Dhaka city'],['outside_dhaka','Outside Dhaka city / outskirts']].map(([code,label])=><label className="flex items-center justify-between gap-3 py-2" key={code}><span className="flex items-center gap-2"><input type="radio" name="zone" value={code} checked={zone===code} onChange={()=>setZone(code)}/>{label}</span><span>{rates?money(rates[code]):'Loading…'}</span></label>)}<p className="text-xs text-muted-foreground mt-2">Select outside Dhaka for Savar, Ashulia, Keraniganj, Dohar and Nawabganj. Gazipur and Narayanganj also use the outside-Dhaka rate.</p></fieldset>}<label className="block">Delivery notes (optional)<textarea name="notes" placeholder="Any instructions for the delivery person" maxLength={1000} rows={2} className={field}/></label><div className="rounded-xl bg-gold-50 dark:bg-gold-950/40 p-4"><p className="font-semibold">Cash on delivery</p><p className="text-sm mt-1">Pay the total shown here when your parcel arrives. No online payment is required.</p></div>{(error||ratesError)&&<p role="alert" className="text-red-600">{error||ratesError}</p>}{unavailable&&<p role="alert" className="text-red-600">An item is unavailable or has insufficient stock. Update your cart before placing the order.</p>}<button disabled={busy||couponBusy||!couponReady||loading||!rates||!district||unavailable} className="w-full bg-gold-600 text-white rounded-xl px-6 py-4 font-semibold disabled:opacity-50">{busy?'Placing order…':`Place order${deliveryFee!==null?' · '+money(payable):''}`}</button></form><aside className="bg-card border border-border rounded-2xl p-6 lg:sticky lg:top-28"><h2 className="font-bold text-xl mb-5">Order summary</h2>{cartItems.map(i=>{const p=products.find(p=>p.id===i.id);return <div className="py-3 border-b border-border flex justify-between gap-4" key={cartItemKey(i)}><div><p className="font-medium">{p?.name||i.name}</p><p className="text-sm text-muted-foreground">{i.size}{i.color ? ` · ${i.color}` : ''} × {i.quantity}</p></div><p>{p?money(p.price*i.quantity):'Unavailable'}</p></div>;})}<div className="mt-5 pt-5 border-t border-border"><label htmlFor="coupon-code" className="text-sm font-medium">Coupon code</label><div className="flex gap-2 mt-2"><input id="coupon-code" value={couponInput} maxLength={40} onChange={event=>setCouponInput(event.target.value.toUpperCase())} disabled={busy || couponBusy} placeholder="Enter code" className="min-w-0 flex-1 px-3 py-2 border border-border rounded-lg bg-background text-sm"/><button type="button" onClick={applyCoupon} disabled={busy || couponBusy || loading || unavailable} className="px-4 min-h-11 border border-border rounded-lg text-sm font-medium disabled:opacity-50">{couponBusy?'Checking…':'Apply'}</button></div>{coupon && <div className="flex items-center justify-between mt-2 text-xs"><span>{couponReady?`${coupon.coupon_code} applied`:'Your cart changed. Apply the code again.'}</span><button type="button" onClick={removeCoupon} disabled={busy} className="underline min-h-8">Remove</button></div>}{couponError && <p role="alert" className="text-xs text-red-600 mt-2">{couponError}</p>}</div><div className="space-y-3 py-5 text-sm"><p className="flex justify-between"><span>Subtotal</span><span>{money(subtotal)}</span></p>{discount>0 && <p className="flex justify-between text-primary"><span>Coupon discount</span><span>−{money(discount)}</span></p>}<p className="flex justify-between gap-3"><span>Delivery{district?zone==='inside_dhaka'?' · Inside Dhaka':' · Outside Dhaka':''}</span><span>{deliveryFee!==null?money(deliveryFee):'Select district'}</span></p></div><p className="text-xl font-bold border-t border-border pt-5 flex justify-between"><span>Total payable</span><span>{deliveryFee!==null?money(payable):'—'}</span></p><div className="mt-6 flex gap-3 text-sm text-muted-foreground"><FiTruck className="shrink-0 mt-1"/><p>Inside Dhaka city: {rates?money(rates.inside_dhaka):'…'}<br/>Outside Dhaka city: {rates?money(rates.outside_dhaka):'…'}<br/>Flat delivery fees. No additional COD fee is added at checkout.</p></div></aside></div>}</div>;
}
