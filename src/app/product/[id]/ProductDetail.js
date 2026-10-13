'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProductColorSelector from '../../../components/ProductColorSelector';
import ProductDescription from '../../../components/ProductDescription';
import { useCatalog } from '../../../context/CatalogContext';
import { useCart } from '../../../context/CartContext';
import { FiUser, FiArrowLeft, FiChevronLeft, FiChevronRight, FiCheck, FiShoppingBag, FiHeart, FiPlus, FiMinus } from 'react-icons/fi';

export default function ProductDetail({ initialProduct }) {
  const { products, loading: catalogLoading } = useCatalog();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const product = products.find(item => item.id === initialProduct?.id) || initialProduct;
  const suggestedProducts = products.filter(item => item.category === product?.category && item.id !== product?.id).slice(0, 8);
  const duplicatedProducts = [...suggestedProducts, ...suggestedProducts, ...suggestedProducts];
  const [selectedImage, setSelectedImage] = useState(initialProduct?.image || '');
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [colorChoice, setColorChoice] = useState(initialProduct?.colors?.[0] || '');
  const selectedColor = (product?.colors || []).includes(colorChoice) ? colorChoice : product?.colors?.[0] || '';
  const [selectedSize, setSelectedSize] = useState(initialProduct?.sizes?.[0] || '');

  // Continuous scroll functionality
  useEffect(() => {
    if (duplicatedProducts.length === 0 || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPos = prev + 2; // Move 2px at a time for smooth scroll
        const productWidth = 320; // Approximate width of each product card
        const resetPoint = (duplicatedProducts.length / 3) * productWidth; // Reset after one set
        return newPos >= resetPoint ? 0 : newPos;
      });
    }, 50); // Update every 50ms for smooth scroll

    return () => clearInterval(interval);
  }, [duplicatedProducts.length, isAutoPlaying]);

  const handleAddToCart = async () => {
    if (!selectedSize) {
      alert('Please select a size before adding to cart.');
      return;
    }
    setIsAddingToCart(true);
    await new Promise(resolve => setTimeout(resolve, 800));

    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize, selectedColor);
    }

    setIsAddingToCart(false);
  };

  if (catalogLoading && !product) return <div className="p-16 text-center">Loading product…</div>;
  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
            <FiUser className="w-8 h-8 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Product Not Found</h2>
          <p className="text-muted-foreground mb-6">The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl font-semibold hover:bg-foreground/90 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const gallery = [...new Set([product.image, ...(product.thumbnails || [])].filter(Boolean))];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-muted-foreground" style={{ borderBottom: 'none' }}>
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-foreground transition-colors">
              Shop
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-9 items-start">
          <div className="flex gap-2.5 sm:gap-3 min-w-0 lg:sticky lg:top-28">
            {gallery.length > 1 && <div className="flex flex-col gap-2 shrink-0 w-12 sm:w-14 max-h-[360px] sm:max-h-[460px] lg:max-h-[480px] overflow-y-auto py-0.5" aria-label="Product images">
              {gallery.map((thumb, index) => <button key={thumb} type="button" aria-label={`View product image ${index + 1}`} aria-pressed={selectedImage === thumb}
                onClick={() => setSelectedImage(thumb)}
                className={`relative shrink-0 w-full aspect-[3/4] rounded-md bg-card border-2 overflow-hidden transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${selectedImage === thumb ? 'border-primary' : 'border-border hover:border-primary/50'}`}>
                <Image src={thumb} alt={`${product.name} view ${index + 1}`} fill sizes="56px" className="object-contain p-1" />
              </button>)}
            </div>}
            <div className="relative flex-1 min-w-0 h-[360px] sm:h-[460px] lg:h-[480px] rounded-xl bg-muted overflow-hidden group">
              <Image src={selectedImage} alt={product.name} fill sizes="(max-width: 1024px) 80vw, 420px" className="object-contain" priority />
              <button type="button" aria-label={`${isInWishlist(product.id) ? 'Remove from' : 'Add to'} favourites`} aria-pressed={isInWishlist(product.id)}
                onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                className="absolute right-2 top-2 w-11 h-11 flex items-center justify-center rounded-full bg-background/80 text-foreground hover:bg-background transition-colors">
                <FiHeart className="w-5 h-5" fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
              </button>
              {gallery.length > 1 && <div className="absolute bottom-3 right-3 flex gap-1">
                <button type="button" aria-label="Previous product image" onClick={() => setSelectedImage(gallery[(gallery.indexOf(selectedImage) - 1 + gallery.length) % gallery.length])} className="w-11 h-11 bg-background/80 flex items-center justify-center hover:bg-background"><FiChevronLeft className="w-5 h-5" /></button>
                <button type="button" aria-label="Next product image" onClick={() => setSelectedImage(gallery[(gallery.indexOf(selectedImage) + 1) % gallery.length])} className="w-11 h-11 bg-background/80 flex items-center justify-center hover:bg-background"><FiChevronRight className="w-5 h-5" /></button>
              </div>}
            </div>
          </div>

          <div className="lg:pt-1 lg:max-w-md">
            <Link href={`/shop?category=${encodeURIComponent(product.category)}`} className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground hover:text-primary">
              {product.category}
            </Link>
            <h1 className="mt-3 text-[25px] sm:text-[28px] font-medium tracking-[-0.025em] text-foreground leading-[1.3] break-words">
              {product.name}
            </h1>
            <div className="mt-4 flex items-baseline gap-2">
              <p className="text-[26px] font-semibold tracking-tight text-foreground tabular-nums">
                ৳{Number(product.price).toLocaleString('en-BD', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <span className="text-[10px] tracking-wider text-muted-foreground">BDT</span>
            </div>

            <div className="mt-6 border-t border-border pt-5 space-y-5">
              <ProductColorSelector colors={product.colors || []} selectedColor={selectedColor} onChange={setColorChoice} />
              <fieldset>
                <legend className="text-xs font-medium text-foreground mb-3">Size <span className="text-muted-foreground font-normal ml-2">{selectedSize}</span></legend>
                <div className="flex flex-wrap gap-2">
                  {(product.sizes || []).map(size => (
                    <button
                      key={size}
                      type="button"
                      aria-pressed={selectedSize === size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-12 h-11 px-3 rounded-md border text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${selectedSize === size
                        ? 'bg-foreground/5 text-foreground border-foreground ring-1 ring-foreground'
                        : 'border-border text-foreground hover:border-primary hover:bg-primary/5'}`}
                    >{size}</button>
                  ))}
                </div>
              </fieldset>

              <div className="border-t border-border pt-5">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <p id="quantity-label" className="font-medium text-foreground">Quantity</p>
                  {quantity > 1 && <p className="text-muted-foreground" aria-live="polite">Total <span className="ml-1 font-semibold text-foreground tabular-nums">৳{(product.price * quantity).toLocaleString('en-BD', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></p>}
                </div>
                <div className="flex items-stretch gap-3">
                  <div className="inline-flex shrink-0 items-center rounded-md border border-input overflow-hidden bg-background" role="group" aria-labelledby="quantity-label">
                    <button type="button" aria-label="Decrease quantity" disabled={quantity <= 1}
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-11 min-h-12 flex items-center justify-center hover:bg-muted disabled:opacity-35 disabled:cursor-not-allowed transition-colors">
                      <FiMinus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-6 text-center text-xs font-semibold tabular-nums" aria-live="polite">{quantity}</span>
                    <button type="button" aria-label="Increase quantity" disabled={product.stock <= quantity}
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="w-11 min-h-12 flex items-center justify-center hover:bg-muted disabled:opacity-35 disabled:cursor-not-allowed transition-colors">
                      <FiPlus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <button onClick={handleAddToCart} disabled={isAddingToCart || product.stock <= 0 || !selectedSize}
                    className="flex-1 min-w-0 min-h-12 px-3 rounded-md text-xs sm:text-sm font-medium bg-foreground text-background hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                    {isAddingToCart ? <FiCheck className="w-4 h-4 shrink-0" /> : <FiShoppingBag className="w-4 h-4 shrink-0" />}
                    {product.stock <= 0 ? 'Out of stock' : isAddingToCart ? 'Adding…' : 'Add to cart'}
                  </button>
                </div>
              </div>
            </div>

            <Link href="/shop" className="mt-3 inline-flex min-h-11 items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
              <FiArrowLeft className="w-4 h-4" /> Continue shopping
            </Link>
          </div>
        </div>

        {product.description && <section aria-labelledby="product-description" className="mt-8 sm:mt-10 border-t border-border pt-6 sm:pt-8 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-2">A closer look</p>
            <h2 id="product-description" className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">Product description</h2>
          </div>
          <ProductDescription text={product.description} />
        </section>}

        {/* Enhanced Suggested Products with PROPER Slider */}
        {suggestedProducts.length > 0 && (
          <div className="mt-12">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                You might also like
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Discover more amazing products from our {product.category} collection
              </p>
            </div>

            {/* Continuous Slider Container */}
            <div
              className="relative overflow-hidden"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >

              {/* Slider Track */}
              <div
                ref={sliderRef}
                className="flex"
                style={{ transform: `translateX(-${scrollPosition}px)` }}
              >
                {duplicatedProducts.map((suggestedProduct, index) => (
                  <div
                    key={`${suggestedProduct.id}-${index}`}
                    className="shrink-0 w-80 px-4" // Fixed width for continuous scroll
                  >
                    <div className="group bg-card rounded-2xl border border-border hover:border-primary transition-all duration-500 hover:shadow-2xl overflow-hidden">
                      <Link href={`/product/${suggestedProduct.id}`} className="block">
                        <div className="relative aspect-square overflow-hidden">
                          <Image
                            src={suggestedProduct.image}
                            alt={suggestedProduct.name}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                      </Link>

                      <div className="p-6">
                        <div className="mb-3">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            {suggestedProduct.category}
                          </span>
                        </div>

                        <Link href={`/product/${suggestedProduct.id}`}>
                          <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                            {suggestedProduct.name}
                          </h3>
                        </Link>

                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-foreground">
                            ৳{suggestedProduct.price}
                          </span>
                          <Link
                            href={`/product/${suggestedProduct.id}`}
                            className="text-primary hover:text-primary/80 font-medium text-sm"
                          >
                            View Details →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
