import React from 'react';
import Hero from '../sections/Hero';
import Logos from '../sections/Logos';
import Features from '../sections/Features';
import Services from '../sections/Services';
import About from '../sections/About';
import Statistics from '../sections/Statistics';
import Timeline from '../sections/Timeline';
import Products from '../sections/Products';
import Portfolio from '../sections/Portfolio';
import WhyChooseUs from '../sections/WhyChooseUs';
import Testimonials from '../sections/Testimonials';
import Pricing from '../sections/Pricing';
import FAQ from '../sections/FAQ';
import CTA from '../sections/CTA';

const Home = () => {
  return (
    <div className="flex flex-col w-full relative">
      {/* 1. Hero Reveal Section */}
      <Hero />

      {/* 2. Client Partner Logos */}
      <Logos />

      {/* 3. Reusable Features Grid */}
      <Features />

      {/* 4. Tabbed Services Panel */}
      <Services />

      {/* 5. Company Core Vision & About */}
      <About />

      {/* 6. High-Performance Counting Stats */}
      <Statistics />

      {/* 7. Platform Development Roadmap Timeline */}
      <Timeline />

      {/* 8. Products Showcases & Live Telemetry */}
      <Products />

      {/* 9. Portfolio grid with Filter Tags */}
      <Portfolio />

      {/* 10. Why Choose Us Value Pillars */}
      <WhyChooseUs />

      {/* 11. Testimonials Slide Carousel */}
      <Testimonials />

      {/* 12. Flexible Pricing Comparisons */}
      <Pricing />

      {/* 13. FAQs Accordions */}
      <FAQ />

      {/* 14. Action Call CTA Block */}
      <CTA />
    </div>
  );
};

export default Home;
