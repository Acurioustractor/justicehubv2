import React from 'react';
import { ArrowRight, GitFork, Users, TrendingUp, Radio, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

const VisionPage = () => {
  const stats = [
    { number: "24x", description: "Higher incarceration rates for Indigenous youth" },
    { number: "70%", description: "Of detained youth reoffend within a year" },
    { number: "$1.3B+", description: "Annual incarceration costs with minimal ROI" }
  ];

  const pillars = [
    {
      icon: Users,
      title: "Grassroots Empowerment",
      description: "Strengthen Indigenous-led organisations with governance tools, funding, and mentorship"
    },
    {
      icon: GitFork,
      title: "Decentralised Collaboration",
      description: "Connect advocates via JusticeHub where communities can adapt and 'fork' successful programs"
    },
    {
      icon: Radio,
      title: "Storytelling for Scale",
      description: "Turn local successes into national case studies, inspiring replication and policy change"
    },
    {
      icon: Scale,
      title: "Justice Reinvestment",
      description: "Redirect funding from prisons to prevention, using global insights to complement Indigenous-led approaches"
    }
  ];

  const impacts = [
    {
      title: "Stradbroke Island",
      metric: "35%",
      description: "Drop in youth arrests through cultural reinvestment"
    },
    {
      title: "Confit Pathways",
      metric: "60%",
      description: "Recidivism reduction via mentorship—now being replicated in 3 regions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Amplifying Grassroots Solutions to Transform Youth Justice
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Communities already hold the solutions—they lack the platforms and resources to scale them.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Core Pillars */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Core Pillars
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <pillar.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Examples */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Example Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {impacts.map((impact, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {impact.title}
                </h3>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {impact.metric}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {impact.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/docs"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
          >
            Learn More
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VisionPage;