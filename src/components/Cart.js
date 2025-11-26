'use client';

import { useState } from 'react';
import { useCart } from '../context/CartContext';
import Image from 'next/image';

export default function Cart({ isOpen, onClose }) {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [isRemoving, setIsRemoving] = useState(null);
  const total = getTotalPrice();
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (!isOpen) return null;

  const handleRemove = async (itemId) => {
    setIsRemoving(itemId);
    await new Promise(resolve => setTimeout(resolve, 300));
    removeFromCart(itemId);
    setIsRemoving(null);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemove(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Enhanced Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-xl transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full bg-card shadow-2xl border-l border-border">

          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border bg-linear-to-r from-slate-50 to-white dark:from-slate-700 dark:to-slate-800">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3" />
                  </svg>
                </div>
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-bounce">
                    {itemCount}
                  </span>
                )}
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">Your Cart</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">{itemCount} {itemCount === 1 ? 'item' : 'items'}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {cartItems.length > 0 && (
                <button
                  onClick={clearCart}
                  className="p-2 text-muted-foreground hover:text-red-500 transition-colors duration-200"
                  title="Clear cart"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              )}
              <button
                onClick={onClose}
                className="w-10 h-10 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-muted hover:scale-110 transition-all duration-200"
              >
                <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-8">
                <div className="w-24 h-24 mb-6 bg-muted rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Your cart is empty</h3>
                <p className="text-muted-foreground mb-6 max-w-sm">
                  Looks like you haven't added any items to your cart yet. Start shopping to discover amazing products!
                </p>
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white border border-border text-white dark:text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Start Shopping
                </button>
              </div>
            ) : (
              <div className="p-6 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className={`bg-card rounded-2xl p-4 border border-border transition-all duration-300 ${isRemoving === item.id ? 'scale-95 opacity-50' : 'hover:border-primary hover:shadow-lg'
                      }`}
                  >
                    <div className="flex items-center space-x-4">
                      {/* Product Image */}
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                        {isRemoving === item.id && (
                          <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center">
                            <svg className="w-6 h-6 text-red-500 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground truncate mb-1">
                          {item.name}
                        </h3>
                        <p className="text-primary font-bold text-lg mb-2">
                          ${item.price}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-muted/80 transition-colors font-semibold text-foreground"
                            >
                              −
                            </button>
                            <span className="w-8 text-center font-bold text-foreground">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-muted/80 transition-colors font-semibold text-foreground"
                            >
                              +
                            </button>
                          </div>

                          <div className="text-right">
                            <div className="font-bold text-foreground text-lg">
                              ${(item.price * item.quantity).toFixed(2)}
                            </div>
                            <button
                              onClick={() => handleRemove(item.id)}
                              className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors duration-200 flex items-center gap-1 mt-1"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-border bg-linear-to-r from-slate-50 to-white dark:from-slate-700 dark:to-slate-800 p-6 space-y-4">
              {/* Order Summary */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-green-600 dark:text-green-400">Free</span>
                </div>
                <div className="flex justify-between items-center text-muted-foreground">
                  <span>Tax</span>
                  <span>${(total * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between items-center text-xl font-black text-foreground">
                    <span>Total</span>
                    <span>${(total * 1.1).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg">
                  Proceed to Checkout
                </button>
                <button
                  onClick={onClose}
                  className="w-full border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white py-3 rounded-xl font-semibold hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300"
                >
                  Continue Shopping
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex justify-center space-x-6 pt-4">
                {['🔒', '🚚', '↩️'].map((icon, index) => (
                  <div key={index} className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <span>{icon}</span>
                    <span>
                      {icon === '🔒' && 'Secure'}
                      {icon === '🚚' && 'Fast Delivery'}
                      {icon === '↩️' && 'Easy Returns'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
