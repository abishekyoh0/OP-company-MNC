import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import { faqData } from '../data/mockData';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { gsap } from '../animations/gsap';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        '.faq-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.faq-header',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Accordion blocks staggered reveal
      gsap.fromTo(
        '.faq-accordion-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.faq-grid',
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
      id="faq"
      ref={sectionRef}
      className="py-16 md:py-20 px-6 max-w-4xl mx-auto w-full flex flex-col items-center gap-16 overflow-hidden"
    >
      {/* Title */}
      <SectionTitle
        title="Frequently Asked Platform Questions"
        subtitle="Learn details about how our edge database clusters, zero-trust cryptographic protocols, and autonomous AI engine work."
        tag="Support Desk"
        className="faq-header"
      />

      {/* Accordions List Grid */}
      <div className="faq-grid flex flex-col gap-4 w-full mt-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <Card
              key={index}
              glass={true}
              hoverEffect={false}
              className="faq-accordion-item p-0 border-border-main/50 overflow-hidden"
            >
              {/* Question Click Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-2 py-2 flex items-center justify-between text-left font-heading font-bold text-sm md:text-base text-text-main gap-4 cursor-pointer hover:bg-bg-surface-hover/50 transition-colors duration-300"
              >
                <span>{item.question}</span>
                <span className="flex-shrink-0 p-1.5 border border-border-main/40 rounded-lg text-text-muted hover:text-secondary">
                  {isOpen ? <FiMinus className="w-4 h-4" /> : <FiPlus className="w-4 h-4" />}
                </span>
              </button>

              {/* Answer Content Panel */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-border-main/20' : 'max-h-0'
                  }`}
              >
                <div className="p-6 text-sm text-text-muted text-left leading-relaxed font-sans">
                  {item.answer}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
