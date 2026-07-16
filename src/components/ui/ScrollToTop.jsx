import React, { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      // Calculate scroll progress ratio
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      // Show button if page scrolled down past 300px
      if (currentScroll > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-22 z-[99] flex items-center justify-center w-12 h-12 rounded-full glassmorphism text-text-main shadow-lg cursor-pointer transition-all duration-500 hover:scale-110 active:scale-95 ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      {/* SVG circular progress indicator */}
      <svg className="absolute w-full h-full transform -rotate-90">
        <circle
          cx="24"
          cy="24"
          r="20"
          className="stroke-border-main"
          strokeWidth="2.5"
          fill="transparent"
        />
        <circle
          cx="24"
          cy="24"
          r="20"
          className="stroke-secondary transition-all duration-100"
          strokeWidth="2.5"
          fill="transparent"
          strokeDasharray="125.6" // 2 * pi * 20
          strokeDashoffset={125.6 - (125.6 * scrollProgress) / 100}
        />
      </svg>
      <FiArrowUp className="w-5 h-5 transition-transform duration-300 hover:-translate-y-0.5" />
    </button>
  );
};

export default ScrollToTop;
