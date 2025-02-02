import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PitchPage from '../pages/PitchPage';
import MapPage from '../pages/MapPage';
import ProgramPage from '../pages/ProgramPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';
import { programsData } from '../data/programsData';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pitch" element={<PitchPage />} />
      <Route path="/map" element={<MapPage programsData={programsData} />} />
      <Route path="/program/:id" element={<ProgramPage programsData={programsData} />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes; 