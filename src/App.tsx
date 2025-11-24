import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { WorkPage } from './components/pages/WorkPage';
import { DonatePage } from './components/pages/DonatePage';
import { InvolvedPage } from './components/pages/InvolvedPage';
import { ContactPage } from './components/pages/ContactPage';
import { Button } from './components/ui/button';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'work':
        return <WorkPage />;
      case 'donate':
        return <DonatePage />;
      case 'involved':
        return <InvolvedPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'About Us', onClick: () => setCurrentPage('about') },
        { name: 'Our Work', onClick: () => setCurrentPage('work') },
        { name: 'Get Involved', onClick: () => setCurrentPage('involved') },
        { name: 'Contact Us', onClick: () => setCurrentPage('contact') }
      ]
    },
    {
      title: 'Get Involved',
      links: [
        { name: 'Donate Now', onClick: () => setCurrentPage('donate') },
        { name: 'Volunteer', onClick: () => setCurrentPage('involved') },
        { name: 'Partnership', onClick: () => setCurrentPage('contact') },
        { name: 'Fundraise', onClick: () => setCurrentPage('involved') }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Annual Reports', onClick: () => {} },
        { name: 'Impact Stories', onClick: () => setCurrentPage('work') },
        { name: 'Media Kit', onClick: () => setCurrentPage('contact') },
        { name: 'Newsletter', onClick: () => setCurrentPage('contact') }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main>
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Foundation Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[var(--color-saffron)] to-[var(--color-deep-saffron)] rounded-full flex items-center justify-center">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Save a</h3>
                  <p className="text-gray-300">Youth Foundation</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Empowering youth and communities through leadership, skills, mindset transformation, and health.
Creating positive change since 2023.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span className="text-sm">Jinja Road, Mukono</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span className="text-sm">+52627282909</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span className="text-sm">info@saveayouthfoundation.org</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <button
                        onClick={link.onClick}
                        className="text-gray-300 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-6 md:mb-0">
                <h4 className="font-semibold text-white mb-2">Stay Updated</h4>
                <p className="text-gray-300 text-sm">Subscribe to our newsletter for impact stories and updates</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[var(--color-deep-saffron)]"
                />
                <Button className="bg-[var(--color-deep-saffron)] hover:bg-[var(--color-saffron)] text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Social Links & Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex space-x-6 mb-6 md:mb-0">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
              <div className="text-center md:text-right">
                <p className="text-gray-400 text-sm mb-2">
                  © 2025 Save A Youth Foundation. All rights reserved.
                </p>
                <div className="flex justify-center md:justify-end space-x-4 text-xs text-gray-500">
                  <button className="hover:text-gray-300">Privacy Policy</button>
                  <button className="hover:text-gray-300">Terms of Service</button>
                  {/* <button className="hover:text-gray-300">80G Certificate</button> */}
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
              {/* <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>80G Tax Exemption</span>
              </div> */}
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>FCRA Registered</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                <span>Transparency International Partner</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}