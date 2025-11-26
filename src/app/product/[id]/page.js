'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '../../../data/products';
import { useCart } from '../../../context/CartContext';
import { FiUser, FiArrowLeft, FiChevronLeft, FiChevronRight, FiStar, FiCheck, FiPlus, FiMinus } from 'react-icons/fi';

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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
            <FiUser className="w-8 h-8 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Product Not Found</h2>
          <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
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

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
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

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images - Enhanced */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative aspect-square bg-muted rounded-3xl overflow-hidden group">
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
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100 border border-slate-700"
              >
                <FiChevronLeft className="w-5 h-5 text-white" />
              </button>

              <button
                onClick={() => {
                  const currentIndex = product.thumbnails.indexOf(selectedImage);
                  const nextIndex = currentIndex < product.thumbnails.length - 1 ? currentIndex + 1 : 0;
                  setSelectedImage(product.thumbnails[nextIndex]);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100 border border-slate-700"
              >
                <FiChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex justify-center space-x-4">
              {product.thumbnails.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(thumb)}
                  className={`shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${selectedImage === thumb
                    ? 'border-primary shadow-lg shadow-primary/25 scale-105'
                    : 'border-border hover:border-input'
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
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-primary/10 text-primary">
                  {product.category}
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-black text-foreground mb-4 leading-tight">
                {product.name}
              </h1>

              {/* Rating & Price */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">4.8 (128 reviews)</span>
                </div>

                <div className="text-4xl font-black text-primary">
                  ${product.price}
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Product Description</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
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
                <div key={index} className="flex items-center space-x-3 text-muted-foreground">
                  <span className="text-xl">{feature.icon}</span>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-6">
              <div className="flex items-end justify-between flex-wrap gap-6">

                {/* Quantity Section */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Quantity
                  </label>

                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 bg-card border border-input rounded-xl flex items-center justify-center hover:bg-muted transition-colors font-semibold text-foreground"
                    >
                      <FiMinus className="w-6 h-6" />
                    </button>

                    <span className="text-2xl font-bold text-foreground w-16 text-center">
                      {quantity}
                    </span>

                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 bg-card border border-input rounded-xl flex items-center justify-center hover:bg-muted transition-colors font-semibold text-foreground"
                    >
                      <FiPlus className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Total Section */}
                <div className="ml-auto text-lg font-semibold text-muted-foreground">
                  Total: <span className="text-primary dark:text-blue-400">${(product.price * quantity).toFixed(2)}</span>
                </div>


              </div>

              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                  className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 ${isAddingToCart
                    ? 'bg-green-600 text-white scale-95 cursor-not-allowed'
                    : 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 border border-border dark:hover:bg-gray-100 hover:scale-101 active:scale-99'
                    } shadow-lg hover:shadow-xl`}
                >
                  {isAddingToCart ? (
                    <>
                      <FiCheck className="w-6 h-6 animate-spin" />
                      <span>Adding to Cart...</span>
                    </>
                  ) : (
                    <>
                      <FiPlus className="w-6 h-6" />
                      <span>Add {quantity} to Cart</span>
                    </>
                  )}
                </button>

                <Link
                  href="/shop"
                  className="w-full py-3 px-6 border-2 border-border text-foreground rounded-xl font-semibold hover:border-input dark:hover:border-slate-500 hover:bg-muted hover:scale-101 active:scale-99 transition-all duration-300 text-center block"
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
              <h2 className="text-4xl font-black text-foreground mb-4">
                You might also like
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                            ${suggestedProduct.price}
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
