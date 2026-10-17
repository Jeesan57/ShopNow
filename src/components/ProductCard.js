'use client';
import ProductPrice from './ProductPrice';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiHeart, FiShoppingBag, FiCheck, FiEye, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { getComboItems, hasComboItemColors } from '../lib/comboSizing';
import { colorHex } from '../lib/productColors';

export default function ProductCard({ product, onQuickView }) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const displayColors = hasComboItemColors(product) ? [...new Set(getComboItems(product).flatMap(item => item.colors || []))] : product.colors || [];
  const [added, setAdded] = useState(false);
  const [imageChoice, setImageChoice] = useState(product.image);
  const touchStart = useRef(null);
  const swiped = useRef(false);
  const gallery = [...new Set([product.image, ...(product.thumbnails || [])].filter(Boolean))];
  const imageIndex = Math.max(0, gallery.indexOf(imageChoice));
  const dotStart = Math.min(Math.max(0, imageIndex - 3), Math.max(0, gallery.length - 7));
  function moveImage(direction) {
    setImageChoice(gallery[(imageIndex + direction + gallery.length) % gallery.length]);
  }
  function finishSwipe(event) {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start || gallery.length < 2) return;
    const end = event.changedTouches[0];
    const dx = end.clientX - start.x, dy = end.clientY - start.y;
    if (Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      swiped.current = true;
      moveImage(dx < 0 ? 1 : -1);
    }
  }
  const selectedSize = product.sizes?.[0] || '';
  const needsOptions = product.is_combo || product.sizes?.length > 1 || product.colors?.length > 1;
  const favourite = isInWishlist(product.id);
  return <article className="product-card group relative grid grid-cols-[128px_minmax(0,1fr)] sm:grid-cols-[160px_minmax(0,1fr)] min-h-[240px] w-full max-w-[440px] mx-auto h-full overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md">
    <div className="relative min-w-0 bg-muted/40 border-r border-border">
      <Link href={`/product/${product.id}`} aria-label={`View ${product.name}`} className="absolute inset-0 block overflow-hidden" style={{ touchAction: 'pan-y pinch-zoom' }}
        onTouchStart={event => { swiped.current = false; touchStart.current = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null; }}
        onTouchEnd={finishSwipe} onTouchCancel={() => { touchStart.current = null; }}
        onClick={event => { if (swiped.current) { event.preventDefault(); swiped.current = false; } }}
        onKeyDown={event => { if (gallery.length > 1 && ['ArrowLeft', 'ArrowRight'].includes(event.key)) { event.preventDefault(); moveImage(event.key === 'ArrowRight' ? 1 : -1); } }}>

        <Image src={gallery[imageIndex]} alt={`${product.name}, image ${imageIndex + 1} of ${gallery.length}`} fill sizes="(max-width: 640px) 128px, 160px" className="object-contain" />
      </Link>
      {gallery.length > 1 && <>
        <button type="button" aria-label={`Previous image of ${product.name}`} onClick={() => moveImage(-1)} className="product-card-image-arrow absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/90 flex items-center justify-center hover:bg-background transition-opacity focus-visible:outline-2 focus-visible:outline-primary"><FiChevronLeft className="w-4 h-4" /></button>
        <button type="button" aria-label={`Next image of ${product.name}`} onClick={() => moveImage(1)} className="product-card-image-arrow absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/90 flex items-center justify-center hover:bg-background transition-opacity focus-visible:outline-2 focus-visible:outline-primary"><FiChevronRight className="w-4 h-4" /></button>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-background/85 px-2 py-1.5 pointer-events-none" aria-hidden="true">
          {gallery.slice(dotStart, dotStart + 7).map((image, index) => <span key={image} className={`h-1 rounded-full transition-all ${dotStart + index === imageIndex ? 'w-3 bg-foreground' : 'w-1 bg-foreground/25'}`} />)}
          {gallery.length > 7 && <span className="ml-1 text-[9px] text-muted-foreground">{imageIndex + 1}/{gallery.length}</span>}
        </div>
        <span className="sr-only" aria-live="polite">Image {imageIndex + 1} of {gallery.length}</span>
      </>}

    </div>
    <div className="min-w-0 flex flex-col p-3 sm:p-4">
      <div className="relative min-h-8 flex items-center gap-2 pr-10"><p className={`text-[10px] uppercase tracking-[0.12em] text-muted-foreground truncate ${product.is_combo ? 'hidden sm:block' : ''}`}>{product.category}</p>{product.is_combo && <span className="text-[10px] rounded-full bg-muted px-2 py-0.5 text-muted-foreground">Combo</span>}
      <button type="button" aria-label={`${favourite ? 'Remove' : 'Add'} ${product.name} ${favourite ? 'from' : 'to'} favourites`} aria-pressed={favourite} onClick={() => favourite ? removeFromWishlist(product.id) : addToWishlist(product)} className="absolute -top-1 -right-1 w-11 h-11 flex items-center justify-center rounded-full bg-background/85 text-foreground hover:bg-background focus-visible:outline-2 focus-visible:outline-primary">
        <FiHeart className="w-[18px] h-[18px]" fill={favourite ? 'currentColor' : 'none'} />
      </button></div>
      <Link href={`/product/${product.id}`} className="mt-1.5 hover:text-primary transition-colors">
        <h3 className="text-sm font-semibold leading-5 line-clamp-2">{product.name}</h3>
      </Link>
      <div className="flex items-center flex-wrap justify-between gap-2 mt-2">
        <p className="text-xl font-semibold tracking-tight text-foreground tabular-nums"><ProductPrice product={product} /></p>
        {!!displayColors.length && <div className="flex items-center gap-1" aria-label={`${displayColors.length} available colors`}>
          {displayColors.slice(0, 4).map(color => <span key={color} title={color} className="w-3 h-3 rounded-full border border-black/15" style={{backgroundColor:colorHex(color)}} />)}
          {displayColors.length > 4 && <span className="text-[10px] text-muted-foreground">+{displayColors.length - 4}</span>}
        </div>}
      </div>
      <p className="mt-2 text-[11px] leading-4 text-muted-foreground truncate" title={product.is_combo ? 'Choose a size and available color for each piece' : product.sizes?.join(' · ')}>{product.is_combo ? (displayColors.length ? 'Sizes & colors' : 'Choose your sizes') : product.sizes?.join(' · ')}</p>
      <div className="mt-auto pt-4 grid grid-cols-[minmax(0,1fr)_44px] gap-2">
        <button type="button" disabled={(!product.is_combo && !selectedSize) || product.stock <= 0} onClick={() => { if(needsOptions) {onQuickView(product);return;} addToCart(product, selectedSize); setAdded(true); }} className="min-h-11 px-3 rounded-md bg-foreground text-background text-xs font-medium hover:opacity-85 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
          {added ? <FiCheck className="hidden sm:block w-4 h-4 shrink-0" /> : <FiShoppingBag className="hidden sm:block w-4 h-4 shrink-0" />}
          {product.stock <= 0 ? 'Out of stock' : needsOptions ? 'Choose options' : added ? 'Added to cart' : 'Add to cart'}
        </button>
        <button type="button" data-quick-view-id={product.id} aria-label={`Quick view: ${product.name}`} title="Quick view" onClick={() => onQuickView(product)} className="w-11 min-h-11 rounded-md border border-border flex items-center justify-center text-foreground hover:bg-muted focus-visible:outline-2 focus-visible:outline-primary"><FiEye className="w-[18px] h-[18px]" /></button>
      </div>
      <span role="status" className="sr-only">{added ? `${product.name}, size ${selectedSize}, added to cart.` : ''}</span>
    </div>
  </article>;
}
