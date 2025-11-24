import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { Users, Clock, MapPin, Heart, Mail, Phone, Calendar, CheckCircle, Star } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function InvolvedPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    profession: '',
    experience: '',
    availability: '',
    interests: [] as string[],
    skills: '',
    motivation: ''
  });

  const opportunities = [
    {
      title: 'Field Volunteer',
      type: 'On-ground',
      commitment: '4-6 hours/week',
      location: 'Rural areas',
      description: 'Work directly with communities, conduct surveys, and assist in project implementation.',
      requirements: ['Willing to travel', 'Good communication skills', 'Basic local language'],
      icon: Users,
      spots: 15
    },
    {
      title: 'Education Volunteer',
      type: 'Teaching',
      commitment: '3-4 hours/week',
      location: 'Schools & centers',
      description: 'Teach children, conduct workshops, and support educational programs.',
      requirements: ['Teaching experience preferred', 'Patience with children', 'Subject expertise'],
      icon: Heart,
      spots: 8
    },
    {
      title: 'Healthcare Support',
      type: 'Medical',
      commitment: '5-6 hours/week',
      location: 'Health camps',
      description: 'Assist in health camps, maintain records, and support medical professionals.',
      requirements: ['Medical/nursing background', 'First aid knowledge', 'Compassionate nature'],
      icon: Heart,
      spots: 5
    },
    {
      title: 'Digital Marketing',
      type: 'Remote',
      commitment: '2-3 hours/week',
      location: 'Work from home',
      description: 'Manage social media, create content, and help with fundraising campaigns.',
      requirements: ['Digital marketing skills', 'Content creation', 'Social media knowledge'],
      icon: Star,
      spots: 12
    },
    {
      title: 'Event Management',
      type: 'Coordination',
      commitment: 'Flexible',
      location: 'Various venues',
      description: 'Organize fundraising events, awareness programs, and community gatherings.',
      requirements: ['Event planning experience', 'Leadership skills', 'Local network'],
      icon: Calendar,
      spots: 6
    },
    {
      title: 'Professional Services',
      type: 'Pro Bono',
      commitment: 'Project-based',
      location: 'Flexible',
      description: 'Provide legal, financial, or technical expertise on a voluntary basis.',
      requirements: ['Professional qualification', 'Relevant experience', 'Time commitment'],
      icon: CheckCircle,
      spots: 10
    }
  ];

const volunteers = [
  {
    name: 'Anita Kiganda',
    role: 'Youth Leadership Volunteer',
    duration: '2 years',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&fit=crop&crop=face',
    quote: 'Mentoring young leaders and watching them grow into confident changemakers has been incredibly fulfilling.'
  },
  {
    name: 'Cathy Terra',
    role: 'Skills & Education Volunteer',
    duration: '1.5 years',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop&crop=face',
    quote: 'Empowering youth with skills and knowledge has been a journey of mutual learning and inspiration.'
  },
  {
    name: 'Dr. Gretty Kigundu',
    role: 'Health & Wellness Volunteer',
    duration: '3 years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&h=150&fit=crop&crop=face',
    quote: 'Providing accessible healthcare and supporting youth well-being has been the most rewarding part of my work.'
  }
];


  const interestAreas = [
    'Education & Child Development',
    'Healthcare & Medical Support',
    'Women Empowerment',
    'Rural Development',
    'Environmental Conservation',
    'Digital Literacy',
    'Skill Development',
    'Fundraising & Events',
    'Social Media & Marketing',
    'Administrative Support'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer application submitted:', formData);
    alert('Thank you for your interest! We will contact you within 48 hours.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Become part of a passionate community dedicated to creating positive change. 
              Your time, skills, and enthusiasm can transform lives and build stronger communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm">
                <Users className="w-5 h-5 text-[var(--color-deep-saffron)] mr-2" />
                <span className="font-medium">500+ Active Volunteers</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm">
                <Clock className="w-5 h-5 text-[var(--color-green)] mr-2" />
                <span className="font-medium">Flexible Timing</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm">
                <Heart className="w-5 h-5 text-red-500 mr-2" />
                <span className="font-medium">Meaningful Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Volunteer Opportunities */}
          <div className="lg:col-span-2 mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Volunteer Opportunities</h2>
            
            <div className="grid gap-6">
              {opportunities.map((opportunity, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mr-4">
                        <opportunity.icon className="w-6 h-6 text-[var(--color-deep-saffron)]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{opportunity.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="secondary">{opportunity.type}</Badge>
                          <Badge variant="outline" className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {opportunity.commitment}
                          </Badge>
                          <Badge variant="outline" className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {opportunity.location}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4">{opportunity.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 mb-1">{opportunity.spots} spots</div>
                      <div className="text-sm font-medium text-[var(--color-deep-saffron)]">Available</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {opportunity.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>

            {/* Registration Form */}
            <Card className="p-8 mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Registration</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                    <Input
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Profession</label>
                    <Input
                      type="text"
                      value={formData.profession}
                      onChange={(e) => handleInputChange('profession', e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Volunteering Experience</label>
                    <Select onValueChange={(value) => handleInputChange('experience', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No prior experience</SelectItem>
                        <SelectItem value="some">Some experience (1-2 years)</SelectItem>
                        <SelectItem value="experienced">Experienced (3+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Weekly Availability *</label>
                  <Select onValueChange={(value) => handleInputChange('availability', value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2 hours">1-2 hours per week</SelectItem>
                      <SelectItem value="3-4 hours">3-4 hours per week</SelectItem>
                      <SelectItem value="5-6 hours">5-6 hours per week</SelectItem>
                      <SelectItem value="flexible">Flexible/Project-based</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Areas of Interest *</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {interestAreas.map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox
                          id={interest}
                          checked={formData.interests.includes(interest)}
                          onCheckedChange={(checked) => 
                            handleInterestChange(interest, checked as boolean)
                          }
                        />
                        <label htmlFor={interest} className="text-sm text-gray-700">
                          {interest}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Skills & Qualifications
                  </label>
                  <Textarea
                    value={formData.skills}
                    onChange={(e) => handleInputChange('skills', e.target.value)}
                    placeholder="Describe any relevant skills, qualifications, or experience..."
                    className="w-full h-24"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to volunteer with us? *
                  </label>
                  <Textarea
                    value={formData.motivation}
                    onChange={(e) => handleInputChange('motivation', e.target.value)}
                    placeholder="Tell us about your motivation to volunteer..."
                    className="w-full h-32"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[var(--color-deep-saffron)] hover:bg-[var(--color-saffron)] text-white"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Submit Application
                </Button>
              </form>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Volunteer Testimonials */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-6">Our Volunteers Say</h3>
              <div className="space-y-6">
                {volunteers.map((volunteer, index) => (
                  <div key={index}>
                    <div className="flex items-start mb-3">
                      <ImageWithFallback 
                        src={volunteer.image}
                        alt={volunteer.name}
                        className="w-12 h-12 rounded-full object-cover mr-3"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{volunteer.name}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span>{volunteer.role}</span>
                          <span>•</span>
                          <span>{volunteer.duration}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 italic">"{volunteer.quote}"</p>
                    {index < volunteers.length - 1 && <hr className="my-4" />}
                  </div>
                ))}
              </div>
            </Card>

            {/* Volunteer Benefits */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Volunteer Benefits</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                  <span>Volunteer certificate</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                  <span>Skill development training</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                  <span>Networking opportunities</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                  <span>Recognition events</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                  <span>Travel reimbursement</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                  <span>Letter of recommendation</span>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Questions?</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-gray-500 mr-3" />
                  <span>volunteer@saveayouthfoundation.org</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-gray-500 mr-3" />
                  <span>+242528949</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Our volunteer coordinator will contact you within 48 hours of application submission.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}