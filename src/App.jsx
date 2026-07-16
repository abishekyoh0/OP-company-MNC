import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './theme/ThemeContext';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from './animations/gsap';
import './App.css';

function App() {
  const [view, setView] = useState('home'); // 'home' or 'auth'

  useEffect(() => {
    // Only initialize smooth scroll on client-side
    if (typeof window === 'undefined') return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const rafHandler = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(rafHandler);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(rafHandler);
    };
  }, []);

  useEffect(() => {
    const handleNavigate = (e) => {
      setView(e.detail);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('app-navigate', handleNavigate);
    return () => window.removeEventListener('app-navigate', handleNavigate);
  }, []);

  return (
    <ThemeProvider>
      {view === 'home' ? (
        <MainLayout>
          <Home />
        </MainLayout>
      ) : (
        <Auth />
      )}
    </ThemeProvider>
  );
}

export default App;
