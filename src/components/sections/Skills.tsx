'use client';

import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { skillsData } from '@/data/skills';
import { SectionHeading } from '../ui/SectionHeading';
import { cn } from '@/lib/utils';

export const Skills: React.FC = () => {
  const cardBgClasses: Record<string, string> = {
    purple: 'bg-[#245BFF] text-white',
    mint: 'bg-[#B9F227] text-[#171717]',
    yellow: 'bg-[#FFE500] text-[#171717]',
    charcoal: 'bg-[#FF3B30] text-white',
    white: 'bg-[#FFFFFF] text-[#171717]',
  };

  const getIcon = (iconName?: string) => {
    if (!iconName) return <Icons.Code className="w-4 h-4 stroke-[3]" />;
    const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[iconName];
    return IconComponent ? <IconComponent className="w-4 h-4 stroke-[3]" /> : <Icons.Code className="w-4 h-4 stroke-[3]" />;
  };

  return (
    <section id="skills" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="CHAPTER 02 — SKILLS &amp; TOOLS"
          title="Tools, Frameworks &amp; Capabilities"
          description="Categorized technologies and methodologies used to build modern digital products."
          badgeBg="bg-[#B9F227] text-[#171717]"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillsData.map((category, index) => {
            const cardStyle = cardBgClasses[category.cardBg] || cardBgClasses.white;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={cn('comic-panel p-6 sm:p-8 flex flex-col justify-between rounded-3xl border-[4px] border-[#171717] shadow-[8px_8px_0px_#171717]', cardStyle)}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black uppercase tracking-wider bg-[#171717] text-white px-3 py-1 rounded-md border border-[#171717]">
                      {category.title}
                    </span>
                  </div>

                  {category.description && (
                    <p className="text-xs sm:text-sm font-bold opacity-90 mb-6">
                      {category.description}
                    </p>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={cn(
                          'flex items-center justify-between p-3 rounded-xl border-2 border-[#171717] shadow-[3px_3px_0px_#171717] transition-all',
                          skill.highlight ? 'bg-[#FFFFFF] text-[#171717] font-black' : 'bg-[#FFF8E7] text-[#171717] font-bold'
                        )}
                      >
                        <div className="flex items-center gap-2.5">
                          {getIcon(skill.iconName)}
                          <span className="text-sm uppercase tracking-tight">{skill.name}</span>
                        </div>
                        {skill.tag && (
                          <span className="text-[10px] font-black uppercase px-1.5 py-0.5 rounded bg-[#171717] text-white">
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
