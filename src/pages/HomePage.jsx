import React from 'react';
import { Users, Share2, TrendingUp, ArrowRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-blue-900 dark:text-blue-100 mb-6">
            JusticeHub
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Transforming Youth Justice Through Digital Innovation
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/map"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
            >
              Explore Map
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="https://github.com/yourusername/justicehub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-800 text-white font-bold hover:bg-gray-700 transition-colors"
            >
              <Github className="mr-2 h-5 w-5" />
              Fork Project
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-red-50 dark:bg-red-900/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-4">
                Systemic Crisis
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong className="text-red-700 dark:text-red-300">74%</strong> of young people return to detention within 12 months of release
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong className="text-red-700 dark:text-red-300">83%</strong> of youth in detention are unsentenced, costing over <strong className="text-red-700 dark:text-red-300">$670M</strong> annually
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Indigenous youth are <strong className="text-red-700 dark:text-red-300">19x</strong> more likely to be under supervision
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Key Risk Factors
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                    Out-of-home care
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                    Poor education
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                    Mental health
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                    Unstable housing
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                    Early police contact
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                    Substance use
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Regional Focus */}
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-8 rounded-2xl mb-16">
            <h3 className="text-2xl font-bold text-yellow-700 dark:text-yellow-300 mb-4">
              Queensland Crisis
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-700 dark:text-yellow-300 mb-2">22%</div>
                <div className="text-gray-700 dark:text-gray-300">Increase in detention rates over 5 years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-700 dark:text-yellow-300 mb-2">2x</div>
                <div className="text-gray-700 dark:text-gray-300">Higher detention rate than national average</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-700 dark:text-yellow-300 mb-2">54%</div>
                <div className="text-gray-700 dark:text-gray-300">Of offenders are Indigenous youth</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section - Updated with intervention approaches */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-4 text-center">
            Community-Led Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Shifting from punishment to transformation through early intervention and community empowerment
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Share2,
                title: "Decentralized Programs",
                description: "Community-led and place-based reintegration strategies that can be adapted locally"
              },
              {
                icon: Users,
                title: "Cultural Support",
                description: "Holistic approaches that embrace community connections and cultural identity"
              },
              {
                icon: TrendingUp,
                title: "Prevention Focus",
                description: "Early intervention programs that address root causes before crisis"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <feature.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-blue-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-12 text-center">
            Projected Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "500+", label: "Community programs supported by 2030" },
              { number: "50%", label: "Reduction in youth incarceration" },
              { number: "$7", label: "Saved for every $1 invested" }
            ].map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-8 rounded-xl text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Join Us in Transforming Youth Justice
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Be part of a movement that's reimagining how communities support their young people
          </p>
          <Link
            to="/map"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
          >
            Explore the Platform
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 