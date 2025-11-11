'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import QuickViewModal from '../components/QuickViewModal';

export default function Home() {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const trendingProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white/80">Trusted by 10,000+ customers worldwide</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
              <span className="bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                ELEVATE
              </span>
              <br />
              <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                YOUR STYLE
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover curated collections of premium products designed for the modern lifestyle.
              Quality meets innovation in every piece.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link
                href="/shop"
                className="group relative bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl"
              >
                <div className="absolute inset-0 bg-linear-to-r from-white to-gray-100 rounded-xl opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                <span className="relative">Explore Collection</span>
                <div className="absolute -inset-1 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur transition-all duration-300"></div>
              </Link>

              <Link
                href="/about"
                className="group border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:border-white/40 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
              >
                Our Story
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
              {[
                { number: '10K+', label: 'Happy Customers' },
                { number: '500+', label: 'Premium Products' },
                { number: '24/7', label: 'Expert Support' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Minimal Categories Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              Categories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Shop By Category
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover our carefully curated collections designed to meet your every need with style and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {categories.map((category, index) => (
              <Link
                key={category}
                href={`/shop?category=${category}`}
                className="group w-full max-w-sm bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-slate-700"
              >
                {/* Category Image - Real Images */}
                <div className="relative h-48 bg-gray-100 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
                  {category === "Men" && (
                    <img
                      src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=300&fit=crop"
                      alt="Men's Fashion"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {category === "Women" && (
                    <img
                      src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=300&fit=crop"
                      alt="Women's Fashion"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {category === "Kids" && (
                    <img
                      src="https://images.unsplash.com/photo-1503454532315-69dd2b4c1c3f?w=400&h=300&fit=crop"
                      alt="Kids Fashion"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {category === "Accessories" && (
                    <img
                      src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=300&fit=crop"
                      alt="Accessories"
                      className="w-full h-full object-cover"
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-sm font-semibold text-slate-700 dark:text-white">{category}</span>
                  </div>
                </div>

                {/* Category Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {category} Collection
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    Explore our premium {category.toLowerCase()} selection
                  </p>

                  {/* View Products Link */}
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                      Shop Now
                    </span>
                    <svg
                      className="w-4 h-4 text-blue-600 dark:text-blue-400 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Browse All Categories
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
              <span className="bg-linear-to-r from-slate-900 to-slate-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Featured Products
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Handpicked selections that combine exceptional quality with timeless design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-slate-700"
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
                        : 'bg-white/90 dark:bg-slate-800/90 text-gray-600 dark:text-gray-300 hover:bg-white hover:shadow-lg'
                      }`}
                  >
                    <svg className="w-5 h-5" fill={isInWishlist(product.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                <div className="p-6">
                  <Link href={`/product/${product.id}`}>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-900 dark:text-white">${product.price}</span>
                    <div className="flex items-center text-sm text-yellow-600">
                      ★★★★☆
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      Add to Cart
                    </button>

                    <button
                      onClick={() => {
                        setQuickViewProduct(product);
                        setIsQuickViewOpen(true);
                      }}
                      className="w-full border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-gray-300 py-2 rounded-xl font-medium hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300"
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
              className="inline-flex items-center gap-2 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-gray-300 px-8 py-4 rounded-xl font-bold hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300"
            >
              View All Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
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
