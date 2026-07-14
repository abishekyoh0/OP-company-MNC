import React, { useEffect, useRef } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import { featuresData } from '../data/mockData';
import { gsap } from '../animations/gsap';

const Features = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in the title
      gsap.fromTo(
        '.features-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.features-header',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Stagger reveal the features cards
      gsap.fromTo(
        '.feature-card-item',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.features-grid',
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
      ref={sectionRef}
      className="py-16 md:py-20 px-6  mx-auto w-full flex flex-col items-center gap-16 overflow-hidden"
    >
      {/* Header Info */}
      <SectionTitle
        title="Modern Capabilities Engineered for Uptime"
        subtitle="Unify your cloud workloads under a single platform layer, designed from the ground up to prevent packet loss and block unauthorized entry."
        tag="Core Capabilities"
        className="features-header"
      />

      {/* Grid List */}
      <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {featuresData.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <Card
              key={index}
              gradientBorder={true}
              className="feature-card-item"
            >
              <div className="flex flex-col gap-4 text-left">
                {/* Floating Icon Box */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white shadow-md`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                
                {/* Info Text */}
                <h3 className="text-xl font-bold font-heading text-text-main">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
