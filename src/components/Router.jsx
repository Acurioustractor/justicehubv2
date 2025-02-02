import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import { routes } from '../routes/routes.config';

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner size="lg" />
  </div>
);

const Router = () => {
  const renderRoutes = (routes) => {
    return routes.map(route => (
      <Route
        key={route.path}
        path={route.path}
        element={
          <Suspense fallback={<LoadingFallback />}>
            <route.element />
          </Suspense>
        }
      >
        {route.children && renderRoutes(route.children)}
      </Route>
    ));
  };

  return (
    <Routes>
      {renderRoutes(routes)}
    </Routes>
  );
};

export default Router; 