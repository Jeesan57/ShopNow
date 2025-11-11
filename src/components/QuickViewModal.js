'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';

export default function QuickViewModal({ product, isOpen, onClose }) {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);

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

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-fade-in-up">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 dark:bg-slate-700/80 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Product Images */}
            <div className="p-6">
              <div className="relative aspect-square mb-4">
                <Image
                  src={selectedImage}
                  alt={product.name}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="flex space-x-2 overflow-x-auto">
                {product.thumbnails.map((thumb, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(thumb)}
                    className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === thumb
                        ? 'border-blue-500'
                        : 'border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500'
                      }`}
                  >
                    <Image
                      src={thumb}
                      alt={`${product.name} ${index + 1}`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="p-6 flex flex-col">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{product.name}</h2>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">(4.5)</span>
                </div>

                {/* Price */}
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  ${product.price}
                </div>

                {/* Category */}
                <div className="mb-4">
                  <span className="inline-block bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                    {product.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Quantity Selector */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                    >
                      -
                    </button>
                    <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </button>
                <button
                  onClick={onClose}
                  className="w-full bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 py-3 px-6 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors font-medium"
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
