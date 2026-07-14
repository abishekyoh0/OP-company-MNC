import React from 'react';

const SectionTitle = ({
  title,
  subtitle,
  tag,
  align = 'center',
  className = '',
  ...props
}) => {
  const aligns = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  const currentAlign = aligns[align] || aligns.center;

  return (
    <div className={`flex flex-col gap-3 max-w-3xl ${currentAlign} ${className}`} {...props}>
      {tag && (
        <span className="text-xs font-semibold font-heading text-secondary tracking-widest uppercase bg-secondary/5 px-3 py-1 rounded-full border border-secondary/15">
          {tag}
        </span>
      )}
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-text-main tracking-tight leading-tight">
        {title}
      </h2>
      
      {/* Small accent bar line */}
      <div className="w-16 h-1 bg-gradient-premium rounded-full" />

      {subtitle && (
        <p className="text-base md:text-lg text-text-muted font-sans font-normal leading-relaxed mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
