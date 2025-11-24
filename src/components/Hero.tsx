import React from 'react';
import { Button } from './ui/button';
import { Heart, Users, MapPin, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onPageChange: (page: string) => void;
}

export function Hero({ onPageChange }: HeroProps) {
  const stats = [
    { icon: Users, label: 'Lives Impacted', value: '10,000+', color: 'text-[var(--color-green)]' },
    { icon: MapPin, label: 'Villages Reached', value: '150+', color: 'text-[var(--color-deep-saffron)]' },
    { icon: Heart, label: 'Ongoing Projects', value: '25+', color: 'text-red-500' },
    { icon: Award, label: 'Years of Service', value: '8+', color: 'text-blue-500' }
  ];

  return (
    <div className="relative bg-gradient-to-r from-orange-50 to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 pt-12 lg:pt-20">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:mx-0">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-sm border mb-8">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
                  <span className="text-sm font-medium text-gray-700">Making a difference since 2023</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Empowering Communities,
                  <span className="text-[var(--color-deep-saffron)] block">
                    Transforming Lives
                  </span>
                </h1>
                
                <p className="mt-6 text-xl text-gray-600 max-w-3xl">
                  Save a Youth Foundation is dedicated to uplifting underprivileged communities 
                  through education, healthcare, and sustainable development initiatives across Uganda.
                </p>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => onPageChange('donate')}
                    size="lg" 
                    className="bg-[var(--color-deep-saffron)] hover:bg-[var(--color-saffron)] text-white px-8"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Donate Now
                  </Button>
                  <Button 
                    onClick={() => onPageChange('involved')}
                    variant="outline" 
                    size="lg"
                    className="border-[var(--color-deep-saffron)] text-[var(--color-deep-saffron)] hover:bg-[var(--color-deep-saffron)] hover:text-white px-8"
                  >
                    Join as Volunteer
                  </Button>
                </div>
              </div>
              
              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=600&h=400&fit=crop"
                    alt="Community service and charitable work"
                    className="w-full h-80 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-deep-saffron)]/20 to-[var(--color-green)]/20 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}