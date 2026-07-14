import React from 'react';

const Input = ({
  label,
  id,
  type = 'text',
  error,
  className = '',
  ...props
}) => {
  return (
    <div className={`w-full flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="text-xs font-semibold font-heading text-text-main/80 tracking-wide"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={`w-full px-4 py-2.5 rounded-lg border bg-bg-surface text-text-main border-border-main focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all duration-300 placeholder:text-text-muted/50 text-sm ${
          error ? 'border-error focus:ring-error/30' : ''
        }`}
        {...props}
      />
      {error && (
        <span className="text-xs font-medium text-error tracking-wide">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
