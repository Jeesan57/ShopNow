'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import ProductCard from './ProductCard';
import { useCatalog } from '../context/CatalogContext';
import ProductSkeleton from './ProductSkeleton';
import dynamic from 'next/dynamic';
const QuickViewModal = dynamic(() => import('./QuickViewModal'));
import { FiSearch, FiX, FiFilter, FiPackage, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function ShopContent() {
  const { products, categories, loading: catalogLoading, error: catalogError } = useCatalog();
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const closeQuickView = useCallback(() => { setIsQuickViewOpen(false); setQuickViewProduct(null); }, []);
  const [productsPerPage, setProductsPerPage] = useState(12);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [priceFilter, setPriceRange] = useState({ min: 0, max: null });
  const priceLimit = Math.max(1, Math.ceil(products.reduce((highest, product) => Math.max(highest, Number(product.price) || 0), 0)));
  const priceRange = {
    min: Math.min(priceFilter.min, priceLimit - 1),
    max: priceFilter.max === null ? priceLimit : Math.min(priceFilter.max, priceLimit),
  };

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
  }, [selectedCategory, sortBy, searchQuery, currentPage, productsPerPage, priceRange.min, priceRange.max, products]);

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
    const delta = 1;
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
    <div className="min-h-screen bg-background">
      {/* Professional Header */}
      <div className="relative bg-linear-to-br from-stone-900 via-gold-900 to-stone-800 dark:from-stone-900 dark:via-stone-800 dark:to-stone-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gold-500/20 dark:bg-gold-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gold-500/20 dark:bg-gold-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gold-500/10 dark:bg-gold-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-6">
          <div className="text-center">
            {/* Main heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1">
              <span className="text-gold-100">
                Shop Excellence
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-md md:text-xl text-gold-100 max-w-3xl mx-auto leading-relaxed mb-6">
              Discover handpicked products where quality craftsmanship meets timeless design
            </p>
          </div>
        </div>

        {/* Wave separator */}
        <div id="products-section" className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-8 fill-white dark:fill-background">
            <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-6 sm:px-10 py-8">
        {/* Mobile Search and Filter Bar */}
        <div className="lg:hidden mb-6">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-11 pr-12 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder-muted-foreground"
              />
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-10 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground hover:text-foreground"
                  aria-label="Clear search"
                >
                  <FiX />
                </button>
              )}
              <button
                onClick={() => setShowMobileFilters(true)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1.5 text-muted-foreground hover:text-foreground"
                aria-label="Open filters"
              >
                <FiFilter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Professional Sidebar */}
          <div className="hidden lg:block lg:w-80 shrink-0">
            <div className="bg-card rounded-xl border border-border p-6 sticky top-8">
              <div className="space-y-8">
                {/* Search */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4 text-lg">Search</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-3 pl-11 pr-11 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder-muted-foreground"
                    />
                    <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground hover:text-foreground"
                        aria-label="Clear search"
                      >
                        <FiX />
                      </button>
                    )}
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4 text-lg">Categories</h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => setSelectedCategory('All')}
                      className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${selectedCategory === 'All'
                        ? 'bg-primary/10 text-primary border border-primary/20'
                        : 'text-muted-foreground hover:bg-muted border border-transparent'
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
                            ? 'bg-primary/10 text-primary border border-primary/20'
                            : 'text-muted-foreground hover:bg-muted border border-transparent'
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
                  <h3 className="font-semibold text-foreground mb-4 text-lg">Price Range</h3>
                  <div className="space-y-4">
                    {/* Min & Max Inputs */}
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <label className="block text-sm text-muted-foreground mb-1">Min Price (৳)</label>
                        <input
                          type="number"
                          aria-label="Minimum price"
                          value={priceRange.min}
                          onChange={(e) => {
                            const value = Math.max(0, Math.min(Number(e.target.value), priceRange.max - 1));
                            setPriceRange(prev => ({ ...prev, min: value }));
                          }}
                          className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                          min="0"
                          max={priceLimit}
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm text-muted-foreground mb-1">Max Price (৳)</label>
                        <input
                          type="number"
                          aria-label="Maximum price"
                          value={priceRange.max}
                          onChange={(e) => {
                            const value = Math.min(priceLimit, Math.max(Number(e.target.value), priceRange.min + 1));
                            setPriceRange(prev => ({ ...prev, max: value >= priceLimit ? null : value }));
                          }}
                          className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                          min="0"
                          max={priceLimit}
                        />
                      </div>
                    </div>

                    {/* Dual-Thumb Range Slider */}
                    <div className="relative px-2">
                      <div className="relative h-8 flex items-center">
                        {/* Track Background */}
                        <div className="absolute h-2 w-full bg-stone-200 dark:bg-stone-600 rounded-full"></div>

                        {/* Filled Track Between Thumbs */}
                        <div
                          className="absolute h-2 bg-gold-500 rounded-full"
                          style={{
                            left: `${(priceRange.min / priceLimit) * 100}%`,
                            right: `${100 - (priceRange.max / priceLimit) * 100}%`,
                          }}
                        ></div>

                        {/* Min Slider */}
                        <input
                          type="range"
                          aria-label="Minimum price slider"
                          min="0"
                          max={priceLimit}
                          value={priceRange.min}
                          onChange={(e) => {
                            const value = Math.max(0, Math.min(Number(e.target.value), priceRange.max - 1));
                            setPriceRange(prev => ({ ...prev, min: value }));
                          }}
                          className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-gold-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-0 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-gold-500 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0"
                        />

                        {/* Max Slider */}
                        <input
                          type="range"
                          aria-label="Maximum price slider"
                          min="0"
                          max={priceLimit}
                          value={priceRange.max}
                          onChange={(e) => {
                            const value = Math.min(priceLimit, Math.max(Number(e.target.value), priceRange.min + 1));
                            setPriceRange(prev => ({ ...prev, max: value >= priceLimit ? null : value }));
                          }}
                          className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-gold-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-0 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-gold-500 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sort */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4 text-lg">Sort By</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
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
                <h2 className="text-2xl font-semibold text-foreground">
                  {selectedCategory === 'All' ? 'All Products' : selectedCategory}
                </h2>
                <p className="text-muted-foreground mt-1">
                  {filteredProducts.length} products found
                </p>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid justify-start gap-4" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 440px))'}}>
              {isLoading ? (
                Array.from({ length: productsPerPage }, (_, index) => (
                  <ProductSkeleton key={`skeleton-${index}`} />
                ))
              ) : currentProducts.length > 0 ? (
                currentProducts.map(product => <ProductCard key={product.id} product={product} onQuickView={handleQuickView} />)
              ) : (
                <div className="col-span-full text-center py-16">
                  <div className="w-20 h-20 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                    <FiPackage className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">No products found</h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    We couldn't find any products matching your criteria. Try adjusting your search or filters.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                    className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
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
                  <div className="text-sm text-muted-foreground text-center sm:text-left">
                    Showing <span className="font-semibold text-foreground">
                      {Math.min(indexOfFirstProduct + 1, filteredProducts.length)}-{Math.min(indexOfLastProduct, filteredProducts.length)}
                    </span> of{' '}
                    <span className="font-semibold text-foreground">{filteredProducts.length}</span> products
                    {totalPages > 1 && (
                      <span className="hidden xs:inline">
                        {' '}• Page <span className="font-semibold text-foreground">{currentPage}</span> of <span className="font-semibold text-foreground">{totalPages}</span>
                      </span>
                    )}
                  </div>

                  {/* Working Page Size Selector - Responsive */}
                  <div className="flex items-center gap-2 text-sm">
                    <span className="hidden xs:inline text-muted-foreground">Show</span>
                    <select
                      value={productsPerPage}
                      onChange={(e) => {
                        const newPerPage = parseInt(e.target.value);
                        setProductsPerPage(newPerPage);
                        setCurrentPage(1);
                      }}
                      className="px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    >
                      <option value="6">6</option>
                      <option value="12">12</option>
                      <option value="24">24</option>
                      <option value="48">48</option>
                    </select>
                    <span className="text-muted-foreground">per page</span>
                  </div>
                </div>

                {/* Show pagination controls only when there are multiple pages */}
                {totalPages > 1 && (
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-card rounded-xl border border-border p-4">
                    {/* Navigation Buttons - Responsive */}
                    <div className="flex items-center gap-1 sm:gap-2 order-2 sm:order-1 w-full sm:w-auto justify-center">
                      <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center px-2 sm:px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm sm:text-base"
                      >
                        <FiChevronLeft className="w-4 h-4 mr-1" />
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
                                className="px-1 sm:px-2 py-1 text-muted-foreground text-sm"
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
                                ? 'bg-primary text-primary-foreground shadow-sm'
                                : 'text-muted-foreground hover:bg-muted'
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
                        className="flex items-center px-2 sm:px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm sm:text-base"
                      >
                        <span className="hidden xs:inline">Next</span>
                        <span className="xs:hidden">Next</span>
                        <FiChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>

                    {/* Quick Jump - Responsive */}
                    <div className="flex items-center gap-2 text-sm order-1 sm:order-2 mb-4 sm:mb-0 w-full sm:w-auto justify-center">
                      <span className="text-muted-foreground hidden xs:inline">Go to:</span>
                      <span className="text-muted-foreground xs:hidden">Page:</span>
                      <input
                        type="number"
                        min="1"
                        max={totalPages}
                        className="w-12 sm:w-16 px-2 py-1 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary text-sm"
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

      {/* Quick View Modal */}
      {isQuickViewOpen && <QuickViewModal
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={closeQuickView}
      />}
    </div >
  );
}
