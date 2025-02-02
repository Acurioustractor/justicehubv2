import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Star, 
  Users, 
  Activity, 
  MapPin,
  CheckCircle,
  Building,
  Banknote
} from 'lucide-react';

const ProgramPage = ({ programsData }) => {
  const { id } = useParams();
  const program = programsData.find(p => p.id === id);

  if (!program) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Program not found
            </h2>
            <Link 
              to="/map" 
              className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Map
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <Link 
          to="/map" 
          className="inline-flex items-center text-blue-600 dark:text-blue-400 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Map
        </Link>

        {/* Header */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {program.name}
              </h1>
              <div className="mt-2 flex items-center text-gray-500 dark:text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                {program.location}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {program.stars}
                </span>
              </div>
              <span className="text-gray-600 dark:text-gray-300">Stars</span>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-blue-400" />
                <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {program.contributors}
                </span>
              </div>
              <span className="text-gray-600 dark:text-gray-300">Contributors</span>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5">
              <div className="flex items-center">
                <Activity className="h-5 w-5 text-green-400" />
                <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {program.status}
                </span>
              </div>
              <span className="text-gray-600 dark:text-gray-300">Status</span>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Description */}
            <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                About
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {program.description}
              </p>
            </section>

            {/* Key Features */}
            <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Key Features
              </h2>
              <ul className="space-y-3">
                {program.keyFeatures.map((feature, index) => (
                  <li 
                    key={index}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Outcomes */}
            <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Outcomes
              </h2>
              <ul className="space-y-3">
                {program.outcomes.map((outcome, index) => (
                  <li 
                    key={index}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">{outcome}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Replication Status */}
            <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Replication Status
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {program.replicationStatus}
              </p>
            </section>

            {/* Funding */}
            <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Funding Secured
              </h2>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Banknote className="h-5 w-5 text-green-500 mr-2" />
                {program.fundingSecured}
              </div>
            </section>

            {/* Partners */}
            <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Partners
              </h2>
              <ul className="space-y-3">
                {program.partners.map((partner, index) => (
                  <li 
                    key={index}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <Building className="h-4 w-4 text-blue-500 mr-2" />
                    {partner}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramPage; 