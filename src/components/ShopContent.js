'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductSkeleton from './ProductSkeleton';
import QuickViewModal from './QuickViewModal';

export default function ShopContent() {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [productsPerPage, setProductsPerPage] = useState(12); // Changed to state
  const [addedProducts, setAddedProducts] = useState(new Set());
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });

  // Handle URL search params
  useEffect(() => {
    const searchParam = searchParams.get('search');
    const categoryParam = searchParams.get('category');
    const pageParam = searchParams.get('page');

    if (searchParam) {
      setSearchQuery(searchParam);
    }
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    if (pageParam) {
      const page = parseInt(pageParam);
      if (page > 0) setCurrentPage(page);
    }
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      let filtered = products;

      if (searchQuery) {
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      if (selectedCategory !== 'All') {
        filtered = filtered.filter(product => product.category === selectedCategory);
      }

      // Price range filter
      filtered = filtered.filter(product =>
        product.price >= priceRange.min && product.price <= priceRange.max
      );

      if (sortBy === 'price-low') {
        filtered = [...filtered].sort((a, b) => a.price - b.price);
      } else if (sortBy === 'price-high') {
        filtered = [...filtered].sort((a, b) => b.price - a.price);
      } else if (sortBy === 'newest') {
        filtered = [...filtered].sort((a, b) => b.id - a.id);
      } else {
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      }

      setFilteredProducts(filtered);

      // Reset to first page if current page exceeds total pages after filtering
      const totalPages = Math.ceil(filtered.length / productsPerPage);
      if (currentPage > totalPages && totalPages > 0) {
        setCurrentPage(1);
      }

      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [selectedCategory, sortBy, searchQuery, currentPage, productsPerPage, priceRange]);

  // Update URL with current page
  useEffect(() => {
    const url = new URL(window.location);
    if (currentPage > 1) {
      url.searchParams.set('page', currentPage.toString());
    } else {
      url.searchParams.delete('page');
    }
    window.history.replaceState({}, '', url);
  }, [currentPage]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;

    setCurrentPage(pageNumber);

    // Use requestAnimationFrame for better timing
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const productsSection = document.getElementById('products-section');
        if (productsSection) {
          productsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });
  };


  const handleQuickView = (product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const generatePaginationRange = () => {
    const delta = 1; // Number of pages to show on each side of current page
    const range = [];
    const rangeWithDots = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        rangeWithDots.push(i);
      }
      return rangeWithDots;
    }

    if (currentPage <= 4) {
      for (let i = 1; i <= 5; i++) {
        range.push(i);
      }
      range.push('...');
      range.push(totalPages);
    } else if (currentPage >= totalPages - 3) {
      range.push(1);
      range.push('...');
      for (let i = totalPages - 4; i <= totalPages; i++) {
        range.push(i);
      }
    } else {
      range.push(1);
      range.push('...');
      range.push(currentPage - 1, currentPage, currentPage + 1);
      range.push('...');
      range.push(totalPages);
    }

    return range;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && currentPage > 1) {
        paginate(currentPage - 1);
      } else if (e.key === 'ArrowRight' && currentPage < totalPages) {
        paginate(currentPage + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Professional Header */}
      <div className="relative bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-6 ">
          <div className="text-center">
            {/* Main heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1">
              <span className="bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Shop Excellence
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-md md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-6">
              Discover handpicked products where quality craftsmanship meets timeless design
            </p>
          </div>
        </div>

        {/* Wave separator */}
        <div id="products-section" className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-8 fill-white dark:fill-slate-900">
            <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-10 py-8">
        {/* Mobile Search and Filter Bar */}
        <div className="lg:hidden mb-6">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-11 pr-12 border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-10 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  aria-label="Clear search"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              <button
                onClick={() => setShowMobileFilters(true)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                aria-label="Open filters"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Professional Sidebar */}
          <div className="hidden lg:block lg:w-80 shrink-0">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 sticky top-8">
              <div className="space-y-8">
                {/* Search */}
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-4 text-lg">Search</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-3 pl-11 pr-11 border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500"
                    />
                    <svg
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                        aria-label="Clear search"
                      >
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-4 text-lg">Categories</h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => setSelectedCategory('All')}
                      className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${selectedCategory === 'All'
                        ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 border border-blue-200 dark:border-blue-800'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 border border-transparent'
                        }`}
                    >
                      <span>All Products</span>
                      <span className="text-sm opacity-70">{products.length}</span>
                    </button>
                    {categories.map((category) => {
                      const categoryCount = products.filter(p => p.category === category).length;
                      return (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${selectedCategory === category
                            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 border border-blue-200 dark:border-blue-800'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 border border-transparent'
                            }`}
                        >
                          <span>{category}</span>
                          <span className="text-sm opacity-70">{categoryCount}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-4 text-lg">Price Range</h3>
                  <div className="space-y-4">
                    {/* Min & Max Inputs */}
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">Min Price</label>
                        <input
                          type="number"
                          value={priceRange.min}
                          onChange={(e) => {
                            const value = Math.min(Number(e.target.value), priceRange.max - 1);
                            setPriceRange(prev => ({ ...prev, min: value }));
                          }}
                          className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                          min="0"
                          max="200"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">Max Price</label>
                        <input
                          type="number"
                          value={priceRange.max}
                          onChange={(e) => {
                            const value = Math.max(Number(e.target.value), priceRange.min + 1);
                            setPriceRange(prev => ({ ...prev, max: value }));
                          }}
                          className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                          min="0"
                          max="200"
                        />
                      </div>
                    </div>

                    {/* Dual-Thumb Range Slider */}
                    <div className="relative px-2">
                      <div className="relative h-8 flex items-center">
                        {/* Track Background */}
                        <div className="absolute h-2 w-full bg-slate-200 dark:bg-slate-600 rounded-full"></div>

                        {/* Filled Track Between Thumbs */}
                        <div
                          className="absolute h-2 bg-blue-500 rounded-full"
                          style={{
                            left: `${(priceRange.min / 200) * 100}%`,
                            right: `${100 - (priceRange.max / 200) * 100}%`,
                          }}
                        ></div>

                        {/* Min Slider */}
                        <input
                          type="range"
                          min="0"
                          max="200"
                          value={priceRange.min}
                          onChange={(e) => {
                            const value = Math.min(Number(e.target.value), priceRange.max - 1);
                            setPriceRange(prev => ({ ...prev, min: value }));
                          }}
                          className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-0 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0"
                        />

                        {/* Max Slider */}
                        <input
                          type="range"
                          min="0"
                          max="200"
                          value={priceRange.max}
                          onChange={(e) => {
                            const value = Math.max(Number(e.target.value), priceRange.min + 1);
                            setPriceRange(prev => ({ ...prev, max: value }));
                          }}
                          className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-0 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>


                {/* Sort */}
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-4 text-lg">Sort By</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  >
                    <option value="name">Name A-Z</option>
                    <option value="newest">Newest First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  {selectedCategory === 'All' ? 'All Products' : selectedCategory}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  {filteredProducts.length} products found
                </p>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {isLoading ? (
                Array.from({ length: productsPerPage }, (_, index) => (
                  <ProductSkeleton key={`skeleton-${index}`} />
                ))
              ) : currentProducts.length > 0 ? (
                currentProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="relative aspect-4/3 overflow-hidden rounded-t-2xl">
                      <Link href={`/product/${product.id}`}>
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </Link>

                      {/* Wishlist Button */}
                      <button
                        onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                        className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-sm transition-all duration-300 z-10 ${isInWishlist(product.id)
                          ? 'bg-red-500 text-white shadow-lg'
                          : 'bg-white/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 shadow-md'
                          }`}
                      >
                        <svg className="w-5 h-5" fill={isInWishlist(product.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>

                      {/* Quick View Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end justify-center p-4">
                        <button
                          onClick={() => handleQuickView(product)}
                          className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 bg-white text-slate-900 px-4 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                          Quick View
                        </button>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="mb-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                          {product.category}
                        </span>
                      </div>

                      <Link href={`/product/${product.id}`}>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {product.name}
                        </h3>
                      </Link>

                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-slate-900 dark:text-white">
                          ${product.price}
                        </span>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);

                            // Add to tracked products
                            setAddedProducts(prev => new Set(prev).add(product.id));

                            // Reset after 2 seconds
                            setTimeout(() => {
                              setAddedProducts(prev => {
                                const newSet = new Set(prev);
                                newSet.delete(product.id);
                                return newSet;
                              });
                            }, 2000);
                          }}
                          className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg min-w-[120px] flex items-center justify-center gap-2 ${addedProducts.has(product.id)
                            ? 'bg-green-600 text-white scale-95'
                            : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-gray-100 active:scale-95'
                            }`}
                        >
                          {addedProducts.has(product.id) ? (
                            <>
                              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Added!
                            </>
                          ) : (
                            'Add to Cart'
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <div className="w-20 h-20 mx-auto mb-6 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0H4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">No products found</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">
                    We couldn't find any products matching your criteria. Try adjusting your search or filters.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>

            {/* Professional Pagination */}
            {filteredProducts.length > 0 && (
              <div className="mt-16">
                {/* Minimal Header - Responsive */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                  <div className="text-sm text-slate-600 dark:text-slate-400 text-center sm:text-left">
                    Showing <span className="font-semibold text-slate-900 dark:text-white">
                      {Math.min(indexOfFirstProduct + 1, filteredProducts.length)}-{Math.min(indexOfLastProduct, filteredProducts.length)}
                    </span> of{' '}
                    <span className="font-semibold text-slate-900 dark:text-white">{filteredProducts.length}</span> products
                    {totalPages > 1 && (
                      <span className="hidden xs:inline">
                        {' '}• Page <span className="font-semibold text-slate-900 dark:text-white">{currentPage}</span> of <span className="font-semibold text-slate-900 dark:text-white">{totalPages}</span>
                      </span>
                    )}
                  </div>

                  {/* Working Page Size Selector - Responsive */}
                  <div className="flex items-center gap-2 text-sm">
                    <span className="hidden xs:inline text-slate-600 dark:text-slate-400">Show</span>
                    <select
                      value={productsPerPage}
                      onChange={(e) => {
                        const newPerPage = parseInt(e.target.value);
                        setProductsPerPage(newPerPage);
                        setCurrentPage(1);
                      }}
                      className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    >
                      <option value="6">6</option>
                      <option value="12">12</option>
                      <option value="24">24</option>
                      <option value="48">48</option>
                    </select><span className="text-slate-600 dark:text-slate-400">per page</span>

                  </div>
                </div>

                {/* Show pagination controls only when there are multiple pages */}
                {totalPages > 1 && (
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
                    {/* Navigation Buttons - Responsive */}
                    <div className="flex items-center gap-1 sm:gap-2 order-2 sm:order-1 w-full sm:w-auto justify-center">
                      <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center px-2 sm:px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm sm:text-base"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="hidden xs:inline">Previous</span>
                        <span className="xs:hidden">Prev</span>
                      </button>

                      {/* Page Numbers - Responsive */}
                      <div className="flex items-center gap-1 mx-1 sm:mx-2">
                        {generatePaginationRange().map((page, index) => {
                          if (page === '...') {
                            return (
                              <span
                                key={`ellipsis-${index}`}
                                className="px-1 sm:px-2 py-1 text-slate-400 dark:text-slate-500 text-sm"
                              >
                                ...
                              </span>
                            );
                          }
                          return (
                            <button
                              key={page}
                              onClick={() => paginate(page)}
                              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg font-medium transition-colors text-sm sm:text-base ${currentPage === page
                                ? 'bg-blue-600 text-white shadow-sm'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
                                }`}
                            >
                              {page}
                            </button>
                          );
                        })}
                      </div>

                      <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="flex items-center px-2 sm:px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm sm:text-base"
                      >
                        <span className="hidden xs:inline">Next</span>
                        <span className="xs:hidden">Next</span>
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>

                    {/* Quick Jump - Responsive */}
                    <div className="flex items-center gap-2 text-sm order-1 sm:order-2 mb-4 sm:mb-0 w-full sm:w-auto justify-center">
                      <span className="text-slate-600 dark:text-slate-400 hidden xs:inline">Go to:</span>
                      <span className="text-slate-600 dark:text-slate-400 xs:hidden">Page:</span>
                      <input
                        type="number"
                        min="1"
                        max={totalPages}
                        className="w-12 sm:w-16 px-2 py-1 border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            const page = parseInt(e.target.value);
                            if (page >= 1 && page <= totalPages) {
                              paginate(page);
                              e.target.value = '';
                            }
                          }
                        }}
                        placeholder="#"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Enhanced Overlay with subtle animation */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setShowMobileFilters(false)}
          />

          {/* Enhanced Filters Panel with smooth slide-up */}
          <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 rounded-t-3xl border border-slate-200 dark:border-slate-700 shadow-2xl transform transition-transform duration-300 max-h-[85vh] overflow-hidden">
            {/* Elegant Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-slate-900 dark:bg-white rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white dark:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Refine Products</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Adjust your preferences</p>
                </div>
              </div>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Filters Content with enhanced UX */}
            <div className="p-6 space-y-8 overflow-y-auto max-h-[60vh]">
              {/* Categories with visual indicators */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white text-base">Categories</h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">
                    {categories.length + 1} options
                  </span>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className={`flex items-center justify-between w-full text-left p-4 rounded-xl transition-all duration-200 group ${selectedCategory === 'All'
                      ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-700 border border-transparent'
                      }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full border-2 transition-all ${selectedCategory === 'All'
                        ? 'bg-blue-500 border-blue-500'
                        : 'border-slate-300 dark:border-slate-600 group-hover:border-blue-400'
                        }`} />
                      <span className={`font-medium ${selectedCategory === 'All'
                        ? 'text-blue-700 dark:text-blue-300'
                        : 'text-slate-700 dark:text-slate-300'
                        }`}>
                        All Products
                      </span>
                    </div>
                    <span className={`text-sm px-2 py-1 rounded-full min-w-8 text-center ${selectedCategory === 'All'
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200'
                      : 'text-slate-500 dark:text-slate-400'
                      }`}>
                      {products.length}
                    </span>
                  </button>

                  {categories.map((category) => {
                    const categoryCount = products.filter(p => p.category === category).length;
                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`flex items-center justify-between w-full text-left p-4 rounded-xl transition-all duration-200 group ${selectedCategory === category
                          ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-700 border border-transparent'
                          }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full border-2 transition-all ${selectedCategory === category
                            ? 'bg-blue-500 border-blue-500'
                            : 'border-slate-300 dark:border-slate-600 group-hover:border-blue-400'
                            }`} />
                          <span className={`font-medium ${selectedCategory === category
                            ? 'text-blue-700 dark:text-blue-300'
                            : 'text-slate-700 dark:text-slate-300'
                            }`}>
                            {category}
                          </span>
                        </div>
                        <span className={`text-sm px-2 py-1 rounded-full min-w-8 text-center ${selectedCategory === category
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200'
                          : 'text-slate-500 dark:text-slate-400'
                          }`}>
                          {categoryCount}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white text-base">Price Range</h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">
                    ${priceRange.min} - ${priceRange.max}
                  </span>
                </div>
                <div className="space-y-6">
                  {/* Price Input Fields */}
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">Min Price</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 dark:text-slate-400 font-medium">$</span>
                        <input
                          type="number"
                          value={priceRange.min}
                          onChange={(e) => setPriceRange(prev => ({ ...prev, min: Math.min(Number(e.target.value), prev.max) }))}
                          className="w-full pl-8 pr-3 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-medium"
                          min="0"
                          max="200"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">Max Price</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 dark:text-slate-400 font-medium">$</span>
                        <input
                          type="number"
                          value={priceRange.max}
                          onChange={(e) => setPriceRange(prev => ({ ...prev, max: Math.max(Number(e.target.value), prev.min) }))}
                          className="w-full pl-8 pr-3 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-medium"
                          min="0"
                          max="200"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Custom Dual Range Slider */}
                  <div className="relative px-2">
                    {/* Track Background */}
                    <div className="relative h-3 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                      {/* Active Track */}
                      <div
                        className="absolute top-0 h-full bg-linear-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-200"
                        style={{
                          left: `${(priceRange.min / 200) * 100}%`,
                          width: `${((priceRange.max - priceRange.min) / 200) * 100}%`
                        }}
                      />
                      {/* Track Pattern */}
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] bg-[length:20px_100%]" />
                    </div>

                    {/* Min Thumb */}
                    <div
                      className="absolute top-1/2 w-6 h-6 bg-white dark:bg-slate-800 border-2 border-blue-500 rounded-full shadow-lg cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-all duration-200"
                      style={{ left: `${(priceRange.min / 200) * 100}%` }}
                      onMouseDown={(e) => {
                        const startX = e.clientX;
                        const startValue = priceRange.min;

                        const handleMouseMove = (e) => {
                          const deltaX = e.clientX - startX;
                          const deltaValue = (deltaX / 300) * 200;
                          const newValue = Math.max(0, Math.min(priceRange.max - 1, startValue + deltaValue));
                          setPriceRange(prev => ({ ...prev, min: Math.round(newValue) }));
                        };

                        const handleMouseUp = () => {
                          document.removeEventListener('mousemove', handleMouseMove);
                          document.removeEventListener('mouseup', handleMouseUp);
                        };

                        document.addEventListener('mousemove', handleMouseMove);
                        document.addEventListener('mouseup', handleMouseUp);
                      }}
                    >
                      <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20" />
                    </div>

                    {/* Max Thumb */}
                    <div
                      className="absolute top-1/2 w-6 h-6 bg-white dark:bg-slate-800 border-2 border-blue-500 rounded-full shadow-lg cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-all duration-200"
                      style={{ left: `${(priceRange.max / 200) * 100}%` }}
                      onMouseDown={(e) => {
                        const startX = e.clientX;
                        const startValue = priceRange.max;

                        const handleMouseMove = (e) => {
                          const deltaX = e.clientX - startX;
                          const deltaValue = (deltaX / 300) * 200;
                          const newValue = Math.min(200, Math.max(priceRange.min + 1, startValue + deltaValue));
                          setPriceRange(prev => ({ ...prev, max: Math.round(newValue) }));
                        };

                        const handleMouseUp = () => {
                          document.removeEventListener('mousemove', handleMouseMove);
                          document.removeEventListener('mouseup', handleMouseUp);
                        };

                        document.addEventListener('mousemove', handleMouseMove);
                        document.addEventListener('mouseup', handleMouseUp);
                      }}
                    >
                      <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20" />
                    </div>

                    {/* Value Labels */}
                    <div className="flex justify-between mt-3 text-sm text-slate-600 dark:text-slate-400">
                      <span className="font-medium">${priceRange.min}</span>
                      <span className="font-medium">${priceRange.max}</span>
                    </div>
                  </div>

                  {/* Quick Price Presets */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: 'Under $50', min: 0, max: 50 },
                      { label: '$50 - $100', min: 50, max: 100 },
                      { label: '$100 - $150', min: 100, max: 150 },
                      { label: 'Over $150', min: 150, max: 200 }
                    ].map((preset) => (
                      <button
                        key={preset.label}
                        onClick={() => setPriceRange({ min: preset.min, max: preset.max })}
                        className={`px-3 py-2 text-sm rounded-lg border transition-all duration-200 ${priceRange.min === preset.min && priceRange.max === preset.max
                            ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-600 text-blue-700 dark:text-blue-300'
                            : 'bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400 hover:border-blue-400 dark:hover:border-blue-500'
                          }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Sort Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white text-base">Sort By</h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">
                    Order
                  </span>
                </div>

                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-4 pl-12 pr-10 border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white appearance-none shadow-sm"
                  >
                    <option value="name">Name A-Z</option>
                    <option value="newest">Newest First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="p-6 border-t border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800">
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSortBy('name');
                    setPriceRange({ min: 0, max: 200 });
                  }}
                  className="flex-1 px-6 py-4 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Reset</span>
                </button>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="flex-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Apply Filters</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
