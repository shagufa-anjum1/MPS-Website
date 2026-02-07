import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';

interface WhoWeAreProps {
  label?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  images?: string[];
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

/**
 * Who We Are / Company Overview Section
 * Premium enterprise design with image grid
 */
const WhoWeAre: React.FC<WhoWeAreProps> = ({
  label = 'WHO WE ARE',
  heading = 'A Trusted Partner in Manufacturing & Innovation',
  description = 'With decades of pioneering experience, we are a leading diversified manufacturing partner delivering comprehensive end-to-end solutions across industries. Our commitment to innovation, quality, and excellence empowers global and domestic brands to achieve their vision through cost-effective, scalable, and reliable manufacturing solutions.',
  buttonText = 'Learn More',
  buttonLink = '/about',
  images = [
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop',
  ],
  stats,
}) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content Section */}
        <div
          ref={targetRef}
          className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Label */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary-600"></div>
            <span className="text-xs font-bold text-primary-600 uppercase tracking-[0.2em]">
              {label}
            </span>
            <div className="h-px w-8 bg-primary-600"></div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            {heading}
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10">{description}</p>

          {/* Stats */}
          {stats && stats.length > 0 && (
            <div className="flex flex-wrap justify-center gap-12 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA Button */}
          <Link
            to={buttonLink}
            className="inline-flex items-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-10 py-5 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
          >
            <span>{buttonText}</span>
            <FaArrowRight className="text-base group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>

        {/* Image Grid - 6 Images */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 transition-all duration-1000 delay-300 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {images.slice(0, 6).map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl group cursor-pointer transition-all duration-500 ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image}
                  alt={`Manufacturing ${index + 1}`}
                  className={`w-full object-cover transition-all duration-500 group-hover:scale-110 ${
                    index === 0 ? 'h-[300px] md:h-[500px]' : 'h-[180px] md:h-[242px]'
                  }`}
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Hover Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary-600/0 group-hover:bg-primary-600/10 transition-all duration-500 rounded-bl-full"></div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-16 flex justify-center">
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary-600 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
