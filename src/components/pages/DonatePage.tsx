import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Shield, CreditCard, Smartphone, Building2, Heart, Users, GraduationCap, Stethoscope, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedCause, setSelectedCause] = useState<string | null>(null);

  const quickAmounts = [500, 1000, 2500, 5000, 10000];
  
  const causes = [
  {
    id: 'leadership',
    title: 'Youth Leadership Development',
    description: 'Support student leaders’ summits, mentorship programs, and public speaking training across Uganda.',
    icon: GraduationCap,
    impact: 'UGX 20,000 can sponsor materials for a young leader during a leadership training session.',
    color: 'text-blue-600'
  },
  {
    id: 'health',
    title: 'Health & Wellness Support',
    description: 'Fund SRH services, HIV testing, mental health counseling, and support for teen mothers in Ugandan communities.',
    icon: Stethoscope,
    impact: 'UGX 50,000 can provide psychosocial support or basic medical care for a vulnerable youth.',
    color: 'text-red-500'
  },
  {
    id: 'skilling',
    title: 'Youth Skilling & Entrepreneurship',
    description: 'Equip young people with vocational training, digital skills, entrepreneurship coaching, and employability skills.',
    icon: Building2,
    impact: 'UGX 80,000 can train a youth in a practical skill that improves their chances of employment.',
    color: 'text-green-600'
  },
  {
    id: 'general',
    title: 'General Community Support Fund',
    description: 'Support our mission across 150+ villages, including emergency needs, community outreach, and program sustainability.',
    icon: Heart,
    impact: 'Every shilling directly supports youth and community development across Uganda.',
    color: 'text-[var(--color-deep-saffron)]'
  }
];


  const paymentMethods = [
    { id: 'upi', name: 'UPI', icon: Smartphone, description: 'Google Pay, PhonePe, Paytm' },
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, description: 'Visa, Mastercard, Rupay' },
    { id: 'netbanking', name: 'Net Banking', icon: Building2, description: 'All major banks supported' },
  ];

  const benefits = [
    '100% secure transactions',
    'Transparent fund utilization',
    'Regular impact updates',
    'Certificate of donation',
    'Option to remain anonymous'
  ];

 const testimonials = [
  {
    name: 'Brian Okello',
    amount: 'UGX 50,000 monthly',
    quote: 'Supporting these youth programs gives me confidence that the next generation of Ugandans will grow into strong, skilled, and responsible leaders.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Sarah Namaganda',
    amount: 'UGX 120,000 one-time',
    quote: 'I have seen first-hand how the organization transforms young people through leadership and skilling. My contribution is making a real impact.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b550?q=80&w=150&h=150&fit=crop&crop=face'
  }
];


  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(null);
    }
  };

  const getCurrentAmount = () => {
    return customAmount ? parseInt(customAmount) : selectedAmount;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Make a Difference Today
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your contribution creates ripples of positive change in communities across Uganda. 
              Every donation, big or small, transforms lives and builds brighter futures.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm">
              <Shield className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-medium text-gray-700"> 100% Secure</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Main Donation Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Contribution</h2>
              
              {/* Donation Type */}
              <div className="mb-8">
                <div className="flex rounded-lg border p-1 mb-4">
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                      donationType === 'one-time'
                        ? 'bg-[var(--color-deep-saffron)] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    One-time Donation
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                      donationType === 'monthly'
                        ? 'bg-[var(--color-deep-saffron)] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Monthly Donation
                  </button>
                </div>
                {donationType === 'monthly' && (
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Monthly donations</strong> help us plan better and create sustained impact. 
                      You can modify or cancel anytime.
                    </p>
                  </div>
                )}
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Select Amount</h3>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                  {quickAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        selectedAmount === amount
                          ? 'border-[var(--color-deep-saffron)] bg-orange-50 text-[var(--color-deep-saffron)]'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      UGX {amount.toLocaleString()}
                    </button>
                  ))}
                </div>
                
                <div className="flex items-center">
                  <span className="text-gray-700 mr-3">UGX</span>
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    className="flex-1 p-3 border rounded-lg focus:outline-none focus:border-[var(--color-deep-saffron)]"
                    min="100"
                  />
                </div>
              </div>

              {/* Cause Selection */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Choose a Cause (Optional)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {causes.map((cause) => (
                    <div
                      key={cause.id}
                      onClick={() => setSelectedCause(cause.id)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedCause === cause.id
                          ? 'border-[var(--color-deep-saffron)] bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start">
                        <cause.icon className={`w-6 h-6 ${cause.color} mr-3 mt-1`} />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{cause.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{cause.description}</p>
                          <p className="text-xs text-gray-500 mt-2 italic">{cause.impact}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Payment Method</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {paymentMethods.map((method) => (
                    <div key={method.id} className="p-4 border rounded-lg hover:border-gray-300 cursor-pointer">
                      <div className="flex items-center mb-2">
                        <method.icon className="w-5 h-5 text-gray-600 mr-2" />
                        <span className="font-medium">{method.name}</span>
                      </div>
                      <p className="text-sm text-gray-500">{method.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Donate Button */}
              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-[var(--color-deep-saffron)] hover:bg-[var(--color-saffron)] text-white px-12 py-4"
                  disabled={!getCurrentAmount() || getCurrentAmount() < 100}
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Donate {getCurrentAmount() ? `₹${getCurrentAmount().toLocaleString()}` : ''} 
                  {donationType === 'monthly' ? ' Monthly' : ' Now'}
                </Button>
                {getCurrentAmount() && getCurrentAmount() < 100 && (
                  <p className="text-sm text-red-500 mt-2">Minimum donation amount is ₹100</p>
                )}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="mt-12 lg:mt-0 space-y-8">
            {/* Trust Indicators */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Why Donate with Us?</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Impact Calculator */}
            {getCurrentAmount() && (
              <Card className="p-6 bg-orange-50">
                <h3 className="font-semibold text-gray-900 mb-4">Your Impact</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Children's education (1 month)</span>
                    <span className="font-medium">{Math.floor((getCurrentAmount() || 0) / 500)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Medical consultations</span>
                    <span className="font-medium">{Math.floor((getCurrentAmount() || 0) / 100)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Meals for families</span>
                    <span className="font-medium">{Math.floor((getCurrentAmount() || 0) / 50)}</span>
                  </div>
                </div>
              </Card>
            )}

            {/* Donor Testimonials */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">What Our Donors Say</h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index}>
                    <div className="flex items-start">
                      <ImageWithFallback 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-3"
                      />
                      <div className="flex-1">
                        <p className="text-sm text-gray-600 italic mb-2">"{testimonial.quote}"</p>
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">{testimonial.name}</span>
                          <Badge variant="secondary">{testimonial.amount}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Contact Support */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Have questions about your donation or need assistance?
              </p>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium">Email:</span>
                  <span className="ml-2 text-gray-600">donate@shreechetanfoundation.org</span>
                </div>
                <div>
                  <span className="font-medium">Phone:</span>
                  <span className="ml-2 text-gray-600">+91 98765 43210</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Tax Benefit Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tax Benefits & Transparency</h2>
            <p className="text-lg text-gray-600">Your donations are tax-deductible and transparently utilized</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Certification</h3>
              <p className="text-gray-600">Assurance your donation goes to its assigned cause</p>
            </Card>
            
            <Card className="p-6 text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Direct Impact</h3>
              <p className="text-gray-600">85% of funds directly reach beneficiaries, 15% for operations</p>
            </Card>
            
            <Card className="p-6 text-center">
              <CheckCircle className="w-12 h-12 text-[var(--color-green)] mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Regular Updates</h3>
              <p className="text-gray-600">Quarterly reports on fund utilization and impact metrics</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}