import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { portfolioData } from '../data/mockData';
import { gsap } from '../animations/gsap';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const gridRef = useRef(null);
  const sectionRef = useRef(null);

  const filters = ['All', 'Cloud', 'AI', 'Security'];

  const filteredItems = activeFilter === 'All'
    ? portfolioData
    : portfolioData.filter((item) => item.tag === activeFilter);

  const getBadgeClass = (tag) => {
    if (tag === 'Cloud') {
      return 'bg-teal-50 text-teal-700 border-teal-250 dark:bg-teal-950/80 dark:text-teal-300 dark:border-teal-800/80';
    }
    if (tag === 'AI') {
      return 'bg-emerald-50 text-emerald-700 border-emerald-250 dark:bg-emerald-950/80 dark:text-emerald-300 dark:border-emerald-800/80';
    }
    // Security / Success
    return 'bg-emerald-50 text-emerald-700 border-emerald-250 dark:bg-emerald-950/80 dark:text-emerald-300 dark:border-emerald-800/80';
  };

  // Animate grid items when filter changes
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.portfolio-grid-item',
        { opacity: 0, scale: 0.9, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' }
      );
    }, gridRef);

    return () => ctx.revert();
  }, [activeFilter]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // General section header reveal
      gsap.fromTo(
        '.portfolio-reveal-trigger',
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
      id="portfolio"
      ref={sectionRef}
      className="py-16 md:py-20 px-6  mx-auto w-full flex flex-col items-center gap-16 overflow-hidden"
    >
      {/* Title */}
      <SectionTitle
        title="Proven Infrastructure Deliverables"
        subtitle="Review the case study records detailing how our platform integrations solved scaling limits for multinational clients."
        tag="Case Studies"
        className="portfolio-reveal-trigger"
      />

      {/* Filter Options */}
      <div className="portfolio-reveal-trigger flex gap-2 justify-center w-full max-w-md select-none">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-lg font-heading font-semibold text-xs transition-all duration-300 cursor-pointer ${
              activeFilter === filter
                ? 'bg-primary text-primary-foreground'
                : 'bg-bg-surface border border-border-main text-text-muted hover:text-text-main hover:bg-bg-surface-hover'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Filtered Grid Display */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
      >
        {filteredItems.map((item, index) => (
          <Card
            key={index}
            glass={true}
            className="portfolio-grid-item flex flex-col h-full overflow-hidden p-0 border-border-main/50 relative group"
          >
            {/* Project Image Panel */}
            <div className="relative h-48 w-full overflow-hidden bg-border-main/20">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 z-10">
                <Badge className={`${getBadgeClass(item.tag)} shadow-md font-bold px-3 py-1`}>
                  {item.category}
                </Badge>
              </div>
            </div>

            {/* Project Info Panel */}
            <div className="p-6 flex flex-col gap-3 text-left">
              <span className="text-[10px] font-bold font-heading text-text-muted uppercase tracking-widest">
                Client: {item.client}
              </span>
              <h3 className="text-xl font-bold font-heading text-text-main m-0">
                {item.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
