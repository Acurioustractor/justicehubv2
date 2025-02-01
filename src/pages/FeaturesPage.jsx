import React from 'react';
import { 
  GitFork, 
  GitPullRequest, 
  Users, 
  BarChart2, 
  BookOpen, 
  MessageSquare, 
  Star, 
  GitBranch,
  Calendar,
  Shield,
  Radio,
  FileText
} from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    {
      category: "Core Collaboration",
      items: [
        {
          icon: GitFork,
          title: "Program Forking",
          description: "Adapt successful programs to your local context, just like forking code. Example: Mount Isa 'forked' Stradbroke Island's model with local cultural adaptations.",
          status: "Live"
        },
        {
          icon: GitPullRequest,
          title: "Knowledge Sharing",
          description: "Submit improvements back to original programs through 'pull requests', enabling continuous community refinement.",
          status: "Coming Soon"
        },
        {
          icon: GitBranch,
          title: "Program Variations",
          description: "Create specialized versions of programs for different contexts while maintaining connection to the original.",
          status: "Beta"
        }
      ]
    },
    {
      category: "Resource Hub",
      items: [
        {
          icon: BookOpen,
          title: "Resource Library",
          description: "Access templates, grant guides, governance frameworks, and training modules. Features version control and community contributions.",
          status: "Live"
        },
        {
          icon: FileText,
          title: "Program Blueprints",
          description: "Detailed documentation of successful programs including budgets, timelines, and cultural protocols.",
          status: "Live"
        },
        {
          icon: Calendar,
          title: "Kanban Boards",
          description: "Track tasks, deadlines, and impact metrics with collaborative project management tools.",
          status: "Beta"
        }
      ]
    },
    {
      category: "Community & Impact",
      items: [
        {
          icon: Users,
          title: "Community Network",
          description: "Connect with mentors, share experiences, and build partnerships across regions.",
          status: "Live"
        },
        {
          icon: Radio,
          title: "Storytelling Hub",
          description: "Share success stories through case studies, podcasts (FUTURES Radio), and advocacy campaigns.",
          status: "Coming Soon"
        },
        {
          icon: MessageSquare,
          title: "Discussion Forums",
          description: "Engage in topic-specific discussions, troubleshooting, and knowledge exchange.",
          status: "Live"
        }
      ]
    },
    {
      category: "Impact Tracking",
      items: [
        {
          icon: BarChart2,
          title: "Impact Dashboards",
          description: "Visualize program outcomes, track recidivism reduction, and measure community engagement.",
          status: "Beta"
        },
        {
          icon: Star,
          title: "Success Metrics",
          description: "Standardized impact measurements across programs with customizable local indicators.",
          status: "Coming Soon"
        },
        {
          icon: Shield,
          title: "Cultural Safeguards",
          description: "Indigenous data sovereignty protocols and permissioned access to sensitive cultural IP.",
          status: "Live"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-100 mb-6">
            JusticeHub Features
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A GitHub-inspired platform for scaling community-led justice solutions
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-20">
          {features.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-8">
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg relative"
                  >
                    <div className="absolute -top-3 right-4">
                      <span className={`
                        px-3 py-1 rounded-full text-sm font-medium
                        ${feature.status === 'Live' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' : 
                          feature.status === 'Beta' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100' :
                          'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'}
                      `}>
                        {feature.status}
                      </span>
                    </div>
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
          ))}
        </div>

        {/* Technical Foundation */}
        <div className="mt-20 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-6">
            Technical Foundation
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">No-Code Backbone</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built on Airtable and Softr for accessibility and rapid iteration
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Open Architecture</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Integrates with government data, grant platforms, and social media
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Cultural Security</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Indigenous data sovereignty and permissioned cultural content access
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage; 