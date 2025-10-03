'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { skills } from '@/data/profile';

export const SkillsSection: React.FC<{ lang?: 'zh-hk' | 'en' }> = ({ lang = 'zh-hk' }) => {
  const title = lang === 'zh-hk' ? '技術能力' : 'Technical Skills';
  const categories = lang === 'zh-hk' ? {
    languages: '語言 / 技術',
    frameworks: '框架',
    cloudDevOps: '雲端 / DevOps',
    designTools: '設計工具'
  } : {
    languages: 'Languages / Tech',
    frameworks: 'Frameworks',
    cloudDevOps: 'Cloud / DevOps',
    designTools: 'Design Tools'
  };

  const skillCategories = [
    { title: categories.languages, items: skills.languages, icon: '💻', color: 'primary' },
    { title: categories.frameworks, items: skills.frameworks, icon: '⚡', color: 'secondary' },
    { title: categories.cloudDevOps, items: skills.cloudDevOps, icon: '☁️', color: 'tertiary' },
    { title: categories.designTools, items: skills.designTools, icon: '🎨', color: 'success' }
  ];

  return (
    <section id="skills" className="py-32 px-6 relative">
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
          {lang === 'zh-hk' ? '多元化技術棧,持續學習最新技術' : 'Diverse tech stack, continuously learning the latest technologies'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card className="h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center mr-4">
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm rounded-lg bg-white border border-gray-200 text-text-primary font-medium transition-all hover:border-accent-primary hover:shadow-md hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
