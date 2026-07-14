import React, { useEffect, useRef } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { FiTarget, FiEye, FiCheck } from 'react-icons/fi';
import { gsap } from '../animations/gsap';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the text columns
      gsap.fromTo(
        '.about-reveal-text',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Animate the two icons once on scroll
      gsap.fromTo(
        '.about-icon-animate',
        { scale: 0, rotation: -40, opacity: 0 },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          delay: 0.5,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Reveal the graphic panel
      gsap.fromTo(
        '.about-reveal-graphic',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '.about-reveal-graphic',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 md:py-20 px-6  mx-auto w-full flex flex-col gap-16 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text details */}
        <div className="lg:col-span-7 flex flex-col text-left gap-6">
          <div className="about-reveal-text">
            <Badge variant="accent" className="px-3 py-1 text-xs">
              Sovereign Cloud Pioneers
            </Badge>
          </div>

          <h2 className="about-reveal-text text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-text-main tracking-tight leading-tight m-0">
            Reimagining Infrastructure for the <span className="text-gradient">Modern Enterprise</span>
          </h2>

          <p className="about-reveal-text text-base text-text-muted leading-relaxed font-sans mt-2">
            Founded with a single core mission: to provide large multinational corporations with absolute control over their container networks. We engineer secure edge nodes that allow companies to process critical data close to users without sacrificing security.
          </p>

          <div className="about-reveal-text grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="flex gap-4">
              <div className="about-icon-animate w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                <FiTarget className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-heading font-extrabold text-base text-text-main">
                  Our Focus
                </span>
                <p className="text-sm text-text-muted leading-relaxed">
                  Ensuring 99.999% platform availability and absolute data isolation under zero-trust protocols.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="about-icon-animate w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                <FiEye className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-heading font-extrabold text-base text-text-main">
                  Our Vision
                </span>
                <p className="text-sm text-text-muted leading-relaxed">
                  Pioneering post-quantum key cryptography to safeguard corporate datasets long into the future.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Visual Graphic */}
        <div className="about-reveal-graphic lg:col-span-5 relative w-full flex items-center justify-center">
          <Card glass={true} hoverEffect={false} className="p-0 border-border-main/40 overflow-hidden w-full max-w-md shadow-2xl relative">
            {/* Ambient gradients */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-premium opacity-10 blur-3xl -z-10 rounded-full" />

            {/* Visual Header */}
            <div className="bg-bg-surface-hover/80 p-4 border-b border-border-main/50 flex items-center justify-between">
              <span className="text-xs font-bold font-heading text-text-main uppercase tracking-wider">
                Quantum Cryptography Node
              </span>
              <span className="text-xs text-secondary font-semibold font-mono">
                SECURE KEY: ACT-950
              </span>
            </div>

            {/* Visual Body Content representing a graphic matrix */}
            <div className="p-6 flex flex-col gap-4 text-left">
              <div className="flex justify-between items-center bg-bg-base border border-border-main/30 p-3 rounded-lg">
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-text-main">Edge Location</span>
                  <span className="text-xs text-text-muted">US-East-1 (Primary)</span>
                </div>
                <Badge variant="success" className="text-[10px]">Active</Badge>
              </div>

              <div className="flex justify-between items-center bg-bg-base border border-border-main/30 p-3 rounded-lg">
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-text-main">Quantum Handshake</span>
                  <span className="text-xs text-text-muted">AES_256_GCM encrypt</span>
                </div>
                <Badge variant="secondary" className="text-[10px]">Verified</Badge>
              </div>

              <div className="flex justify-between items-center bg-bg-base border border-border-main/30 p-3 rounded-lg">
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-text-main">System Health logs</span>
                  <span className="text-xs text-text-muted">0 errors detected</span>
                </div>
                <Badge variant="success" className="text-[10px]">100% Ok</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
