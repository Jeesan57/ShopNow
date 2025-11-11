'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { products, categories } from '../../data/products';
import { useCart } from '../../context/CartContext';
import ProductSkeleton from '../../components/ProductSkeleton';
import QuickViewModal from '../../components/QuickViewModal';

export default function Shop() {
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
  const productsPerPage = 12;
  const [addedProducts, setAddedProducts] = useState(new Set());

  // Handle URL search params
  useEffect(() => {
    const searchParam = searchParams.get('search');
    const categoryParam = searchParams.get('category');
    if (searchParam) {
      setSearchQuery(searchParam);
    }
    if (categoryParam) {
      setSelectedCategory(categoryParam);
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
      setCurrentPage(1);
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [selectedCategory, sortBy, searchQuery]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleQuickView = (product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 ">
      {/* Professional Header */}
      <div className="relative bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-6">
          <div className="text-center">

            {/* Main heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1 mt-2">
              <span className="bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Shop Excellence
              </span>
            </h1>
            {/* Subtitle */}
            <p className="text-xl md:text-md text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover handpicked products where quality craftsmanship meets timeless design
            </p>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-10 fill-white dark:fill-slate-900">
            <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-10 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Professional Sidebar */}
          <div className="lg:w-80 shrink-0">
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
                      className="w-full px-4 py-3 pl-11 border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500"
                    />
                    <svg
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
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
                        className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-sm transition-all duration-300 ${isInWishlist(product.id)
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
            {totalPages > 1 && (
              <div className="flex justify-center mt-16">
                <nav className="flex items-center space-x-2">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </button>

                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const pageNumber = i + 1;
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => paginate(pageNumber)}
                        className={`w-12 h-12 rounded-xl font-semibold transition-all duration-200 ${currentPage === pageNumber
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                          }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}

                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                  >
                    Next
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

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
