import React, { useState } from 'react';
import { MapPin, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImpactMap from '../components/ImpactMap';
import Sidebar from '../components/Sidebar';

const MapPage = ({ programsData }) => {
  console.log('MapPage rendering...');
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Community Solutions Map
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover and connect with grassroots programs making real impact across Australia
          </p>
        </div>

        {/* Interactive Map */}
        <div className="relative w-full h-[600px] bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <ImpactMap 
            markers={programsData}
            onMarkerClick={(program) => {
              console.log('Marker clicked:', program);
              setSelectedProgram(program);
              setIsSidebarOpen(true);
            }}
            selectedProgram={selectedProgram}
          />
        </div>

        {/* Sidebar */}
        {selectedProgram && (
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            selectedProgram={selectedProgram}
          />
        )}

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programsData.map((program) => (
            <div 
              key={program.id}
              id={`program-${program.id}`}
              className={`
                bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg
                transition-all duration-200
                ${selectedProgram === program.id ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''}
                hover:shadow-xl cursor-pointer
              `}
              onClick={() => {
                setSelectedProgram(program);
                setIsSidebarOpen(true);
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {program.name}
                  </h3>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    {program.location}
                  </div>
                </div>
                <span className={`
                  px-3 py-1 rounded-full text-sm
                  ${program.status === 'Active' 
                    ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                    : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'}
                `}>
                  {program.type}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {program.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="text-green-600 dark:text-green-400 font-semibold">
                  {program.impact}
                </div>
                <Link 
                  to={`/programs/${program.id}`}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center"
                >
                  View Details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/docs/programs/create"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
          >
            Add Your Program
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MapPage; 