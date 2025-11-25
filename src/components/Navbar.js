'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Cart from './Cart';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef(null);
  const { getTotalItems, wishlistItems, darkMode, toggleDarkMode } = useCart();

  // Prevent hydration mismatch by only showing dynamic content after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle search
  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);
      setSearchResults(filtered);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  }, [searchQuery]);

  // Add this to your existing useEffect for closing search results
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }

      // Also handle mobile sidebar search
      const mobileSearch = document.querySelector('.mobile-search-container');
      if (mobileSearch && !mobileSearch.contains(event.target)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <nav className={`bg-background transition-all duration-500 sticky top-0 z-50
          ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>

        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-16 lg:h-20">

            {/* Logo/Brand - LEFT SIDE - FIXED */}
            <div className="flex items-center shrink-0">
              <Link href="/" className="flex items-center space-x-2 lg:space-x-3 group">
                <div className="relative">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-linear-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-500 group-hover:scale-105">
                    <span className="text-white font-bold text-xs lg:text-sm">SN</span>
                    {/* Animated ring */}
                    <div className="absolute inset-0 rounded-xl border-2 border-white/20 animate-pulse-slow"></div>
                  </div>
                </div>
                <div className="flex flex-col">
                  {/* Fixed ShopNow text - removed bg-clip-text issue */}
                  <span className="text-xl lg:text-2xl font-black text-foreground group-hover:text-primary transition-all duration-500">
                    ShopNow
                  </span>
                  <span className="text-xs text-muted font-medium -mt-1">PREMIUM COLLECTION</span>
                </div>
              </Link>
            </div>

            {/* Navigation Links - CENTER */}
            <div className="hidden lg:flex items-center justify-center flex-1 max-w-2xl mx-8">
              <div className="flex items-center space-x-1">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/shop', label: 'Shop' },
                  { href: '/about', label: 'About' },
                  { href: '/contact', label: 'Contact' }
                ].map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`relative px-4 py-2 transition-all duration-300 font-semibold group ${isActive
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                        }`}
                    >
                      {item.label}
                      <span className={`absolute bottom-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-500 ${isActive
                        ? 'w-1/2 left-1/4'
                        : 'w-0 left-1/2'
                        }`}></span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Action Items - RIGHT SIDE */}
            <div className="flex items-center justify-end space-x-5 shrink-0">

              {/* Enhanced Search Bar */}
              <div className="hidden lg:block relative" ref={searchRef}>
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Search luxury products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 px-6 py-3 pl-12 text-sm bg-card/80 text-foreground backdrop-blur-sm border border-input rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10"
                  />
                  <svg className="absolute left-4 top-3 w-5 h-5 text-muted transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>

                  {/* Animated search icon */}
                  <div className="absolute right-4 top-3">
                    <div className="w-5 h-5 border-2 border-muted rounded-full group-focus-within:border-primary transition-colors"></div>
                  </div>
                </div>

                {/* Enhanced Search Results Dropdown */}
                {showSearchResults && searchResults.length > 0 && (
                  <div className="absolute top-full mt-3 w-full bg-card border border-border rounded-2xl shadow-2xl shadow-black/20 z-50 max-h-80 overflow-y-auto">
                    <div className="p-2">
                      {searchResults.map((product) => (
                        <Link
                          key={product.id}
                          href={`/product/${product.id}`}
                          className="flex items-center p-3 hover:bg-muted/80 transition-all duration-300 rounded-xl group border-b border-border last:border-b-0"
                          onClick={() => {
                            setSearchQuery('');
                            setShowSearchResults(false);
                          }}
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded-lg mr-4 shadow-md group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="flex-1">
                            <div className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                              {product.name}
                            </div>
                            <div className="text-primary font-bold text-sm">${product.price}</div>
                          </div>
                          <svg className="w-4 h-4 text-muted group-hover:text-primary transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>

                    <Link
                      href={`/shop?search=${encodeURIComponent(searchQuery)}`}
                      className="block p-4 text-center bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-primary font-semibold hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800/30 dark:hover:to-purple-800/30 transition-all duration-300 rounded-b-2xl border-t border-border"
                      onClick={() => {
                        setSearchQuery('');
                        setShowSearchResults(false);
                      }}
                    >
                      View all results
                    </Link>
                  </div>
                )}

              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-5">

                {/* Favourites - Hidden on mobile */}
                <Link
                  href="/favourites"
                  className={`relative p-3 rounded-2xl backdrop-blur-sm border border-input transition-all duration-500 hover:scale-110 hover:shadow-lg group hidden lg:flex ${pathname === '/favourites'
                    ? 'bg-red-50 dark:bg-red-900/20 border-red-300/50 dark:border-red-600/50 text-red-600 dark:text-red-400 shadow-lg shadow-red-500/20'
                    : 'bg-card/80 border-border text-foreground hover:text-red-600 dark:hover:text-red-400 hover:shadow-red-500/20'
                    }`}
                  aria-label="View favourites"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-red-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="w-6 h-6 relative z-10" fill={wishlistItems.length > 0 ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {mounted && wishlistItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-linear-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                      {wishlistItems.length}
                    </span>
                  )}
                </Link>


                {/* Enhanced Dark Mode Toggle - Hidden on mobile */}
                <button
                  onClick={toggleDarkMode}
                  className="relative p-3 rounded-2xl bg-card/80 backdrop-blur-sm border border-input text-foreground hover:text-primary transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 group hidden lg:flex"
                  aria-label="Toggle dark mode"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {mounted && darkMode ? (
                    <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>

                {/* Enhanced Shopping Cart */}
                <button
                  onClick={() => setCartOpen(true)}
                  className="relative p-3 rounded-2xl bg-card/80 backdrop-blur-sm border border-input text-foreground hover:text-primary transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 group"
                  aria-label="Open shopping cart"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3" />
                  </svg>
                  {mounted && getTotalItems() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-linear-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-bounce">
                      {getTotalItems()}
                    </span>
                  )}
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="lg:hidden p-3 rounded-2xl bg-card/80 backdrop-blur-sm border border-border text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 group"
                  aria-label="Open mobile menu"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile Sidebar */}
        <div className={`fixed inset-0 z-60 lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-lg"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className={`fixed left-0 top-0 h-screen w-4/5 bg-card shadow-2xl border-r border-border transform transition-transform duration-300 z-70 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex flex-col h-full bg-card">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-linear-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">SN</span>
                  </div>
                  {/* Fixed mobile ShopNow text */}
                  <span className="text-xl font-black text-foreground">
                    ShopNow
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-6 py-8 bg-card">
                <nav className="space-y-6">
                  {[
                    { href: '/', label: 'Home' },
                    { href: '/shop', label: 'Shop' },
                    { href: '/about', label: 'About' },
                    { href: '/contact', label: 'Contact' }
                  ].map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-3 rounded-xl transition-all duration-300 font-semibold ${isActive
                          ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                          : 'text-foreground hover:bg-muted hover:text-primary'
                          }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

                {/* Mobile Search */}
                <div className="mt-8 mobile-search-container" ref={searchRef}>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-3 pl-12 text-sm bg-muted text-foreground border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <svg className="absolute left-4 top-3.5 w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>

                    {/* Search button that appears when there's text */}
                    {searchQuery.trim() && (
                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
                          setSearchQuery('');
                        }}
                        className="absolute right-4 top-3.5 p-1 text-primary hover:text-blue-600 transition-colors"
                        aria-label="Search"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Mobile Search Results */}
                  {searchQuery.length > 0 && searchResults.length > 0 && (
                    <div className="mt-2 bg-card border border-border rounded-xl shadow-lg max-h-60 overflow-y-auto">
                      <div className="p-2">
                        {searchResults.map((product) => (
                          <Link
                            key={product.id}
                            href={`/product/${product.id}`}
                            className="flex items-center p-3 hover:bg-muted transition-colors rounded-lg group"
                            onClick={() => {
                              setSearchQuery('');
                              setMobileMenuOpen(false);
                            }}
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-10 h-10 object-cover rounded-lg mr-3"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-foreground text-sm truncate">
                                {product.name}
                              </div>
                              <div className="text-primary font-bold text-xs">
                                ${product.price}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <Link
                        href={`/shop?search=${encodeURIComponent(searchQuery)}`}
                        className="block p-3 text-center bg-muted text-primary font-medium hover:bg-muted/80 transition-colors rounded-b-xl border-t border-border"
                        onClick={() => {
                          setSearchQuery('');
                          setMobileMenuOpen(false);
                        }}
                      >
                        View all results
                      </Link>
                    </div>
                  )}

                  {/* No results message */}
                  {searchQuery.length > 0 && searchResults.length === 0 && (
                    <div className="mt-2 p-3 text-center text-muted text-sm bg-muted rounded-xl">
                      No products found
                    </div>
                  )}
                </div>

                {/* Action Items */}
                <div className="mt-8 space-y-4">
                  {/* Favourites */}
                  <Link
                    href="/favourites"
                    className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 font-semibold ${pathname === '/favourites'
                      ? 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400'
                      : 'text-foreground hover:bg-muted hover:text-red-600 dark:hover:text-red-400'
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="w-6 h-6 mr-4" fill={wishlistItems.length > 0 ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Favourites
                    {mounted && wishlistItems.length > 0 && (
                      <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                        {wishlistItems.length}
                      </span>
                    )}
                  </Link>

                  {/* Dark Mode Toggle */}
                  <button
                    onClick={toggleDarkMode}
                    className="flex items-center w-full px-4 py-3 rounded-xl text-foreground hover:bg-muted hover:text-primary transition-all duration-300 font-semibold"
                  >
                    {mounted && darkMode ? (
                      <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                    )}
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                  </button>

                  {/* Shopping Cart */}
                  <button
                    onClick={() => {
                      setCartOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center w-full px-4 py-3 rounded-xl text-foreground hover:bg-muted hover:text-primary transition-all duration-300 font-semibold"
                  >
                    <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3" />
                    </svg>
                    Cart
                    {mounted && getTotalItems() > 0 && (
                      <span className="ml-auto bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                        {getTotalItems()}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
