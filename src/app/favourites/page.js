'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../../context/CartContext';
import ProductSkeleton from '../../components/ProductSkeleton';

export default function Favourites() {
  const { wishlistItems, addToCart, removeFromWishlist, isInWishlist } = useCart();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <div className="border-b border-gray-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">My Favourites</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {wishlistItems.length} favourite {wishlistItems.length === 1 ? 'item' : 'items'}
              </p>
            </div>

            {wishlistItems.length > 0 && (
              <Link
                href="/shop"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                Continue Shopping →
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }, (_, index) => (
              <ProductSkeleton key={`skeleton-${index}`} />
            ))}
          </div>
        ) : wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((product) => (
              <div
                key={product.id}
                className="group bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden rounded-t-lg">
                  <Link href={`/product/${product.id}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </div>

                  <Link href={`/product/${product.id}`}>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-slate-900 dark:text-white">
                      ${product.price}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 dark:hover:bg-gray-100 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No favourites yet</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Start adding items to your favourites by clicking the heart icon on products.</p>
            <Link
              href="/shop"
              className="inline-flex items-center px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-gray-100 transition-colors"
            >
              Browse Products
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
