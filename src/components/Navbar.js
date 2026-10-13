'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Cart from './Cart';
import BrandLogo from './BrandLogo';
import { useCart } from '../context/CartContext';
import { useCatalog } from '../context/CatalogContext';
import { FiSearch, FiChevronRight, FiHeart, FiSun, FiMoon, FiShoppingCart, FiMenu, FiX, FiArrowRight } from 'react-icons/fi';

export default function Navbar() {
  const { products, categories, loading: catalogLoading, error: catalogError } = useCatalog();
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
  }, [searchQuery, products]);

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
                <BrandLogo priority className="lg:w-56 lg:h-14" />
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
                      <span className={`absolute bottom-0 h-0.5 bg-linear-to-r from-gold-500 to-gold-500 transition-all duration-500 ${isActive
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
                  <FiSearch className="absolute left-4 top-3 w-5 h-5 text-muted-foreground transition-colors" />

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
                            <div className="text-primary font-bold text-sm">৳{product.price}</div>
                          </div>
                          <FiChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transform group-hover:translate-x-1 transition-all duration-300" />
                        </Link>
                      ))}
                    </div>

                    <Link
                      href={`/shop?search=${encodeURIComponent(searchQuery)}`}
                      className="block p-4 text-center bg-linear-to-r from-gold-50 to-gold-50 dark:from-gold-900/20 dark:to-gold-900/20 text-primary font-semibold hover:from-gold-100 hover:to-gold-100 dark:hover:from-gold-800/30 dark:hover:to-gold-800/30 transition-all duration-300 rounded-b-2xl border-t border-border"
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
                  <FiHeart className="w-6 h-6 relative z-10" fill={wishlistItems.length > 0 ? 'currentColor' : 'none'} />
                  {mounted && wishlistItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-linear-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                      {wishlistItems.length}
                    </span>
                  )}
                </Link>


                {/* Enhanced Dark Mode Toggle - Hidden on mobile */}
                <button
                  onClick={toggleDarkMode}
                  className="relative p-3 rounded-2xl bg-card/80 backdrop-blur-sm border border-input text-foreground hover:text-primary transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-gold-500/20 group hidden lg:flex"
                  aria-label="Toggle dark mode"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-gold-500/10 to-gold-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {mounted && darkMode ? (
                    <FiSun className="w-6 h-6 relative z-10" />
                  ) : (
                    <FiMoon className="w-6 h-6 relative z-10" />
                  )}
                </button>

                {/* Enhanced Shopping Cart */}
                <button
                  onClick={() => setCartOpen(true)}
                  className="relative p-3 rounded-2xl bg-card/80 backdrop-blur-sm border border-input text-foreground hover:text-primary transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-gold-500/20 group"
                  aria-label="Open shopping cart"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-gold-500/10 to-gold-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <FiShoppingCart className="w-5 h-5 lg:w-6 lg:h-6 relative z-10" />
                  {mounted && getTotalItems() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-linear-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-bounce">
                      {getTotalItems()}
                    </span>
                  )}
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="lg:hidden p-3 rounded-2xl bg-card/80 backdrop-blur-sm border border-border text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gold-500/20 group"
                  aria-label="Open mobile menu"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-gold-500/10 to-gold-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <FiMenu className="w-5 h-5 relative z-10" />
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
                <Link href="/" onClick={() => setMobileMenuOpen(false)}><BrandLogo /></Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Close menu"
                >
                  <FiX className="w-6 h-6 text-foreground" />
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
                          ? 'bg-gold-50 text-gold-600 dark:bg-gold-900/20 dark:text-gold-400'
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
                    <FiSearch className="absolute left-4 top-3.5 w-4 h-4 text-muted-foreground" />

                    {/* Search button that appears when there's text */}
                    {searchQuery.trim() && (
                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
                          setSearchQuery('');
                        }}
                        className="absolute right-4 top-3.5 p-1 text-primary hover:text-gold-600 transition-colors"
                        aria-label="Search"
                      >
                        <FiArrowRight className="w-4 h-4" />
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
                                ৳{product.price}
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
                    <div className="mt-2 p-3 text-center text-muted-foreground text-sm bg-muted rounded-xl">
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
                    <FiHeart className="w-6 h-6 mr-4" fill={wishlistItems.length > 0 ? 'currentColor' : 'none'} />
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
                    suppressHydrationWarning
                  >
                    {mounted && darkMode ? (
                      <FiSun className="w-6 h-6 mr-4" />
                    ) : (
                      <FiMoon className="w-6 h-6 mr-4" />
                    )}
                    {mounted ? (darkMode ? 'Light Mode' : 'Dark Mode') : 'Dark Mode'}
                  </button>

                  {/* Shopping Cart */}
                  <button
                    onClick={() => {
                      setCartOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center w-full px-4 py-3 rounded-xl text-foreground hover:bg-muted hover:text-primary transition-all duration-300 font-semibold"
                  >
                    <FiShoppingCart className="w-6 h-6 mr-4" />
                    Cart
                    {mounted && getTotalItems() > 0 && (
                      <span className="ml-auto bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
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
