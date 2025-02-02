import React, { useEffect, useState } from 'react';

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        setMetrics(prev => ({
          ...prev,
          ...entries.reduce((acc, entry) => ({
            ...acc,
            [entry.name]: entry.duration.toFixed(2)
          }), {})
        }));
      });

      observer.observe({ entryTypes: ['measure'] });
      return () => observer.disconnect();
    }
  }, []);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-75 hover:opacity-100 transition-opacity">
      <h3 className="text-sm font-bold mb-2">Performance Metrics (ms)</h3>
      <ul className="text-xs space-y-1">
        {Object.entries(metrics).map(([name, duration]) => (
          <li key={name}>
            {name}: {duration}ms
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerformanceMonitor; 