import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import { testimonialsData } from '../data/mockData';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { gsap } from '../animations/gsap';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideRef = useRef(null);
  const sectionRef = useRef(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  // GSAP animation on slide changes
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-slide-node',
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
      );
    }, slideRef);

    return () => ctx.revert();
  }, [activeIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // General entry trigger
      gsap.fromTo(
        '.testimonials-reveal-trigger',
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

  const activeTestimonial = testimonialsData[activeIndex];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-16 md:py-20 px-6 bg-bg-surface/30 border-y border-border-main/20 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center gap-12">
        {/* Title */}
        <SectionTitle
          title="Vouched for by Enterprise Leaders"
          subtitle="Read review reports from CTOs and infrastructure team leads managing high-frequency networks."
          tag="Testimonials"
          className="testimonials-reveal-trigger"
        />

        {/* Testimonials Slider Viewport */}
        <div ref={slideRef} className="testimonials-reveal-trigger w-full relative min-h-[250px] flex items-center justify-center">
          <Card
            glass={true}
            hoverEffect={false}
            className="testimonial-slide-node w-full border-border-main/50 shadow-xl p-8 md:p-10 flex flex-col gap-6 md:gap-8 items-center text-center relative"
          >
            {/* Quote description */}
            <blockquote className="text-base md:text-lg lg:text-xl font-medium font-sans text-text-main leading-relaxed italic max-w-2xl m-0 select-none">
              "{activeTestimonial.quote}"
            </blockquote>

            {/* Author profile details */}
            <div className="flex items-center gap-4 text-left">
              <img
                src={activeTestimonial.avatar}
                alt={activeTestimonial.author}
                loading="lazy"
                className="w-12 h-12 rounded-full object-cover border border-border-main"
              />
              <div className="flex flex-col gap-0.5">
                <span className="font-bold font-heading text-sm text-text-main leading-none">
                  {activeTestimonial.author}
                </span>
                <span className="text-xs text-text-muted font-medium font-heading">
                  {activeTestimonial.role} at <span className="text-secondary">{activeTestimonial.company}</span>
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* Slide Navigation Controllers */}
        <div className="testimonials-reveal-trigger flex items-center gap-4 select-none">
          <button
            onClick={handlePrev}
            className="p-3 border border-border-main rounded-full text-text-main hover:bg-bg-surface-hover hover:text-secondary active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          
          <span className="text-xs font-bold font-heading text-text-muted">
            {activeIndex + 1} / {testimonialsData.length}
          </span>
          
          <button
            onClick={handleNext}
            className="p-3 border border-border-main rounded-full text-text-main hover:bg-bg-surface-hover hover:text-secondary active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
