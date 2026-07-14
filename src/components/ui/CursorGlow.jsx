import React, { useEffect, useRef } from 'react';
import { gsap } from '../../animations/gsap';

const CursorGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    // Center the element relative to cursor position
    gsap.set(glow, { xPercent: -50, yPercent: -50, opacity: 0 });

    // Use GSAP's highly optimized quickTo method for high-frequency cursor tracking (60fps+)
    const xTo = gsap.quickTo(glow, 'x', { duration: 0.8, ease: 'power3.out' });
    const yTo = gsap.quickTo(glow, 'y', { duration: 0.8, ease: 'power3.out' });

    const handleMouseMove = (e) => {
      // Fade in on first movement
      gsap.to(glow, { opacity: 1, duration: 0.5 });
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseLeave = () => {
      gsap.to(glow, { opacity: 0, duration: 0.5 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[450px] h-[450px] rounded-full pointer-events-none -z-10 mix-blend-screen opacity-0 transition-opacity duration-300 hidden md:block"
      style={{
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.07) 0%, rgba(217, 70, 239, 0.02) 50%, transparent 100%)',
        filter: 'blur(60px)',
      }}
    />
  );
};

export default CursorGlow;
