import React from 'react';
import Container from '@components/Container/Container';
import Section from '@components/Section/Section';
import Button from '@components/Button/Button';
import Card from '@components/Card/Card';
import { Link } from 'react-router-dom';
import { ROUTES } from '@utils/constants';
import { FaRocket, FaChartLine, FaCogs, FaUsers, FaAward, FaGlobeAmericas } from 'react-icons/fa';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';

/**
 * Home Page Component
 */
const Home: React.FC = () => {
  const { targetRef: heroRef, isIntersecting: heroVisible } = useIntersectionObserver();
  const { targetRef: servicesRef, isIntersecting: servicesVisible } = useIntersectionObserver();
  const { targetRef: statsRef, isIntersecting: statsVisible } = useIntersectionObserver();

  const services = [
    {
      icon: <FaRocket className="text-4xl text-primary-600" />,
      title: 'Digital Transformation',
      description:
        'Modernize your business with cutting-edge digital solutions that drive growth and efficiency.',
    },
    {
      icon: <FaChartLine className="text-4xl text-primary-600" />,
      title: 'Business Intelligence',
      description:
        'Transform data into actionable insights with our advanced analytics and BI solutions.',
    },
    {
      icon: <FaCogs className="text-4xl text-primary-600" />,
      title: 'Custom Development',
      description:
        'Build scalable, robust applications tailored to your unique business requirements.',
    },
    {
      icon: <FaUsers className="text-4xl text-primary-600" />,
      title: 'Consulting Services',
      description:
        'Expert guidance to help you navigate complex technology decisions and implementations.',
    },
  ];

  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '500+', label: 'Projects Delivered' },
    { value: '200+', label: 'Happy Clients' },
    { value: '50+', label: 'Team Members' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <Container className="relative z-10">
          <div
            className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Innovation Meets
              <span className="block text-accent-500">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              We deliver enterprise-grade solutions that transform businesses and drive sustainable
              growth across industries
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to={ROUTES.SERVICES}>
                <Button size="lg" variant="primary">
                  Explore Services
                </Button>
              </Link>
              <Link to={ROUTES.CONTACT}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-primary-600 border-white hover:bg-gray-50"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Section background="white">
        <Container>
          <div
            ref={servicesRef}
            className={`text-center mb-12 transition-all duration-1000 ${
              servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your digital journey and maximize
              business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`transition-all duration-700 delay-${index * 100} ${
                  servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <Card hover className="h-full text-center">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to={ROUTES.SERVICES}>
              <Button size="lg">View All Services</Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section background="primary">
        <Container>
          <div
            ref={statsRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ${
              statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary-700 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Choose Us Section */}
      <Section background="gray">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We combine deep industry expertise with innovative technology to deliver solutions
                that drive measurable business outcomes.
              </p>
              <ul className="space-y-4">
                {[
                  'Proven track record of successful implementations',
                  'Experienced team of industry experts',
                  'Customer-centric approach to solution design',
                  'Scalable and future-ready architectures',
                  '24/7 dedicated support and maintenance',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaAward className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl shadow-2xl flex items-center justify-center">
                <FaGlobeAmericas className="text-white text-9xl opacity-20" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="white">
        <Container>
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Let's discuss how we can help transform your business
            </p>
            <Link to={ROUTES.CONTACT}>
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Home;
