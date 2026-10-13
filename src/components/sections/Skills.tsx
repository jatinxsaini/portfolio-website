'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Code,
  Coffee,
  Code2,
  Terminal,
  Braces,
  Database,
  BrainCircuit,
  Bot,
  SearchCode,
  Globe,
  Atom,
  Server,
  Cpu,
  HardDrive,
  Layers,
  Network,
  Workflow,
  Palette,
  GitBranch,
  Package,
  Cloud,
  Binary,
  Boxes,
  Monitor,
} from 'lucide-react';
import { skillsData } from '@/data/skills';
import { SectionHeading } from '../ui/SectionHeading';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>> = {
  Coffee,
  Code2,
  Terminal,
  Braces,
  Database,
  BrainCircuit,
  Bot,
  SearchCode,
  Globe,
  Atom,
  Server,
  Cpu,
  HardDrive,
  Layers,
  Network,
  Workflow,
  Palette,
  GitBranch,
  Code,
  Package,
  Cloud,
  Binary,
  Boxes,
  Monitor,
};

export const Skills: React.FC = () => {
  const cardBgClasses: Record<string, string> = {
    purple: 'bg-[var(--comic-blue)] text-white',
    mint: 'bg-[var(--comic-green)] text-[#171717]',
    yellow: 'bg-[var(--comic-yellow)] text-[#171717]',
    charcoal: 'bg-[var(--comic-red)] text-white',
    white: 'bg-[var(--card-bg)] text-[var(--text-primary)]',
  };

  const getIcon = (iconName?: string) => {
    if (!iconName) return <Code className="w-4 h-4 stroke-[3]" aria-hidden="true" />;
    const IconComponent = iconMap[iconName] || Code;
    return <IconComponent className="w-4 h-4 stroke-[3]" aria-hidden="true" />;
  };

  return (
    <section id="skills" className="py-10 sm:py-16 px-3 sm:px-6 lg:px-8 xl:px-10">
      <div className="w-full max-w-[1520px] 2xl:max-w-[1640px] mx-auto">
        <SectionHeading
          badge="CHAPTER 02 — SKILLS &amp; TOOLS"
          title="Tools, Frameworks &amp; Capabilities"
          description="Categorized technologies and methodologies used to build modern digital products."
          badgeBg="bg-[var(--comic-green)] text-[#171717]"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 md:gap-8 items-stretch">
          {skillsData.map((category, index) => {
            const cardStyle = cardBgClasses[category.cardBg] || cardBgClasses.white;
            const isWhiteCard = category.cardBg === 'white';
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={cn(
                  'comic-panel p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full rounded-2xl sm:rounded-3xl border-3 sm:border-[4px] border-[var(--border-color)] shadow-[5px_5px_0px_var(--shadow-color)] sm:shadow-[8px_8px_0px_var(--shadow-color)]',
                  cardStyle
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider bg-[#171717] text-white px-2.5 sm:px-3 py-1 rounded-md border border-[var(--border-color)]">
                      {category.title}
                    </span>
                  </div>

                  {category.description && (
                    <p className="text-xs sm:text-sm font-bold opacity-90 mb-4 sm:mb-6">
                      {category.description}
                    </p>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={cn(
                          'flex items-center justify-between p-2.5 sm:p-3 rounded-xl border-2 border-[var(--border-color)] shadow-[2.5px_2.5px_0px_var(--shadow-color)] sm:shadow-[3px_3px_0px_var(--shadow-color)] transition-all',
                          isWhiteCard
                            ? 'bg-[var(--card-subtle)] text-[var(--text-primary)] font-bold'
                            : 'bg-[#FFFFFF] text-[#171717] font-black'
                        )}
                      >
                        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                          {getIcon(skill.iconName)}
                          <span className="text-xs sm:text-sm uppercase tracking-tight truncate">{skill.name}</span>
                        </div>
                        {skill.tag && (
                          <span className="text-[9px] sm:text-[10px] font-black uppercase px-1.5 py-0.5 rounded bg-[#171717] text-white flex-shrink-0 ml-1">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
