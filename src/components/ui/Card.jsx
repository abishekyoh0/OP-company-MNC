import React from 'react';

const Card = ({
  children,
  glass = false,
  gradientBorder = false,
  hoverEffect = true,
  className = '',
  onClick,
  ...props
}) => {
  // Base classes including rounded borders and overflow management
  const baseStyle = 'rounded-xl overflow-hidden border border-border-main/50 bg-bg-surface text-text-main p-6 transition-all duration-300';
  
  // Custom states classes
  const glassStyle = glass ? 'glassmorphism shadow-glass' : 'shadow-premium dark:shadow-premium-dark';
  
  const hoverStyle = hoverEffect 
    ? 'hover:-translate-y-1.5 hover:shadow-xl hover:border-secondary/40 hover:shadow-glow/10 cursor-pointer' 
    : '';

  // Container styling to allow gradient border reveal on hover
  const gradientBorderContainer = gradientBorder
    ? 'relative p-[1px] rounded-xl bg-gradient-to-r from-border-main to-border-main/60 hover:from-secondary hover:to-accent transition-all duration-500 overflow-hidden'
    : '';

  if (gradientBorder) {
    return (
      <div className={`${gradientBorderContainer} ${className}`} onClick={onClick} {...props}>
        <div className={`h-full w-full rounded-xl bg-bg-surface p-6 ${glass ? 'glassmorphism' : ''}`}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`${baseStyle} ${glassStyle} ${hoverStyle} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
