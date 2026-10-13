import Link from 'next/link';
import BrandLogo from './BrandLogo';
import { FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-stone-900 dark:bg-stone-950 text-white border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4"><BrandLogo className="w-56 h-14" /></Link>
            <p className="text-stone-300 mb-4 max-w-md">
              Your premier destination for quality products at unbeatable prices.
              Discover the latest trends and find everything you need in one place.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 hover:bg-gold-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Follow us on Twitter"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 hover:bg-gold-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Follow us on Facebook"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 hover:bg-gold-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-stone-300 hover:text-gold-400 transition-colors">Home</Link></li>
              <li><Link href="/shop" className="text-stone-300 hover:text-gold-400 transition-colors">Shop</Link></li>
              <li><Link href="/contact" className="text-stone-300 hover:text-gold-400 transition-colors">Contact</Link></li>
              <li><a href="#" className="text-stone-300 hover:text-gold-400 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-stone-300 hover:text-gold-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-stone-300 hover:text-gold-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-stone-300 hover:text-gold-400 transition-colors">Returns</a></li>
              <li><a href="#" className="text-stone-300 hover:text-gold-400 transition-colors">Size Guide</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-stone-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Auvora BD. All rights reserved by TechNova.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-stone-400 hover:text-gold-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-stone-400 hover:text-gold-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-stone-400 hover:text-gold-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
