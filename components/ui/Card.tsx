'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  interactive = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !cardRef.current || !glowRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(glowRef.current, {
      x: x - 100,
      y: y - 100,
      opacity: 0.4,
      duration: 0.3,
    });
  };

  const handleMouseLeave = () => {
    if (!interactive || !glowRef.current) return;

    gsap.to(glowRef.current, {
      opacity: 0,
      duration: 0.3,
    });
  };

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {interactive && (
        <div
          ref={glowRef}
          className="absolute w-48 h-48 rounded-full pointer-events-none opacity-0"
          style={{
            background: 'radial-gradient(circle, rgba(33, 158, 188, 0.25) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
      )}
      {children}
    </div>
  );
};
