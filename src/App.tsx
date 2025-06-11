import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import CarShowcase from './components/CarShowcase';
import ContinuousCarousel from './components/ContinuousCarousel';
import FuturisticSection from './components/FuturisticSection';
import ClassicModernComparison from './components/ClassicModernComparison';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <CarShowcase />
      <ContinuousCarousel />
      <FuturisticSection />
      <ClassicModernComparison />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;