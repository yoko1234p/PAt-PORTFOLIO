'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Button } from '@/components/ui/Button';
import { CursorGlow } from '@/components/labs/CursorGlow';
import { SpriteCanvas } from '@/components/labs/SpriteCanvas';
import { CountUp } from '@/components/ui/CountUp';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const HeroSection: React.FC<{ lang?: 'zh-hk' | 'en' }> = ({ lang = 'zh-hk' }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const backgroundShapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(
        [
          subtitleRef.current,
          titleRef.current?.children,
          descriptionRef.current,
          ctaRef.current,
          statsRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );

      gsap.set(scrollIndicatorRef.current, {
        opacity: 0,
      });

      // Background shapes animation
      if (backgroundShapesRef.current) {
        const shapes = backgroundShapesRef.current.children;
        gsap.to(shapes, {
          y: '+=50',
          rotation: '+=10',
          duration: 8,
          ease: 'power1.inOut',
          stagger: {
            each: 2,
            repeat: -1,
            yoyo: true,
          },
        });
      }

      // Main timeline
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
          duration: 0.8,
        },
      });

      tl.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      })
        .to(
          titleRef.current?.children ?? [],
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: 'back.out(1.2)',
          },
          '-=0.3'
        )
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
          },
          '-=0.5'
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
          },
          '-=0.4'
        )
        .to(
          statsRef.current,
          {
            opacity: 1,
            y: 0,
          },
          '-=0.3'
        )
        .to(
          scrollIndicatorRef.current,
          {
            opacity: 1,
            duration: 0.5,
          },
          '-=0.2'
        );

      // Scroll indicator animation
      gsap.to(scrollIndicatorRef.current?.querySelector('svg') ?? [], {
        y: 8,
        duration: 1.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const content =
    lang === 'zh-hk'
      ? {
          title: ['打造卓越', 'Web 體驗'],
          subtitle: 'Full Stack Developer',
          description: '專注企業級網站與行動應用開發,結合設計美學與工程品質。',
          ctaPrimary: '查看作品',
          ctaSecondary: '聯絡我',
        }
      : {
          title: ['Building exceptional', 'web experiences'],
          subtitle: 'Full Stack Developer',
          description:
            'Specializing in enterprise-grade websites and mobile applications, combining design aesthetics with engineering excellence.',
          ctaPrimary: 'View Work',
          ctaSecondary: 'Contact',
        };

  return (
    <section id="hero" ref={sectionRef} className="snap-section">
      <div className="snap-content bg-prussian-blue-500 overflow-hidden">
        {/* Colorful background shapes for glass effect */}
        <div ref={backgroundShapesRef} className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-blue-green-500 via-sky-blue-500 to-blue-green-600 rounded-full mix-blend-screen filter blur-3xl opacity-20" />
          <div className="absolute top-1/3 -right-20 w-96 h-96 bg-gradient-to-br from-sky-blue-400 via-blue-green-600 to-prussian-blue-700 rounded-full mix-blend-screen filter blur-3xl opacity-20" />
          <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-gradient-to-br from-cyan-400 via-ut-orange-500 to-blue-green-500 rounded-full mix-blend-screen filter blur-3xl opacity-15" />
        </div>

        {/* Dark gradient background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-prussian-blue-500 via-prussian-blue-400 to-prussian-blue-600" />

        <SpriteCanvas />
        <CursorGlow />

        {/* Content */}
        <div className="relative z-20 container mx-auto px-6 text-center flex items-center justify-center min-h-screen">
          <div className="max-w-6xl mx-auto">
            <p
              ref={subtitleRef}
              className="text-sky-blue-600 font-medium text-lg md:text-xl mb-6 tracking-tight"
            >
              {content.subtitle}
            </p>

            <h1 ref={titleRef} className="mb-8">
              {content.title.map((line, i) => (
                <div
                  key={i}
                  className="text-display-sm md:text-display lg:text-display-lg font-semibold tracking-tight"
                  style={{
                    background:
                      i === 1
                        ? 'linear-gradient(90deg, #8ecae6 0%, #219ebc 50%, #ffb703 100%)'
                        : undefined,
                    WebkitBackgroundClip: i === 1 ? 'text' : undefined,
                    WebkitTextFillColor: i === 1 ? 'transparent' : undefined,
                    backgroundClip: i === 1 ? 'text' : undefined,
                    color: i === 1 ? undefined : '#e8f4fa',
                  }}
                >
                  {line}
                </div>
              ))}
            </h1>

            <p
              ref={descriptionRef}
              className="text-xl md:text-2xl text-sky-blue-700 mb-12 max-w-2xl mx-auto font-normal"
            >
              {content.description}
            </p>

            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
            >
              <Button
                variant="primary"
                onClick={() =>
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                {content.ctaPrimary}
              </Button>
              <Button
                variant="ghost"
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                {content.ctaSecondary}
              </Button>
            </div>

            {/* Minimal stats - Apple style */}
            <div
              ref={statsRef}
              className="grid grid-cols-3 gap-12 max-w-3xl mx-auto border-t border-b border-sky-blue-800 py-8"
            >
              <div>
                <h3 className="text-5xl font-semibold text-sky-blue-500 mb-1">
                  <CountUp end={5} suffix="+" />
                </h3>
                <p className="text-sky-blue-700 text-sm">{lang === 'zh-hk' ? '年經驗' : 'Years'}</p>
              </div>
              <div>
                <h3 className="text-5xl font-semibold text-sky-blue-500 mb-1">
                  <CountUp end={20} suffix="+" />
                </h3>
                <p className="text-sky-blue-700 text-sm">
                  {lang === 'zh-hk' ? '項目' : 'Projects'}
                </p>
              </div>
              <div>
                <h3 className="text-5xl font-semibold text-sky-blue-500 mb-1">
                  <CountUp end={3} />
                </h3>
                <p className="text-sky-blue-700 text-sm">
                  {lang === 'zh-hk' ? '公司' : 'Companies'}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll indicator - minimal */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[100]"
        >
          <div className="flex flex-col items-center gap-2 text-sky-blue-600">
            <span className="text-xs font-medium">Scroll</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
