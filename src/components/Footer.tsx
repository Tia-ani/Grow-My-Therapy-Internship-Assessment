import React from 'react';
import { Heart, Phone, Mail, MapPin, Shield, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-emerald-400" />
              <span className="text-xl font-semibold">Dr. Serena Blake</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Licensed Clinical Psychologist (PsyD) dedicated to providing compassionate, 
              evidence-based therapy to help you overcome anxiety, strengthen relationships, and heal from trauma.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Licensed & Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 Years Experience</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-gray-300 hover:text-emerald-400 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-gray-300 hover:text-emerald-400 transition-colors"
              >
                About Dr. Blake
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-300 hover:text-emerald-400 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block text-gray-300 hover:text-emerald-400 transition-colors"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-emerald-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>(323) 555-0192</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>serena@blakepsychology.com</span>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <p>1287 Maplewood Drive</p>
                  <p>Los Angeles, CA 90026</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Dr. Serena Blake, PsyD. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">HIPAA Notice</a>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <p className="text-xs text-gray-400 text-center">
              <strong>Disclaimer:</strong> This website is for informational purposes only and does not constitute medical advice. 
              If you are experiencing a mental health emergency, please call 911 or go to your nearest emergency room.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;