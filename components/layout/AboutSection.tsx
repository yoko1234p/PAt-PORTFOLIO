'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { GlowCard } from '@/components/ui/GlowCard';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const AboutSection: React.FC<{ lang?: 'zh-hk' | 'en' }> = ({ lang = 'zh-hk' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Parallax effect on scroll
      const parentElement = sectionRef.current?.parentElement;
      if (parentElement) {
        gsap.to(parentElement, {
          scrollTrigger: {
            trigger: parentElement,
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

  const content =
    lang === 'zh-hk'
      ? {
          title: '關於我',
          intro:
            '你好，我係 Patrick Ho，一名專注於用戶體驗與工程品質的全端開發者。專長於 React/Next.js 生態系、企業級 CMS（Adobe Experience Manager）、雲端架構與 DevOps 自動化。致力將視覺設計、互動語法與商業目標融合成高效能產品。',
          philosophy: {
            title: '核心理念',
            items: [
              {
                title: '設計系統思維',
                description: '建立可擴展的元件庫，確保一致性與可維護性',
              },
              {
                title: '效能優先架構',
                description: '從渲染優化到 API 設計，每個環節追求極致效能',
              },
              {
                title: '工程化流程',
                description: 'CI/CD 自動化、型別安全、測試覆蓋率驅動開發',
              },
            ],
          },
          expertise: {
            title: '專業領域',
            items: [
              {
                category: '前端架構',
                skills: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
              },
              {
                category: '後端整合',
                skills: ['Node.js/Express', 'REST/GraphQL API', 'Database Design'],
              },
              {
                category: '企業方案',
                skills: ['Adobe AEM', 'Headless CMS', 'Multi-site Architecture'],
              },
              {
                category: 'DevOps 實踐',
                skills: ['Docker', 'CI/CD Pipelines', 'Cloud Deployment', 'Monitoring'],
              },
            ],
          },
        }
      : {
          title: 'About Me',
          intro:
            "Hi, I'm Patrick Ho, a Full Stack Developer focused on user experience and engineering quality. I specialize in the React/Next.js ecosystem, enterprise CMS (Adobe Experience Manager), cloud architecture, and DevOps automation. Committed to integrating visual design, interaction patterns, and business goals into high-performance products.",
          philosophy: {
            title: 'Core Principles',
            items: [
              {
                title: 'Design System Thinking',
                description: 'Building scalable component libraries for consistency and maintainability',
              },
              {
                title: 'Performance-First Architecture',
                description: 'Optimizing every layer from rendering to API design for peak performance',
              },
              {
                title: 'Engineering Excellence',
                description: 'CI/CD automation, type safety, and test-driven development',
              },
            ],
          },
          expertise: {
            title: 'Areas of Expertise',
            items: [
              {
                category: 'Frontend Architecture',
                skills: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
              },
              {
                category: 'Backend Integration',
                skills: ['Node.js/Express', 'REST/GraphQL API', 'Database Design'],
              },
              {
                category: 'Enterprise Solutions',
                skills: ['Adobe AEM', 'Headless CMS', 'Multi-site Architecture'],
              },
              {
                category: 'DevOps Practices',
                skills: ['Docker', 'CI/CD Pipelines', 'Cloud Deployment', 'Monitoring'],
              },
            ],
          },
        };

  return (
    <section id="about" className="snap-section">
      <div className="snap-content bg-prussian-blue-500 overflow-auto flex items-center justify-center min-h-screen">
      <div className="container mx-auto max-w-6xl px-6 py-16 pt-28" ref={sectionRef}>
        <h2 className="text-4xl md:text-5xl font-bold text-sky-blue-900 mb-4 text-center">
          {content.title}
        </h2>
        <p className="text-sky-blue-700 text-center mb-16 max-w-2xl mx-auto">
          {lang === 'zh-hk'
            ? '深入了解我嘅專業背景與技術理念'
            : 'Learn more about my professional background and technical philosophy'}
        </p>

        <GlowCard className="p-8">
          {/* Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <div>
              <p className="text-lg text-sky-blue-900 leading-relaxed">{content.intro}</p>
            </div>

            {/* Philosophy */}
            <div>
              <h3 className="text-2xl font-bold text-sky-blue-400 mb-6">
                {content.philosophy.title}
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {content.philosophy.items.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="text-lg font-semibold text-ut-orange-500">{item.title}</h4>
                    <p className="text-sm text-sky-blue-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise */}
            <div>
              <h3 className="text-2xl font-bold text-sky-blue-400 mb-6">
                {content.expertise.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {content.expertise.items.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="text-base font-semibold text-ut-orange-400">{item.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs text-sky-blue-800 px-3 py-1.5 rounded-full bg-prussian-blue-600/40 border border-cyan-400/30 hover:border-ut-orange-500 hover:text-sky-blue-400 transition-colors backdrop-blur-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlowCard>
      </div>
    </div>
    </section>
  );
};
