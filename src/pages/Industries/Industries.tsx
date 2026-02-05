import React from 'react';
import Container from '@components/Container/Container';
import Section from '@components/Section/Section';
import Card from '@components/Card/Card';
import {
  FaHospital,
  FaUniversity,
  FaShoppingCart,
  FaIndustry,
  FaMoneyBillWave,
  FaCar,
} from 'react-icons/fa';

/**
 * Industries Page Component
 */
const Industries: React.FC = () => {
  const industries = [
    {
      icon: <FaHospital className="text-5xl text-primary-600" />,
      name: 'Healthcare',
      description:
        'Revolutionize patient care with digital health solutions, EMR systems, and telemedicine platforms.',
      solutions: [
        'Electronic Medical Records',
        'Patient Portal Systems',
        'Telemedicine Solutions',
        'Healthcare Analytics',
      ],
    },
    {
      icon: <FaUniversity className="text-5xl text-primary-600" />,
      name: 'Education',
      description:
        'Transform learning experiences with LMS, virtual classrooms, and educational technology.',
      solutions: [
        'Learning Management Systems',
        'Virtual Classroom Platforms',
        'Student Information Systems',
        'E-Learning Content Development',
      ],
    },
    {
      icon: <FaShoppingCart className="text-5xl text-primary-600" />,
      name: 'Retail & E-commerce',
      description:
        'Enhance customer experiences and streamline operations with modern retail solutions.',
      solutions: [
        'E-commerce Platforms',
        'Inventory Management',
        'Customer Analytics',
        'Omnichannel Solutions',
      ],
    },
    {
      icon: <FaIndustry className="text-5xl text-primary-600" />,
      name: 'Manufacturing',
      description:
        'Optimize production and supply chain with IoT, automation, and smart factory solutions.',
      solutions: [
        'Production Management',
        'Supply Chain Optimization',
        'IoT Integration',
        'Quality Control Systems',
      ],
    },
    {
      icon: <FaMoneyBillWave className="text-5xl text-primary-600" />,
      name: 'Finance & Banking',
      description:
        'Deliver secure, compliant fintech solutions including digital banking and payment systems.',
      solutions: [
        'Digital Banking Platforms',
        'Payment Gateways',
        'Risk Management Systems',
        'Regulatory Compliance',
      ],
    },
    {
      icon: <FaCar className="text-5xl text-primary-600" />,
      name: 'Automotive',
      description:
        'Drive innovation with connected vehicles, fleet management, and automotive software solutions.',
      solutions: [
        'Fleet Management Systems',
        'Connected Car Solutions',
        'Dealership Management',
        'Automotive Analytics',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section background="primary">
        <Container>
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Delivering specialized solutions across diverse sectors with deep domain expertise
            </p>
          </div>
        </Container>
      </Section>

      {/* Industries Grid Section */}
      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card hover className="h-full">
                  <div className="flex justify-center mb-6">{industry.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">{industry.description}</p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Solutions:</h4>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="text-primary-600 mr-2">•</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section background="gray">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary-600 mb-2">6+</div>
              <div className="text-lg text-gray-700">Industries</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-600 mb-2">200+</div>
              <div className="text-lg text-gray-700">Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-lg text-gray-700">Projects</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-lg text-gray-700">Satisfaction</div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Industries;
