import type { Route } from "./+types/home";
import { HeroSection } from "../components/sections/HeroSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { TechnologiesSection } from "../components/sections/TechnologiesSection";
import { GetInTouchSection } from "../components/sections/GetInTouchSection";
import { Footer } from "../components/sections/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Fikri Alwan Ramadhan — Frontend Engineer" },
    { name: "description", content: "Frontend Engineer specializing in Flutter, React, and Next.js. Based in Jakarta, Indonesia." },
  ];
}

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