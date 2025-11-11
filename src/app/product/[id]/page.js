'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '../../../data/products';
import { useCart } from '../../../context/CartContext';

export default function ProductDetail() {
  const { addToCart } = useCart();
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [suggestedProducts, setSuggestedProducts] = useState([]);

  useEffect(() => {
    const productId = parseInt(params.id);
    const foundProduct = products.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.image);
      // Get suggested products from same category
      const suggested = products
        .filter(p => p.category === foundProduct.category && p.id !== productId)
        .slice(0, 4);
      setSuggestedProducts(suggested);
    }
  }, [params.id]);

  if (!product) {
    return <div className="text-center py-16">Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="mb-4">
            <Image
              src={selectedImage}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="flex space-x-2">
            {product.thumbnails.map((thumb, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(thumb)}
                className={`w-20 h-20 rounded-md overflow-hidden border-2 ${selectedImage === thumb ? 'border-blue-500' : 'border-gray-300'
                  }`}
              >
                <Image
                  src={thumb}
                  alt={`${product.name} ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-blue-600 mb-6">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="mb-6">
            <span className="inline-block bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
              {product.category}
            </span>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors text-lg font-semibold mb-4"
          >
            Add to Cart
          </button>
          <Link
            href="/shop"
            className="block text-center text-blue-600 hover:text-blue-800"
          >
            ← Back to Shop
          </Link>
        </div>
      </div>

      {/* Suggested Products */}
      {suggestedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white animate-fade-in-up">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {suggestedProducts.map((suggestedProduct, index) => (
              <div
                key={suggestedProduct.id}
                className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up border border-gray-200 dark:border-slate-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link href={`/product/${suggestedProduct.id}`} className="block">
                  <div className="relative overflow-hidden">
                    <Image
                      src={suggestedProduct.image}
                      alt={suggestedProduct.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>
                <div className="p-4">
                  <Link href={`/product/${suggestedProduct.id}`}>
                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">{suggestedProduct.name}</h3>
                  </Link>
                  <p className="text-gray-600 dark:text-gray-300 font-semibold">${suggestedProduct.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
