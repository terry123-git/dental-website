import React from 'react';

interface GradientBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-gradient-to-br from-blue-50 via-white to-purple-50 ${className}`}>
      {children}
    </div>
  );
};

export default GradientBackground;