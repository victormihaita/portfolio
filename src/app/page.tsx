import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ProjectsGrid } from "@/components/home/ProjectsGrid";
import { SkillsSection } from "@/components/home/SkillsSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsGrid />
      <SkillsSection />
      <CTASection />
    </>
  );
}
