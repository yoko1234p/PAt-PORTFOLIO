'use client';

import React, { useEffect, useRef } from 'react';

export const CursorGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const currentPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationId: number;

    const animate = () => {
      if (!glowRef.current) return;

      // Smooth follow effect
      currentPosRef.current.x += (posRef.current.x - currentPosRef.current.x) * 0.15;
      currentPosRef.current.y += (posRef.current.y - currentPosRef.current.y) * 0.15;

      glowRef.current.style.left = `${currentPosRef.current.x}px`;
      glowRef.current.style.top = `${currentPosRef.current.y}px`;

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed w-96 h-96 pointer-events-none z-50 mix-blend-screen"
      style={{
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, rgba(124, 58, 237, 0.08) 30%, transparent 70%)',
        filter: 'blur(40px)',
      }}
      aria-hidden="true"
    />
  );
};
