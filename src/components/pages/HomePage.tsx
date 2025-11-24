import React from 'react';
import { Hero } from '../Hero';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { GraduationCap, Stethoscope, Droplets, Users, Quote } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
const services = [
  {
    icon: GraduationCap,
    title: 'Leadership Development',
    description: 'Training student leaders through annual summits, mentorship programs, and public speaking workshops across Uganda.',
    color: 'text-blue-600'
  },
  {
    icon: Stethoscope,
    title: 'Health & Wellness',
    description: 'Providing SRH services, HIV testing, mental health support, addiction counseling, and care for teen mothers.',
    color: 'text-red-500'
  },
  {
    icon: Droplets,
    title: 'WASH Initiatives',
    description: 'Improving access to clean water, sanitation, and hygiene education in schools and underserved communities.',
    color: 'text-blue-400'
  },
  {
    icon: Users,
    title: 'Youth Skilling & Entrepreneurship',
    description: 'Offering vocational training, digital literacy, entrepreneurship coaching, and employability skills for Ugandan youth.',
    color: 'text-green-600'
  }
];


  const testimonials = [
  {
    name: 'Aisha Nankunda',
    role: 'Student Leader – Beneficiary',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b550?q=80&w=150&h=150&fit=crop&crop=face',
    quote: 'Through the leadership summit and mentorship program, I have grown in confidence and learned how to lead my school with integrity.'
  },
  {
    name: 'David Ouma',
    role: 'Community Leader',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop&crop=face',
    quote: 'The health and wellness programs, especially SRH services and HIV testing, have greatly improved the wellbeing of youth in our village.'
  },
  {
    name: 'Grace Nakato',
    role: 'Volunteer & Skilling Trainer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&fit=crop&crop=face',
    quote: 'Supporting youth through digital skills and entrepreneurship training has been life-changing — we see real transformation in every session.'
  }
];


  const partners = [
    'UNICEF', 'Red Cross', 'Rotary International', 'Lions Club', 'State Government', 'Local Corporates'
  ];

  return (
    <div>
      <Hero onPageChange={onPageChange} />
      
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Save A Youth Foundation
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Established in 2023, Save A Youth Foundation has been at the forefront of youth empowerment, working to transform lives and unlock potential across underprivileged communities. Our mission is to create lasting impact through leadership development, mindset transformation, skills and entrepreneurship training, and health and wellness programs.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With a team of dedicated volunteers and partnerships with local organizations, 
                we have successfully implemented over 25 projects, touching the lives of more than 
                10,000 individuals in rural and semi-urban areas.
              </p>
              <Button 
                onClick={() => onPageChange('about')}
                variant="outline"
                className="border-[var(--color-deep-saffron)] text-[var(--color-deep-saffron)] hover:bg-[var(--color-deep-saffron)] hover:text-white"
              >
                Learn More About Us
              </Button>
            </div>
            <div className="mt-8 lg:mt-0">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=600&h=400&fit=crop"
                alt="Community development work"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Key Initiatives</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We focus on four core areas that create the most significant impact in communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stories of Impact</h2>
            <p className="text-lg text-gray-600">Hear from the people whose lives we've touched</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <Quote className="w-8 h-8 text-[var(--color-deep-saffron)] mb-4" />
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <ImageWithFallback 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners & Supporters</h2>
            <p className="text-lg text-gray-600">Working together for greater impact</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-12 flex items-center justify-center text-gray-600 font-medium">
                    {partner}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-deep-saffron)] to-[var(--color-saffron)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Every contribution, no matter how small, creates ripples of positive change in communities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onPageChange('donate')}
              size="lg" 
              className="bg-white text-[var(--color-deep-saffron)] hover:bg-gray-100 px-8"
            >
              Donate Today
            </Button>
            <Button 
              onClick={() => onPageChange('involved')}
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[var(--color-deep-saffron)] px-8"
            >
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}