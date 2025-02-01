import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Github } from 'lucide-react';

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side - Navigation */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-900 dark:text-white font-semibold">
              Home
            </Link>
            <Link to="/vision" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Vision
            </Link>
            <Link to="/map" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Map
            </Link>
            <Link to="/features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Features
            </Link>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link 
              to="/docs"
              className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Docs
            </Link>
            <a
              href="https://github.com/yourusername/justicehub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 