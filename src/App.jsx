import React from 'react';
import FluidBackground from './components/layout/FluidBackground';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
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
 * A visually hydrated interface mimicking the texture of luxury serums.
 */

const App = () => {
  return (
    <div className="bg-orange-50/30 min-h-screen text-gray-800 font-sans selection:bg-yellow-200 selection:text-yellow-900">
      <FluidBackground />
      <Navigation />

      <main>
        <Hero />
        <AboutDoctor />
        <Services />
        <BeforeAfterSection />
        <WhyUs />
        <Testimonials />
        <LocationBook />
      </main>

      <Footer />
    </div>
  );
};

export default App;
