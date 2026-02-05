import React from 'react';
import Container from '@components/Container/Container';
import Section from '@components/Section/Section';
import { FaCheckCircle, FaEye, FaBullseye } from 'react-icons/fa';

/**
 * About Us Page Component
 */
const About: React.FC = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions.',
    },
    {
      title: 'Quality',
      description: 'Excellence is embedded in everything we do, from code to customer service.',
    },
    {
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical practices.',
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section background="primary">
        <Container>
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About Us</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Building tomorrow's solutions today with innovation, expertise, and unwavering
              commitment to excellence
            </p>
          </div>
        </Container>
      </Section>

      {/* Our Story Section */}
      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Founded over 15 years ago, Enterprise Solutions has evolved from a small startup to
                a leading provider of enterprise-grade technology solutions. Our journey has been
                marked by continuous innovation, strategic partnerships, and an unwavering focus on
                customer success.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we serve clients across multiple industries, helping them navigate digital
                transformation challenges and achieve their business objectives through tailored
                technology solutions.
              </p>
            </div>
            <div className="relative animate-slide-up">
              <div className="aspect-video bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl shadow-xl"></div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Vision & Mission Section */}
      <Section background="gray">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg animate-slide-up">
              <div className="flex items-center mb-4">
                <FaEye className="text-4xl text-primary-600 mr-4" />
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the global leader in enterprise solutions, empowering businesses to thrive in
                the digital age through innovative technology and strategic expertise.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg animate-slide-up">
              <div className="flex items-center mb-4">
                <FaBullseye className="text-4xl text-primary-600 mr-4" />
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To deliver exceptional value to our clients by combining deep industry knowledge
                with cutting-edge technology, fostering long-term partnerships built on trust and
                measurable results.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Values Section */}
      <Section background="white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our decisions and define our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <FaCheckCircle className="text-5xl text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default About;
