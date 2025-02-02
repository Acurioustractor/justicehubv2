import React from 'react';
import Navigation from './components/Navigation';
import AppRoutes from './routes';
import { DarkModeProvider } from './context/DarkModeContext';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { AppProvider } from './store/AppContext';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <DarkModeProvider>
          <AccessibilityProvider>
            <div className="min-h-screen bg-white dark:bg-gray-900">
              <Navigation />
              <main className="pt-16">
                <AppRoutes />
              </main>
            </div>
          </AccessibilityProvider>
        </DarkModeProvider>
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App; 