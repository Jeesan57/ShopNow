'use client';

import Link from 'next/link';
import { FiArrowUpRight, FiCheck, FiShoppingBag, FiTruck, FiMessageCircle, FiAward, FiHeart, FiFeather, FiZap, FiEye, FiStar } from 'react-icons/fi';

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section - Kept EXACTLY the same as you requested */}
      <div className="relative bg-linear-to-br from-stone-900 via-gold-900 to-stone-800 dark:from-stone-900 dark:via-stone-800 dark:to-stone-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gold-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gold-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
              <span className="text-gold-100">
                Our Story
              </span>
            </h1>
            <p className="text-md md:text-xl text-gold-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Crafting exceptional experiences through premium products and unparalleled service
            </p>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-8 fill-background">
            <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <section aria-labelledby="mission-title" className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-14 items-start mb-14">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary mb-3">Why Auvora BD</p>
            <h2 id="mission-title" className="text-[26px] sm:text-[32px] font-semibold tracking-tight text-foreground mb-4">Good products. Simple shopping.</h2>
            <p className="text-[15px] sm:text-[17px] text-muted-foreground leading-7 max-w-xl">
              Our mission is to make quality products accessible, with thoughtfully chosen collections and an easy shopping experience from browsing to delivery.
            </p>
            <div className="mt-6 border-t border-border pt-5">
              <h3 className="text-[15px] font-semibold text-foreground mb-4">What sets us apart</h3>
              <ul className="space-y-3">
                {['Thoughtfully curated collections', 'Clear product details and prices', 'Easy size and color selection'].map(item => <li key={item} className="flex items-center gap-3 text-[15px] text-muted-foreground">
                  <FiCheck className="w-4 h-4 shrink-0 text-primary" aria-hidden="true" /><span>{item}</span>
                </li>)}
              </ul>
            </div>
            <Link href="/shop" className="inline-flex items-center gap-2 mt-5 min-h-11 text-sm font-medium text-foreground hover:text-primary transition-colors">Explore the collection <FiArrowUpRight className="w-4 h-4" aria-hidden="true" /></Link>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground mb-2">Shopping made easy</p>
            <h3 className="text-lg font-semibold tracking-tight text-foreground mb-5">From your first click to your doorstep.</h3>
            <div className="divide-y divide-border">
              {[
                { icon: FiShoppingBag, title: 'Cash on delivery', description: 'Order online and pay when your parcel arrives.' },
                { icon: FiTruck, title: 'Delivery across Bangladesh', description: 'Select your district and see the delivery fee at checkout.' },
                { icon: FiMessageCircle, title: 'Here to help', description: 'Get in touch for product questions or order support.' },
              ].map(({ icon: Icon, title, description }) => <div key={title} className="flex items-start gap-3 py-4 first:pt-0 last:pb-0">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-primary/8 text-primary flex items-center justify-center"><Icon className="w-4 h-4" aria-hidden="true" /></div>
                <div><h4 className="text-[15px] font-medium text-foreground">{title}</h4><p className="mt-1 text-sm leading-5 text-muted-foreground">{description}</p></div>
              </div>)}
            </div>
          </div>
        </section>

        <section aria-labelledby="values-title" className="mb-10 sm:mb-12">
          <div className="mb-6">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary mb-2">What we believe</p>
              <h2 id="values-title" className="text-[26px] sm:text-[32px] font-semibold tracking-tight text-foreground">Our core values</h2>
              <p className="mt-2 text-[15px] text-muted-foreground leading-6">The principles behind our products, our service, and your experience.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              { icon: FiAward, title: 'Quality first', desc: 'Thoughtfully chosen products, with attention to the details that matter.' },
              { icon: FiHeart, title: 'Customer focused', desc: 'We listen to your feedback and put your shopping experience first.' },
              { icon: FiFeather, title: 'Mindful choices', desc: 'We value thoughtful purchases and products that fit everyday life.' },
              { icon: FiZap, title: 'Always improving', desc: 'We keep refining how you discover, choose, and order your products.' },
              { icon: FiEye, title: 'Transparency', desc: 'Clear prices, useful product details, and delivery fees shown at checkout.' },
              { icon: FiStar, title: 'Care in every detail', desc: 'From browsing to order support, we aim to make every step feel easy.' },
            ].map(({ icon: Icon, title, desc }) => <article key={title} className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 shrink-0 rounded-lg bg-primary/8 text-primary flex items-center justify-center"><Icon className="w-4 h-4" aria-hidden="true" /></span>
                <h3 className="text-[15px] font-semibold text-foreground">{title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-6">{desc}</p>
            </article>)}
          </div>
        </section>

        <section aria-labelledby="explore-title" className="rounded-2xl border border-border bg-muted/40 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-lg">
            <h2 id="explore-title" className="text-[22px] sm:text-[26px] font-semibold tracking-tight text-foreground">Find your next everyday favourite.</h2>
            <p className="mt-2 text-[15px] text-muted-foreground leading-6">Explore the collection, or get in touch if you need a hand choosing.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link href="/shop" className="inline-flex items-center justify-center gap-2 min-h-11 px-5 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-85 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Explore products <FiArrowUpRight className="w-4 h-4" aria-hidden="true" /></Link>
            <Link href="/contact" className="inline-flex items-center justify-center min-h-11 px-5 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-card transition-colors focus-visible:outline-2 focus-visible:outline-primary">Contact us</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
