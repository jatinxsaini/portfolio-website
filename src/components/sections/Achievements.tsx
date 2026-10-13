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
    purple: 'bg-[var(--comic-blue)] text-white',
    mint: 'bg-[var(--comic-green)] text-[#171717]',
    yellow: 'bg-[var(--comic-yellow)] text-[#171717]',
    charcoal: 'bg-[var(--comic-red)] text-white',
    white: 'bg-[var(--card-bg)] text-[var(--text-primary)]',
  };

  return (
    <section id="achievements" className="py-10 sm:py-16 px-3 sm:px-6 lg:px-8 xl:px-10">
      <div className="w-full max-w-[1520px] 2xl:max-w-[1640px] mx-auto">
        <SectionHeading
          badge="CHAPTER 04 — RECOGNITION"
          title="Certifications &amp; Achievements"
          description="Honors, certifications, hackathon recognitions, and professional milestones."
          badgeBg="bg-[var(--comic-red)] text-white"
        />

        {hasAchievements ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 md:gap-8 items-stretch">
            {achievementsData.map((item, index) => {
              const cardBg = item.accentColor ? bgClasses[item.accentColor] : bgClasses.white;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={cn(
                    'comic-panel p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full rounded-2xl sm:rounded-3xl border-3 sm:border-[4px] border-[var(--border-color)] shadow-[5px_5px_0px_var(--shadow-color)] sm:shadow-[8px_8px_0px_var(--shadow-color)]',
                    cardBg
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      {item.badge ? (
                        <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider bg-[#171717] text-white px-2.5 sm:px-3 py-1 rounded-md border border-[var(--border-color)]">
                          {item.badge}
                        </span>
                      ) : (
                        <Award className="w-5 h-5 stroke-[3]" />
                      )}
                      {item.date && (
                        <span className="text-[10px] sm:text-xs font-black uppercase px-2 py-0.5 rounded bg-black/15 border border-black/20 text-current">
                          {item.date}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-1 text-current">{item.title}</h3>
                    {item.issuer && (
                      <p className="text-xs font-black uppercase tracking-wider opacity-90 mb-3 sm:mb-4 text-current">
                        {item.issuer}
                      </p>
                    )}

                    <p className="text-xs sm:text-sm font-bold opacity-95 leading-relaxed mb-5 sm:mb-6 text-current">
                      {item.description}
                    </p>
                  </div>

                  {item.url && (
                    <div className="pt-3.5 sm:pt-4 border-t-2 border-current">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-black uppercase hover:underline text-current"
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
            className="comic-panel bg-[var(--card-bg)] p-6 sm:p-12 text-center flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl border-3 sm:border-[4px] border-[var(--border-color)] shadow-[5px_5px_0px_var(--shadow-color)] sm:shadow-[8px_8px_0px_var(--shadow-color)] min-h-[280px]"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[var(--comic-red)] text-white border-2 sm:border-[3px] border-[var(--border-color)] shadow-[3px_3px_0px_var(--shadow-color)] flex items-center justify-center mb-5 sm:mb-6">
              <Trophy className="w-7 h-7 sm:w-8 sm:h-8 stroke-[3]" />
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] uppercase mb-2">
              ACHIEVEMENTS &amp; CERTIFICATIONS MODULE
            </h3>

            <p className="text-xs sm:text-base font-bold text-[var(--text-secondary)] max-w-md leading-relaxed mb-6">
              You can list certifications, hackathon awards, or academic milestones by editing{' '}
              <code className="px-2 py-1 bg-[var(--comic-yellow)] border border-[var(--border-color)] rounded text-xs font-mono font-black text-[#171717]">
                src/data/achievements.ts
              </code>.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-[var(--comic-green)] border-2 sm:border-[2.5px] border-[var(--border-color)] shadow-[3px_3px_0px_var(--shadow-color)] text-xs font-black uppercase text-[#171717]">
              <ShieldCheck className="w-4 h-4 stroke-[3]" />
              <span>READY FOR CONTENT</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
