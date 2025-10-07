'use client';

import React, { useRef, useEffect } from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlowCard: React.FC<GlowCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = x - centerX;
      const deltaY = y - centerY;

      // Calculate angle
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90;
      if (angle < 0) angle += 360;

      // Calculate distance from center (0-1)
      const kx = deltaX !== 0 ? centerX / Math.abs(deltaX) : Infinity;
      const ky = deltaY !== 0 ? centerY / Math.abs(deltaY) : Infinity;
      const edge = Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);

      // Calculate percentages
      const px = Math.min(Math.max((100 / rect.width) * x, 0), 100);
      const py = Math.min(Math.max((100 / rect.height) * y, 0), 100);

      card.style.setProperty('--pointer-x', `${px.toFixed(3)}%`);
      card.style.setProperty('--pointer-y', `${py.toFixed(3)}%`);
      card.style.setProperty('--pointer-angle', `${angle.toFixed(3)}deg`);
      card.style.setProperty('--pointer-distance', `${(edge * 100).toFixed(3)}`);

      card.classList.remove('glow-animating');
    };

    const handlePointerLeave = () => {
      card.classList.add('glow-animating');
    };

    card.addEventListener('pointermove', handlePointerMove);
    card.addEventListener('pointerleave', handlePointerLeave);

    // Initial animation
    setTimeout(() => {
      playIntroAnimation(card);
    }, 300);

    return () => {
      card.removeEventListener('pointermove', handlePointerMove);
      card.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  const playIntroAnimation = (card: HTMLDivElement) => {
    const angleStart = 110;
    const angleEnd = 465;

    card.style.setProperty('--pointer-angle', `${angleStart}deg`);
    card.classList.add('glow-animating');

    // Animate distance
    animateValue({
      duration: 500,
      ease: easeOutCubic,
      onUpdate: (v) => {
        card.style.setProperty('--pointer-distance', v.toString());
      },
    });

    // Animate angle (first part)
    animateValue({
      duration: 1500,
      endValue: 50,
      ease: easeInCubic,
      onUpdate: (v) => {
        const angle = (angleEnd - angleStart) * (v / 100) + angleStart;
        card.style.setProperty('--pointer-angle', `${angle}deg`);
      },
    });

    // Animate angle (second part)
    animateValue({
      delay: 1500,
      duration: 2250,
      startValue: 50,
      endValue: 100,
      ease: easeOutCubic,
      onUpdate: (v) => {
        const angle = (angleEnd - angleStart) * (v / 100) + angleStart;
        card.style.setProperty('--pointer-angle', `${angle}deg`);
      },
    });

    // Fade out distance
    animateValue({
      delay: 2500,
      duration: 1500,
      startValue: 100,
      endValue: 0,
      ease: easeInCubic,
      onUpdate: (v) => {
        card.style.setProperty('--pointer-distance', v.toString());
      },
      onEnd: () => {
        card.classList.remove('glow-animating');
      },
    });
  };

  return (
    <div
      ref={cardRef}
      className={`glow-card ${className}`}
      style={
        {
          '--glow-sens': '5',
          '--color-sens': '15',
          '--glow-color': '45 80% 70%',
          '--pointer-x': '50%',
          '--pointer-y': '50%',
          '--pointer-angle': '45deg',
          '--pointer-distance': '0',
        } as React.CSSProperties
      }
    >
      <span className="glow-effect" />
      <div className="glow-inner">{children}</div>
    </div>
  );
};

// Easing functions
function easeOutCubic(x: number): number {
  return 1 - Math.pow(1 - x, 3);
}

function easeInCubic(x: number): number {
  return x * x * x;
}

interface AnimateOptions {
  startValue?: number;
  endValue?: number;
  duration?: number;
  delay?: number;
  ease?: (t: number) => number;
  onUpdate?: (value: number) => void;
  onEnd?: () => void;
}

function animateValue(options: AnimateOptions) {
  const {
    startValue = 0,
    endValue = 100,
    duration = 1000,
    delay = 0,
    ease = (t) => t,
    onUpdate = () => {},
    onEnd = () => {},
  } = options;

  const startTime = performance.now() + delay;

  function update() {
    const currentTime = performance.now();
    const elapsed = currentTime - startTime;
    const t = Math.min(elapsed / duration, 1);
    const easedValue = startValue + (endValue - startValue) * ease(t);

    onUpdate(easedValue);

    if (t < 1) {
      requestAnimationFrame(update);
    } else if (t >= 1) {
      onEnd();
    }
  }

  setTimeout(() => {
    requestAnimationFrame(update);
  }, delay);
}
