'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
  decimals = 0,
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = countRef.current;
    if (!element || hasAnimated.current) return;

    const ctx = gsap.context(() => {
      // Use ScrollTrigger to start animation when element is visible
      ScrollTrigger.create({
        trigger: element,
        start: 'top 85%',
        onEnter: () => {
          if (hasAnimated.current) return;
          hasAnimated.current = true;

          // GSAP CountUp animation
          const counter = { value: 0 };
          gsap.to(counter, {
            value: end,
            duration: duration,
            ease: 'power2.out',
            onUpdate: () => {
              setCount(counter.value);
            },
          });

          // Simple fade in
          gsap.from(element, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
          });
        },
        once: true,
      });
    });

    return () => ctx.revert();
  }, [end, duration]);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <span ref={countRef} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};
