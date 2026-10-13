'use client';

import { useState, useEffect, useRef, useId } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import ProductColorSelector from './ProductColorSelector';
import { useCart } from '../context/CartContext';
import { FiX, FiChevronLeft, FiChevronRight, FiCheck, FiShoppingBag, FiArrowUpRight, FiPlus, FiMinus } from 'react-icons/fi';

export default function QuickViewModal({ product, isOpen, onClose }) {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(product?.image || '');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [colorChoice, setColorChoice] = useState('');
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
  const panelRef = useRef(null);
  const titleId = useId();
  const quantityId = useId();
  const productId = product?.id;
  const selectedColor = product?.colors?.includes(colorChoice) ? colorChoice : product?.colors?.[0] || '';

  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.querySelector('[aria-label="Close quick view"]')?.focus();
    function handleKey(event) {
      if (event.key === 'Escape') { event.preventDefault(); onClose(); }
      if (event.key !== 'Tab') return;
      const controls = Array.from(panelRef.current?.querySelectorAll('button:not(:disabled), a[href], [tabindex="0"]') || []).filter(element => element.getClientRects().length > 0);
      const first = controls[0], last = controls.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKey);
      requestAnimationFrame(() => {
        const opener = [...document.querySelectorAll('[data-quick-view-id]')].find(element => element.dataset.quickViewId === String(productId));
        const target = previousFocus?.isConnected && previousFocus !== document.body ? previousFocus : opener;
        target?.focus({ preventScroll: true });
      });
    };
  }, [isOpen, onClose, productId]);

  if (!isOpen || !product) return null;
  const gallery = [...new Set([product.image, ...(product.thumbnails || [])].filter(Boolean))];
  const money = value => '৳' + Number(value).toLocaleString('en-BD', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  function changeImage(direction) {
    setSelectedImage(gallery[(gallery.indexOf(selectedImage) + direction + gallery.length) % gallery.length]);
  }
  function add() {
    if (!selectedSize || product.stock <= 0) return;
    for (let index = 0; index < quantity; index++) addToCart(product, selectedSize, selectedColor);
    setAdded(true);
  }

  return createPortal(
    <div className="fixed inset-0 z-[100] bg-black/45 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6" onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
      <div ref={panelRef} role="dialog" aria-modal="true" aria-labelledby={titleId} className="relative w-full max-w-[860px] max-h-[90svh] overflow-hidden bg-background rounded-2xl shadow-2xl">
        <button type="button" onClick={onClose} aria-label="Close quick view" className="absolute top-3 right-3 z-10 w-11 h-11 rounded-full bg-background/90 text-foreground flex items-center justify-center hover:bg-muted focus-visible:outline-2 focus-visible:outline-primary"><FiX className="w-5 h-5" /></button>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.05fr] max-h-[90svh] overflow-y-auto overscroll-contain">
          <div className="p-4 sm:p-5 md:p-6 min-w-0 bg-muted/40">
            <div className="relative h-[240px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-muted">
              {selectedImage && <Image src={selectedImage} alt={product.name} fill sizes="(max-width: 768px) 90vw, 380px" className="object-contain" priority />}
              {gallery.length > 1 && <div className="absolute bottom-2 right-2 flex gap-1">
                <button type="button" aria-label="Previous image" onClick={() => changeImage(-1)} className="w-11 h-11 rounded-md bg-background/85 flex items-center justify-center hover:bg-background"><FiChevronLeft className="w-4 h-4" /></button>
                <button type="button" aria-label="Next image" onClick={() => changeImage(1)} className="w-11 h-11 rounded-md bg-background/85 flex items-center justify-center hover:bg-background"><FiChevronRight className="w-4 h-4" /></button>
              </div>}
            </div>
            {gallery.length > 1 && <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
              {gallery.map((image, index) => <button key={image} type="button" aria-label={`View image ${index + 1}`} aria-pressed={image === selectedImage} onClick={() => setSelectedImage(image)} className={`relative shrink-0 w-12 h-16 rounded-md border overflow-hidden bg-background ${image === selectedImage ? 'border-primary' : 'border-border hover:border-primary/50'}`}>
                <Image src={image} alt={`${product.name} view ${index + 1}`} fill sizes="48px" className="object-contain p-1" />
              </button>)}
            </div>}
          </div>

          <div className="p-5 sm:p-6 md:pt-10 min-w-0">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{product.category}</p>
            <h2 id={titleId} className="mt-2 pr-6 text-xl sm:text-2xl font-medium leading-[1.3] tracking-tight text-foreground break-words">{product.name}</h2>
            <p className="mt-3 text-2xl font-semibold text-foreground tabular-nums">{money(product.price)}</p>
            {product.description && <p className="mt-3 text-xs leading-5 text-muted-foreground line-clamp-2">{product.description.replace(/[#*]/g, '')}</p>}

            <div className="mt-5 pt-4 border-t border-border space-y-4">
              <ProductColorSelector colors={product.colors || []} selectedColor={selectedColor} onChange={color => { setColorChoice(color); setAdded(false); }} />
              <fieldset>
                <legend className="text-xs font-medium text-foreground mb-3">Size <span className="ml-2 text-muted-foreground font-normal">{selectedSize}</span></legend>
                <div className="flex flex-wrap gap-2">{(product.sizes || []).map(size => <button key={size} type="button" aria-pressed={selectedSize === size} onClick={() => { setSelectedSize(size); setAdded(false); }} className={`min-w-11 h-11 px-3 rounded-md border text-xs font-medium focus-visible:outline-2 focus-visible:outline-primary ${selectedSize === size ? 'bg-foreground/5 border-foreground ring-1 ring-foreground' : 'border-border hover:border-primary'}`}>{size}</button>)}</div>
              </fieldset>
              <div className="border-t border-border pt-4">
                <div className="flex justify-between mb-3 text-xs"><p id={quantityId} className="font-medium">Quantity</p>{quantity > 1 && <p className="text-muted-foreground">Total <span className="font-semibold text-foreground tabular-nums">{money(product.price * quantity)}</span></p>}</div>
                <div className="flex gap-3">
                  <div role="group" aria-labelledby={quantityId} className="flex shrink-0 items-center border border-input rounded-md overflow-hidden">
                    <button type="button" aria-label="Decrease quantity" disabled={quantity <= 1} onClick={() => { setQuantity(value => Math.max(1, value - 1)); setAdded(false); }} className="w-11 min-h-12 flex items-center justify-center hover:bg-muted disabled:opacity-30"><FiMinus className="w-3.5 h-3.5" /></button>
                    <span className="w-6 text-center text-xs font-semibold tabular-nums" aria-live="polite">{quantity}</span>
                    <button type="button" aria-label="Increase quantity" disabled={quantity >= product.stock} onClick={() => { setQuantity(value => Math.min(product.stock, value + 1)); setAdded(false); }} className="w-11 min-h-12 flex items-center justify-center hover:bg-muted disabled:opacity-30"><FiPlus className="w-3.5 h-3.5" /></button>
                  </div>
                  <button type="button" onClick={add} disabled={!selectedSize || product.stock <= 0} className="flex-1 min-w-0 min-h-12 px-2 rounded-md text-xs font-medium bg-foreground text-background hover:opacity-85 disabled:opacity-40 flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                    {added ? <FiCheck className="w-4 h-4 shrink-0" /> : <FiShoppingBag className="w-4 h-4 shrink-0" />}{product.stock <= 0 ? 'Out of stock' : added ? 'Add again' : 'Add to cart'}
                  </button>
                </div>
                <p role="status" className="min-h-5 mt-2 text-xs text-primary">{added ? `${quantity} ${quantity === 1 ? 'item' : 'items'} added to your cart.` : ''}</p>
              </div>
            </div>
            <Link href={`/product/${product.id}`} onClick={onClose} className="inline-flex min-h-11 items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground">View full product details <FiArrowUpRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </div>
    </div>, document.body
  );
}
