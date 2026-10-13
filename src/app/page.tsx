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
    <div className="min-h-screen min-h-[100dvh] w-full bg-[var(--bg-page)] py-2 sm:py-4 md:py-6 lg:py-8 px-1.5 sm:px-3 md:px-5 lg:px-8 xl:px-10 transition-colors duration-200">
      {/* Main Comic Panel Canvas Container */}
      <main
        id="main-content"
        className="w-full max-w-[1600px] 2xl:max-w-[1720px] mx-auto comic-canvas rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden min-h-[calc(100dvh-1rem)] sm:min-h-[calc(100dvh-2rem)] md:min-h-[calc(100dvh-3rem)]"
      >
        <Navbar />

        {/* Hero section */}
        <Hero />

        {/* Conditional section rendering based on sectionConfig */}
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
