import React, { useEffect, useRef } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import { whyChooseUsData } from '../data/mockData';
import { gsap } from '../animations/gsap';

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title trigger
      gsap.fromTo(
        '.why-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.why-header',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Stagger items
      gsap.fromTo(
        '.why-grid-item',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.why-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="py-16 md:py-20 px-6  mx-auto w-full flex flex-col items-center gap-16 overflow-hidden"
    >
      {/* Title */}
      <SectionTitle
        title="Why Global Teams Rely on Aetheris"
        subtitle="Our core systems are engineered with full platform redundancies, secure identity checkpoints, and edge databases to keep your workloads online."
        tag="Platform Values"
        className="why-header"
      />

      {/* Grid columns */}
      <div className="why-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {whyChooseUsData.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Card
              key={index}
              className="why-grid-item flex flex-col items-start text-left gap-4 h-full"
            >
              {/* Icon Circle */}
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                <IconComponent className="w-5 h-5" />
              </div>

              {/* Title & Info */}
              <h3 className="text-lg font-bold font-heading text-text-main m-0">
                {item.title}
              </h3>
              
              <p className="text-sm text-text-muted leading-relaxed">
                {item.description}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
