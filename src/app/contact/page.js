'use client';

import { useState } from 'react';
import { getSupabase } from '../../lib/supabase';
import { FiMapPin, FiPhone, FiMail, FiCheck, FiSend } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [notice, setNotice] = useState('');
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

    setNotice('');
    try {
      const { error } = await getSupabase().rpc('submit_message', { p_name: formData.name, p_email: formData.email, p_subject: formData.subject, p_message: formData.message });
      if (error) throw error;
      setNotice('Message sent. Our team will get back to you.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (e) { setNotice(e.message); }
    finally { setIsSubmitting(false); }
  };

  return (
    <div className="min-h-screen bg-background py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass border border-stone-300/50 dark:border-white/20 rounded-full px-6 py-2 mb-4">
            <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-foreground uppercase tracking-wider">GET IN TOUCH</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Let's Talk About{' '}
            <span className="inline text-primary">Your Needs</span>
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
                  <div className="w-12 h-12 bg-gold-100 dark:bg-gold-900/30 rounded-2xl flex items-center justify-center group-hover:bg-gold-200 dark:group-hover:bg-gold-900/50 transition-colors">
                    <FiMapPin className="w-6 h-6 text-gold-600 dark:text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Our Location</h3>
                    <p className="text-muted-foreground mt-1">Bashundhara R/A, Dhaka, Bangladesh</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                    <FiPhone className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone Number</h3>
                    <p className="text-muted-foreground mt-1">(555) 123-4567</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gold-100 dark:bg-gold-900/30 rounded-2xl flex items-center justify-center group-hover:bg-gold-200 dark:group-hover:bg-gold-900/50 transition-colors">
                    <FiMail className="w-6 h-6 text-gold-600 dark:text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email Address</h3>
                    <a href="mailto:auvorabd.official@gmail.com" className="inline-block text-muted-foreground mt-1 break-all hover:text-primary transition-colors">auvorabd.official@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Business Hours</h3>
                <div className="flex items-center gap-2 py-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true" />
                  <span className="font-semibold text-foreground">Always open · 24/7</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: 'Email', label: 'Customer Support' },
                { number: 'COD', label: 'Payment' },
                { number: 'Online', label: 'Contact Form' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center bg-card rounded-2xl p-4 shadow-lg border border-border">
                  <div className="text-2xl font-black text-gold-600 dark:text-gold-400 mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form - Enhanced */}
          <div className="bg-card rounded-3xl shadow-xl p-8 border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-2">Send us a Message</h2>
            <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you shortly.</p>

            <p role="status">{notice}</p><form onSubmit={handleSubmit} className="space-y-6">
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
                  : 'bg-gold-600 dark:bg-gold-400 text-white border border-input dark:text-stone-950 hover:bg-gold-700 dark:hover:bg-gold-300 hover:scale-105 active:scale-95'
                  } shadow-lg hover:shadow-xl`}
              >
                {isSubmitting ? (
                  <>
                    <FiCheck className="w-5 h-5 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
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
