import { HeroSection } from "../components/sections/HeroSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { TechnologiesSection } from "../components/sections/TechnologiesSection";
import { GetInTouchSection } from "../components/sections/GetInTouchSection";
import { Footer } from "../components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechnologiesSection />
      <GetInTouchSection />
      <Footer />
    </main>
  );
}