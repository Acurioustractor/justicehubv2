import { useEffect, useCallback } from 'react';

export const usePerformance = (componentName) => {
  useEffect(() => {
    // Mark component render in performance timeline
    performance.mark(`${componentName}-start`);

    return () => {
      performance.mark(`${componentName}-end`);
      performance.measure(
        `${componentName}-measure`,
        `${componentName}-start`,
        `${componentName}-end`
      );
    };
  }, [componentName]);

  const logPerformance = useCallback(() => {
    const entries = performance.getEntriesByType('measure');
    console.log(`Performance metrics for ${componentName}:`, entries);
  }, [componentName]);

  return { logPerformance };
}; 