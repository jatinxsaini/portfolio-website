import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Achievements } from '@/components/sections/Achievements';
import { Contact } from '@/components/sections/Contact';
import { sectionConfig } from '@/config/sections';

export default function Home() {
  return (
    <div className="min-h-screen min-h-[100dvh] w-full bg-[var(--bg-page)] transition-colors duration-200">
      <main id="main-content" className="portfolio-shell">
        <Navbar />

        <Hero />

        {sectionConfig.about && <About />}
        {sectionConfig.skills && <Skills />}
        {sectionConfig.projects && <Projects />}
        {sectionConfig.achievements && <Achievements />}
        {sectionConfig.contact && <Contact />}

        <Footer />
      </main>
    </div>
  );
}
