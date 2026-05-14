import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ResearchCertsSection from '@/components/sections/ResearchCertsSection';
import BlogSection from '@/components/sections/BlogSection';
import ResumeSection from '@/components/sections/ResumeSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ResearchCertsSection />
        <BlogSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
