import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/layout/HeroSection';
import { ExperienceSection } from '@/components/layout/ExperienceSection';
import { ProjectsSection } from '@/components/layout/ProjectsSection';
import { SkillsSection } from '@/components/layout/SkillsSection';
import { AboutSection } from '@/components/layout/AboutSection';
import { ContactSection } from '@/components/layout/ContactSection';
import { PageIndicator } from '@/components/ui/PageIndicator';

export default function Home() {
  const sections = [
    { id: 'hero', label: '首頁' },
    { id: 'work', label: '作品' },
    { id: 'experience', label: '經歷' },
    { id: 'skills', label: '技能' },
    { id: 'about', label: '關於' },
    { id: 'contact', label: '聯絡' },
  ];

  return (
    <>
      <Header lang="zh-hk" />
      <PageIndicator sections={sections} />
      <main style={{ scrollSnapType: 'y mandatory' }}>
        <div id="hero">
          <HeroSection lang="zh-hk" />
        </div>
        <ProjectsSection lang="zh-hk" />
        <ExperienceSection lang="zh-hk" />
        <SkillsSection lang="zh-hk" />
        <AboutSection lang="zh-hk" />
        <ContactSection lang="zh-hk" />
      </main>
    </>
  );
}
