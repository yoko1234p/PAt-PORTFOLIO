'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { GlowCard } from '@/components/ui/GlowCard';
import { experience } from '@/data/profile';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ExperienceSection: React.FC<{ lang?: 'zh-hk' | 'en' }> = ({ lang = 'zh-hk' }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const title = lang === 'zh-hk' ? '工作經歷' : 'Work Experience';

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on scroll
      if (sectionRef.current) {
        gsap.to(sectionRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 3,
          },
          y: -20,
          ease: 'power1.inOut',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="snap-section">
      <div className="snap-content bg-prussian-blue-400 overflow-auto flex items-center justify-center min-h-screen">
      <div className="container mx-auto max-w-6xl px-6 py-16 pt-28">
        <h2
          className="text-4xl md:text-5xl font-bold text-sky-blue-400 mb-4 text-center"
          data-aos="fade-up"
        >
          {title}
        </h2>
        <p
          className="text-sky-blue-700 text-center mb-16 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {lang === 'zh-hk'
            ? '5年以上前端開發經驗,專注企業級應用與性能優化'
            : '5+ years of frontend development experience, focusing on enterprise applications and performance optimization'}
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-ut-orange-500 to-purple-500 opacity-60 rounded-full" />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="relative" data-aos="fade-up" data-aos-delay={index * 150}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 top-8 w-8 h-8 -ml-4 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 shadow-xl shadow-cyan-400/60 ring-4 ring-prussian-blue-400 z-10" />

                <div className="ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-16">
                  <div className={index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}>
                    <GlowCard className="p-6">
                      <div className="flex flex-col md:items-start mb-4">
                        <h3 className="text-2xl font-bold text-sky-blue-900 mb-1">{job.title}</h3>
                        <p className="text-lg text-sky-blue-400 font-semibold mb-2">
                          {job.company}
                        </p>
                        <span className="text-sky-blue-700 text-sm">{job.period}</span>
                      </div>

                      <ul className="space-y-3 mb-4">
                        {job.highlights.map((highlight, i) => (
                          <li key={i} className="text-sky-blue-700 flex items-start text-sm">
                            <span className="text-ut-orange-500 mr-2 mt-1">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {job.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </GlowCard>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};
