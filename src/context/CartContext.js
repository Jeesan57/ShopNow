'use client';

import { normalizeProduct } from '../lib/pricing';
import { matchesCartItem } from '../lib/productColors';
import { createContext, useContext, useState, useEffect, useLayoutEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [hydrated, setHydrated] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize darkMode from localStorage, default to light
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('shopnow-theme');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        return true;
      }
      if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
        return false;
      }
      // Default to light mode
      document.documentElement.classList.remove('dark');
      return false;
    }
    return false;
  });

  // Load cart and wishlist on mount
  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem('shopnow-cart') || '[]');
      const savedWishlist = JSON.parse(localStorage.getItem('shopnow-wishlist') || '[]');
      if (Array.isArray(savedCart)) setCartItems(savedCart);
      if (Array.isArray(savedWishlist)) setWishlistItems(savedWishlist);
    } catch { /* Ignore corrupt browser storage. */ }
    setHydrated(true);
  }, []);

  // Apply theme changes to DOM synchronously
  useLayoutEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Save cart and wishlist to localStorage whenever they change
  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem('shopnow-cart', JSON.stringify(cartItems));
  }, [cartItems, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem('shopnow-wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems, hydrated]);

  const addToCart = (product, size, color = product.colors?.[0] || '') => {
    if (product.colors?.length && !product.colors.includes(color)) { alert('Choose an available color.'); return; }
    if (product.stock !== undefined && product.stock <= 0) { alert('This product is out of stock.'); return; }
    if (!size) {
      console.error('Size is required to add to cart');
      return;
    }
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => matchesCartItem(item, product.id, size, color));
      if (existingItem) {
        return prevItems.map(item =>
          matchesCartItem(item, product.id, size, color)
            ? { ...item, ...normalizeProduct(product), color, size, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...normalizeProduct(product), size, color, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId, size, color = '') => {
    setCartItems(prevItems => prevItems.filter(item => !(matchesCartItem(item, productId, size, color))));
  };

  const updateQuantity = (productId, size, quantity, color = '') => {
    if (quantity <= 0) {
      removeFromCart(productId, size, color);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        matchesCartItem(item, productId, size, color) ? { ...item, quantity } : item
      )
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const addToWishlist = (product) => {
    setWishlistItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (!existingItem) {
        return [...prevItems, product];
      }
      return prevItems;
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('shopnow-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('shopnow-theme', 'light');
    }
  };

  return (
    <CartContext.Provider value={{
      hydrated,
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      getTotalItems,
      getTotalPrice,
      clearCart,
      wishlistItems,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      darkMode,
      toggleDarkMode
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
