'use client';

import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener('mousemove', updatePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`glass-cursor ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
      style={{
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Glass circle */}
      <div className="glass-circle"></div>

      {/* Specular highlight */}
      <div className="specular"></div>

      <style jsx>{`
        .glass-cursor {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          will-change: transform;
          transition: none;
        }

        .glass-circle {
          position: relative;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.08),
            rgba(255, 255, 255, 0.03)
          );
          backdrop-filter: blur(6px) saturate(1.1);
          -webkit-backdrop-filter: blur(6px) saturate(1.1);
          box-shadow:
            inset 0 1px 2px rgba(255, 255, 255, 0.2),
            inset 0 -1px 2px rgba(0, 0, 0, 0.08),
            0 4px 12px rgba(0, 0, 0, 0.1),
            0 0 0 1px rgba(255, 255, 255, 0.08);
          transition: all 0.15s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .specular {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.3) 0%,
            transparent 40%,
            transparent 60%,
            rgba(255, 255, 255, 0.1) 100%
          );
          opacity: 0.6;
          pointer-events: none;
          transition: opacity 0.15s ease;
        }

        /* Hover state - enlarge and brighten */
        .glass-cursor.hovering .glass-circle {
          width: 64px;
          height: 64px;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.15),
            rgba(255, 255, 255, 0.06)
          );
          box-shadow:
            inset 0 2px 4px rgba(255, 255, 255, 0.3),
            inset 0 -2px 4px rgba(0, 0, 0, 0.1),
            0 8px 20px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(255, 255, 255, 0.15);
        }

        .glass-cursor.hovering .specular {
          opacity: 0.9;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.5) 0%,
            transparent 35%,
            transparent 65%,
            rgba(255, 255, 255, 0.2) 100%
          );
        }

        /* Click state - compress and pulse */
        .glass-cursor.clicking .glass-circle {
          width: 40px;
          height: 40px;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0.08)
          );
          box-shadow:
            inset 0 3px 6px rgba(0, 0, 0, 0.15),
            inset 0 -1px 2px rgba(255, 255, 255, 0.25),
            0 2px 6px rgba(0, 0, 0, 0.2),
            0 0 0 2px rgba(59, 130, 246, 0.25),
            0 0 16px rgba(59, 130, 246, 0.15);
          animation: pulse 0.3s ease-out;
        }

        .glass-cursor.clicking .specular {
          opacity: 1;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.92);
          }
          100% {
            transform: scale(1);
          }
        }

        /* Combined hover + click */
        .glass-cursor.hovering.clicking .glass-circle {
          width: 56px;
          height: 56px;
        }

        /* Add refraction edge effect */
        .glass-circle::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 50%;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.3),
            transparent 30%,
            transparent 70%,
            rgba(0, 0, 0, 0.15)
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        /* Hover glow */
        .glass-cursor.hovering .glass-circle::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: radial-gradient(
            circle at center,
            rgba(59, 130, 246, 0.15),
            transparent 70%
          );
          opacity: 0;
          animation: glow 2s ease-in-out infinite;
        }

        @keyframes glow {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};
