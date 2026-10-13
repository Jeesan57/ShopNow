'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCatalog } from '../context/CatalogContext';
import { useCart } from '../context/CartContext';
import QuickViewModal from '../components/QuickViewModal';
import { FiChevronRight, FiHeart, FiChevronLeft, FiStar, FiShoppingBag, FiShield } from 'react-icons/fi';

export default function Home() {
  const { products, categories, loading: catalogLoading, error: catalogError } = useCatalog();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedSizes, setSelectedSizes] = useState({});
  const trendingProducts = [...products.filter(p => p.featured), ...products.filter(p => !p.featured)].slice(0, 6);

  const setSize = (productId, size) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  const getSize = (productId) => selectedSizes[productId];

  // Professional carousel slides data
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "ELEVATE YOUR STYLE",
      subtitle: "Discover curated collections of premium products designed for the modern lifestyle. Quality meets innovation in every piece.",
      badge: "New Collection",
      cta: "Shop Now",
      stats: [
        { number: String(products.length), label: 'Available Products', icon: FiStar },
        { number: String(categories.length), label: 'Collections', icon: FiShoppingBag },
        { number: 'COD', label: 'Cash on Delivery', icon: FiShield }
      ]
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "LUXURY REDEFINED",
      subtitle: "Experience unparalleled craftsmanship and timeless elegance. Each piece tells a story of sophistication and style.",
      badge: "Curated Styles",
      cta: "Explore Luxury",
      stats: [
        { number: String(products.length), label: 'Available Products', icon: FiStar },
        { number: String(categories.length), label: 'Collections', icon: FiShoppingBag },
        { number: 'COD', label: 'Cash on Delivery', icon: FiShield }
      ]
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "MODERN ESSENTIALS",
      subtitle: "From casual wear to formal attire, find everything you need for your contemporary lifestyle. Comfort meets style.",
      badge: "Everyday Fashion",
      cta: "Discover More",
      stats: [
        { number: String(products.length), label: 'Available Products', icon: FiStar },
        { number: String(categories.length), label: 'Collections', icon: FiShoppingBag },
        { number: 'COD', label: 'Cash on Delivery', icon: FiShield }
      ]
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Hero Carousel Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Background Slides with Parallax Effect */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-out ${index === currentSlide
                ? 'opacity-100'
                : 'opacity-0 pointer-events-none'
                }`}
            >
              {/* Parallax Background Image */}
              <div
                className="absolute inset-0 transform transition-transform duration-10000 ease-out"
                style={{
                  transform: `scale(${index === currentSlide ? 1.1 : 1})`,
                  transition: 'transform 20s ease-out'
                }}
              >
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Enhanced Gradient Overlay for Better Text Visibility */}
              <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-black/30"></div>
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/30"></div>
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/40"></div>
            </div>
          ))}
        </div>

        {/* Subtle Animated Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/5 rounded-full blur-2xl animate-pulse-slow"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/5 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-20 border border-white/20"
          aria-label="Previous slide"
        >
          <FiChevronLeft className="w-5 h-5 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-20 border border-white/20"
          aria-label="Next slide"
        >
          <FiChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white/90">
                {slides[currentSlide].badge}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-transparent bg-linear-to-r from-white to-gray-200 bg-clip-text drop-shadow-2xl">
                {slides[currentSlide].title.split(' ')[0]}
              </span>
              <br />
              <span className="text-transparent bg-linear-to-r from-gray-200 to-gray-300 bg-clip-text drop-shadow-2xl">
                {slides[currentSlide].title.split(' ').slice(1).join(' ')}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-2xl font-medium">
              {slides[currentSlide].subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link
                href="/shop"
                className="group relative bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 border-2 border-white/20 shadow-2xl"
              >
                <span className="relative flex items-center gap-2">
                  {slides[currentSlide].cta}
                  <FiChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>

              <Link
                href="/about"
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-white hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm shadow-2xl"
              >
                Our Story
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
              {slides[currentSlide].stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg backdrop-blur-sm mb-3 border border-white/10">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1 drop-shadow-2xl">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/90 font-medium drop-shadow-2xl">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black/20 z-20">
          <div
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </section>

      {/* Minimal Categories Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              Categories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Shop By Category
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Discover our carefully curated collections designed to meet your every need with style and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {categories.map((category, index) => (
              <Link
                key={category}
                href={`/shop?category=${category}`}
                className="group w-full max-w-sm bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border"
              >
                {/* Category Image - Real Images */}
                <div className="relative h-48 bg-muted flex items-center justify-center overflow-hidden">
                  {category === "Men" && (
                    <img
                      src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=300&fit=crop"
                      alt="Men's Fashion"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  {category === "Women" && (
                    <img
                      src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=300&fit=crop"
                      alt="Women's Fashion"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  {category === "Kids" && (
                    <img
                      src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=400&h=300&q=80"
                      alt="Kids Fashion"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  {category === "Accessories" && (
                    <img
                      src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=300&fit=crop"
                      alt="Accessories"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-sm font-semibold text-foreground">{category}</span>
                  </div>
                </div>

                {/* Category Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category} Collection
                  </h3>
                  <p className="text-muted text-sm mb-4">
                    Explore our premium {category.toLowerCase()} selection
                  </p>

                  {/* View Products Link */}
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-primary text-sm font-medium">
                      Shop Now
                    </span>
                    <FiChevronRight className="w-4 h-4 text-primary transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex border border-input items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Browse All Categories
              <FiChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              Featured Collection
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Products
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Handpicked selections that combine exceptional quality with timeless design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border"
              >
                <div className="relative overflow-hidden">
                  <Link href={`/product/${product.id}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </Link>

                  {/* Wishlist button */}
                  <button
                    onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                    className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${isInWishlist(product.id)
                      ? 'bg-red-500 text-white shadow-lg'
                      : 'bg-card/90 text-muted hover:bg-card hover:shadow-lg'
                      }`}
                  >
                    <FiHeart className="w-6 h-6" fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>

                <div className="p-6">
                  <Link href={`/product/${product.id}`}>
                    <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-foreground">৳{product.price}</span>
                    <div className="flex items-center text-sm text-yellow-600">
                      ★★★★☆
                    </div>
                  </div>

                  {/* Size Selection */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Size
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {(product.sizes || []).map((size) => (
                        <button
                          key={size}
                          onClick={() => setSize(product.id, size)}
                          className={`px-3 py-1 rounded-lg border text-sm font-medium transition-all ${getSize(product.id) === size
                              ? 'bg-primary text-primary-foreground border-primary'
                              : 'border-border text-muted-foreground hover:border-primary hover:text-primary'
                            }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => {
                        const selectedSize = getSize(product.id);
                        if (!selectedSize) {
                          alert('Please select a size before adding to cart.');
                          return;
                        }
                        addToCart(product, selectedSize);
                      }}
                      className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-border"
                    >
                      Add to Cart
                    </button>

                    <button
                      onClick={() => {
                        setQuickViewProduct(product);
                        setIsQuickViewOpen(true);
                      }}
                      className="w-full border-2 border-border text-foreground py-2 rounded-xl font-medium hover:bg-slate-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View all products CTA */}
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 border-2 border-border text-foreground px-8 py-4 rounded-xl font-bold hover:border-foreground/50 hover:bg-muted transition-all duration-300"
            >
              View All Products
              <FiChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={() => {
          setIsQuickViewOpen(false);
          setQuickViewProduct(null);
        }}
      />

    </div>
  );
}
