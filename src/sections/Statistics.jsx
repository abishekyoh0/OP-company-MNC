import React, { useEffect, useRef } from 'react';
import Card from '../components/ui/Card';
import { statisticsData } from '../data/mockData';
import { gsap } from '../animations/gsap';

const Statistics = () => {
  const sectionRef = useRef(null);
  const counterRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // General entry animation for stats container card
      gsap.fromTo(
        '.stats-card-container',
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

      // High-performance GSAP number counters
      statisticsData.forEach((stat, index) => {
        const targetNode = counterRefs.current[index];
        if (!targetNode) return;

        const countObj = { val: 0 };
        // Determine decimal places from the mock number
        const decimals = stat.number % 1 !== 0 ? 3 : 0;

        gsap.to(countObj, {
          val: stat.number,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            if (targetNode) {
              targetNode.innerText = countObj.val.toFixed(decimals);
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-14 md:py-16 px-6  mx-auto w-full overflow-hidden">
      <Card
        glass={true}
        hoverEffect={false}
        className="stats-card-container border-border-main/50 shadow-2xl relative overflow-hidden py-10 md:py-12"
      >
        {/* Background ambient glowing shapes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[15rem] bg-gradient-glow opacity-[0.05] blur-3xl -z-10 rounded-full" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
          {statisticsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-2 select-none">
              <span className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-gradient tracking-tight">
                {/* Reference node that GSAP updates directly */}
                <span ref={(el) => (counterRefs.current[index] = el)}>0</span>
                <span>{stat.suffix}</span>
              </span>

              <span className="text-xs sm:text-sm font-bold font-heading text-text-muted uppercase tracking-wider mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default Statistics;
