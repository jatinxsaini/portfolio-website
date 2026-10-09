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
    <div className="min-h-screen bg-[#FFF8E7] py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-8">
      {/* Main Comic Panel Canvas Container */}
      <main className="max-w-7xl mx-auto comic-canvas rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden min-h-[90vh]">
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
