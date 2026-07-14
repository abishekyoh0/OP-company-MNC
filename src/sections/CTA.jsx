import React, { useEffect, useRef } from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { FiArrowRight, FiTerminal } from 'react-icons/fi';
import { gsap } from '../animations/gsap';
import { navigateTo } from '../utils/navigation';

const CTA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scale-in the entire CTA banner card
      gsap.fromTo(
        '.cta-banner-card',
        { scale: 0.96, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 px-6 max-w-7xl mx-auto w-full overflow-hidden">
      <Card
        glass={true}
        hoverEffect={false}
        className="cta-banner-card border-secondary/20 relative p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden shadow-2xl"
      >
        {/* Glow core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[25rem] bg-gradient-glow opacity-[0.08] blur-3xl -z-10 rounded-full" />
        <div className="absolute right-0 top-0 w-80 h-80 bg-gradient-premium opacity-[0.04] blur-3xl -z-10 rounded-full" />

        {/* Left Information Content */}
        <div className="flex flex-col text-left gap-4 max-w-xl">
          <div className="select-none">
            <Badge variant="secondary" className="px-3.5 py-1 text-xs">
              Instant Node Activation
            </Badge>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-text-main tracking-tight leading-tight m-0">
            Secure Your Global Clusters <span className="text-gradient">Right Now</span>
          </h2>

          <p className="text-sm sm:text-base text-text-muted leading-relaxed font-sans mt-2 m-0">
            Sign up to our developer sandbox and claim up to $500 in platform cloud credit. Setup containers, verify nodes, and inspect edge ledger speeds in under five minutes.
          </p>
        </div>

        {/* Right Callouts Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full lg:w-auto">
          <Button
            variant="gradient"
            size="lg"
            className="w-full sm:w-auto"
            icon={<FiArrowRight />}
            iconPosition="right"
            onClick={() => navigateTo('auth')}
          >
            Launch Cloud Sandbox
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            icon={<FiTerminal />}
            onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Consult Infrastructure Leads
          </Button>
        </div>
      </Card>
    </section>
  );
};

export default CTA;
