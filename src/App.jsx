import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import TheExpertPage from './pages/TheExpertPage';
import Hero from './components/sections/Hero';
import AboutDoctor from './components/sections/AboutDoctor';
import Services from './components/sections/Services';
import BeforeAfterSection from './components/sections/BeforeAfterSection';
import WhyUs from './components/sections/WhyUs';
import Testimonials from './components/sections/Testimonials';
import LocationBook from './components/sections/LocationBook';

/**
 * SKINN360 - GONDAL
 * Concept: Hydro-Luxe (Liquid Gold)
 */

const HomePage = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    const id = location.hash.replace(/^#/, '');
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() =>
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      );
    }
  }, [location.pathname, location.hash]);

  return (
    <Layout>
      <Hero />
      <AboutDoctor />
      <Services />
      <BeforeAfterSection />
      <WhyUs />
      <Testimonials />
      <LocationBook />
    </Layout>
  );
};

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/expert" element={<TheExpertPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
