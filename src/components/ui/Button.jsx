import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  loading = false,
  type = 'button',
  icon = null,
  iconPosition = 'left',
  className = '',
  ...props
}) => {
  // Base classes including transitions, focus rings, font sizing
  const baseStyle = 'inline-flex items-center justify-center font-heading font-medium tracking-wide rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary/50 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 cursor-pointer';

  // Variant styles
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/95 hover:shadow-premium dark:hover:shadow-premium-dark',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-glow',
    outline: 'border border-border-main text-text-main hover:bg-bg-surface-hover',
    ghost: 'text-text-main hover:bg-bg-surface-hover hover:text-primary',
    gradient: 'bg-gradient-premium text-white hover:opacity-95 hover:shadow-glow',
    icon: 'p-2 border border-border-main text-text-main hover:bg-bg-surface-hover hover:text-primary rounded-full',
  };

  // Size styles
  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
  };

  const currentVariant = variants[variant] || variants.primary;
  const currentSize = variant === 'icon' ? '' : (sizes[size] || sizes.md);

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyle} ${currentVariant} ${currentSize} ${className}`}
      {...props}
    >
      {loading ? (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : null}

      {!loading && icon && iconPosition === 'left' && (
        <span className="flex-shrink-0">{icon}</span>
      )}

      {variant !== 'icon' && <span>{children}</span>}
      {variant === 'icon' && icon}

      {!loading && icon && iconPosition === 'right' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </button>
  );
};

export default Button;
