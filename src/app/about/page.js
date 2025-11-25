'use client';

import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section - Kept EXACTLY the same as you requested */}
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
              <span className="bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Our Story
              </span>
            </h1>
            <p className="text-md md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Crafting exceptional experiences through premium products and unparalleled service
            </p>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-8 fill-background">
            <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl font-black text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At ShopNow, we believe that quality products should be accessible to everyone. Our mission is to curate the finest collection of premium items, ensuring that every customer finds exactly what they&apos;re looking for.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-5">What Sets Us Apart</h3>
              <ul className="space-y-4">
                {[
                  'Carefully curated premium products',
                  'Exceptional customer service',
                  'Fast and secure shipping',
                  '30-day money-back guarantee',
                  'Expert product recommendations'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-2.5 h-2.5 bg-primary rounded-full shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="bg-linear-to-br from-blue-50/80 to-purple-50/70 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-sm border border-border/50 rounded-3xl p-10 shadow-xl">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-5xl font-black text-primary mb-2">10K+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-secondary mb-2">500+</div>
                <div className="text-muted-foreground">Premium Products</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-accent mb-2">5★</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-green-500 mb-2">24/7</div>
                <div className="text-muted-foreground">Customer Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🏆', title: 'Quality First', desc: 'We never compromise on quality. Every product meets the highest standards.' },
              { icon: '🤝', title: 'Customer Centric', desc: 'Your satisfaction is our priority. We listen, adapt, and exceed expectations.' },
              { icon: '🌱', title: 'Sustainability', desc: 'We care about our planet and work with eco-friendly suppliers.' },
              { icon: '🚀', title: 'Innovation', desc: 'We continuously evolve to provide the best shopping experience.' },
              { icon: '💎', title: 'Transparency', desc: 'Honest pricing, clear policies, and genuine reviews.' },
              { icon: '🌟', title: 'Excellence', desc: 'We strive for excellence in every aspect of our business.' },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
              >
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The passionate people behind ShopNow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Founder & CEO',
                bio: 'With over 10 years in e-commerce, Sarah founded ShopNow with a vision to revolutionize online shopping through innovative technology and customer-centric solutions.',
                expertise: 'E-commerce Strategy & Business Development'
              },
              {
                name: 'Michael Chen',
                role: 'Head of Product',
                bio: 'Michael leads product strategy and ensures our selection meets the highest quality standards while driving innovation in user experience and product development.',
                expertise: 'Product Management & Quality Assurance'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Customer Experience Lead',
                bio: 'Emily oversees our customer success initiatives, ensuring exceptional support delivery and maintaining our 98% customer satisfaction rating.',
                expertise: 'Customer Success & Service Excellence'
              },
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:border-primary/30 h-full flex flex-col">

                  {/* Avatar Section */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="relative w-28 h-28 mb-4">
                      {/* Gradient Background */}
                      <div className="absolute inset-0 bg-linear-to-br from-primary to-secondary rounded-full shadow-lg transform group-hover:scale-105 transition-transform duration-500" />

                      {/* Initials */}
                      <div className="relative w-full h-full border border-border rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-foreground dark:text-white drop-shadow-md">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>

                      {/* Status Indicator */}
                      <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-card rounded-full" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="text-center flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>

                    <div className="mb-4">
                      <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-1">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground text-xs font-medium">
                        {member.expertise}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm flex-1 mb-4">
                      {member.bio}
                    </p>

                    {/* Social/Contact Links */}
                    <div className="flex justify-center space-x-3 pt-4 border-t border-border">
                      <button className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-muted">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </button>
                      <button className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-muted">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </button>
                      <button className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-muted">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-linear-to-r from-primary/5 to-secondary/5 border border-border/50 rounded-3xl p-16 backdrop-blur-sm">
          <h2 className="text-4xl font-black text-foreground mb-6">
            Ready to Experience Premium Shopping?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust ShopNow for their premium shopping needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/shop"
              className="bg-primary text-white px-10 py-5 rounded-xl font-bold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-primary/30"
            >
              Start Shopping
            </Link>
            <Link
              href="/contact"
              className="border-2 border-border text-foreground px-10 py-5 rounded-xl font-semibold hover:bg-muted transition-all duration-300 hover:border-primary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
