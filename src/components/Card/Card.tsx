import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

/**
 * Reusable Card Component
 */
const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 ${
        hover ? 'hover:shadow-xl transition-shadow duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
