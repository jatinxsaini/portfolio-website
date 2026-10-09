'use client';

import React from 'react';
import { motion } from 'motion/react';
import { User, Code2, Compass, HeartHandshake } from 'lucide-react';
import { profileData } from '@/data/profile';
import { SectionHeading } from '../ui/SectionHeading';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="CHAPTER 01 — ABOUT ME"
          title="Engineered for Impact, Designed for People"
          description="A look into my background, engineering principles, and creative approach."
          badgeBg="bg-[#245BFF] text-white"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Main Biography Comic Panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-8 comic-panel bg-[#FFFFFF] text-[#171717] p-6 sm:p-10 flex flex-col justify-between rounded-3xl border-[4px] border-[#171717] shadow-[8px_8px_0px_#171717]"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#FFE500] text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
                  <User className="w-6 h-6 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-black uppercase text-[#171717]">Background &amp; Overview</h3>
              </div>

              <div className="space-y-4 text-base font-bold text-[#171717] leading-relaxed">
                {profileData.aboutDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t-3 border-[#171717] flex flex-wrap gap-3 text-xs font-black uppercase text-[#171717]">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFE500] border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
                <Code2 className="w-4 h-4 stroke-[3]" /> CLEAN CODE STANDARDS
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#B9F227] border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
                <Compass className="w-4 h-4 stroke-[3]" /> SCALABLE SYSTEMS
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#245BFF] text-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
                <HeartHandshake className="w-4 h-4 stroke-[3]" /> USER-CENTRIC MINDSET
              </span>
            </div>
          </motion.div>

          {/* Side Philosophy Panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-4 comic-panel bg-[#FF3B30] text-white p-6 sm:p-8 flex flex-col justify-between rounded-3xl border-[4px] border-[#171717] shadow-[8px_8px_0px_#171717]"
          >
            <div>
              <span className="text-xs font-black uppercase tracking-wider bg-[#171717] text-white px-3 py-1 rounded-md border border-white/30 inline-block mb-6">
                PHILOSOPHY
              </span>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-4 text-white">
                FORM FOLLOWS FUNCTION
              </h3>
              <p className="text-sm font-bold opacity-95 leading-relaxed">
                Software should be intuitive, highly responsive, and pleasant to use. I build applications with robust backend foundations and crafted user interfaces that deliver seamless interactive experiences.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-white/30 text-xs font-black uppercase tracking-wider">
              // CODE &amp; DESIGN RULES
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
