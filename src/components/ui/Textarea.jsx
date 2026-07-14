import React from 'react';

const Textarea = ({
  label,
  id,
  error,
  rows = 4,
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
      <textarea
        id={id}
        rows={rows}
        className={`w-full px-4 py-2.5 rounded-lg border bg-bg-surface text-text-main border-border-main focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all duration-300 placeholder:text-text-muted/50 text-sm resize-y ${
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

export default Textarea;
