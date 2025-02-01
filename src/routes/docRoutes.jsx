import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IntroductionPage from '../pages/docs/introduction';
import QuickStartPage from '../pages/docs/quickstart';

const DocRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<IntroductionPage />} />
      <Route path="/introduction" element={<IntroductionPage />} />
      <Route path="/quickstart" element={<QuickStartPage />} />
    </Routes>
  );
};

export default DocRoutes; 