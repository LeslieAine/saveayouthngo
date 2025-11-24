import React from 'react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Target, Eye, Heart, Calendar, Users, Award } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutPage() {
  const team = [
    {
      name: 'Mr. Pawulo Ssenyonga',
      role: 'Founder & Chairman',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&h=300&fit=crop&crop=face',
      bio: 'Founder of SAVE A YOUTH, passionate about youth empowerment, leadership development, and mindset transformation across Uganda.'
    },
    {
      name: 'Placeholder',
      role: 'Executive Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&h=300&fit=crop&crop=face',
      bio: 'Oversees the implementation of youth programs, including skilling, leadership training, and health initiatives for students and young people.'
    },
    {
      name: 'Placeholder 2',
      role: 'Program Manager',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&h=300&fit=crop&crop=face',
      bio: 'Coordinates SAVE A YOUTH programs such as the Annual Student Leaders Summit, mentorship, entrepreneurship support, and mindset transformation workshops.'
    },
    {
      name: 'Placeholder 3',
      role: 'Health & Wellness Lead',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&h=300&fit=crop&crop=face',
      bio: 'Leads health and wellness interventions including SRH services, HIV counseling, teen mom support, addiction therapy, and mental health programs.'
    }
  ];

  const timeline = [
    {
      year: '2023',
      title: 'First Annual Student Leaders Summit',
      description: 'Launched the flagship leadership development program at Colline Hotel, Mukono, focusing on curbing vices and inspiring young leaders.',
      icon: Heart
    },
    {
      year: '2024',
      title: '2nd Student Leaders Summit',
      description: 'Held the second edition at Ridar Hotel – Seeta, expanding mentorship, coaching, and public speaking opportunities for students.',
      icon: Target
    },
    {
      year: '2025',
      title: '3rd National Summit',
      description: 'Hosted at Seeta University, Mbalala, bringing together youth from post-primary institutions across Uganda.',
      icon: Award
    },
    {
      year: '2026',
      title: '4th Annual Student Leaders Summit',
      description: 'Scheduled at Makerere University, expanding participation beyond Uganda into East Africa.',
      icon: Users
    },
    {
      year: '2023–2026',
      title: 'Program Expansion',
      description: 'Introduced mindset transformation, skilling, entrepreneurship, digital literacy, and WASH initiatives for youth nationwide.',
      icon: Heart
    },
    {
      year: 'Ongoing',
      title: 'Impact & Growth',
      description: 'SAVE A YOUTH continues to reach thousands of young people with leadership, health, wellness, and skilling programs.',
      icon: Award
    }
  ];

  const values = [
    {
      title: 'Youth-Centered Leadership',
      description: 'We believe in empowering young people to lead change in their communities through mentorship and practical leadership training.',
      icon: Eye
    },
    {
      title: 'Holistic Growth',
      description: 'Our programs combine leadership, mindset change, health, and entrepreneurship to build well-rounded young leaders.',
      icon: Heart
    },
    {
      title: 'Impact-Driven Programs',
      description: 'Every initiative is designed to create measurable improvements in the lives of youth across Uganda.',
      icon: Target
    },
    {
      title: 'Accountability & Integrity',
      description: 'We remain committed to ethical leadership, transparency, and responsible program management.',
      icon: Award
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Save A Youth Foundation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to creating positive change in underprivileged communities through
              education, healthcare, and sustainable development initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <Card className="p-8 text-center border-l-4 border-l-[var(--color-deep-saffron)]">
              <Target className="w-12 h-12 text-[var(--color-deep-saffron)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower young people through leadership development, mindset transformation, entrepreneurial skilling, and holistic health and wellness programs, equipping them with the knowledge, opportunities, and confidence to build dignified, self-reliant, and purpose-driven lives.
              </p>
            </Card>

            {/* Vision */}
            <Card className="p-8 text-center border-l-4 border-l-[var(--color-green)]">
              <Eye className="w-12 h-12 text-[var(--color-green)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                A world where every young person is empowered with the mindset, skills, leadership, and wellbeing they need to thrive and transform their communities.
              </p>
            </Card>

            {/* Impact */}
            <Card className="p-8 text-center border-l-4 border-l-blue-500">
              <Award className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h3>
              <p className="text-gray-600">
                Since 2023, we have empowered over 10,000 young people across 150+ villages through leadership development, mindset transformation, practical skilling, and comprehensive health and wellness programs, helping youth discover purpose, build resilience, gain employable skills, and live healthier, more hopeful lives.
              </p>
            </Card>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-[var(--color-deep-saffron)]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">The passionate individuals driving our mission forward</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <Badge variant="secondary" className="mb-4">{member.role}</Badge>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">Key milestones in our mission to serve communities</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="p-6">
                      <div className="flex items-center mb-3 justify-center">
                        <Calendar className="w-5 h-5 text-[var(--color-deep-saffron)] mr-2" />
                        <span className="text-2xl font-bold text-[var(--color-deep-saffron)]">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </Card>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-[var(--color-deep-saffron)] rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[var(--color-deep-saffron)]" />
                  </div>

                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Save A Youth Foundation began as a small initiative in 2016 when Mr. Ssenyonga, inspired by the potential of young people in underserved communities, decided to dedicate his life to youth empowerment and social development.
                </p>
                <p>
                  What started as helping a few children access education has now grown into a comprehensive organization addressing multiple facets of youth development. Our approach is holistic, focusing on leadership, mindset transformation, skills and entrepreneurship, and health and wellness to create sustainable impact.
                </p>
                <p>
                  Today, we collaborate with a network of volunteers, partners, and young beneficiaries who share our vision of empowered, self-reliant communities. Every program we run is community-driven, ensuring our interventions are relevant, sustainable, and directly benefit the youth we serve.
                </p>
                <p>
                  As we look to the future, our commitment remains steadfast: to nurture leaders, inspire growth, equip youth with practical skills, promote well-being, and create lasting positive change in the lives of those who need it most.
                </p>

              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&h=400&fit=crop"
                alt="Foundation story and community work"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}