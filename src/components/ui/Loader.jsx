import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide preloader after a short timeout simulating asset loading
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg-base transition-opacity duration-700">
      <div className="relative flex flex-col items-center gap-6">
        {/* Glow core */}
        <div className="absolute w-40 h-40 bg-gradient-premium opacity-20 blur-3xl -z-10 rounded-full animate-pulse-slow" />
        
        {/* Orbit spinner */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-secondary/10 rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-t-secondary border-r-accent rounded-full animate-spin" />
        </div>
        
        {/* Company Title */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl md:text-3xl font-extrabold font-heading text-gradient tracking-tight m-0 select-none">
            AETHERIS
          </h1>
          <p className="text-xs font-semibold font-heading text-text-muted/60 uppercase tracking-widest mt-1">
            Global Enterprise Platform
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
