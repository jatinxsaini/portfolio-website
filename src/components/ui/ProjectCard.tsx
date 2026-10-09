'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ArrowRight, X, Sparkles, CheckCircle2, Layers, Code2, Zap, Eye } from 'lucide-react';
import { Project } from '@/types';
import { cn } from '@/lib/utils';
import { Button } from './Button';
import { SocialIcon } from './SocialIcon';

interface ProjectCardProps {
  project: Project;
  className?: string;
  isFeaturedSpan?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className, isFeaturedSpan }) => {
  const [imageError, setImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Clean Flat High-Contrast Panel Accents (Classic Neo-Brutalist & Comic)
  const panelAccents = {
    purple: 'bg-[#245BFF] text-white',
    mint: 'bg-[#B9F227] text-[#171717]',
    yellow: 'bg-[#FFE500] text-[#171717]',
    charcoal: 'bg-[#FF3B30] text-white',
    white: 'bg-[#FFFFFF] text-[#171717]',
  };

  const accentClass = project.accentColor ? panelAccents[project.accentColor] : panelAccents.white;

  const visibleTech = project.technologies ? project.technologies.slice(0, isFeaturedSpan ? 4 : 2) : [];
  const remainingTechCount = project.technologies ? Math.max(0, project.technologies.length - visibleTech.length) : 0;

  return (
    <>
      {/* Main Flat Solid Comic Panel Card */}
      <div
        className={cn(
          'comic-panel p-6 sm:p-8 flex flex-col justify-between relative cursor-pointer rounded-3xl border-[4px] border-[#171717] shadow-[6px_6px_0px_#171717] hover:shadow-[10px_10px_0px_#171717] hover:-translate-y-1 transition-all duration-200 group',
          accentClass,
          className
        )}
      >
        <div>
          {/* Header Badges */}
          <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
            <div className="flex items-center gap-2">
              {project.category && (
                <span className="px-3.5 py-1 text-xs font-black tracking-wider uppercase border-2 border-[#171717] rounded-md bg-[#FFFFFF] text-[#171717] shadow-[2px_2px_0px_#171717]">
                  {project.category}
                </span>
              )}
            </div>
            {project.featured && (
              <span className="px-3.5 py-1 text-xs font-black tracking-wider uppercase border-2 border-[#171717] rounded-md bg-[#FFE500] text-[#171717] shadow-[2px_2px_0px_#171717] -rotate-1">
                ★ FEATURED BUILD
              </span>
            )}
          </div>

          {/* Project Image Preview or Solid Comic Art Banner */}
          {project.imagePath && !imageError ? (
            <div
              onClick={() => setIsModalOpen(true)}
              className={cn(
                'relative w-full mb-5 rounded-2xl overflow-hidden border-[3.5px] border-[#171717] bg-[#FFFFFF] shadow-[3px_3px_0px_#171717]',
                isFeaturedSpan ? 'h-52 sm:h-64' : 'h-44 sm:h-48'
              )}
            >
              <Image
                src={project.imagePath}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                onError={() => setImageError(true)}
              />
            </div>
          ) : (
            /* Clean Solid Comic Graphic Banner with Halftone Dots */
            <div
              onClick={() => setIsModalOpen(true)}
              className={cn(
                'relative w-full mb-5 rounded-2xl overflow-hidden border-[3.5px] border-[#171717] bg-[#FFE500] p-5 flex flex-col justify-between text-[#171717] bg-halftone-dense shadow-[3px_3px_0px_#171717]',
                isFeaturedSpan ? 'h-48 sm:h-56' : 'h-36 sm:h-44'
              )}
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 text-[11px] font-black uppercase rounded-md bg-[#171717] text-[#FFE500] border border-[#171717] shadow-[1px_1px_0px_#FFFFFF]">
                  CASE STUDY #{project.id}
                </span>
                <Code2 className="w-7 h-7 text-[#171717] stroke-[3]" />
              </div>

              <div className="my-auto">
                <span className="font-black text-2xl sm:text-4xl uppercase tracking-tighter text-[#171717] line-clamp-1">
                  {project.title}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs font-black uppercase text-[#171717]">
                <span className="bg-[#FFFFFF] px-2.5 py-0.5 rounded border border-[#171717] shadow-[1px_1px_0px_#171717]">&lt;FULL ARCHITECTURE /&gt;</span>
                <Zap className="w-5 h-5 text-[#FF3B30] fill-current" />
              </div>
            </div>
          )}

          {/* Title & Short Description */}
          <h3
            onClick={() => setIsModalOpen(true)}
            className="text-2xl sm:text-3xl font-black tracking-tight mb-2 uppercase group-hover:underline underline-offset-4 transition-all"
          >
            {project.title}
          </h3>
          <p
            onClick={() => setIsModalOpen(true)}
            className="text-sm font-bold opacity-90 leading-relaxed mb-6 line-clamp-2"
          >
            {project.shortDescription}
          </p>
        </div>

        <div>
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {visibleTech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-black rounded-md border-2 border-[#171717] bg-[#FFFFFF] text-[#171717] shadow-[2px_2px_0px_#171717]"
              >
                {tech}
              </span>
            ))}
            {remainingTechCount > 0 && (
              <span className="px-2.5 py-1 text-xs font-black rounded-md border-2 border-[#171717] bg-[#FFF8E7] text-[#171717]">
                +{remainingTechCount} MORE
              </span>
            )}
          </div>

          {/* Action Footer: Direct Links + Case Study Modal Trigger */}
          <div className="flex items-center justify-between pt-4 border-t-3 border-[#171717] gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider underline underline-offset-4 hover:opacity-80 cursor-pointer"
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
                  className="p-2 rounded-lg bg-[#FFFFFF] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] hover:bg-[#FFE500] text-[#171717] transition-all"
                  title="GitHub Repository"
                  onClick={(e) => e.stopPropagation()}
                >
                  <SocialIcon name="github" className="w-3.5 h-3.5" />
                </a>
              )}
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#FFE500] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] hover:bg-[#B9F227] text-[#171717] transition-all"
                  title="Live Demo"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-3.5 h-3.5 stroke-[3]" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Comic Style Detailed Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-[#171717]/70 backdrop-blur-xs"
            />

            {/* Comic Panel Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl bg-[#FFF8E7] text-[#171717] rounded-3xl p-6 sm:p-10 shadow-[12px_12px_0px_#171717] border-[4px] border-[#171717] z-10 my-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 p-2.5 rounded-xl bg-[#FF3B30] text-white border-2 border-[#171717] shadow-[3px_3px_0px_#171717] hover:bg-[#FF3B30]/90 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 stroke-[3]" />
              </button>

              {/* Header Badges */}
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                {project.category && (
                  <span className="px-4 py-1 text-xs font-black uppercase tracking-wider rounded-md border-2 border-[#171717] bg-[#245BFF] text-white shadow-[2px_2px_0px_#171717]">
                    {project.category}
                  </span>
                )}
                {project.featured && (
                  <span className="px-3 py-1 text-xs font-black uppercase tracking-wider rounded-md border-2 border-[#171717] bg-[#FFE500] text-[#171717] shadow-[2px_2px_0px_#171717]">
                    ★ FEATURED PROJECT
                  </span>
                )}
              </div>

              {/* Project Title */}
              <h2 className="text-3xl sm:text-5xl font-black text-[#171717] uppercase tracking-tight mb-4">
                {project.title}
              </h2>

              {/* Project Image Banner or Comic Graphic Banner */}
              {project.imagePath && !imageError ? (
                <div className="relative w-full h-56 sm:h-72 mb-6 rounded-2xl overflow-hidden border-[3.5px] border-[#171717] bg-[#FFFFFF] shadow-[4px_4px_0px_#171717]">
                  <Image
                    src={project.imagePath}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="relative w-full h-44 sm:h-56 mb-6 rounded-2xl overflow-hidden border-[3.5px] border-[#171717] bg-[#FFE500] p-6 flex flex-col justify-between text-[#171717] bg-halftone shadow-[4px_4px_0px_#171717]">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 text-xs font-black uppercase rounded bg-[#171717] text-[#FFE500]">
                      FULL CASE STUDY
                    </span>
                    <Code2 className="w-8 h-8 text-[#171717] stroke-[3]" />
                  </div>
                  <div className="font-black text-3xl sm:text-4xl uppercase tracking-tighter">
                    {project.title}
                  </div>
                  <div className="text-xs font-black uppercase">
                    ARCHITECTURE &amp; IMPLEMENTATION
                  </div>
                </div>
              )}

              {/* Detailed Description */}
              <div className="mb-8 space-y-4">
                <h3 className="text-xl font-black text-[#171717] uppercase flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#245BFF] stroke-[3]" />
                  <span>OVERVIEW &amp; PURPOSE</span>
                </h3>
                <p className="text-base text-[#171717] font-bold leading-relaxed">
                  {project.detailedDescription || project.shortDescription}
                </p>
              </div>

              {/* How I Built This Section */}
              {project.howIBuiltThis && project.howIBuiltThis.length > 0 && (
                <div className="mb-8 p-6 rounded-2xl bg-[#FFFFFF] border-[3px] border-[#171717] shadow-[4px_4px_0px_#171717]">
                  <h3 className="text-xl font-black text-[#171717] uppercase mb-4 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#245BFF] stroke-[3]" />
                    <span>HOW I MADE THIS &amp; ARCHITECTURE</span>
                  </h3>
                  <div className="space-y-3">
                    {project.howIBuiltThis.map((point, index) => (
                      <p key={index} className="text-sm text-[#171717] font-bold leading-relaxed">
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features List */}
              {project.features && project.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-black text-[#171717] uppercase mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#B9F227] stroke-[3]" />
                    <span>KEY FEATURES</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FFFFFF] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] text-sm font-black text-[#171717]"
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF3B30] border border-[#171717]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Full Tech Stack Pills */}
              <div className="mb-8">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#171717] mb-3">
                  TECHNOLOGIES USED
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-black rounded-lg border-2 border-[#171717] bg-[#FFE500] text-[#171717] shadow-[2px_2px_0px_#171717]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-6 border-t-3 border-[#171717] flex-wrap">
                {project.liveDemoUrl && (
                  <Button
                    href={project.liveDemoUrl}
                    external
                    size="md"
                    variant="primary"
                  >
                    <span>VISIT LIVE DEMO</span>
                    <ExternalLink className="w-4 h-4 stroke-[3]" />
                  </Button>
                )}

                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    external
                    size="md"
                    variant="secondary"
                  >
                    <SocialIcon name="github" className="w-4 h-4" />
                    <span>VIEW GITHUB REPO</span>
                  </Button>
                )}

                <Button
                  onClick={() => setIsModalOpen(false)}
                  size="md"
                  variant="outline"
                  className="ml-auto"
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
