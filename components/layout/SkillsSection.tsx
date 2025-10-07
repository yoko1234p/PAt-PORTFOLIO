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
    <section id="skills" className="snap-section">
      <div className="snap-content py-32 px-6 bg-prussian-blue-500 overflow-auto">
      <div className="container mx-auto max-w-6xl">
        <h2
          className="text-4xl md:text-5xl font-bold text-selective-yellow-500 mb-4 text-center"
          data-aos="fade-up"
        >
          {title}
        </h2>
        <p
          className="text-sky-blue-700 text-center mb-16 max-w-2xl mx-auto"
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
              <Card className="h-full bg-prussian-blue-400/40 backdrop-blur-sm border border-ut-orange-500/20 rounded-2xl p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-selective-yellow-500 to-ut-orange-500 flex items-center justify-center mr-4">
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-ut-orange-400">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm rounded-lg bg-prussian-blue-600/40 border border-selective-yellow-500/30 text-sky-blue-800 font-medium transition-all hover:border-ut-orange-500 hover:text-selective-yellow-500 hover:shadow-md hover:scale-105"
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
    </div>
    </section>
  );
};
