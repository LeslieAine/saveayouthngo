import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactReason: ''
  });

  const contactReasons = [
    'General Inquiry',
    'Volunteer Opportunity',
    'Donation Support',
    'Partnership/Collaboration',
    'Media & Press',
    'Complaint/Feedback',
    'Other'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      contactReason: ''
    });
  };

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#', color: 'text-blue-600' },
    { icon: Twitter, name: 'Twitter', url: '#', color: 'text-blue-400' },
    { icon: Instagram, name: 'Instagram', url: '#', color: 'text-pink-600' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', color: 'text-blue-700' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you. Whether you have questions, want to volunteer, 
              or are interested in partnering with us, we're here to help.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      placeholder="Enter your full name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      placeholder="Enter your email"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter your phone number"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reason for Contact *
                    </label>
                    <Select onValueChange={(value) => handleInputChange('contactReason', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a reason" />
                      </SelectTrigger>
                      <SelectContent>
                        {contactReasons.map((reason) => (
                          <SelectItem key={reason} value={reason}>
                            {reason}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    required
                    placeholder="Brief subject of your message"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    placeholder="Please share your message, questions, or how we can help you..."
                    className="w-full h-32 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[var(--color-deep-saffron)] hover:bg-[var(--color-saffron)] text-white"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* FAQ Section */}
            <Card className="p-8 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">How can I donate to your foundation?</h4>
                  <p className="text-gray-600">
                    You can donate online through our secure donation page, via bank transfer, 
                    or by visiting our office.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">How do I become a volunteer?</h4>
                  <p className="text-gray-600">
                    Visit our "Get Involved" page and fill out the volunteer registration form. 
                    Our team will contact you within 48 hours to discuss opportunities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Can I visit your projects?</h4>
                  <p className="text-gray-600">
                    Yes! We organize regular field visits for donors and supporters. 
                    Contact us to schedule a visit to see our work firsthand.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">How is my donation used?</h4>
                  <p className="text-gray-600">
                    We maintain complete transparency with 85% of funds going directly to beneficiaries 
                    and 15% for operational costs. Quarterly reports are shared with all donors.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-8">
            {/* Office Details */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-6">Office Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[var(--color-deep-saffron)] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Address</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Jinja Road, Mukono<br />
                      Mukono<br />
                      Uganda
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-[var(--color-deep-saffron)] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600 text-sm mt-1">info@saveayouthfoundation.org</p>
                    <p className="text-gray-600 text-sm">volunteer@saveayouthfoundation.org</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-[var(--color-deep-saffron)] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600 text-sm mt-1">+13242567889</p>
                    <p className="text-gray-600 text-sm">+123345647890</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Office Hours */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Office Hours</h3>
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-700">{schedule.day}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> For urgent matters, please call our emergency helpline 
                  at +24141516178
                </p>
              </div>
            </Card>

            {/* Social Media */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex items-center p-3 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <social.icon className={`w-5 h-5 ${social.color} mr-3`} />
                    <span className="text-sm font-medium text-gray-700">{social.name}</span>
                  </a>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Stay updated with our latest news, events, and impact stories.
              </p>
            </Card>

            {/* Emergency Contact */}
            <Card className="p-6 bg-red-50 border-red-200">
              <h3 className="font-semibold text-red-900 mb-4">Emergency Contact</h3>
              <p className="text-sm text-red-800 mb-3">
                For urgent humanitarian assistance or crisis situations:
              </p>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-red-600 mr-2" />
                <span className="font-medium text-red-900">+2144151677</span>
              </div>
              <p className="text-xs text-red-600 mt-2">Available 24/7</p>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Our Office</h2>
          <Card className="overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  Interactive map would be embedded here<br />
                  Jinja Road, Mukono
                </p>
                <Button variant="outline" className="mt-4">
                  View on Google Maps
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}