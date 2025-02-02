import React from 'react';
import PropTypes from 'prop-types';

const LoadingSpinner = ({ 
  size = 'md',
  className = '',
  testId = 'loading-spinner'
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div
      data-testid={testId}
      className={`
        animate-spin
        rounded-full
        border-2
        border-gray-300
        border-t-blue-600
        ${sizeClasses[size]}
        ${className}
      `}
      role="status"
      aria-label="Loading"
    />
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  testId: PropTypes.string
};

export default LoadingSpinner; 