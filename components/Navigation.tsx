import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Heart } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'work', label: 'Our Work' },
    { id: 'donate', label: 'Donate' },
    { id: 'involved', label: 'Get Involved' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onPageChange('home')}>
            <div className="w-10 h-10 bg-gradient-to-r from-[var(--color-saffron)] to-[var(--color-deep-saffron)] rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-gray-900">Save a</h2>
              <p className="text-xs text-gray-600 -mt-1">Youth Foundation</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`hover:text-[var(--color-deep-saffron)] transition-colors ${
                  currentPage === item.id 
                    ? 'text-[var(--color-deep-saffron)] font-medium' 
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => onPageChange('donate')}
              className="bg-[var(--color-deep-saffron)] hover:bg-[var(--color-saffron)] text-white"
            >
              Donate Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                    currentPage === item.id
                      ? 'text-[var(--color-deep-saffron)] bg-orange-50'
                      : 'text-gray-700 hover:text-[var(--color-deep-saffron)] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => handleNavClick('donate')}
                className="w-full mt-3 bg-[var(--color-deep-saffron)] hover:bg-[var(--color-saffron)] text-white"
              >
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}