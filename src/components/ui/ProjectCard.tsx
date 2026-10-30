'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, CheckCircle2, Layers, Code2, Zap, Eye } from 'lucide-react';
import { Project } from '@/types';
import { cn } from '@/lib/utils';
import { Button } from './Button';
import { DotExpand } from './DotExpand';
import { SocialIcon } from './SocialIcon';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  const [imageError, setImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on Escape key and prevent background body scrolling when modal is open
  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isModalOpen]);

  // Clean Flat High-Contrast Panel Accents (Classic Neo-Brutalist & Comic)
  const panelAccents = {
    purple: 'bg-[var(--comic-blue)] text-white',
    mint: 'bg-[var(--comic-green)] text-[#171717]',
    yellow: 'bg-[var(--comic-yellow)] text-[#171717]',
    charcoal: 'bg-[var(--comic-red)] text-white',
    white: 'bg-[var(--card-bg)] text-[var(--text-primary)]',
  };

  const accentClass = project.accentColor ? panelAccents[project.accentColor] : panelAccents.white;
  const isNeutralCard = !project.accentColor || project.accentColor === 'white';

  const visibleTech = project.technologies ? project.technologies.slice(0, 3) : [];
  const remainingTechCount = project.technologies ? Math.max(0, project.technologies.length - visibleTech.length) : 0;

  return (
    <>
      {/* Main Flat Solid Comic Panel Card */}
      <div
        role="button"
        tabIndex={0}
        aria-label={`Open details for ${project.title}`}
        onClick={() => setIsModalOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsModalOpen(true);
          }
        }}
        className={cn(
          'comic-panel p-4 sm:p-6 md:p-7 flex flex-col justify-between h-full relative cursor-pointer rounded-2xl sm:rounded-3xl border-3 sm:border-[4px] border-[var(--border-color)] shadow-[5px_5px_0px_var(--shadow-color)] sm:shadow-[6px_6px_0px_var(--shadow-color)] hover:shadow-[8px_8px_0px_var(--shadow-color)] sm:hover:shadow-[10px_10px_0px_var(--shadow-color)] hover:-translate-y-1 transition-all duration-200 group focus:outline-none focus:ring-4 focus:ring-[var(--comic-yellow)]',
          accentClass,
          className
        )}
      >
        <div className="flex-1 flex flex-col">
          {/* Header Badges */}
          <div className="flex items-center justify-between gap-2 mb-3.5 flex-wrap">
            <div className="flex items-center gap-2">
              {project.category && (
                <span className="px-3 py-1 text-[11px] sm:text-xs font-black tracking-wider uppercase border-2 border-current rounded-md bg-[#FFFFFF] text-[#171717] shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
                  {project.category}
                </span>
              )}
            </div>
            {project.featured && (
              <span className="px-3 py-1 text-[11px] sm:text-xs font-black tracking-wider uppercase border-2 border-current rounded-md bg-[var(--comic-yellow)] text-[#171717] shadow-[2px_2px_0px_rgba(0,0,0,0.5)] -rotate-1">
                ★ FEATURED
              </span>
            )}
          </div>

          {/* Project Image Preview or Compact Graphic Banner */}
          {project.imagePath && !imageError ? (
            <div
              onClick={() => setIsModalOpen(true)}
              className="relative w-full h-44 sm:h-48 mb-4 rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-[3.5px] border-current bg-[var(--card-bg)] shadow-[3px_3px_0px_rgba(0,0,0,0.3)]"
            >
              <Image
                src={project.imagePath}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                onError={() => setImageError(true)}
              />
            </div>
          ) : (
            /* Clean Compact Graphic Banner */
            <div
              onClick={() => setIsModalOpen(true)}
              className="relative w-full h-24 sm:h-28 mb-4 rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-[3px] border-current bg-black/10 p-3 sm:p-4 flex flex-col justify-between bg-halftone-dense shadow-[3px_3px_0px_rgba(0,0,0,0.2)]"
            >
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 text-[10px] font-black uppercase rounded bg-[#171717] text-white border border-current">
                  CASE STUDY #{project.id}
                </span>
                <Code2 className="w-5 h-5 text-current stroke-[3]" />
              </div>

              <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-black uppercase">
                <span className="opacity-90 tracking-wide">&lt;ARCHITECTURE &amp; BUILD /&gt;</span>
                <Zap className="w-4 h-4 fill-current opacity-90" />
              </div>
            </div>
          )}

          {/* Title - NEVER Truncated */}
          <h3
            onClick={() => setIsModalOpen(true)}
            className="text-xl sm:text-2xl font-black tracking-tight mb-2.5 uppercase group-hover:underline underline-offset-4 transition-all"
          >
            {project.title}
          </h3>

          {/* Short Description */}
          <p
            onClick={() => setIsModalOpen(true)}
            className="text-xs sm:text-sm font-bold opacity-90 leading-relaxed mb-4 flex-1 line-clamp-3"
          >
            {project.shortDescription}
          </p>
        </div>

        {/* Footer Area: Tech Stack + Actions */}
        <div className="mt-auto pt-2">
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {visibleTech.map((tech) => (
              <span
                key={tech}
                className={cn(
                  'px-2.5 py-1 text-[11px] sm:text-xs font-black rounded-md border-2 border-current shadow-[1.5px_1.5px_0px_rgba(0,0,0,0.3)]',
                  isNeutralCard
                    ? 'bg-[var(--card-subtle)] text-[var(--text-primary)]'
                    : 'bg-[#FFFFFF] text-[#171717]'
                )}
              >
                {tech}
              </span>
            ))}
            {remainingTechCount > 0 && (
              <span
                className={cn(
                  'px-2.5 py-1 text-[11px] sm:text-xs font-black rounded-md border-2 border-current',
                  isNeutralCard
                    ? 'bg-[var(--card-bg)] text-[var(--text-primary)]'
                    : 'bg-black/15 text-current'
                )}
              >
                +{remainingTechCount} MORE
              </span>
            )}
          </div>

          {/* Action Footer: Direct Links + Case Study Modal Trigger */}
          <div className="flex items-center justify-between pt-3.5 border-t-2 sm:border-t-3 border-current gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider underline underline-offset-4 hover:opacity-80 cursor-pointer text-current"
            >
              <Eye className="w-4 h-4 stroke-[3]" />
              <span>Read Case Study</span>
            </button>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-icon-link p-2 rounded-lg bg-[#FFFFFF] text-[#171717] border-2 border-current shadow-[2px_2px_0px_rgba(0,0,0,0.4)] hover:bg-[var(--comic-yellow)] transition-all"
                  title="GitHub Repository"
                  aria-label="GitHub Repository"
                  onClick={(e) => e.stopPropagation()}
                >
                  <SocialIcon name="github" className="w-3.5 h-3.5" />
                  <DotExpand className="dot-expand--compact" />
                </a>
              )}
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-icon-link p-2 rounded-lg bg-[var(--comic-yellow)] text-[#171717] border-2 border-current shadow-[2px_2px_0px_rgba(0,0,0,0.4)] hover:bg-[var(--comic-green)] transition-all"
                  title="Live Demo"
                  aria-label="Live Demo"
                  onClick={(e) => e.stopPropagation()}
                >
                  <DotExpand className="dot-expand--compact" />
                </a>
              )}
              {!project.githubUrl && !project.liveDemoUrl && (
                <span
                  className="text-[10px] font-black uppercase px-2 py-1 rounded bg-[#FFFFFF] border-2 border-current text-[#171717] shadow-[1px_1px_0px_rgba(0,0,0,0.3)]"
                  title="Detailed architecture breakdown inside"
                >
                  CASE STUDY
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Comic Style Detailed Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-[#000000]/70 backdrop-blur-xs"
            />

            {/* Comic Panel Modal Dialog Content */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={`project-title-${project.id}`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl bg-[var(--bg-canvas)] text-[var(--text-primary)] rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 shadow-[8px_8px_0px_var(--shadow-color)] sm:shadow-[12px_12px_0px_var(--shadow-color)] border-3 sm:border-[4px] border-[var(--border-color)] z-10 my-4 sm:my-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 sm:p-2.5 rounded-xl bg-[var(--comic-red)] text-white border-2 border-[var(--border-color)] shadow-[2.5px_2.5px_0px_var(--shadow-color)] hover:opacity-90 transition-opacity cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 stroke-[3]" />
              </button>

              {/* Header Badges */}
              <div className="flex items-center gap-2 mb-3 sm:mb-4 flex-wrap pr-12">
                {project.category && (
                  <span className="px-3 sm:px-4 py-1 text-xs font-black uppercase tracking-wider rounded-md border-2 border-[var(--border-color)] bg-[var(--comic-blue)] text-white shadow-[2px_2px_0px_var(--shadow-color)]">
                    {project.category}
                  </span>
                )}
                {project.featured && (
                  <span className="px-3 py-1 text-xs font-black uppercase tracking-wider rounded-md border-2 border-[var(--border-color)] bg-[var(--comic-yellow)] text-[#171717] shadow-[2px_2px_0px_var(--shadow-color)]">
                    ★ FEATURED PROJECT
                  </span>
                )}
              </div>

              {/* Project Title */}
              <h2
                id={`project-title-${project.id}`}
                className="text-2xl sm:text-4xl md:text-5xl font-black text-[var(--text-primary)] uppercase tracking-tight mb-4"
              >
                {project.title}
              </h2>

              {/* Project Image Banner or Comic Graphic Banner */}
              {project.imagePath && !imageError ? (
                <div className="relative w-full h-48 sm:h-64 md:h-72 mb-6 rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-[3.5px] border-[var(--border-color)] bg-[var(--card-bg)] shadow-[3px_3px_0px_var(--shadow-color)]">
                  <Image
                    src={project.imagePath}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="relative w-full h-28 sm:h-36 mb-6 rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-[3.5px] border-[var(--border-color)] bg-[var(--comic-yellow)] p-4 sm:p-5 flex flex-col justify-between text-[#171717] bg-halftone shadow-[3px_3px_0px_var(--shadow-color)]">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 text-xs font-black uppercase rounded bg-[#171717] text-[var(--comic-yellow)]">
                      FULL CASE STUDY
                    </span>
                    <Code2 className="w-6 h-6 sm:w-7 sm:h-7 text-[#171717] stroke-[3]" />
                  </div>
                  <div className="text-xs sm:text-sm font-black uppercase tracking-wider">
                    ARCHITECTURE &amp; IMPLEMENTATION BREAKDOWN
                  </div>
                </div>
              )}

              {/* Detailed Description */}
              <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-black text-[var(--text-primary)] uppercase flex items-center gap-2">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--comic-blue)] stroke-[3]" />
                  <span>OVERVIEW &amp; PURPOSE</span>
                </h3>
                <p className="text-xs sm:text-base text-[var(--text-primary)] opacity-95 font-bold leading-relaxed">
                  {project.detailedDescription || project.shortDescription}
                </p>
              </div>

              {/* How I Built This Section */}
              {project.howIBuiltThis && project.howIBuiltThis.length > 0 && (
                <div className="mb-6 sm:mb-8 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[var(--card-bg)] border-2 sm:border-[3px] border-[var(--border-color)] shadow-[3px_3px_0px_var(--shadow-color)]">
                  <h3 className="text-lg sm:text-xl font-black text-[var(--text-primary)] uppercase mb-3 sm:mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--comic-blue)] stroke-[3]" />
                    <span>HOW I MADE THIS &amp; ARCHITECTURE</span>
                  </h3>
                  <div className="space-y-2.5 sm:space-y-3">
                    {project.howIBuiltThis.map((point, index) => (
                      <p key={index} className="text-xs sm:text-sm text-[var(--text-primary)] opacity-95 font-bold leading-relaxed">
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features List */}
              {project.features && project.features.length > 0 && (
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-black text-[var(--text-primary)] uppercase mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--comic-green)] stroke-[3]" />
                    <span>KEY FEATURES</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                    {project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-[var(--card-bg)] border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)] text-xs sm:text-sm font-black text-[var(--text-primary)]"
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-[var(--comic-red)] border border-[var(--border-color)] flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Full Tech Stack Pills */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[var(--text-primary)] mb-3">
                  TECHNOLOGIES USED
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs font-black rounded-lg border-2 border-[var(--border-color)] bg-[var(--comic-yellow)] text-[#171717] shadow-[2px_2px_0px_var(--shadow-color)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 sm:gap-3 pt-5 sm:pt-6 border-t-2 sm:border-t-3 border-[var(--border-color)] flex-wrap">
                {project.liveDemoUrl && (
                  <Button
                    href={project.liveDemoUrl}
                    external
                    size="md"
                    variant="primary"
                    className="text-xs"
                  >
                    <span>VISIT LIVE DEMO</span>
                  </Button>
                )}

                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    external
                    size="md"
                    variant="secondary"
                    className="text-xs"
                  >
                    <SocialIcon name="github" className="w-4 h-4" />
                    <span>VIEW GITHUB REPO</span>
                  </Button>
                )}

                {!project.liveDemoUrl && !project.githubUrl && (
                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--card-bg)] border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)] text-xs font-black uppercase text-[var(--text-primary)]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--comic-yellow)] border border-[var(--border-color)]" />
                    <span>Internal Project • Code &amp; Demo Available Upon Request</span>
                  </div>
                )}

                <Button
                  onClick={() => setIsModalOpen(false)}
                  size="md"
                  variant="outline"
                  className="ml-auto text-xs"
                >
                  CLOSE
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
