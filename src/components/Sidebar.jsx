import React from 'react';
import { Link } from 'react-router-dom';
import { X, Star, Users, Activity, MapPin, Tag } from 'lucide-react';

const Sidebar = ({ isOpen, onClose, selectedProgram }) => {
  if (!isOpen || !selectedProgram) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-96 bg-white dark:bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out z-50">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {selectedProgram.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
          <MapPin className="h-4 w-4 mr-1" />
          {selectedProgram.location}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <div className="flex items-center justify-center text-gray-400 dark:text-gray-500">
            <Star className="h-5 w-5" />
          </div>
          <div className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
            {selectedProgram.stars}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Stars</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center text-gray-400 dark:text-gray-500">
            <Users className="h-5 w-5" />
          </div>
          <div className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
            {selectedProgram.contributors}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Contributors</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center text-gray-400 dark:text-gray-500">
            <Activity className="h-5 w-5" />
          </div>
          <div className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
            {selectedProgram.status}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Status</div>
        </div>
      </div>

      {/* Details */}
      <div className="p-6">
        <div className="space-y-6">
          {/* Impact */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Impact
            </h3>
            <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 p-3 rounded-lg">
              {selectedProgram.impact}
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              About
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {selectedProgram.description}
            </p>
          </div>

          {/* Program Type */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Program Type
            </h3>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-2 text-blue-500" />
              <span className="text-gray-600 dark:text-gray-300">
                {selectedProgram.type}
              </span>
            </div>
          </div>

          {/* View Details Button */}
          <div className="pt-4">
            <Link
              to={`/program/${selectedProgram.id}`}
              className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              View Full Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 