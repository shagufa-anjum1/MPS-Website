import React, { useEffect } from 'react';
import Container from '@components/Container/Container';
import Section from '@components/Section/Section';
import Card from '@components/Card/Card';
import Loading from '@components/Loading/Loading';
import { useApi } from '@hooks/useApi';
import serviceService from '@services/service.service';
import { Service } from '@types/index';
import { FaCloud, FaMobileAlt, FaDatabase, FaShieldAlt, FaRobot, FaChartBar } from 'react-icons/fa';

/**
 * Services Page Component
 */
const Services: React.FC = () => {
  const { data: services, loading, error, execute } = useApi<Service[]>();

  useEffect(() => {
    // Fetch services from API
    execute(() => serviceService.getAllServices()).catch(() => {
      // Fallback to mock data if API fails
      console.log('Using fallback data');
    });
  }, [execute]);

  // Fallback mock data
  const mockServices = [
    {
      id: '1',
      title: 'Cloud Solutions',
      description:
        'Migrate, manage, and optimize your cloud infrastructure with our comprehensive cloud services.',
      icon: 'cloud',
      features: [
        'Cloud Migration Strategy',
        'Infrastructure Management',
        'Cost Optimization',
        'Multi-cloud Architecture',
      ],
    },
    {
      id: '2',
      title: 'Mobile Development',
      description:
        'Build powerful, user-friendly mobile applications for iOS and Android platforms.',
      icon: 'mobile',
      features: [
        'Native iOS & Android Apps',
        'Cross-platform Development',
        'UI/UX Design',
        'App Maintenance & Support',
      ],
    },
    {
      id: '3',
      title: 'Data Analytics',
      description:
        'Transform your data into actionable insights with advanced analytics and visualization.',
      icon: 'analytics',
      features: [
        'Business Intelligence',
        'Predictive Analytics',
        'Data Visualization',
        'Real-time Reporting',
      ],
    },
    {
      id: '4',
      title: 'Cybersecurity',
      description:
        'Protect your business with enterprise-grade security solutions and best practices.',
      icon: 'security',
      features: [
        'Security Audits',
        'Threat Detection',
        'Compliance Management',
        'Incident Response',
      ],
    },
    {
      id: '5',
      title: 'AI & Machine Learning',
      description:
        'Leverage artificial intelligence to automate processes and gain competitive advantages.',
      icon: 'ai',
      features: [
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Modeling',
        'Process Automation',
      ],
    },
    {
      id: '6',
      title: 'Database Management',
      description:
        'Design, implement, and maintain robust database solutions for optimal performance.',
      icon: 'database',
      features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup & Recovery'],
    },
  ];

  const getIcon = (iconName: string) => {
    const iconClass = 'text-5xl text-primary-600';
    switch (iconName) {
      case 'cloud':
        return <FaCloud className={iconClass} />;
      case 'mobile':
        return <FaMobileAlt className={iconClass} />;
      case 'analytics':
        return <FaChartBar className={iconClass} />;
      case 'security':
        return <FaShieldAlt className={iconClass} />;
      case 'ai':
        return <FaRobot className={iconClass} />;
      case 'database':
        return <FaDatabase className={iconClass} />;
      default:
        return <FaCloud className={iconClass} />;
    }
  };

  const displayServices = services || mockServices;

  if (loading) {
    return <Loading fullScreen />;
  }

  return (
    <div>
      {/* Hero Section */}
      <Section background="primary">
        <Container>
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Comprehensive technology solutions tailored to drive your business forward
            </p>
          </div>
        </Container>
      </Section>

      {/* Services Grid Section */}
      <Section background="white">
        <Container>
          {error && (
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg mb-8">
              <p>Unable to load services from API. Showing sample data.</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayServices.map((service, index) => (
              <div
                key={service.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card hover className="h-full">
                  <div className="flex justify-center mb-6">{getIcon(service.icon)}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="text-primary-600 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our services can help you achieve your goals
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Services;
