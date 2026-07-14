import React, { useEffect, useRef } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { productsData } from '../data/mockData';
import { FiCpu, FiActivity, FiShield } from 'react-icons/fi';
import { gsap } from '../animations/gsap';

const Products = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in section title
      gsap.fromTo(
        '.products-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.products-header',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Stagger reveal product items
      gsap.fromTo(
        '.product-card-item',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.products-container',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Icon switcher for each product badge
  const getProductIcon = (badge) => {
    if (badge.includes('Flagship')) return <FiCpu className="w-5 h-5 text-secondary" />;
    if (badge.includes('Security')) return <FiShield className="w-5 h-5 text-accent" />;
    return <FiActivity className="w-5 h-5 text-success" />;
  };

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-16 md:py-20 px-6 bg-bg-surface/30 border-y border-border-main/20 overflow-hidden"
    >
      <div className=" mx-auto w-full flex flex-col items-center gap-16">
        {/* Title */}
        <SectionTitle
          title="Engineered Corporate Software Products"
          subtitle="Explore the platform components built to orchestrate, analyze, and lock down complex network nodes globally."
          tag="Product Suite"
          className="products-header"
        />

        {/* Products List Cards */}
        <div className="products-container grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mt-4">
          {productsData.map((product, index) => (
            <Card
              key={index}
              gradientBorder={true}
              className="product-card-item flex flex-col justify-between h-full min-h-[380px]"
            >
              <div className="flex flex-col text-left gap-4">
                {/* Product Badge + Icon */}
                <div className="flex justify-between items-center">
                  <div className="p-2.5 rounded-lg bg-bg-surface-hover border border-border-main/50">
                    {getProductIcon(product.badge)}
                  </div>
                  <Badge variant={index === 0 ? 'secondary' : index === 1 ? 'accent' : 'success'}>
                    {product.badge}
                  </Badge>
                </div>

                {/* Info Text */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold font-heading text-text-main m-0">
                    {product.name}
                  </h3>
                  <span className="text-xs font-semibold font-heading text-text-muted/75">
                    {product.tagline}
                  </span>
                </div>
                
                <p className="text-sm text-text-muted leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Systems Telemetry Panel at Bottom */}
              <div className="mt-8 pt-4 border-t border-border-main/30 flex flex-col gap-2.5 text-left font-mono text-[11px] text-text-muted select-none">
                <span className="text-xs font-bold font-heading text-text-main uppercase mb-1">
                  Live Engine Telemetry:
                </span>
                {Object.entries(product.metrics).map(([key, val]) => (
                  <div key={key} className="flex justify-between">
                    <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                    <span className="text-text-main font-semibold">{val}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
