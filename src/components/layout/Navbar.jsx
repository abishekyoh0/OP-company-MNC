import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { navigateTo } from '../../utils/navigation';
import { navigationLinks } from '../../data/mockData';
import { FiSun, FiMoon, FiMenu, FiX, FiActivity } from 'react-icons/fi';
import Button from '../ui/Button';
import { gsap } from '../../animations/gsap';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Monitor viewport scroll to toggle background blurring
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP reveal animation for navbar on mounting
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.nav-item',
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      );
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-bg-base/80 backdrop-blur-lg border-b border-border-main/40 py-3 shadow-md' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className=" mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="nav-item flex items-center gap-2 group cursor-pointer select-none">
          <div className="w-10 h-10 rounded-lg bg-gradient-premium flex items-center justify-center text-white shadow-glow">
            <FiActivity className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <span className="font-extrabold font-heading text-lg md:text-xl text-gradient tracking-tight">
            AETHERIS
          </span>
        </a>

        {/* Desktop Navigation Link Items */}
        <nav className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-item text-sm font-semibold text-text-main/80 hover:text-secondary font-heading transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side Options (Theme Toggle + Action Button) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="nav-item p-2.5 rounded-lg border border-border-main text-text-main hover:bg-bg-surface-hover hover:text-secondary transition-all duration-300 cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun className="w-4 h-4 animate-float" /> : <FiMoon className="w-4 h-4" />}
          </button>
          
          <Button 
            variant="gradient" 
            size="sm" 
            className="nav-item"
            onClick={() => navigateTo('auth')}
          >
            Get Platform Access
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border-main text-text-main hover:bg-bg-surface-hover transition-colors duration-300 cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun className="w-4.5 h-4.5" /> : <FiMoon className="w-4.5 h-4.5" />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-border-main text-text-main hover:bg-bg-surface-hover transition-colors duration-300 cursor-pointer"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[65px] z-40 w-full h-[calc(100vh-65px)] bg-bg-base transition-all duration-500 md:hidden border-t border-border-main/50 flex flex-col p-6 gap-6 ${
          mobileMenuOpen 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-4">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold font-heading text-text-main py-2 border-b border-border-main/30 hover:text-secondary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-4 mt-auto">
          <Button 
            variant="gradient" 
            size="lg" 
            className="w-full" 
            onClick={() => { setMobileMenuOpen(false); navigateTo('auth'); }}
          >
            Get Platform Access
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
