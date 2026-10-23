'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import ProductPrice from './ProductPrice';
import { railImage, railImageStyle, ADDITIONAL_RAIL_GARMENTS } from '../lib/railImages';
import './ClothingRail.css';

function Hanger() {
  return <svg className="clothing-rail-hanger" viewBox="0 0 240 130" aria-hidden="true">
    <path d="M120 46V22c0-5 8-6 8-12a7 7 0 0 0-14 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M120 46 60 78q-5 4 3 5h114q8-1 3-5L120 46Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
  </svg>;
}

export default function ClothingRail({ products = [] }) {
  const [hovered, setHovered] = useState(null);
  const [focused, setFocused] = useState(null);
  const [pinned, setPinned] = useState(null);
  const catalogItems = [...products.filter(product => product.featured), ...products.filter(product => !product.featured)].filter(product => railImage(product)).slice(0, 8);
  const items = [...catalogItems, ...ADDITIONAL_RAIL_GARMENTS];
  const activeId = hovered ?? focused ?? pinned;
  const active = items.find(product => product.id === activeId);
  if (!items.length) return null;
  return <section className="clothing-rail" aria-labelledby="clothing-rail-title" onPointerLeave={() => setHovered(null)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(null); }}>
    <div className="clothing-rail-inner">
      <header className="clothing-rail-heading">
        <span className="clothing-rail-eyebrow">THE AUVORA WARDROBE</span>
        <h2 id="clothing-rail-title">Find your next favourite.</h2>
        <p>Browse the rail. Hover or tap a piece to take a closer look.</p>
      </header>
      <div className="clothing-rail-scroll" role="region" aria-label="Interactive product rail">
        <div className="clothing-rail-rack">
          {items.map((product, position) => {
            const opened = product.id === activeId;
            const photo = railImage(product);
            return <div key={product.id} className={`clothing-rail-item ${opened ? 'is-active' : ''}`} style={{ '--rail-order': position }}>
              <button
                type="button"
                className="clothing-rail-turn"
                aria-label={`Preview ${product.name}`}
                aria-pressed={pinned === product.id}
                aria-describedby="clothing-rail-help"
                onPointerEnter={event => { if (event.pointerType === 'mouse') setHovered(product.id); }}
                onFocus={event => { if (event.currentTarget.matches(':focus-visible')) setFocused(product.id); }}
                onClick={() => setPinned(previous => previous === product.id ? null : product.id)}
              >
                <span className="clothing-rail-piece" style={railImageStyle(product)}>
                  <Hanger/>
                  <span className="clothing-rail-photo"><Image src={photo} alt={`${product.name} garment preview`} fill sizes="(max-width:600px) 190px, 240px" className="object-contain"/></span>
                </span>
              </button>
            </div>;
          })}
        </div>
      </div>
      <div className="clothing-rail-selection">
        {active ? <div className="clothing-rail-details" key={active.id}>
          <span className="clothing-rail-eyebrow">{active.category}{active.is_combo ? ' / COMBO' : ''}</span>
          <h3>{active.name}</h3>
          {active.previewOnly ? <p className="clothing-rail-availability">Ask us about availability</p> : <ProductPrice product={active} className="clothing-rail-price"/>}
          <div className="clothing-rail-detail-actions">
            <Link href={active.previewOnly ? '/contact' : `/product/${active.id}`}>{active.previewOnly ? 'Enquire about this piece' : 'View product'} <FiArrowUpRight aria-hidden="true"/></Link>
          </div>
        </div> : <div className="clothing-rail-idle"><span>{items.length} pieces. Your next look.</span><Link href="/shop">Explore the collection <FiArrowUpRight aria-hidden="true"/></Link></div>}
      </div>
      <p id="clothing-rail-help" className="clothing-rail-help">Tap or click to keep a piece open. Tap again to return it to the rail.</p>
    </div>
  </section>;
}
