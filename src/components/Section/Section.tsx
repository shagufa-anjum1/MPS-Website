import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary';
}

/**
 * Reusable Section Component
 */
const Section: React.FC<SectionProps> = ({ children, className = '', background = 'white' }) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50',
  };

  return (
    <section className={`py-16 md:py-20 ${backgroundClasses[background]} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
