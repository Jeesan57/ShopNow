'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiArrowRight, FiCheck, FiCopy, FiMapPin, FiShoppingBag } from 'react-icons/fi';

export default function OrderConfirmation({ order }) {
  const [copyNotice, setCopyNotice] = useState('');

  async function copyReference() {
    try {
      await navigator.clipboard.writeText(order.id);
      setCopyNotice('Order reference copied.');
    } catch {
      setCopyNotice('Select the reference below to copy it.');
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20" aria-labelledby="confirmation-title">
      <div className="overflow-hidden bg-card border border-border rounded-3xl shadow-xl shadow-stone-900/5">
        <div className="relative px-6 sm:px-12 pt-10 sm:pt-12 pb-9 text-center border-b border-border bg-linear-to-b from-emerald-50/80 to-card dark:from-emerald-950/30">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 ring-8 ring-emerald-50 dark:ring-emerald-950/40">
            <FiCheck className="w-10 h-10 text-emerald-600 dark:text-emerald-400" strokeWidth={2.5} aria-hidden="true" />
          </div>
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-700 dark:text-emerald-400 mb-3">Order successfully placed</p>
          <h1 id="confirmation-title" className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Thank you for your order!</h1>
          <p className="text-muted-foreground max-w-md mx-auto mt-4 leading-relaxed">We’ve received your order. Our team will call you to confirm the details before dispatch.</p>
          <span className="inline-flex items-center gap-2 mt-5 px-3 py-1.5 bg-background border border-border rounded-full text-xs font-medium text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" />Awaiting confirmation</span>
        </div>

        <div className="p-6 sm:p-10">
          <div className="rounded-2xl border border-border bg-muted/50 p-4 sm:p-5">
            <div className="flex items-center justify-between gap-4 mb-2">
              <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Your order reference</p>
              <button type="button" onClick={copyReference} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary rounded-lg px-2 py-1 hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-primary"><FiCopy aria-hidden="true" />Copy</button>
            </div>
            <p className="font-mono text-sm sm:text-base text-foreground break-all select-all">{order.id}</p>
            <p className="text-xs text-muted-foreground mt-2">Keep this reference handy if you contact us about your order.</p>
            <p role="status" aria-live="polite" className="text-xs text-primary mt-1">{copyNotice}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mt-6 pb-6 border-b border-border">
            <div className="flex items-start gap-3"><FiMapPin className="text-primary w-5 h-5 mt-0.5 shrink-0" aria-hidden="true" /><div><h2 className="font-semibold text-sm">Delivery location</h2><p className="text-sm text-muted-foreground mt-1">{[order.area, order.district].filter(Boolean).join(', ') || 'Your selected address'}</p>{order.phone && <p className="text-sm text-muted-foreground mt-1">{order.phone}</p>}</div></div>
            <div className="flex items-start gap-3"><FiShoppingBag className="text-primary w-5 h-5 mt-0.5 shrink-0" aria-hidden="true" /><div><h2 className="font-semibold text-sm">Cash on delivery</h2><p className="text-sm text-muted-foreground mt-1">Pay for your order and delivery when your parcel arrives.</p></div></div>
          </div>



          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-9">
            <Link href="/shop" className="inline-flex items-center justify-center gap-2 bg-gold-600 hover:bg-gold-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600">Continue shopping<FiArrowRight aria-hidden="true" /></Link>
            <Link href="/contact" className="inline-flex items-center justify-center text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-3 rounded-xl transition-colors">Need help? Contact us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
