import React from 'react';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';
import { FaArrowRight } from 'react-icons/fa';

interface CareersCTAProps {
  label?: string;
  heading?: string;
  description?: string;
  highlights?: string[];
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  image?: string;
  backgroundColor?: 'light' | 'white';
}

/**
 * Careers CTA Section
 * Professional recruitment call-to-action
 *
 * Design Philosophy:
 * - Attracts serious professionals
 * - Communicates stability & growth
 * - No startup hype
 * - Annual report quality
 */
const CareersCTA: React.FC<CareersCTAProps> = ({
  label = 'CAREERS',
  heading = 'Build Your Career With Us',
  description = 'Join a team that is shaping the future of manufacturing, technology, and sustainable growth across industries.',
  highlights = [
    'Long-term career growth',
    'Learning & development programs',
    'Safe & inclusive work environment',
    'Exposure to global clients',
  ],
  primaryButtonText = 'Explore Careers',
  primaryButtonLink = '/careers',
  secondaryButtonText = 'View Open Positions',
  secondaryButtonLink = '/careers#openings',
  image = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
  backgroundColor = 'light',
}) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  const bgClass = backgroundColor === 'light' ? 'bg-gray-50' : 'bg-white';

  return (
    <section className={`py-20 md:py-28 lg:py-36 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={targetRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column - Content */}
          <div
            className={`transition-all duration-1000 ${
              isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Label */}
            <div className="mb-4">
              <span className="text-xs font-bold text-primary-600 uppercase tracking-[0.2em]">
                {label}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {heading}
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">{description}</p>

            {/* Highlights */}
            {highlights && highlights.length > 0 && (
              <ul className="space-y-3 mb-10">
                {highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-base sm:text-lg text-gray-700"
                  >
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-primary-100 text-primary-600 rounded-sm mt-0.5">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary Button */}
              <Link to={primaryButtonLink}>
                <button className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white font-semibold text-base rounded hover:bg-primary-700 transition-all duration-300 flex items-center justify-center gap-2 group">
                  {primaryButtonText}
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>

              {/* Secondary Button */}
              {secondaryButtonText && (
                <Link to={secondaryButtonLink}>
                  <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 font-semibold text-base rounded border-2 border-gray-300 hover:border-primary-600 hover:text-primary-600 transition-all duration-300">
                    {secondaryButtonText}
                  </button>
                </Link>
              )}
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative overflow-hidden rounded-xl h-full min-h-[500px]">
              <img
                src={image}
                alt="Career Opportunities"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Subtle Overlay for Better Readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersCTA;
