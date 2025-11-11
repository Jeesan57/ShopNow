'use client';

import { createContext, useContext, useState, useEffect, useLayoutEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [recentlyAdded, setRecentlyAdded] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('shopnow-theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
        return true;
      }
      document.documentElement.classList.remove('dark');
      return false;
    }
    return false;
  });

  // Enhanced cart persistence with error handling
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('shopnow-cart');
      const savedWishlist = localStorage.getItem('shopnow-wishlist');

      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        // Validate cart structure
        if (Array.isArray(parsedCart)) {
          setCartItems(parsedCart);
        }
      }

      if (savedWishlist) {
        const parsedWishlist = JSON.parse(savedWishlist);
        if (Array.isArray(parsedWishlist)) {
          setWishlistItems(parsedWishlist);
        }
      }
    } catch (error) {
      console.error('Error loading cart data:', error);
      // Reset corrupted data
      localStorage.removeItem('shopnow-cart');
      localStorage.removeItem('shopnow-wishlist');
    }
  }, []);

  // Apply theme changes
  useLayoutEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Enhanced localStorage persistence with debouncing
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        localStorage.setItem('shopnow-cart', JSON.stringify(cartItems));
      } catch (error) {
        console.error('Error saving cart:', error);
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [cartItems]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        localStorage.setItem('shopnow-wishlist', JSON.stringify(wishlistItems));
      } catch (error) {
        console.error('Error saving wishlist:', error);
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [wishlistItems]);

  // Enhanced cart operations with animations
  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, {
          ...product,
          quantity,
          addedAt: new Date().toISOString()
        }];
      }
    });

    // Track recently added for animations
    setRecentlyAdded(product.id);
    setTimeout(() => setRecentlyAdded(null), 2000);
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const incrementQuantity = (productId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getItemQuantity = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartSummary = () => {
    const totalItems = getTotalItems();
    const totalPrice = getTotalPrice();
    const uniqueItems = cartItems.length;

    return {
      totalItems,
      totalPrice,
      uniqueItems,
      formattedTotal: `$${totalPrice.toFixed(2)}`
    };
  };

  // Enhanced wishlist operations
  const addToWishlist = (product) => {
    setWishlistItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (!existingItem) {
        return [...prevItems, { ...product, addedAt: new Date().toISOString() }];
      }
      return prevItems;
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  const getWishlistCount = () => {
    return wishlistItems.length;
  };

  // Enhanced theme management
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

  const setTheme = (theme) => {
    const isDark = theme === 'dark';
    setDarkMode(isDark);

    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('shopnow-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('shopnow-theme', 'light');
    }
  };

  // Cart analytics
  const getCartStats = () => {
    const totalValue = getTotalPrice();
    const itemCount = getTotalItems();
    const averagePrice = itemCount > 0 ? totalValue / itemCount : 0;

    return {
      totalValue,
      itemCount,
      averagePrice: averagePrice.toFixed(2),
      savings: 0, // Could calculate based on original prices
    };
  };

  const value = {
    // Cart state
    cartItems,
    wishlistItems,
    recentlyAdded,
    darkMode,

    // Cart operations
    addToCart,
    removeFromCart,
    updateQuantity,
    incrementQuantity,
    decrementQuantity,
    getTotalItems,
    getTotalPrice,
    getItemQuantity,
    clearCart,
    getCartSummary,
    getCartStats,

    // Wishlist operations
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
    getWishlistCount,

    // Theme operations
    toggleDarkMode,
    setTheme,
  };

  return (
    <CartContext.Provider value={value}>
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
