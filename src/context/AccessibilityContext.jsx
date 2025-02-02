import React, { createContext, useContext, useCallback } from 'react';

const AccessibilityContext = createContext();

export function AccessibilityProvider({ children }) {
  // For screen reader announcements
  const announce = useCallback((message, priority = 'polite') => {
    const element = document.createElement('div');
    element.setAttribute('aria-live', priority);
    element.classList.add('sr-only');
    document.body.appendChild(element);
    
    // Ensure the element is in the DOM before announcing
    setTimeout(() => {
      element.textContent = message;
      setTimeout(() => document.body.removeChild(element), 1000);
    }, 100);
  }, []);

  return (
    <AccessibilityContext.Provider value={{ announce }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export const useAccessibility = () => useContext(AccessibilityContext); 