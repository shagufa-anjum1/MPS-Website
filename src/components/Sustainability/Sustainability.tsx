import React from 'react';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';
import { FaLeaf, FaUsers, FaShieldAlt } from 'react-icons/fa';

interface ESGPillar {
  id: string;
  icon: React.ReactNode;
  title: string;
  points: string[];
}

interface MetricItem {
  value: string;
  label: string;
}

interface SustainabilityProps {
  label?: string;
  heading?: string;
  subheading?: string;
  pillars?: ESGPillar[];
  metrics?: MetricItem[];
  image?: string;
}

/**
 * Sustainability / ESG Section
 * Enterprise-grade responsible growth communication
 *
 * Design Philosophy:
 * - Annual report quality
 * - Investor-grade presentation
 * - Authentic, not marketing-driven
 * - Legally safe messaging
 */
const Sustainability: React.FC<SustainabilityProps> = ({
  label = 'SUSTAINABILITY',
  heading = 'Sustainability & ESG',
  subheading = 'We are committed to responsible growth by integrating environmental, social, and governance principles across our operations.',
  pillars = [
    {
      id: 'environmental',
      icon: <FaLeaf className="text-4xl" />,
      title: 'Environmental Responsibility',
      points: [
        'Energy-efficient manufacturing',
        'Waste reduction & recycling',
        'Sustainable sourcing practices',
      ],
    },
    {
      id: 'social',
      icon: <FaUsers className="text-4xl" />,
      title: 'Social Responsibility',
      points: [
        'Employee safety & well-being',
        'Skill development & training',
        'Community engagement initiatives',
      ],
    },
    {
      id: 'governance',
      icon: <FaShieldAlt className="text-4xl" />,
      title: 'Strong Governance',
      points: ['Ethical business practices', 'Compliance & transparency', 'Robust risk management'],
    },
  ],
  metrics = [
    { value: '35%', label: 'Energy from sustainable sources' },
    { value: '2,500+', label: 'Employees trained annually' },
    { value: '100%', label: 'Compliance adherence' },
  ],
  image = 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&h=800&fit=crop',
}) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={targetRef}
          className={`max-w-3xl mb-16 transition-all duration-1000 ${
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
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">{subheading}</p>
        </div>

        {/* Two Column Layout - Content + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left Column - ESG Pillars */}
          <div className="space-y-8">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.id}
                className={`transition-all duration-1000 ${
                  isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-white rounded-lg border border-gray-200 text-primary-600">
                    {pillar.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                    <ul className="space-y-2">
                      {pillar.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-start gap-2 text-base text-gray-600"
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary-600 rounded-full mt-2"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Image */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${
              isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative overflow-hidden rounded-xl h-full min-h-[400px]">
              <img
                src={image}
                alt="Sustainable Manufacturing"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Metrics Row */}
        {metrics && metrics.length > 0 && (
          <div
            className={`transition-all duration-1000 delay-700 ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-white rounded-xl border border-gray-200 p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm sm:text-base text-gray-600 font-medium">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Sustainability;
