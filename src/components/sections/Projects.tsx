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
    <section id="projects" className="py-10 sm:py-16 px-3 sm:px-6 lg:px-8 xl:px-10">
      <div className="w-full max-w-[1520px] 2xl:max-w-[1640px] mx-auto">
        <SectionHeading
          badge="CHAPTER 03 — PROJECTS"
          title="Featured Works &amp; Software Build"
          description="Explore engineering projects, web applications, and digital creations."
          badgeBg="bg-[var(--comic-yellow)] text-[#171717]"
        />

        {hasProjects ? (
          <div>
            {/* Search & Category Filter Control Panel */}
            <div className="comic-panel p-3.5 sm:p-5 md:p-6 mb-6 sm:mb-8 rounded-2xl sm:rounded-3xl bg-[var(--card-bg)] border-2 sm:border-[3.5px] border-[var(--border-color)] shadow-[4px_4px_0px_var(--shadow-color)] sm:shadow-[6px_6px_0px_var(--shadow-color)] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3.5 sm:gap-4">
              
              {/* Category Filter Chips */}
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap w-full md:w-auto">
                <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-black uppercase text-[var(--text-primary)]">
                  <Filter className="w-4 h-4 stroke-[3]" />
                  <span>FILTER:</span>
                </div>
                {categories.map((cat) => (
                  <button
                    key={cat as string}
                    onClick={() => setSelectedCategory(cat as string)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-black uppercase tracking-wider rounded-xl border-2 border-[var(--border-color)] transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[var(--comic-yellow)] text-[#171717] shadow-[2.5px_2.5px_0px_var(--shadow-color)] -translate-y-0.5'
                        : 'bg-[var(--card-subtle)] text-[var(--text-primary)] shadow-[1.5px_1.5px_0px_var(--shadow-color)] hover:bg-[var(--comic-yellow)] hover:text-[#171717]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Real-Time Search Box */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] stroke-[3]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search title, tech..."
                  aria-label="Search projects by title or technology"
                  className="w-full pl-9 sm:pl-10 pr-3.5 py-2 text-xs font-black uppercase rounded-xl border-2 border-[var(--border-color)] bg-[var(--card-subtle)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] shadow-[2px_2px_0px_var(--shadow-color)] focus:outline-none focus:bg-[var(--card-bg)]"
                />
              </div>
            </div>

            {/* Results Counter Sticker */}
            <div className="flex items-center justify-between mb-5 sm:mb-6 px-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] sm:text-xs font-black uppercase bg-[var(--comic-blue)] text-white border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)]">
                <Sparkles className="w-3.5 h-3.5 text-[var(--comic-yellow)]" />
                <span>SHOWING {filteredProjects.length} PROJECT{filteredProjects.length !== 1 ? 'S' : ''}</span>
              </span>
            </div>

            {/* Symmetrical & Balanced Bento Grid */}
            {filteredProjects.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 items-stretch"
              >
                <AnimatePresence>
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="h-full flex"
                    >
                      <ProjectCard project={project} className="w-full h-full" />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="comic-panel p-6 sm:p-8 text-center bg-[var(--card-bg)] rounded-2xl border-2 sm:border-[3px] border-[var(--border-color)] shadow-[4px_4px_0px_var(--shadow-color)]">
                <p className="text-xs sm:text-sm font-black uppercase text-[var(--text-primary)]">
                  NO PROJECTS FOUND MATCHING &quot;{searchQuery}&quot;.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('ALL');
                  }}
                  className="mt-3 text-xs font-black uppercase underline text-[var(--comic-blue)] cursor-pointer"
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
            className="comic-panel bg-[var(--card-bg)] p-6 sm:p-12 text-center flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl border-3 sm:border-[4px] border-[var(--border-color)] shadow-[5px_5px_0px_var(--shadow-color)] sm:shadow-[8px_8px_0px_var(--shadow-color)] min-h-[300px]"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[var(--comic-yellow)] text-[#171717] border-2 sm:border-[3px] border-[var(--border-color)] shadow-[3px_3px_0px_var(--shadow-color)] flex items-center justify-center mb-5 sm:mb-6">
              <FolderGit2 className="w-7 h-7 sm:w-8 sm:h-8 stroke-[3]" />
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] uppercase mb-2">
              PROJECTS READY TO BE ADDED
            </h3>

            <p className="text-xs sm:text-base font-bold text-[var(--text-secondary)] max-w-md leading-relaxed mb-6">
              The project showcase is ready. You can easily populate your work by adding items to{' '}
              <code className="px-2 py-1 bg-[var(--comic-yellow)] border border-[var(--border-color)] rounded text-xs font-mono font-black text-[#171717]">
                src/data/projects.ts
              </code>.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-[var(--comic-green)] border-2 sm:border-[2.5px] border-[var(--border-color)] shadow-[3px_3px_0px_var(--shadow-color)] text-xs font-black uppercase text-[#171717]">
              <PlusCircle className="w-4 h-4 stroke-[3]" />
              <span>EDITABLE VIA DATA FILES</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
