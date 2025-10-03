'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { experience } from '@/data/profile';

export const ExperienceSection: React.FC<{ lang?: 'zh-hk' | 'en' }> = ({ lang = 'zh-hk' }) => {
  const title = lang === 'zh-hk' ? '工作經歷' : 'Work Experience';

  return (
    <section id="experience" className="py-32 px-6 relative bg-bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <h2
          className="text-4xl md:text-5xl font-bold text-text-primary mb-4 text-center"
          data-aos="fade-up"
        >
          {title}
        </h2>
        <p
          className="text-text-secondary text-center mb-16 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {lang === 'zh-hk'
            ? '5年以上前端開發經驗,專注企業級應用與性能優化'
            : '5+ years of frontend development experience, focusing on enterprise applications and performance optimization'}
        </p>

        <div className="relative">
          {/* Timeline line - 加強顏色 */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-tertiary opacity-60 rounded-full" />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="relative" data-aos="fade-up" data-aos-delay={index * 150}>
                {/* Timeline dot - 加大同加強顏色 */}
                <div className="absolute left-8 md:left-1/2 top-8 w-8 h-8 -ml-4 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary shadow-xl shadow-accent-primary/60 ring-4 ring-white z-10" />

                <div className="ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-16">
                  <div className={index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}>
                    <Card>
                      <div className="flex flex-col md:items-start mb-4">
                        <h3 className="text-2xl font-bold text-text-primary mb-1">{job.title}</h3>
                        <p className="text-lg text-accent-primary font-semibold mb-2">
                          {job.company}
                        </p>
                        <span className="text-text-tertiary text-sm">{job.period}</span>
                      </div>

                      <ul className="space-y-3 mb-4">
                        {job.highlights.map((highlight, i) => (
                          <li key={i} className="text-text-secondary flex items-start text-sm">
                            <span className="text-accent-secondary mr-2 mt-1">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {job.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 text-accent-primary border border-accent-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
