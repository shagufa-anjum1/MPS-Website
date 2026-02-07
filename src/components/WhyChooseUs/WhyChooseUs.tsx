import React from 'react';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';
import {
  FaIndustry,
  FaHandshake,
  FaMapMarkedAlt,
  FaAward,
  FaUserTie,
  FaCertificate,
} from 'react-icons/fa';

interface Strength {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface WhyChooseUsProps {
  label?: string;
  heading?: string;
  subheading?: string;
  strengths?: Strength[];
  stats?: StatItem[];
}

/**
 * Why Choose Us / Our Strengths Section
 * Enterprise-grade trust-building component
 *
 * Design Philosophy:
 * - Build credibility through facts
 * - No marketing fluff
 * - Clear, confident statements
 * - Investor-grade presentation
 */
const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  label = 'WHY US',
  heading = 'Why Leading Brands Trust Us',
  subheading = 'Decades of manufacturing excellence backed by scale, quality, and reliability. Our commitment to innovation and operational excellence makes us the preferred manufacturing partner for global and domestic brands.',
  strengths = [
    {
      id: 'manufacturing-scale',
      icon: <FaIndustry className="text-4xl" />,
      title: 'Large-Scale Manufacturing Capability',
      description:
        'State-of-the-art facilities with high-volume production capacity across multiple locations.',
    },
    {
      id: 'oem-partnerships',
      icon: <FaHandshake className="text-4xl" />,
      title: 'Strong OEM Partnerships',
      description:
        'Trusted manufacturing partner for leading global brands with long-term strategic relationships.',
    },
    {
      id: 'pan-india',
      icon: <FaMapMarkedAlt className="text-4xl" />,
      title: 'Pan-India Manufacturing Presence',
      description:
        'Strategically located facilities ensuring optimal logistics and regional market coverage.',
    },
    {
      id: 'quality-compliance',
      icon: <FaAward className="text-4xl" />,
      title: 'Quality & Compliance Driven',
      description:
        'ISO certified processes with stringent quality controls and international standard compliance.',
    },
    {
      id: 'leadership',
      icon: <FaUserTie className="text-4xl" />,
      title: 'Experienced Leadership Team',
      description:
        'Seasoned management and engineering professionals with deep industry expertise.',
    },
    {
      id: 'certifications',
      icon: <FaCertificate className="text-4xl" />,
      title: 'Industry Certifications',
      description:
        'Comprehensive certifications ensuring adherence to global manufacturing standards.',
    },
  ],
  stats = [
    { value: '15+', label: 'Manufacturing Units' },
    { value: '20+', label: 'Years of Excellence' },
    { value: '100+', label: 'Global Clients' },
    { value: '5000+', label: 'Skilled Workforce' },
  ],
}) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 border border-primary-600 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-primary-600 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={targetRef}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column - Content */}
          <div
            className={`lg:col-span-2 lg:sticky lg:top-32 transition-all duration-1000 ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary-600"></div>
              <span className="text-xs font-bold text-primary-600 uppercase tracking-[0.2em]">
                {label}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {heading}
            </h2>

            {/* Subheading */}
            <p className="text-lg text-gray-600 leading-relaxed mb-10">{subheading}</p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 p-8 bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl border border-primary-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-primary-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-700 font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Strengths Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {strengths.map((strength, index) => (
                <div
                  key={strength.id}
                  className={`group p-8 bg-gray-50 hover:bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-500 ${
                    isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Icon */}
                  <div className="text-primary-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                    {strength.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {strength.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-gray-600 leading-relaxed">{strength.description}</p>

                  {/* Bottom Accent Line */}
                  <div className="mt-6 h-1 w-12 bg-primary-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
