import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import VisionPage from './pages/VisionPage';
import MapPage from './pages/MapPage';
import PitchPage from './pages/PitchPage';
import FeaturesPage from './pages/FeaturesPage';
import DocsPage from './pages/DocsPage';

// Create a wrapper component to conditionally render the header
const AppContent = () => {
  const location = useLocation();
  const isDocsPage = location.pathname.startsWith('/docs');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {!isDocsPage && <Header />}
      <div className={!isDocsPage ? 'pt-16' : ''}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/pitch" element={<PitchPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/docs/*" element={<DocsPage />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <AppContent />
      </Router>
    </DarkModeProvider>
  );
}

export default App; 