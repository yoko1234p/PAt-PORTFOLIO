'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'px-8 py-3 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2';

  if (variant === 'primary') {
    return (
      <button
        className={`${baseStyles} relative overflow-hidden group ${className}`}
        {...props}
      >
        {/* Glass background layer */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary transition-all duration-300"
          style={{
            backdropFilter: 'saturate(180%) blur(20px)',
            WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          }}
        />

        {/* Glass shine effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(255,255,255,0.2) 100%)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        />

        {/* Content */}
        <span className="relative z-10 text-white drop-shadow-sm">{children}</span>
      </button>
    );
  }

  if (variant === 'ghost') {
    return (
      <button
        className={`${baseStyles} border-2 border-accent-primary/20 text-accent-primary hover:border-accent-primary hover:bg-accent-primary/5 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  // secondary variant
  return (
    <button
      className={`${baseStyles} text-accent-primary bg-white/80 backdrop-blur-sm border border-accent-primary/20 hover:bg-white hover:border-accent-primary hover:shadow-lg hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
