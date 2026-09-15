import { DockNav } from "@/components/DockNav";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg)] relative selection:bg-[var(--fg)] selection:text-[var(--bg)]">
      {/* Floating Dock Navigation */}
      <DockNav />

      {/* Main Sections */}
      <Hero />
      <Experience />
      <Projects />
      <Education />
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
