import React from 'react';

const Badge = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseStyle = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold font-heading tracking-wide border';

  const variants = {
    primary: 'bg-primary/5 text-text-main border-primary/10',
    secondary: 'bg-secondary/10 text-secondary border-secondary/25',
    accent: 'bg-accent/10 text-accent border-accent/25',
    success: 'bg-success/10 text-success border-success/20',
    warning: 'bg-warning/10 text-warning border-warning/20',
    error: 'bg-error/10 text-error border-error/20',
    glass: 'glassmorphism text-text-main border-glass-border shadow-sm',
  };

  const currentVariant = variants[variant] || variants.primary;

  return (
    <span className={`${baseStyle} ${currentVariant} ${className}`} {...props}>
      {children}
    </span>
  );
};

export default Badge;
