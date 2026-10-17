'use client';

import { useState, useEffect } from 'react';

export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useCart } from '../../context/CartContext';
import { useCatalog } from '../../context/CatalogContext';
import ProductPrice from '../../components/ProductPrice';
import ProductSkeleton from '../../components/ProductSkeleton';
import { FiHeart, FiChevronRight } from 'react-icons/fi';

export default function Favourites() {
  const router = useRouter();
  const { wishlistItems: savedWishlistItems, addToCart, removeFromWishlist } = useCart();
  const { products } = useCatalog();
  const wishlistItems = savedWishlistItems.map(item => products.find(product => product.id === item.id) || item);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">My Favourites</h1>
              <p className="text-muted-foreground mt-2">
                {wishlistItems.length} favourite {wishlistItems.length === 1 ? 'item' : 'items'}
              </p>
            </div>

            {wishlistItems.length > 0 && (
              <Link
                href="/shop"
                className="text-primary hover:text-primary/80 font-medium"
              >
                Continue Shopping →
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }, (_, index) => (
              <ProductSkeleton key={`skeleton-${index}`} />
            ))}
          </div>
        ) : wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((product) => (
              <div
                key={product.id}
                className="group bg-card rounded-lg border border-border hover:border-primary transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden rounded-t-lg">
                  <Link href={`/product/${product.id}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-300"
                  >
                    <FiHeart className="w-4 h-4" fill="currentColor" />
                  </button>
                </div>

                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </div>

                  <Link href={`/product/${product.id}`}>
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-foreground">
                      <ProductPrice product={product} />
                    </span>
                    <button
                      onClick={() => product.is_combo ? router.push(`/product/${product.id}`) : addToCart(product, product.sizes?.[0])}
                      className="bg-gold-600 dark:bg-gold-400 border border-border text-white dark:text-stone-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gold-700 dark:hover:bg-gold-300 transition-colors"
                    >
                      {product.is_combo ? 'Choose sizes' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <FiHeart className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No favourites yet</h3>
            <p className="text-muted-foreground mb-6">Start adding items to your favourites by clicking the heart icon on products.</p>
            <Link
              href="/shop"
              className="inline-flex items-center border border-border px-8 py-3 bg-gold-600 dark:bg-gold-400 text-white dark:text-stone-900 rounded-xl font-semibold hover:bg-gold-700 dark:hover:bg-gold-300 transition-colors"
            >
              Browse Products
              <FiChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
