'use client';

import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Cart({ isOpen, onClose }) {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const total = getTotalPrice();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-md flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-md" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">${item.price}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 text-sm hover:text-red-700 mt-1"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="border-t p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-lg font-semibold">${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
