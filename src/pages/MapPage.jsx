import React, { useState } from 'react';
import { MapPin, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImpactMap from '../components/ImpactMap';

const MapPage = () => {
  // This should match the data structure from your ImpactMap component
  const programs = [
    {
      id: 1,
      name: "Stradbroke Island Justice Reinvestment",
      location: "Minjerribah (North Stradbroke Island), QLD",
      coordinates: [-27.5, 153.4],
      type: "Cultural Reinvestment",
      impact: "35% reduction in youth arrests",
      description: "Community-led program combining cultural connection with justice reinvestment principles",
      status: "Active"
    },
    {
      id: 2,
      name: "Confit Pathways",
      location: "Western Sydney, NSW",
      coordinates: [-33.8, 151.0],
      type: "Mentorship",
      impact: "60% reduction in recidivism",
      description: "Youth mentorship through fitness and professional development",
      status: "Active"
    },
    {
      id: 3,
      name: "Mount Isa Camping on Country",
      location: "Mount Isa, QLD",
      coordinates: [-20.7, 139.5],
      type: "Cultural Connection",
      impact: "40% engagement increase",
      description: "Traditional knowledge and healing through on-country experiences",
      status: "Active"
    },
    {
      id: 4,
      name: "Oonchiumpa",
      location: "Broome, WA",
      coordinates: [-17.9, 122.2],
      type: "Healing Model",
      impact: "45% reduction in court referrals",
      description: "Holistic healing approach combining traditional and modern practices",
      status: "Scaling"
    }
  ];

  const [selectedProgram, setSelectedProgram] = useState(null);

  // Handler for when a location is clicked on the map
  const handleLocationSelect = (programId) => {
    setSelectedProgram(programId);
    // Scroll to the program card if on mobile
    if (window.innerWidth < 768) {
      const card = document.getElementById(`program-${programId}`);
      if (card) card.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Enhanced Header Section with more specific messaging */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Youth Justice Initiatives Across Australia
          </h1>
          <h2 className="text-xl text-blue-600 dark:text-blue-400 mb-6">
            Discover Community-Led Programs Making Real Impact
          </h2>
          <div className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto space-y-4">
            <p>
              Explore our interactive map showcasing successful youth justice programs across Australia. 
              Each marker represents a community initiative with proven results in:
            </p>
            <ul className="grid grid-cols-2 gap-4 mt-4 text-left max-w-2xl mx-auto">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Reducing youth detention rates</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Cultural connection programs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Mentorship initiatives</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Community healing models</span>
              </li>
            </ul>
            <p className="mt-4">
              Click on any marker to see detailed impact data, program descriptions, and ways to connect 
              with these initiatives. Each program can be adapted and implemented in your community.
            </p>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="mb-16 h-[600px] bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <ImpactMap 
            programs={programs}
            onLocationSelect={handleLocationSelect}
            selectedProgram={selectedProgram}
          />
        </div>

        {/* Program Cards Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Featured Community Initiatives
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div 
                key={program.id}
                id={`program-${program.id}`}
                className={`
                  bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg
                  transition-all duration-200
                  ${selectedProgram === program.id ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''}
                  hover:shadow-xl cursor-pointer
                `}
                onClick={() => handleLocationSelect(program.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {program.name}
                    </h4>
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
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            to="/docs/programs/create"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
          >
            Add Your Community Initiative
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MapPage; 