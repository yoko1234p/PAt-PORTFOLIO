'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import { Button } from '@/components/ui/Button';
import { CursorGlow } from '@/components/labs/CursorGlow';
import { SpriteCanvas } from '@/components/labs/SpriteCanvas';

export const HeroSection: React.FC<{ lang?: 'zh-hk' | 'en' }> = ({ lang = 'zh-hk' }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Colorful background shapes for glass effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div
          className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-base via-bg-secondary to-bg-base" />

      <SpriteCanvas />
      <CursorGlow />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center pt-20">
        <div className="max-w-6xl mx-auto">
          <p
            className="text-text-secondary font-medium text-lg md:text-xl mb-6 tracking-tight"
            data-aos="fade-down"
          >
            {content.subtitle}
          </p>

          <h1 className="mb-8">
            {content.title.map((line, i) => (
              <div
                key={i}
                className="text-display-sm md:text-display lg:text-display-lg font-semibold text-text-primary tracking-tight"
                data-aos="fade-up"
                data-aos-delay={i * 100}
                style={{
                  background:
                    i === 1 ? 'linear-gradient(90deg, #0071E3 0%, #147CE5 100%)' : undefined,
                  WebkitBackgroundClip: i === 1 ? 'text' : undefined,
                  WebkitTextFillColor: i === 1 ? 'transparent' : undefined,
                  backgroundClip: i === 1 ? 'text' : undefined,
                }}
              >
                {line}
              </div>
            ))}
          </h1>

          <p
            className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto font-normal"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {content.description}
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
            data-aos="fade-up"
            data-aos-delay="300"
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
            className="grid grid-cols-3 gap-12 max-w-3xl mx-auto border-t border-b border-gray-200 py-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div>
              <h3 className="text-5xl font-semibold text-text-primary mb-1">5+</h3>
              <p className="text-text-tertiary text-sm">{lang === 'zh-hk' ? '年經驗' : 'Years'}</p>
            </div>
            <div>
              <h3 className="text-5xl font-semibold text-text-primary mb-1">20+</h3>
              <p className="text-text-tertiary text-sm">{lang === 'zh-hk' ? '項目' : 'Projects'}</p>
            </div>
            <div>
              <h3 className="text-5xl font-semibold text-text-primary mb-1">3</h3>
              <p className="text-text-tertiary text-sm">
                {lang === 'zh-hk' ? '公司' : 'Companies'}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator - minimal */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
        data-aos="fade"
        data-aos-delay="600"
      >
        <div className="flex flex-col items-center gap-2 text-text-tertiary">
          <span className="text-xs font-medium">Scroll</span>
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
