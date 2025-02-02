import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { DarkModeProvider } from '../context/DarkModeContext';
import { AccessibilityProvider } from '../context/AccessibilityContext';
import { AppProvider } from '../store/AppContext';

const AllTheProviders = ({ children }) => {
  return (
    <HashRouter>
      <AppProvider>
        <DarkModeProvider>
          <AccessibilityProvider>
            {children}
          </AccessibilityProvider>
        </DarkModeProvider>
      </AppProvider>
    </HashRouter>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render }; 