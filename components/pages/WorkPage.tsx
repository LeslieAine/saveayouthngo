import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Calendar, MapPin, Users, Target, CheckCircle, Clock } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function WorkPage() {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
  {
    id: 1,
    title: 'Annual Student Leaders’ Summit',
    category: 'education',
    status: 'completed',
    location: 'Kampala, Uganda',
    beneficiaries: '500+ students',
    startDate: 'March 2023',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=400&h=300&fit=crop',
    description: 'A flagship program that brings together student leaders from post-primary institutions to build leadership capacity and inspire social change.',
    impact: 'Trained 1,200+ student leaders across 3 annual summits, improving confidence and leadership skills.',
    details: [
      'Workshops on leadership and decision-making',
      'Public speaking and communication training',
      'Mentorship sessions with alumni leaders',
      'Networking and collaboration opportunities'
    ]
  },
  {
    id: 2,
    title: 'Youth Mindset Transformation Workshops',
    category: 'education',
    status: 'ongoing',
    location: 'Entebbe, Uganda',
    beneficiaries: '300+ youth',
    startDate: 'June 2023',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400&h=300&fit=crop',
    description: 'Workshops designed to help youth discover their purpose, build resilience, and adopt a growth mindset for personal and community development.',
    impact: 'Empowered 300+ youth with self-confidence, goal-setting skills, and mindfulness practices.',
    details: [
      'Self-discovery and identity workshops',
      'Growth mindset and resilience training',
      'Civic education and leadership sessions',
      'Goal-setting and vision board exercises'
    ]
  },
  {
    id: 3,
    title: 'Youth Vocational and Entrepreneurship Training',
    category: 'empowerment',
    status: 'completed',
    location: 'Jinja, Uganda',
    beneficiaries: '250+ youth',
    startDate: 'January 2023',
    image: 'https://images.unsplash.com/photo-1541919329513-35f7af297129?q=80&w=400&h=300&fit=crop',
    description: 'Practical vocational and entrepreneurship training programs to equip youth with skills for sustainable livelihoods.',
    impact: '200+ youth gained employment or started small businesses after completing training.',
    details: [
      'Vocational skills: agriculture, hospitality, construction',
      'Business planning and management workshops',
      'Digital literacy and online freelancing skills',
      'Access to startup incubation and mentorship'
    ]
  },
  {
    id: 4,
    title: 'Comprehensive Youth Health & Wellness Program',
    category: 'healthcare',
    status: 'ongoing',
    location: 'Mbale, Uganda',
    beneficiaries: '1,000+ youth',
    startDate: 'February 2023',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=300&fit=crop',
    description: 'Providing accessible healthcare services, mental health counseling, and sexual reproductive health education to young people.',
    impact: 'Served over 1,000 youth with medical consultations, counseling, and awareness sessions.',
    details: [
      'Youth-friendly sexual reproductive health services',
      'Addiction therapy and mental health counseling',
      'HIV testing and support groups',
      'WASH education and hygiene promotion'
    ]
  },
  {
    id: 5,
    title: 'Teen Mom Support & Economic Empowerment',
    category: 'healthcare',
    status: 'ongoing',
    location: 'Kampala, Uganda',
    beneficiaries: '150+ young mothers',
    startDate: 'April 2023',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=400&h=300&fit=crop',
    description: 'Support program for teenage mothers including prenatal and postnatal care, parenting skills, and income-generating activities.',
    impact: '150+ teen mothers received holistic support, improving health outcomes and livelihoods.',
    details: [
      'Prenatal and postnatal care',
      'Parenting skills training',
      'Economic empowerment workshops',
      'Peer support and mentoring'
    ]
  },
  {
    id: 6,
    title: 'Digital Skills & Online Work Program',
    category: 'empowerment',
    status: 'ongoing',
    location: 'Kampala, Uganda',
    beneficiaries: '400+ youth',
    startDate: 'August 2023',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400&h=300&fit=crop',
    description: 'Training youth in digital skills, online freelancing, and digital marketing to prepare them for remote work opportunities.',
    impact: '400+ youth gained digital certifications and started earning through online platforms.',
    details: [
      'Computer literacy and certification',
      'Online freelancing workshops',
      'Digital marketing and social media training',
      'Career mentoring and job readiness support'
    ]
  }
];


  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'healthcare', label: 'Healthcare', count: projects.filter(p => p.category === 'healthcare').length },
    { id: 'education', label: 'Education', count: projects.filter(p => p.category === 'education').length },
    { id: 'infrastructure', label: 'Infrastructure', count: projects.filter(p => p.category === 'infrastructure').length },
    { id: 'empowerment', label: 'Empowerment', count: projects.filter(p => p.category === 'empowerment').length }
  ];

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const ProjectModal = ({ project, onClose }: { project: any, onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant={project.status === 'completed' ? 'default' : 'secondary'}>
                  {project.status === 'completed' ? <CheckCircle className="w-3 h-3 mr-1" /> : <Clock className="w-3 h-3 mr-1" />}
                  {project.status}
                </Badge>
                <Badge variant="outline">{project.category}</Badge>
              </div>
            </div>
            <Button variant="ghost" onClick={onClose}>✕</Button>
          </div>
          
          <ImageWithFallback 
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="w-4 h-4 mr-2" />
              <span>{project.beneficiaries} beneficiaries</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Started: {project.startDate}</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">Project Description</h4>
            <p className="text-gray-600">{project.description}</p>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">Impact Achieved</h4>
            <p className="text-gray-600">{project.impact}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Key Activities</h4>
            <ul className="space-y-2">
              {project.details.map((detail: string, index: number) => (
                <li key={index} className="flex items-center text-gray-600">
                  <Target className="w-4 h-4 mr-2 text-[var(--color-green)]" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Work & Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the comprehensive initiatives we've undertaken to create lasting positive 
              change in communities across Uganda.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeTab === category.id ? "default" : "outline"}
                onClick={() => setActiveTab(category.id)}
                className={activeTab === category.id ? "bg-[var(--color-deep-saffron)] hover:bg-[var(--color-saffron)]" : ""}
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      variant={project.status === 'completed' ? 'default' : 'secondary'}
                      className={project.status === 'completed' ? 'bg-[var(--color-green)]' : ''}
                    >
                      {project.status === 'completed' ? <CheckCircle className="w-3 h-3 mr-1" /> : <Clock className="w-3 h-3 mr-1" />}
                      {project.status}
                    </Badge>
                    <Badge variant="outline" className="capitalize">{project.category}</Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-2" />
                      {project.beneficiaries} beneficiaries
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      Started: {project.startDate}
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => setSelectedProject(project.id)}
                    variant="outline"
                    className="w-full border-[var(--color-deep-saffron)] text-[var(--color-deep-saffron)] hover:bg-[var(--color-deep-saffron)] hover:text-white"
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Collective Impact</h2>
            <p className="text-lg text-gray-600">The measurable difference we've made together</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--color-deep-saffron)] mb-2">25+</div>
              <div className="text-gray-600">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--color-green)] mb-2">10,000+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Villages Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">$100K</div>
              <div className="text-gray-600">Total Investment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal 
          project={projects.find(p => p.id === selectedProject)}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}