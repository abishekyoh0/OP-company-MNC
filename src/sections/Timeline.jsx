import React, { useEffect, useRef } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { timelineData } from '../data/mockData';
import { gsap } from '../animations/gsap';

const Timeline = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // General title animation
      gsap.fromTo(
        '.timeline-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.timeline-header',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Animate the line height from 0% to 100% on scroll
      gsap.fromTo(
        '.timeline-line-progress',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: true,
          },
        }
      );

      // Stagger animate timeline cards on entry
      const items = gsap.utils.toArray('.timeline-item');
      items.forEach((item) => {
        const leftCol = item.querySelector('.timeline-left');
        const rightCol = item.querySelector('.timeline-right');
        const marker = item.querySelector('.timeline-marker');

        // Animate Left Column (Image or Card)
        gsap.fromTo(
          leftCol,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 82%',
              toggleActions: 'play none none none',
            }
          }
        );

        // Animate Right Column (Card or Image)
        gsap.fromTo(
          rightCol,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 82%',
              toggleActions: 'play none none none',
            }
          }
        );

        // Animate Marker
        gsap.fromTo(
          marker,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            delay: 0.2,
            ease: 'back.out(1.8)',
            scrollTrigger: {
              trigger: item,
              start: 'top 82%',
              toggleActions: 'play none none none',
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 px-6  mx-auto w-full flex flex-col items-center gap-16 overflow-hidden"
    >
      {/* Title */}
      <SectionTitle
        title="Platform Evolution Timeline"
        subtitle="A look back at the milestone technologies launched by our core engineering departments over the last eight years."
        tag="Roadmap"
        className="timeline-header"
      />

      {/* Main Roadmap Tree */}
      <div className="timeline-container relative w-full select-none mt-6">
        {/* Draw central vertical trunk */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-border-main/50 left-[20px] md:left-1/2 transform -translate-x-1/2 -z-10" />

        {/* Animated Drawing Line */}
        <div className="timeline-line-progress absolute top-0 bottom-0 w-0.5 bg-gradient-premium left-[20px] md:left-1/2 transform -translate-x-1/2 origin-top -z-10" />

        {/* Timeline Items List */}
        <div className="w-full flex flex-col gap-12 relative">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="timeline-item flex flex-col md:flex-row w-full items-stretch justify-between relative gap-6 md:gap-0"
              >
                {/* Left Column (Image for even, Text for odd) */}
                <div className="timeline-left w-full md:w-[44%] pl-12 md:pl-0 flex">
                  {isLeft ? (
                    // Image Panel
                    <div className="w-full h-48 md:h-full min-h-[180px] rounded-xl overflow-hidden border border-border-main/40 shadow-premium dark:shadow-premium-dark relative group">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    // Text Card
                    <Card glass={true} className="h-full border-border-main/50 text-left w-full relative">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="px-3 py-1 font-mono text-xs">
                            {item.year}
                          </Badge>
                          {item.icon && (
                            <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary">
                              {React.createElement(item.icon, { className: "w-4 h-4" })}
                            </div>
                          )}
                        </div>
                        <h3 className="text-lg font-bold font-heading text-text-main">
                          {item.title}
                        </h3>
                        <p className="text-sm text-text-muted leading-relaxed font-sans">
                          {item.description}
                        </p>
                      </div>
                    </Card>
                  )}
                </div>

                {/* Central Point Marker */}
                <div className="timeline-marker absolute left-[20px] md:left-1/2 top-6 md:top-1/2 md:-translate-y-1/2 transform -translate-x-1/2 w-4.5 h-4.5 rounded-full border-2 border-secondary bg-bg-base z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                </div>

                {/* Right Column (Text for even, Image for odd) */}
                <div className="timeline-right w-full md:w-[44%] pl-12 md:pl-0 flex">
                  {!isLeft ? (
                    // Image Panel
                    <div className="w-full h-48 md:h-full min-h-[180px] rounded-xl overflow-hidden border border-border-main/40 shadow-premium dark:shadow-premium-dark relative group">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    // Text Card
                    <Card glass={true} className="h-full border-border-main/50 text-left w-full relative">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="px-3 py-1 font-mono text-xs">
                            {item.year}
                          </Badge>
                          {item.icon && (
                            <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary">
                              {React.createElement(item.icon, { className: "w-4 h-4" })}
                            </div>
                          )}
                        </div>
                        <h3 className="text-lg font-bold font-heading text-text-main">
                          {item.title}
                        </h3>
                        <p className="text-sm text-text-muted leading-relaxed font-sans">
                          {item.description}
                        </p>
                      </div>
                    </Card>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
