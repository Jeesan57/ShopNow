'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-background py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass border border-slate-300/50 dark:border-white/20 rounded-full px-6 py-2 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-foreground uppercase tracking-wider">GET IN TOUCH</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Let's Talk About
            <span className="block bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Your Needs</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Have questions about our products? We're here to help and would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information - Enhanced */}
          <div className="space-y-8">
            <div className="bg-card rounded-3xl shadow-xl p-8 border border-border">
              <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Our Location</h3>
                    <p className="text-muted-foreground mt-1">123 Shop Street, City, State 12345</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone Number</h3>
                    <p className="text-muted-foreground mt-1">(555) 123-4567</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email Address</h3>
                    <p className="text-muted-foreground mt-1">contact@shopnow.com</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-semibold text-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-semibold text-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-semibold text-red-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: '24h', label: 'Response Time' },
                { number: '99%', label: 'Satisfaction' },
                { number: '5★', label: 'Rating' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center bg-card rounded-2xl p-4 shadow-lg border border-border">
                  <div className="text-2xl font-black text-blue-600 dark:text-blue-400 mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form - Enhanced */}
          <div className="bg-card rounded-3xl shadow-xl p-8 border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-2">Send us a Message</h2>
            <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you shortly.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder-muted-foreground transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder-muted-foreground transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-3">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder-muted-foreground transition-all duration-300"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder-muted-foreground resize-none transition-all duration-300"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 ${isSubmitting
                  ? 'bg-green-600 text-white scale-95 cursor-not-allowed'
                  : 'bg-slate-900 dark:bg-white text-white border border-input dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-gray-100 hover:scale-105 active:scale-95'
                  } shadow-lg hover:shadow-xl`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
