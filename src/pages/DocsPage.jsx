import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Search, Menu, X, ArrowLeft } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DocRoutes from '../routes/docRoutes';

const DocsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    {
      section: "Getting Started",
      items: [
        { title: "Introduction", path: "/docs/introduction" },
        { title: "Quick Start Guide", path: "/docs/quickstart" },
        { title: "Platform Overview", path: "/docs/overview" }
      ]
    },
    {
      section: "Core Features",
      items: [
        { title: "Program Repositories", path: "/docs/features/repositories" },
        { title: "Forking Programs", path: "/docs/features/forking" },
        { title: "Impact Tracking", path: "/docs/features/impact" },
        { title: "Collaboration Tools", path: "/docs/features/collaboration" }
      ]
    },
    {
      section: "Cultural Safety",
      items: [
        { title: "Cultural Protocols", path: "/docs/cultural/protocols" },
        { title: "Data Sovereignty", path: "/docs/cultural/data" },
        { title: "Community Guidelines", path: "/docs/cultural/guidelines" },
        { title: "Permission Systems", path: "/docs/cultural/permissions" }
      ]
    },
    {
      section: "Program Management",
      items: [
        { title: "Creating Programs", path: "/docs/programs/create" },
        { title: "Documentation", path: "/docs/programs/documentation" },
        { title: "Version Control", path: "/docs/programs/versions" },
        { title: "Access Control", path: "/docs/programs/access" }
      ]
    },
    {
      section: "Community Features",
      items: [
        { title: "Discussion Forums", path: "/docs/community/forums" },
        { title: "Storytelling Hub", path: "/docs/community/stories" },
        { title: "Mentorship Network", path: "/docs/community/mentorship" },
        { title: "Events & Training", path: "/docs/community/events" }
      ]
    },
    {
      section: "Impact & Reporting",
      items: [
        { title: "Metrics Setup", path: "/docs/impact/metrics" },
        { title: "Data Collection", path: "/docs/impact/collection" },
        { title: "Visualization", path: "/docs/impact/visualization" },
        { title: "Report Generation", path: "/docs/impact/reports" }
      ]
    },
    {
      section: "Resources",
      items: [
        { title: "Templates Library", path: "/docs/resources/templates" },
        { title: "Grant Guides", path: "/docs/resources/grants" },
        { title: "Best Practices", path: "/docs/resources/practices" },
        { title: "Case Studies", path: "/docs/resources/cases" }
      ]
    },
    {
      section: "Technical Guides",
      items: [
        { title: "API Documentation", path: "/docs/technical/api" },
        { title: "Integration Guide", path: "/docs/technical/integration" },
        { title: "Security", path: "/docs/technical/security" },
        { title: "Data Privacy", path: "/docs/technical/privacy" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-md text-gray-600 dark:text-gray-300"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700
        transform transition-transform duration-200 ease-in-out z-40 overflow-y-auto
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="sticky top-0 bg-gray-50 dark:bg-gray-800 z-10 p-4 border-b border-gray-200 dark:border-gray-700">
          {/* Back to Main Page button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Main Page
          </button>

          <div className="relative">
            <input
              type="text"
              placeholder="Search docs..."
              className="w-full px-4 py-2 pl-10 rounded-md bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <nav className="px-4 py-6 space-y-8">
          {navigation.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="font-semibold text-sm text-gray-900 dark:text-white uppercase tracking-wider mb-3">
                {section.section}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      to={item.path}
                      className={`
                        block px-3 py-2 rounded-md text-sm
                        ${location.pathname === item.path
                          ? 'bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-100'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }
                      `}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className={`
        transition-all duration-200 ease-in-out
        ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}
      `}>
        <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8">
          <DocRoutes />
        </div>
      </div>
    </div>
  );
};

export default DocsPage; 