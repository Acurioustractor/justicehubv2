import React from 'react';
import { ArrowRight, GitFork, Users, TrendingUp, Radio, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

const PitchPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-100 mb-6">
            Amplifying Grassroots Solutions to Transform Youth Justice
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A decentralised, community-led initiative combining digital innovation with cultural wisdom
          </p>
        </div>

        {/* Urgent Need Section */}
        <div className="bg-red-50 dark:bg-red-900/30 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-red-900 dark:text-red-100 mb-6">The Urgent Need</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-700 dark:text-red-300 mb-2">24x</div>
              <div className="text-gray-700 dark:text-gray-300">Higher incarceration rates for Indigenous youth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-700 dark:text-red-300 mb-2">70%</div>
              <div className="text-gray-700 dark:text-gray-300">Youth reoffend within a year</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-700 dark:text-red-300 mb-2">$1.3B+</div>
              <div className="text-gray-700 dark:text-gray-300">Annual incarceration costs</div>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-8 text-center">Core Pillars</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Grassroots Empowerment",
                description: "Strengthen Indigenous-led organisations with governance tools, funding, and mentorship"
              },
              {
                icon: GitFork,
                title: "Decentralised Collaboration",
                description: "Connect advocates via JusticeHub where communities can 'fork' successful programs"
              },
              {
                icon: Radio,
                title: "Storytelling for Scale",
                description: "Turn local successes into national case studies, inspiring replication and policy change"
              },
              {
                icon: Scale,
                title: "Justice Reinvestment",
                description: "Redirect funding from prisons to prevention using global insights"
              }
            ].map((pillar, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <pillar.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
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
        <div className="bg-green-50 dark:bg-green-900/30 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-6">Example Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Stradbroke Island</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                35% drop in youth arrests through cultural reinvestment
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Confit Pathways</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                60% recidivism reduction via mentorship—now being "forked" in 3 regions
              </p>
            </div>
          </div>
        </div>

        {/* 2025 Roadmap */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-8 text-center">2025 Roadmap</h2>
          <div className="space-y-8">
            {[
              {
                phase: "Sprint 1: Ignite Local Leaders",
                period: "Jan–Mar 2025",
                activities: [
                  "Launch JusticeHub MVP with 'forking' tools",
                  "Train 50+ advocates in governance",
                  "Publish 3 case studies"
                ]
              },
              {
                phase: "Sprint 2: Scale Through Stories",
                period: "Apr–Jun 2025",
                activities: [
                  "Partner with FUTURES Radio",
                  "Host 'Forkathons' for community adaptation",
                  "Secure $1M+ in reinvested funding"
                ]
              },
              {
                phase: "Sprint 3: Cement Systemic Change",
                period: "Jul–Sept 2025",
                activities: [
                  "Train 500+ advocates",
                  "Launch national advocacy campaign",
                  "Globalise insights with international partners"
                ]
              }
            ].map((sprint, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{sprint.phase}</h3>
                  <span className="text-blue-600 dark:text-blue-400">{sprint.period}</span>
                </div>
                <ul className="space-y-2">
                  {sprint.activities.map((activity, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-2 w-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600 dark:text-gray-300">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Join Us in Transforming Youth Justice
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Every $1 invested in grassroots solutions saves $7 in incarceration costs. 
            Partner with us to turn local solutions into national transformation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
          >
            Partner With Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PitchPage; 