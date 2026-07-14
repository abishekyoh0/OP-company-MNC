import React from 'react';
import { 
  FiGlobe, FiCpu, FiLayers, FiZap, FiActivity, FiBriefcase
} from 'react-icons/fi';

const Logos = () => {
  // Mapping string identifiers to react-icons components
  const iconMap = {
    FiGlobe: FiGlobe,
    FiCpu: FiCpu,
    FiLayers: FiLayers,
    FiZap: FiZap,
    FiActivity: FiActivity,
    FiBriefcase: FiBriefcase
  };

  const logos = [
    { name: 'Stripe Synergy', icon: FiLayers },
    { name: 'Linear Systems', icon: FiActivity },
    { name: 'Google Cloud', icon: FiCpu },
    { name: 'Vercel Edge', icon: FiZap },
    { name: 'Adobe Forge', icon: FiGlobe },
    { name: 'Airbnb Spaces', icon: FiBriefcase },
  ];

  // Double the list to support loop scroll
  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-10 border-y border-border-main/40 bg-bg-surface/30 overflow-hidden w-full select-none">
      <div className=" mx-auto px-6 mb-6 text-center">
        <span className="text-xs font-bold font-heading text-text-muted/65 uppercase tracking-widest">
          Powering Core Telemetry for Global Infrastructure Teams
        </span>
      </div>

      {/* Marquee viewport */}
      <div className="relative flex w-full overflow-x-hidden">
        {/* Shadow masks on sides for fading edge look */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-bg-base to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-bg-base to-transparent z-10 pointer-events-none" />

        {/* Ticker belt */}
        <div className="flex gap-16 md:gap-24 animate-[marquee_25s_linear_infinite] whitespace-nowrap min-w-full">
          {marqueeLogos.map((logo, index) => {
            const Icon = logo.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 text-text-muted/50 dark:text-text-muted/40 hover:text-secondary hover:dark:text-secondary transition-colors duration-300"
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span className="font-heading font-extrabold text-sm md:text-base tracking-wide uppercase">
                  {logo.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add Marquee CSS animation config directly if not in core Tailwind */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Logos;
