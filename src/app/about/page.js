'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            {/* Main heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
              <span className="bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Our Story
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-md md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Crafting exceptional experiences through premium products and unparalleled service
            </p>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-8 fill-white dark:fill-slate-900">
            <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                At ShopNow, we believe that quality products should be accessible to everyone.
                Our mission is to curate the finest collection of premium items, ensuring that
                every customer finds exactly what they're looking for.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                What Sets Us Apart
              </h3>
              <ul className="space-y-3">
                {[
                  'Carefully curated premium products',
                  'Exceptional customer service',
                  'Fast and secure shipping',
                  '30-day money-back guarantee',
                  'Expert product recommendations'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-slate-600 dark:text-slate-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 h-full">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-black text-blue-600 dark:text-blue-400 mb-2">10K+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-purple-600 dark:text-purple-400 mb-2">500+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Premium Products</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-green-600 dark:text-green-400 mb-2">5★</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-orange-600 dark:text-orange-400 mb-2">24/7</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏆',
                title: 'Quality First',
                description: 'We never compromise on quality. Every product in our collection meets the highest standards.'
              },
              {
                icon: '🤝',
                title: 'Customer Centric',
                description: 'Your satisfaction is our priority. We listen, adapt, and exceed expectations.'
              },
              {
                icon: '🌱',
                title: 'Sustainability',
                description: 'We care about our planet and work with eco-friendly suppliers and sustainable practices.'
              },
              {
                icon: '🚀',
                title: 'Innovation',
                description: 'We continuously evolve our platform and services to provide the best shopping experience.'
              },
              {
                icon: '💎',
                title: 'Transparency',
                description: 'Honest pricing, clear policies, and genuine reviews - we believe in complete transparency.'
              },
              {
                icon: '🌟',
                title: 'Excellence',
                description: 'We strive for excellence in every aspect of our business, from products to service.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              The passionate people behind ShopNow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Founder & CEO',
                bio: 'With over 10 years in e-commerce, Sarah founded ShopNow with a vision to revolutionize online shopping.'
              },
              {
                name: 'Michael Chen',
                role: 'Head of Product',
                bio: 'Michael ensures our product selection meets the highest quality standards and customer needs.'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Customer Experience Lead',
                bio: 'Emily and her team work tirelessly to provide exceptional support and ensure customer satisfaction.'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <div className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                  {member.role}
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-12">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">
            Ready to Experience Premium Shopping?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust ShopNow for their premium shopping needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Shopping
            </Link>
            <Link
              href="/contact"
              className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-xl font-semibold hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
