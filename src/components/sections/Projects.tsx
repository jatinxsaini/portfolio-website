'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderGit2, PlusCircle, Filter, Search, Sparkles } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../ui/ProjectCard';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const hasProjects = projectsData && projectsData.length > 0;

  // Extract unique categories dynamically
  const categories = ['ALL', ...Array.from(new Set(projectsData.map((p) => p.category).filter(Boolean)))];

  // Filter projects by category AND real-time search query
  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === 'ALL' || project.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      project.title.toLowerCase().includes(q) ||
      project.shortDescription.toLowerCase().includes(q) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="CHAPTER 03 — PROJECTS"
          title="Featured Works &amp; Software Build"
          description="Explore engineering projects, web applications, and digital creations."
          badgeBg="bg-[#FFE500] text-[#171717]"
        />

        {hasProjects ? (
          <div>
            {/* Search & Category Filter Control Panel */}
            <div className="comic-panel p-4 sm:p-6 mb-8 rounded-3xl bg-[#FFFFFF] border-[3.5px] border-[#171717] shadow-[6px_6px_0px_#171717] flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Category Filter Chips */}
              <div className="flex items-center gap-2 flex-wrap w-full md:w-auto">
                <div className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-black uppercase text-[#171717]">
                  <Filter className="w-4 h-4 stroke-[3]" />
                  <span>FILTER:</span>
                </div>
                {categories.map((cat) => (
                  <button
                    key={cat as string}
                    onClick={() => setSelectedCategory(cat as string)}
                    className={`px-4 py-2 text-xs font-black uppercase tracking-wider rounded-xl border-2 border-[#171717] transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#FFE500] text-[#171717] shadow-[3px_3px_0px_#171717] -translate-y-0.5'
                        : 'bg-[#FFF8E7] text-[#171717] shadow-[2px_2px_0px_#171717] hover:bg-[#FFE500]/50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Real-Time Search Box */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#171717] stroke-[3]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search title, tech..."
                  className="w-full pl-10 pr-4 py-2 text-xs font-black uppercase rounded-xl border-2 border-[#171717] bg-[#FFF8E7] text-[#171717] placeholder-[#171717]/60 shadow-[3px_3px_0px_#171717] focus:outline-none focus:bg-white"
                />
              </div>
            </div>

            {/* Results Counter Sticker */}
            <div className="flex items-center justify-between mb-6 px-1">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-black uppercase bg-[#245BFF] text-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
                <Sparkles className="w-3.5 h-3.5 text-[#FFE500]" />
                <span>SHOWING {filteredProjects.length} PROJECT{filteredProjects.length !== 1 ? 'S' : ''}</span>
              </span>
            </div>

            {/* Asymmetric Comic Bento Grid */}
            {filteredProjects.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start"
              >
                <AnimatePresence>
                  {filteredProjects.map((project, idx) => {
                    const isFirstFeatured = project.featured && idx === 0;
                    return (
                      <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className={isFirstFeatured ? 'md:col-span-2' : ''}
                      >
                        <ProjectCard project={project} isFeaturedSpan={isFirstFeatured} />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="comic-panel p-8 text-center bg-[#FFFFFF] rounded-2xl border-[3px] border-[#171717] shadow-[4px_4px_0px_#171717]">
                <p className="text-sm font-black uppercase text-[#171717]">
                  NO PROJECTS FOUND MATCHING "{searchQuery}".
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('ALL');
                  }}
                  className="mt-3 text-xs font-black uppercase underline text-[#245BFF]"
                >
                  Clear search filters
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Visually Balanced Comic Empty State Card */
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="comic-panel bg-[#FFFFFF] p-8 sm:p-12 text-center flex flex-col items-center justify-center rounded-3xl border-[4px] border-[#171717] shadow-[8px_8px_0px_#171717] min-h-[320px]"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#FFE500] text-[#171717] border-[3px] border-[#171717] shadow-[3px_3px_0px_#171717] flex items-center justify-center mb-6">
              <FolderGit2 className="w-8 h-8 stroke-[3]" />
            </div>

            <h3 className="text-2xl font-black text-[#171717] uppercase mb-2">
              PROJECTS READY TO BE ADDED
            </h3>

            <p className="text-sm sm:text-base font-bold text-[#171717] max-w-md leading-relaxed mb-6">
              The project showcase is ready. You can easily populate your work by adding items to{' '}
              <code className="px-2 py-1 bg-[#FFE500] border border-[#171717] rounded text-xs font-mono font-black text-[#171717]">
                src/data/projects.ts
              </code>.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#B9F227] border-[2.5px] border-[#171717] shadow-[3px_3px_0px_#171717] text-xs font-black uppercase text-[#171717]">
              <PlusCircle className="w-4 h-4 stroke-[3]" />
              <span>EDITABLE VIA DATA FILES</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
