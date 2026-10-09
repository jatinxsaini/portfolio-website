'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink, ShieldCheck, Trophy } from 'lucide-react';
import { achievementsData } from '@/data/achievements';
import { SectionHeading } from '../ui/SectionHeading';
import { cn } from '@/lib/utils';

export const Achievements: React.FC = () => {
  const hasAchievements = achievementsData && achievementsData.length > 0;

  const bgClasses: Record<string, string> = {
    purple: 'bg-[#245BFF] text-white',
    mint: 'bg-[#B9F227] text-[#171717]',
    yellow: 'bg-[#FFE500] text-[#171717]',
    charcoal: 'bg-[#FF3B30] text-white',
    white: 'bg-[#FFFFFF] text-[#171717]',
  };

  return (
    <section id="achievements" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="CHAPTER 04 — RECOGNITION"
          title="Certifications &amp; Achievements"
          description="Honors, certifications, hackathon recognitions, and professional milestones."
          badgeBg="bg-[#FF3B30] text-white"
        />

        {hasAchievements ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {achievementsData.map((item, index) => {
              const cardBg = item.accentColor ? bgClasses[item.accentColor] : bgClasses.white;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={cn('comic-panel p-6 sm:p-8 flex flex-col justify-between rounded-3xl border-[4px] border-[#171717] shadow-[8px_8px_0px_#171717]', cardBg)}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      {item.badge ? (
                        <span className="text-xs font-black uppercase tracking-wider bg-[#171717] text-white px-3 py-1 rounded-md border border-[#171717]">
                          {item.badge}
                        </span>
                      ) : (
                        <Award className="w-5 h-5 stroke-[3]" />
                      )}
                      {item.date && (
                        <span className="text-xs font-black uppercase px-2 py-0.5 rounded bg-black/10 border border-black/20">
                          {item.date}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-black uppercase tracking-tight mb-1">{item.title}</h3>
                    {item.issuer && (
                      <p className="text-xs font-black uppercase tracking-wider opacity-90 mb-4">
                        {item.issuer}
                      </p>
                    )}

                    <p className="text-sm font-bold opacity-95 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {item.url && (
                    <div className="pt-4 border-t-2 border-current">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-black uppercase hover:underline"
                      >
                        <span>VIEW CREDENTIAL</span>
                        <ExternalLink className="w-3.5 h-3.5 stroke-[3]" />
                      </a>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* Visually Balanced Empty State */
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="comic-panel bg-[#FFFFFF] p-8 sm:p-12 text-center flex flex-col items-center justify-center rounded-3xl border-[4px] border-[#171717] shadow-[8px_8px_0px_#171717] min-h-[280px]"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#FF3B30] text-white border-[3px] border-[#171717] shadow-[3px_3px_0px_#171717] flex items-center justify-center mb-6">
              <Trophy className="w-8 h-8 stroke-[3]" />
            </div>

            <h3 className="text-2xl font-black text-[#171717] uppercase mb-2">
              ACHIEVEMENTS &amp; CERTIFICATIONS MODULE
            </h3>

            <p className="text-sm sm:text-base font-bold text-[#171717] max-w-md leading-relaxed mb-6">
              You can list certifications, hackathon awards, or academic milestones by editing{' '}
              <code className="px-2 py-1 bg-[#FFE500] border border-[#171717] rounded text-xs font-mono font-black text-[#171717]">
                src/data/achievements.ts
              </code>.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#B9F227] border-[2.5px] border-[#171717] shadow-[3px_3px_0px_#171717] text-xs font-black uppercase text-[#171717]">
              <ShieldCheck className="w-4 h-4 stroke-[3]" />
              <span>READY FOR CONTENT</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
