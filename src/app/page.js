'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCatalog } from '../context/CatalogContext';
import CollectionSlider from '../components/CollectionSlider';
import CategoryCollection from '../components/CategoryCollection';
import ProductCard from '../components/ProductCard';
import ClothingRail from '../components/ClothingRail';
import dynamic from 'next/dynamic';
const QuickViewModal = dynamic(() => import('../components/QuickViewModal'));
import { FiChevronRight, FiChevronLeft, FiStar, FiShoppingBag, FiShield } from 'react-icons/fi';

export default function Home() {
  const { products, categories, categoryImages = {}, loading: catalogLoading, error: catalogError } = useCatalog();
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const closeQuickView = useCallback(() => { setIsQuickViewOpen(false); setQuickViewProduct(null); }, []);
  const [{ currentSlide, loadedSlides }, setCarousel] = useState({ currentSlide: 0, loadedSlides: [0] });
  const setCurrentSlide = useCallback((update) => {
    setCarousel(previous => {
      const next = typeof update === 'function' ? update(previous.currentSlide) : update;
      return { currentSlide: next, loadedSlides: previous.loadedSlides.includes(next) ? previous.loadedSlides : [...previous.loadedSlides, next] };
    });
  }, []);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const trendingProducts = [...products.filter(p => p.featured), ...products.filter(p => !p.featured)].slice(0, 6);

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
    if (!isAutoPlaying || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const interval = setInterval(() => {
      if (!document.hidden) setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length, setCurrentSlide]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length, setCurrentSlide]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length, setCurrentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Hero Carousel Section */}
      <section
        className="relative min-h-[80svh] py-16 sm:py-12 flex items-center justify-center overflow-hidden bg-background"
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
                {loadedSlides.includes(index) && <Image
                  src={slide.image}
                  alt=""
                  fill
                  sizes="100vw"
                  fetchPriority={index === 0 ? 'high' : 'low'}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className="object-cover"
                />}
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
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-gold-500/5 rounded-full blur-2xl animate-pulse-slow"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gold-500/5 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
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
              <span className="text-white drop-shadow-2xl">
                {slides[currentSlide].title.split(' ')[0]}
              </span>
              <br />
              <span className="text-gold-200 drop-shadow-2xl">
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
              className="w-11 h-11 flex items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-white"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? 'true' : undefined}
            >
              <span aria-hidden="true" className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'}`} />
            </button>
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

      <ClothingRail products={products}/>

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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated collections designed to meet your every need with style and quality.
            </p>
          </div>

          <CategoryCollection count={categories.length}>
            {categories.map((category, index) => (
              <Link
                key={category}
                href={`/shop?category=${encodeURIComponent(category)}`}
                className="home-category-card group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border"
              >
                {/* Uploaded category cover */}
                <div className="relative h-48 bg-muted flex items-center justify-center overflow-hidden">
                  {categoryImages[category] && <Image
                    src={categoryImages[category]}
                    alt={`${category} collection`}
                    fill
                    sizes="284px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />}

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
                  <p className="text-muted-foreground text-sm mb-4">
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
          </CategoryCollection>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex border border-input items-center gap-2 bg-gold-600 dark:bg-gold-400 text-white dark:text-stone-900 px-8 py-4 rounded-lg font-semibold hover:bg-gold-700 dark:hover:bg-gold-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Browse All Categories
              <FiChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              Featured Collection
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked selections that combine exceptional quality with timeless design.
            </p>
          </div>

          <CollectionSlider count={trendingProducts.length} variant="products">
            {trendingProducts.map(product => <div key={product.id} className="home-featured-card"><ProductCard product={product} onQuickView={item => { setQuickViewProduct(item); setIsQuickViewOpen(true); }}/></div>)}
          </CollectionSlider>

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
      {isQuickViewOpen && <QuickViewModal
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={closeQuickView}
      />}

    </div>
  );
}
