import React, { useEffect, useRef } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { pricingData } from '../data/mockData';
import { FiCheck } from 'react-icons/fi';
import { gsap } from '../animations/gsap';

const Pricing = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.pricing-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.pricing-header',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Cards staggered reveal
      gsap.fromTo(
        '.pricing-card-item',
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.pricing-grid',
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
      id="pricing"
      ref={sectionRef}
      className="py-16 md:py-20 px-6  mx-auto w-full flex flex-col items-center gap-16 overflow-hidden"
    >
      {/* Title */}
      <SectionTitle
        title="Enterprise Scale Pricing Options"
        subtitle="Select the configuration tier matching your corporate cloud requirements. No hidden operational fees."
        tag="Flexible Pricing"
        className="pricing-header"
      />

      {/* Pricing Grid */}
      <div className="pricing-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-4">
        {pricingData.map((tier, index) => (
          <Card
            key={index}
            gradientBorder={tier.popular}
            className={`pricing-card-item flex flex-col justify-between h-full min-h-[480px] relative ${tier.popular ? 'shadow-2xl shadow-glow/10 border-secondary/40' : 'border-border-main/50'
              }`}
          >
            {/* Top Info Area */}
            <div className="flex flex-col text-left gap-5">
              {/* Popular indicator badge */}
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-extrabold font-heading text-secondary uppercase tracking-widest">
                  Tier {index + 1}
                </span>
                {tier.popular && (
                  <Badge variant="secondary" className="px-3 py-1 text-[10px]">
                    Recommended Option
                  </Badge>
                )}
              </div>

              {/* Title & Price Display */}
              <div className="flex flex-col gap-1.5">
                <h3 className="text-2xl font-extrabold font-heading text-text-main m-0">
                  {tier.name}
                </h3>
                <span className="text-3xl md:text-4xl font-extrabold font-heading text-gradient tracking-tight">
                  {tier.price}
                  <span className="text-xs font-semibold text-text-muted/70 tracking-normal font-sans ml-1">
                    {tier.period}
                  </span>
                </span>
              </div>

              <p className="text-sm text-text-muted leading-relaxed font-sans">
                {tier.description}
              </p>

              {/* Separation Divider */}
              <div className="h-px bg-border-main/40 my-2" />

              {/* Features List */}
              <ul className="flex flex-col gap-3 p-0 m-0">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/15 border border-success/30 flex items-center justify-center text-success flex-shrink-0">
                      <FiCheck className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-semibold text-text-main leading-none">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Actions CTA Button */}
            <div className="mt-8">
              <Button
                variant={'gradient'}
                size="md"
                className="w-full"
                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {tier.cta}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
