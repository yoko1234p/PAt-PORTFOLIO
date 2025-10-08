'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Card } from '@/components/ui/Card';
import { projects } from '@/data/profile';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ProjectsSection: React.FC<{ lang?: 'zh-hk' | 'en' }> = ({ lang = 'zh-hk' }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const title = lang === 'zh-hk' ? '精選作品' : 'Featured Projects';
  const viewText = lang === 'zh-hk' ? '查看項目' : 'View Project';

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on scroll
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 3,
          ease: 'power1.inOut',
        },
        y: -20,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="snap-section">
      <div className="snap-content bg-prussian-blue-400 overflow-auto flex items-center justify-center min-h-screen">
      <div className="container mx-auto max-w-7xl px-6 py-16 pt-28">
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
            ? '展示我過往參與嘅企業級項目與個人作品'
            : 'Showcasing enterprise-level projects and personal work'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="h-full flex flex-col group bg-prussian-blue-500/40 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">{project.icon || '💼'}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-sky-blue-900 mb-3 group-hover:text-sky-blue-400 transition-colors">
                    {project.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mb-6 flex-grow">
                  {project.notes.slice(0, 2).map((note, i) => (
                    <li key={i} className="text-sm text-sky-blue-700 flex items-start">
                      <span className="text-ut-orange-500 mr-2 mt-1">✓</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>

                {project.links.length > 0 && (
                  <div className="mt-auto pt-4 border-t border-cyan-400/20">
                    {project.links.slice(0, 1).map((link, i) => (
                      <a
                        key={i}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-sky-blue-400 hover:text-ut-orange-500 transition-colors group"
                      >
                        {viewText}
                        <svg
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    ))}
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};
