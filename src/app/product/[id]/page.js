'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '../../../data/products';
import { useCart } from '../../../context/CartContext';

export default function ProductDetail() {
  const { addToCart } = useCart();
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [duplicatedProducts, setDuplicatedProducts] = useState([]);

  useEffect(() => {
    const productId = parseInt(params.id);
    const foundProduct = products.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.image);
      // Get suggested products from same category
      const suggested = products
        .filter(p => p.category === foundProduct.category && p.id !== productId)
        .slice(0, 8);
      setSuggestedProducts(suggested);
      // Duplicate for infinite scroll
      setDuplicatedProducts([...suggested, ...suggested, ...suggested]);
    }
  }, [params.id]);

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
    setIsAddingToCart(true);
    await new Promise(resolve => setTimeout(resolve, 800));

    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    setIsAddingToCart(false);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.88-6.08-2.32" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Product Not Found</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">The product you're looking for doesn't exist.</p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-gray-100 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Shop
            </Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-white font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images - Enhanced */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative aspect-square bg-slate-50 dark:bg-slate-800 rounded-3xl overflow-hidden group">
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />

              {/* Image Navigation */}
              <button
                onClick={() => {
                  const currentIndex = product.thumbnails.indexOf(selectedImage);
                  const prevIndex = currentIndex > 0 ? currentIndex - 1 : product.thumbnails.length - 1;
                  setSelectedImage(product.thumbnails[prevIndex]);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100"
              >
                <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={() => {
                  const currentIndex = product.thumbnails.indexOf(selectedImage);
                  const nextIndex = currentIndex < product.thumbnails.length - 1 ? currentIndex + 1 : 0;
                  setSelectedImage(product.thumbnails[nextIndex]);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100"
              >
                <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex justify-center space-x-4">
              {product.thumbnails.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(thumb)}
                  className={`shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${selectedImage === thumb
                    ? 'border-blue-500 shadow-lg shadow-blue-500/25 scale-105'
                    : 'border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500'
                    }`}
                >
                  <Image
                    src={thumb}
                    alt={`${product.name} view ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info - Enhanced */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                  {product.category}
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
                {product.name}
              </h1>

              {/* Rating & Price */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">4.8 (128 reviews)</span>
                </div>

                <div className="text-4xl font-black text-blue-600 dark:text-blue-400">
                  ${product.price}
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Product Description</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🚚', text: 'Free Shipping' },
                { icon: '↩️', text: '30-Day Returns' },
                { icon: '🛡️', text: '2-Year Warranty' },
                { icon: '📦', text: 'In Stock' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 text-slate-600 dark:text-slate-400">
                  <span className="text-xl">{feature.icon}</span>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-3">
                    Quantity
                  </label>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-xl flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors font-semibold text-slate-700 dark:text-slate-300"
                    >
                      −
                    </button>

                    <span className="text-2xl font-bold text-slate-900 dark:text-white w-16 text-center">
                      {quantity}
                    </span>

                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-xl flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors font-semibold text-slate-700 dark:text-slate-300"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-lg font-semibold text-slate-600 dark:text-slate-400">
                  Total: <span className="text-blue-600 dark:text-blue-400 text-2xl">${(product.price * quantity).toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center space-x-3 ${isAddingToCart
                    ? 'bg-green-600 scale-95 cursor-not-allowed'
                    : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-gray-100 hover:scale-105 active:scale-95'
                    } shadow-lg hover:shadow-xl`}
                >
                  {isAddingToCart ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Adding to Cart...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <span>Add {quantity} to Cart</span>
                    </>
                  )}
                </button>

                <Link
                  href="/shop"
                  className="w-full py-3 px-6 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl font-semibold hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-300 text-center block"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Suggested Products with PROPER Slider */}
        {suggestedProducts.length > 0 && (
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
                You might also like
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
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
                    <div className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-500 hover:shadow-2xl overflow-hidden">
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
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                            {suggestedProduct.category}
                          </span>
                        </div>

                        <Link href={`/product/${suggestedProduct.id}`}>
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                            {suggestedProduct.name}
                          </h3>
                        </Link>

                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-slate-900 dark:text-white">
                            ${suggestedProduct.price}
                          </span>
                          <Link
                            href={`/product/${suggestedProduct.id}`}
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
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
