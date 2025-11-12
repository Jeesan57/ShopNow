'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';

export default function QuickViewModal({ product, isOpen, onClose }) {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
      setQuantity(1);
    }
  }, [product]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleAddToCart = async () => {
    setIsAdding(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 600));

    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    setIsAdding(false);
    onClose();
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Enhanced Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
        <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl max-w-6xl w-full mx-auto overflow-hidden transform transition-all duration-300 scale-95 sm:scale-100 group">

          {/* Premium Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 w-10 h-10 bg-white/90 dark:bg-slate-700/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-slate-600 hover:scale-110 transition-all duration-300 shadow-lg border border-slate-200 dark:border-slate-600"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="grid grid-cols-1 xl:grid-cols-2 min-h-[600px]">
            {/* Product Images Section */}
            <div className="relative p-8 bg-linear-to-br from-slate-50 to-white dark:from-slate-700 dark:to-slate-800">
              {/* Main Image */}
              <div className="relative aspect-square mb-6 rounded-2xl overflow-hidden group">
                <Image
                  src={selectedImage}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                {/* Image Navigation Arrows */}
                <button
                  onClick={() => {
                    const currentIndex = product.thumbnails.indexOf(selectedImage);
                    const prevIndex = currentIndex > 0 ? currentIndex - 1 : product.thumbnails.length - 1;
                    setSelectedImage(product.thumbnails[prevIndex]);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100"
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
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100"
                >
                  <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex justify-center space-x-3 overflow-x-auto py-2">
                {product.thumbnails.map((thumb, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(thumb)}
                    className={`shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${selectedImage === thumb
                        ? 'border-blue-500 shadow-lg shadow-blue-500/25 scale-105'
                        : 'border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500'
                      }`}
                  >
                    <Image
                      src={thumb}
                      alt={`${product.name} view ${index + 1}`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details Section */}
            <div className="p-8 flex flex-col justify-between">
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                      {product.category}
                    </span>
                  </div>

                  <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">
                    {product.name}
                  </h1>

                  {/* Rating & Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-slate-500 dark:text-slate-400">4.8 (128 reviews)</span>
                    </div>

                    <div className="text-4xl font-black text-slate-900 dark:text-white">
                      ${product.price}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Description</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Quantity Selector */}
                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-2xl p-4">
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-3">
                    Quantity
                  </label>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 bg-white dark:bg-slate-600 border border-slate-200 dark:border-slate-500 rounded-xl flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-500 transition-colors font-semibold text-slate-700 dark:text-slate-300"
                    >
                      −
                    </button>

                    <span className="text-2xl font-bold text-slate-900 dark:text-white w-16 text-center">
                      {quantity}
                    </span>

                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 bg-white dark:bg-slate-600 border border-slate-200 dark:border-slate-500 rounded-xl flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-500 transition-colors font-semibold text-slate-700 dark:text-slate-300"
                    >
                      +
                    </button>

                    <div className="ml-auto text-lg font-semibold text-slate-600 dark:text-slate-400">
                      Total: <span className="text-blue-600 dark:text-blue-400">${(product.price * quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 pt-6">
                <button
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className={`w-full py-4 px-6 rounded-2xl font-bold text-white transition-all duration-300 flex items-center justify-center space-x-3 ${isAdding
                      ? 'bg-green-600 scale-95'
                    : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-gray-100 hover:scale-101 active:scale-99'
                    } shadow-lg hover:shadow-xl`}
                >
                  {isAdding ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <span>Add {quantity} to Cart - ${(product.price * quantity).toFixed(2)}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onClose}
                  className="w-full py-3 px-6 border-2 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-2xl font-semibold hover:border-slate-300 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
