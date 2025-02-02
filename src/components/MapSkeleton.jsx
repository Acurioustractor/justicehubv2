import React from 'react';

const MapSkeleton = () => {
  return (
    <div className="w-full h-full bg-gray-100 dark:bg-gray-800 animate-pulse flex items-center justify-center">
      <div className="text-gray-400 dark:text-gray-600">
        Loading map...
      </div>
    </div>
  );
};

export default MapSkeleton; 