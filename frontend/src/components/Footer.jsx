import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin, Clock, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9e2a2c]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9e2a2c]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                LashedbyOpe
              </h3>
              <div className="w-16 h-1 bg-[#9e2a2c] rounded-full"></div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Elevating beauty, one client at a time. Where luxury meets expertise.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="group w-10 h-10 bg-white/10 hover:bg-[#9e2a2c] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="group w-10 h-10 bg-white/10 hover:bg-[#9e2a2c] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="group w-10 h-10 bg-white/10 hover:bg-[#9e2a2c] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-[#9e2a2c] transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#9e2a2c] transition-all duration-300"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-[#9e2a2c] transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#9e2a2c] transition-all duration-300"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-[#9e2a2c] transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#9e2a2c] transition-all duration-300"></span>
                  Services
                </a>
              </li>
              <li>
                <a href="/training" className="text-gray-400 hover:text-[#9e2a2c] transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#9e2a2c] transition-all duration-300"></span>
                  Training
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-[#9e2a2c] transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[#9e2a2c] transition-all duration-300"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Classic Lash Extensions</li>
              <li className="text-gray-400">Volume Lash Extensions</li>
              <li className="text-gray-400">Nail Artistry & Design</li>
              <li className="text-gray-400">Luxury Pedicures</li>
              <li className="text-gray-400">Lash Tech Training</li>
              <li className="text-gray-400">Tattoo Artist Training</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-[#9e2a2c] flex-shrink-0 mt-0.5" />
                <span>123 Beauty Lane, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-[#9e2a2c] flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-[#9e2a2c] flex-shrink-0" />
                <span>info@lashedbyope.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Clock className="h-5 w-5 text-[#9e2a2c] flex-shrink-0 mt-0.5" />
                <div>
                  <p>Mon - Sat: 9am - 8pm</p>
                  <p>Sunday: 10am - 6pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 pt-12 pb-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h4 className="text-2xl font-bold mb-3">Stay Updated</h4>
            <p className="text-gray-400 mb-6">Subscribe to our newsletter for exclusive offers and beauty tips</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-[#9e2a2c] transition-colors"
              />
              <button className="bg-[#9e2a2c] hover:bg-[#7e1f21] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#9e2a2c]/50">
                Subscribe
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; 2024 LashedbyOpe. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-[#9e2a2c] fill-[#9e2a2c] animate-pulse" />
              <span>for beautiful people</span>
            </div>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-[#9e2a2c] transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-[#9e2a2c] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#9e2a2c] hover:bg-[#7e1f21] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </footer>
  );
};

export default Footer;