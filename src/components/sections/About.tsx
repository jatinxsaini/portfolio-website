'use client';

import React from 'react';
import { motion } from 'motion/react';
import { User, Code2, Compass, HeartHandshake } from 'lucide-react';
import { profileData } from '@/data/profile';
import { SectionHeading } from '../ui/SectionHeading';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-10 sm:py-16 px-3 sm:px-6 lg:px-8 xl:px-10">
      <div className="w-full max-w-[1520px] 2xl:max-w-[1640px] mx-auto">
        <SectionHeading
          badge="CHAPTER 01 — ABOUT ME"
          title="Engineered for Impact, Designed for People"
          description="A look into my background, engineering principles, and creative approach."
          badgeBg="bg-[var(--comic-blue)] text-white"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 md:gap-8 items-stretch">
          {/* Main Biography Comic Panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-8 comic-panel bg-[var(--card-bg)] text-[var(--text-primary)] p-4 sm:p-7 md:p-10 flex flex-col justify-between rounded-2xl sm:rounded-3xl border-3 sm:border-[4px] border-[var(--border-color)] shadow-[5px_5px_0px_var(--shadow-color)] sm:shadow-[8px_8px_0px_var(--shadow-color)]"
          >
            <div>
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="p-2.5 sm:p-3 rounded-xl bg-[var(--comic-yellow)] text-[#171717] border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)] flex-shrink-0">
                  <User className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-[var(--text-primary)]">
                  Background &amp; Overview
                </h3>
              </div>

              <div className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm md:text-base font-bold text-[var(--text-primary)] opacity-95 leading-relaxed">
                {profileData.aboutDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t-2 sm:border-t-3 border-[var(--border-color)] flex flex-wrap gap-2.5 sm:gap-3 text-[10px] sm:text-xs font-black uppercase">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--comic-yellow)] text-[#171717] border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)]">
                <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" /> CLEAN CODE STANDARDS
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--comic-green)] text-[#171717] border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)]">
                <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" /> SCALABLE SYSTEMS
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--comic-blue)] text-white border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)]">
                <HeartHandshake className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" /> USER-CENTRIC MINDSET
              </span>
            </div>
          </motion.div>

          {/* Side Philosophy Panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-4 comic-panel bg-[var(--comic-red)] text-white p-4 sm:p-6 md:p-8 flex flex-col justify-between rounded-2xl sm:rounded-3xl border-3 sm:border-[4px] border-[var(--border-color)] shadow-[5px_5px_0px_var(--shadow-color)] sm:shadow-[8px_8px_0px_var(--shadow-color)]"
          >
            <div>
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider bg-[#171717] text-white px-2.5 sm:px-3 py-1 rounded-md border border-white/40 inline-block mb-4 sm:mb-6">
                PHILOSOPHY
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-3 sm:mb-4 text-white">
                FORM FOLLOWS FUNCTION
              </h3>
              <p className="text-xs sm:text-sm font-bold opacity-95 leading-relaxed text-white">
                Software should be intuitive, highly responsive, and pleasant to use. I build applications with robust backend foundations and crafted user interfaces that deliver seamless interactive experiences.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t-2 border-white/30 text-[10px] sm:text-xs font-black uppercase tracking-wider text-white">
              {'// CODE & DESIGN RULES'}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
