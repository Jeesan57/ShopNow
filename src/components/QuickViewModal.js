'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import { FiX, FiChevronLeft, FiChevronRight, FiStar, FiCheck, FiPlus, FiMinus } from 'react-icons/fi';

export default function QuickViewModal({ product, isOpen, onClose }) {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
      setQuantity(1);
      setSelectedSize(product.sizes ? product.sizes[0] : '');
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
    if (!selectedSize) {
      alert('Please select a size before adding to cart.');
      return;
    }
    setIsAdding(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 600));

    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize);
    }

    setIsAdding(false);
    onClose();
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Enhanced Backdrop */}
      <div
        className="fixed inset-0 bg-background/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
        <div className="relative bg-card dark:bg-slate-800 rounded-3xl shadow-2xl max-w-6xl w-full mx-auto overflow-hidden transform transition-all duration-300 scale-95 sm:scale-100 group">

          {/* Premium Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 w-10 h-10 bg-white dark:bg-slate-700/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-50 dark:hover:bg-slate-600 hover:scale-110 transition-all duration-300 shadow-lg border border-gray-200 dark:border-slate-600"
            aria-label="Close modal"
          >
            <FiX className="w-5 h-5 text-gray-700 dark:text-slate-300" />
          </button>

          <div className="grid grid-cols-1 xl:grid-cols-2 min-h-[600px]">
            {/* Product Images Section - UPDATED FOR LIGHT THEME */}
            <div className="relative p-8 bg-card dark:from-slate-700 dark:to-slate-800 border-r border-border">
              {/* Main Image */}
              <div className="relative aspect-square mb-6 rounded-2xl overflow-hidden group border border-border">
                {selectedImage && (
                  <Image
                    src={selectedImage}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                )}

                {/* Image Navigation Arrows */}
                <button
                  onClick={() => {
                    const currentIndex = product.thumbnails.indexOf(selectedImage);
                    const prevIndex = currentIndex > 0 ? currentIndex - 1 : product.thumbnails.length - 1;
                    setSelectedImage(product.thumbnails[prevIndex]);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100 border border-border"
                >
                  <FiChevronLeft className="w-5 h-5 text-slate-300" />
                </button>

                <button
                  onClick={() => {
                    const currentIndex = product.thumbnails.indexOf(selectedImage);
                    const nextIndex = currentIndex < product.thumbnails.length - 1 ? currentIndex + 1 : 0;
                    setSelectedImage(product.thumbnails[nextIndex]);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100 border border-border"
                >
                  <FiChevronRight className="w-5 h-5 text-slate-300" />
                </button>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex justify-center space-x-3 overflow-x-auto py-2">
                {product.thumbnails.map((thumb, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(thumb)}
                    className={`shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${selectedImage === thumb
                      ? 'border-primary shadow-lg shadow-primary/25 scale-105'
                      : 'border-border hover:border-input'
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
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary dark:bg-blue-900/20 dark:text-blue-400">
                      {product.category}
                    </span>
                  </div>

                  <h1 className="text-3xl font-bold text-foreground dark:text-white mb-3 leading-tight">
                    {product.name}
                  </h1>

                  {/* Rating & Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <FiStar key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">4.8 (128 reviews)</span>
                    </div>

                    <div className="text-4xl font-black text-foreground dark:text-white">
                      ${product.price}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground dark:text-white mb-3">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Size Selection */}
                <div className="bg-muted dark:bg-slate-700/50 rounded-2xl p-4">
                  <label className="block text-sm font-semibold text-foreground dark:text-white mb-3">
                    Size
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {(product.sizes || []).map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-xl border text-sm font-medium transition-all ${selectedSize === size
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'border-border dark:border-slate-500 text-muted-foreground hover:border-primary hover:text-primary'
                          }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="bg-muted dark:bg-slate-700/50 rounded-2xl p-4">
                  <label className="block text-sm font-semibold text-foreground dark:text-white mb-3">
                    Quantity
                  </label>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 bg-card dark:bg-slate-600 border border-border dark:border-slate-500 rounded-xl flex items-center justify-center hover:bg-muted dark:hover:bg-slate-500 transition-colors font-semibold text-foreground dark:text-slate-300"
                    >
                      <FiMinus className="w-5 h-5" />
                    </button>

                    <span className="text-2xl font-bold text-foreground dark:text-white w-16 text-center">
                      {quantity}
                    </span>

                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 bg-card dark:bg-slate-600 border border-border dark:border-slate-500 rounded-xl flex items-center justify-center hover:bg-muted dark:hover:bg-slate-500 transition-colors font-semibold text-foreground dark:text-slate-300"
                    >
                      <FiPlus className="w-5 h-5" />
                    </button>

                    <div className="ml-auto text-lg font-semibold text-muted-foreground">
                      Total: <span className="text-primary dark:text-blue-400">${(product.price * quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 pt-6">
                <button
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className={`w-full py-4 px-6 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 ${isAdding
                    ? 'bg-green-600 text-white scale-95'
                    : 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 border border-border dark:hover:bg-gray-100 hover:scale-101 active:scale-99'
                    } shadow-lg hover:shadow-xl`}
                >
                  {isAdding ? (
                    <>
                      <FiCheck className="w-5 h-5 animate-spin" />
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <FiPlus className="w-5 h-5" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onClose}
                  className="w-full py-3 px-6 border-2 border-border dark:border-slate-600 text-foreground dark:text-slate-300 rounded-2xl font-semibold hover:border-input dark:hover:border-slate-500 hover:bg-muted hover:scale-101 active:scale-99 transition-all duration-300"
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
