import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { servicesData } from '../data/mockData';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { gsap } from '../animations/gsap';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const detailRef = useRef(null);
  const sectionRef = useRef(null);

  const activeService = servicesData[activeTab];

  // Trigger GSAP fade-in when active tab changes
  useEffect(() => {
    if (!activeService || !activeService.telemetry) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-reveal-item',
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
      );

      gsap.fromTo(
        '.services-bar-1',
        { width: '0%' },
        { width: `${activeService.telemetry[0].value}%`, duration: 1.2, ease: 'power3.out', delay: 0.2 }
      );
      gsap.fromTo(
        '.services-bar-2',
        { width: '0%' },
        { width: `${activeService.telemetry[1].value}%`, duration: 1.2, ease: 'power3.out', delay: 0.3 }
      );
      gsap.fromTo(
        '.services-bar-3',
        { width: '0%' },
        { width: `${activeService.telemetry[2].value}%`, duration: 1.2, ease: 'power3.out', delay: 0.4 }
      );
    }, detailRef);

    return () => ctx.revert();
  }, [activeTab]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // General section reveal
      gsap.fromTo(
        '.services-reveal-trigger',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
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
      id="services"
      ref={sectionRef}
      className="py-16 md:py-20 px-6 bg-bg-surface/30 border-y border-border-main/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center gap-16">
        {/* Title */}
        <SectionTitle
          title="Custom Corporate Solutions"
          subtitle="We partner directly with technical leaders to audit platform safety, optimize server pathways, and deploy machine learning models."
          tag="Our Services"
          className="services-reveal-trigger"
        />

        {/* Tab Controllers */}
        <div className="services-reveal-trigger flex flex-wrap gap-2 md:gap-4 justify-center w-full max-w-3xl">
          {servicesData.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-3 rounded-lg font-heading font-semibold text-sm transition-all duration-300 cursor-pointer ${activeTab === index
                ? 'bg-secondary text-secondary-foreground shadow-glow'
                : 'bg-bg-surface border border-border-main text-text-muted hover:text-text-main hover:bg-bg-surface-hover'
                }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Active Content Grid */}
        <div
          ref={detailRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full items-center mt-4"
        >
          {/* Left Text Pane */}
          <div className="flex flex-col text-left gap-6">
            <span className="service-reveal-item text-xs font-bold tracking-widest font-heading text-secondary uppercase">
              {activeService.stats}
            </span>
            <h3 className="service-reveal-item text-3xl font-extrabold font-heading text-text-main">
              {activeService.title}
            </h3>
            <p className="service-reveal-item text-base text-text-muted leading-relaxed">
              {activeService.description}
            </p>

            {/* Benefits list */}
            <div className="flex flex-col gap-3">
              {activeService.benefits.map((benefit, i) => (
                <div key={i} className="service-reveal-item flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-success/15 border border-success/30 flex items-center justify-center text-success flex-shrink-0">
                    <FiCheck className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-semibold font-heading text-text-main">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="service-reveal-item mt-4">
              <Button
                variant="secondary"
                icon={<FiArrowRight />}
                iconPosition="right"
                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Review Service Blueprint
              </Button>
            </div>
          </div>

          {/* Right Visual Pane */}
          <div className="service-reveal-item">
            <Card glass={true} hoverEffect={false} className="p-8 border-border-main/40 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-premium opacity-[0.03] blur-3xl -z-10 rounded-full" />

              {/* Graphic Mockup inside Services Card */}
              <div className="flex flex-col gap-6 text-left">
                <span className="text-xs font-bold font-heading text-text-muted uppercase">
                  Telemetry Health Check
                </span>

                {/* Micro chart bars */}
                <div className="flex flex-col gap-4">
                  {activeService.telemetry.map((t, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-text-main">
                        <span>{t.label}</span>
                        <span className={t.colorClass === 'bg-secondary' ? 'text-secondary' : t.colorClass === 'bg-success' ? 'text-success' : 'text-accent'}>
                          {t.value}%
                        </span>
                      </div>
                      <div className="w-full bg-border-main/30 h-2 rounded-full overflow-hidden">
                        <div className={`services-bar-${idx + 1} ${t.colorClass} h-full`} style={{ width: '0%' }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border-main/20 pt-4 flex justify-between items-center text-xs text-text-muted font-mono">
                  <span>SSL Cipher: TLS_AES_256_GCM_SHA384</span>
                  <span className="text-success font-semibold">● SECURE</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
