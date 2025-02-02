import React from 'react';
import { Github, ArrowRight, Users, Scale, Heart, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const stats = [
    {
      value: "24x",
      label: "Higher incarceration rates for Indigenous youth",
      description: "A systemic crisis requiring immediate action"
    },
    {
      value: "70%",
      label: "Youth reoffend within a year",
      description: "Due to systemic neglect and lack of support"
    },
    {
      value: "$1.3B+",
      label: "Annual incarceration costs",
      description: "With minimal rehabilitation ROI"
    },
    {
      value: "$7",
      label: "Saved per $1 invested",
      description: "In community-led prevention programs"
    }
  ];

  const pillars = [
    {
      icon: <Users className="h-8 w-8 mb-4 text-blue-500" />,
      title: "Grassroots Empowerment",
      description: "Strengthen Indigenous-led organisations with governance tools, funding, and mentorship"
    },
    {
      icon: <Code className="h-8 w-8 mb-4 text-blue-500" />,
      title: "Decentralised Collaboration",
      description: "Connect advocates via our GitHub-inspired platform where communities can 'fork' successful programs"
    },
    {
      icon: <Heart className="h-8 w-8 mb-4 text-blue-500" />,
      title: "Storytelling for Scale",
      description: "Turn local successes into national case studies, inspiring replication and policy change"
    },
    {
      icon: <Scale className="h-8 w-8 mb-4 text-blue-500" />,
      title: "Justice Reinvestment",
      description: "Redirect funding from prisons to prevention, using global insights to complement Indigenous-led approaches"
    }
  ];

  const successStories = [
    {
      name: "Stradbroke Island",
      impact: "35% drop in youth arrests",
      description: "Through cultural reinvestment and community-led programs",
      image: "/success/stradbroke.jpg"
    },
    {
      name: "Confit Pathways",
      impact: "60% recidivism reduction",
      description: "Via mentorship — now being 'forked' in 3 regions",
      image: "/success/confit.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Amplifying Grassroots Solutions to Transform Youth Justice
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A decentralised, community-led initiative to scale what works in youth justice reform
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-gray-900 dark:text-white mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Core Pillars */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Core Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                {pillar.icon}
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story) => (
              <div key={story.name} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {story.name}
                  </h3>
                  <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {story.impact}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {story.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision 2030 */}
        <div className="bg-blue-50 dark:bg-blue-900/30 p-8 rounded-xl mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Vision for 2030
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                500+
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Community-led programs across Australia
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                50%
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Reduction in Indigenous youth incarceration rates
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                Global
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Standard for decentralised, community-driven justice reform
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/docs/get-involved"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
          >
            Join the Movement
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 