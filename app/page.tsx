import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/layout/HeroSection';
import { ExperienceSection } from '@/components/layout/ExperienceSection';
import { ProjectsSection } from '@/components/layout/ProjectsSection';
import { SkillsSection } from '@/components/layout/SkillsSection';
import { AboutSection } from '@/components/layout/AboutSection';
import { ContactSection } from '@/components/layout/ContactSection';

export default function Home() {
  return (
    <>
      <Header lang="zh-hk" />
      <main>
        <HeroSection lang="zh-hk" />
        <ProjectsSection lang="zh-hk" />
        <ExperienceSection lang="zh-hk" />
        <SkillsSection lang="zh-hk" />
        <AboutSection lang="zh-hk" />
        <ContactSection lang="zh-hk" />
      </main>
      <Footer lang="zh-hk" />
    </>
  );
}
