'use client';

import { analyticsEcommerce } from '../lib/analytics';
import { sizeStock, cartRemainingStock } from '../lib/sizeStock';
import { normalizeProduct } from '../lib/pricing';
import { hasComboItemColors } from '../lib/comboSizing';
import { matchesCartItem } from '../lib/productColors';
import { createContext, useContext, useState, useEffect, useLayoutEffect, useRef } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const cart = useRef([]);
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
      if (Array.isArray(savedCart)) {cart.current=savedCart;setCartItems(savedCart);}
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

  const addToCart = (product, size, color = hasComboItemColors(product) ? '' : product.colors?.[0] || '', quantity = 1) => {
    if (!Number.isInteger(quantity) || quantity < 1) return;
    if (product.colors?.length ? !product.colors.includes(color) : Boolean(color)) { alert('Choose an available color.'); return; }
    if (product.stock !== undefined && product.stock <= 0) { alert('This product is out of stock.'); return; }
    if (!size || !product.sizes?.includes(size)) {
      alert('Choose an available size for each item.');
      return;
    }
    if (sizeStock(product, size) <= 0) { alert('This size is out of stock.'); return; }
    const previous = cart.current;
    const amount = Math.min(quantity,cartRemainingStock(previous, product, size));
    if (amount <= 0) return;
    const normalized = normalizeProduct(product);
    const existing = previous.find(item => matchesCartItem(item, product.id, size, color));
    const next = existing ? previous.map(item => matchesCartItem(item, product.id, size, color) ? { ...item, ...normalized, size, color, quantity: item.quantity + amount } : item) : [...previous, { ...normalized, size, color, quantity: amount }];
    cart.current = next; setCartItems(next);
    analyticsEcommerce('add_to_cart',[{...normalized,size,color,quantity:amount}]);
  };

  const removeFromCart = (productId, size, color = '') => {
    const item = cart.current.find(item => matchesCartItem(item, productId, size, color));
    const next = cart.current.filter(item => !matchesCartItem(item, productId, size, color));
    cart.current = next; setCartItems(next);
    if (item) analyticsEcommerce('remove_from_cart',[item]);
  };

  const updateQuantity = (productId, size, quantity, color = '') => {
    if (quantity <= 0) { removeFromCart(productId,size,color); return; }
    const previous = cart.current;
    const item = previous.find(item => matchesCartItem(item, productId, size, color));
    if (!item) return;
    const nextQuantity = Math.max(1,Math.min(quantity,cartRemainingStock(previous.filter(other=>other!==item),item,size)));
    const difference = nextQuantity-item.quantity;
    if (!difference) return;
    const next = previous.map(other=>matchesCartItem(other,productId,size,color)?{...other,quantity:nextQuantity}:other);
    cart.current=next; setCartItems(next);
    analyticsEcommerce(difference>0?'add_to_cart':'remove_from_cart',[{...item,quantity:Math.abs(difference)}]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const clearCart = () => {
    cart.current = [];
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
