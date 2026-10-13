'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Mail, MapPin, FileText, ArrowDownRight, CheckCircle2, Code2, Zap } from 'lucide-react';
import { profileData } from '@/data/profile';
import { socialLinksData } from '@/data/social-links';
import { Button } from '../ui/Button';
import { SocialIcon } from '../ui/SocialIcon';
import { TerminalWidget } from '../ui/TerminalWidget';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const activeSocials = socialLinksData.filter((link) => link.url && link.showInHeader !== false);

  return (
    <section className="pt-20 sm:pt-28 md:pt-32 pb-10 sm:pb-14 md:pb-16 px-3 sm:px-6 lg:px-8 xl:px-10 relative overflow-hidden bg-halftone">
      <div className="w-full max-w-[1520px] 2xl:max-w-[1640px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 md:gap-8 items-stretch">
          
          {/* LEFT COLUMN: Comic Book Profile Panel Card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 comic-panel p-4 sm:p-6 md:p-8 flex flex-col justify-between relative bg-[var(--card-bg)] rounded-2xl sm:rounded-3xl border-3 sm:border-[4px] border-[var(--border-color)] shadow-[5px_5px_0px_var(--shadow-color)] sm:shadow-[8px_8px_0px_var(--shadow-color)]"
          >
            {/* Top Comic Badge Stickers */}
            <div className="flex items-center justify-between gap-2 mb-5 sm:mb-6 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 rounded-md text-[10px] sm:text-xs font-black uppercase bg-[var(--comic-red)] text-white border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)] -rotate-2">
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>{profileData.badgeText || 'HERO DEVELOPER'}</span>
              </span>
              <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md text-[10px] sm:text-xs font-black uppercase bg-[var(--comic-green)] text-[#171717] border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)]">
                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#171717]" />
                <span>AVAILABLE</span>
              </div>
            </div>

            <div>
              {/* Profile Photo Frame */}
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden mb-5 sm:mb-6 border-3 sm:border-[3.5px] border-[var(--border-color)] bg-[var(--comic-yellow)] shadow-[3px_3px_0px_var(--shadow-color)] sm:shadow-[4px_4px_0px_var(--shadow-color)] flex items-center justify-center group flex-shrink-0">
                {profileData.avatarUrl && !imageError ? (
                  <Image
                    src={profileData.avatarUrl}
                    alt={profileData.name}
                    fill
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 144px"
                    className="object-cover"
                    onError={() => setImageError(true)}
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-[var(--comic-yellow)] flex items-center justify-center text-[#171717]">
                    <span className="font-black text-3xl sm:text-4xl tracking-wider">
                      {profileData.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                )}
              </div>

              {/* Title & Role */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[var(--text-primary)] uppercase tracking-tight leading-none mb-2">
                {profileData.name}
              </h1>
              <p className="text-sm sm:text-base md:text-lg font-black text-[var(--comic-blue)] uppercase mb-3 sm:mb-4">
                {profileData.role}
              </p>

              {/* Bio Intro */}
              <p className="text-xs sm:text-sm md:text-base font-bold text-[var(--text-primary)] opacity-95 leading-relaxed mb-4 sm:mb-6">
                {profileData.shortIntro}
              </p>

              {/* Location */}
              {profileData.location && (
                <div className="flex items-center gap-2 text-xs font-black uppercase text-[var(--text-secondary)] mb-4 sm:mb-6">
                  <MapPin className="w-4 h-4 text-[var(--comic-red)] stroke-[3]" />
                  <span>{profileData.location}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 sm:pt-6 border-t-2 sm:border-t-3 border-[var(--border-color)] flex flex-col gap-3">
              <div className="flex items-center gap-2">
                {profileData.resumeUrl && (
                  <Button
                    href={profileData.resumeUrl}
                    download
                    size="sm"
                    variant="primary"
                    className="flex-1 text-xs"
                  >
                    <FileText className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Download CV</span>
                  </Button>
                )}
                <Button
                  href={`mailto:${profileData.email}`}
                  size="sm"
                  variant="secondary"
                  className="flex-1 text-xs"
                >
                  <Mail className="w-3.5 h-3.5 stroke-[3]" />
                  <span>Email Me</span>
                </Button>
              </div>

              {/* Social Icon Row */}
              {activeSocials.length > 0 && (
                <div className="flex items-center justify-center gap-2 pt-1 sm:pt-2 flex-wrap">
                  {activeSocials.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-2.5 rounded-xl bg-[var(--card-bg)] border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)] hover:bg-[var(--comic-yellow)] hover:text-[#171717] transition-all text-[var(--text-primary)]"
                      title={link.label}
                      aria-label={link.label}
                    >
                      <SocialIcon name={link.iconName} className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Oversized Hero Card + Terminal + Highlight Panels */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-between gap-5 sm:gap-6"
          >
            {/* Oversized PORTFOLIO Header Card */}
            <div className="comic-panel p-4 sm:p-7 md:p-10 relative overflow-hidden bg-[var(--comic-yellow)] text-[#171717] rounded-2xl sm:rounded-3xl border-3 sm:border-[4px] border-[var(--border-color)] shadow-[5px_5px_0px_var(--shadow-color)] sm:shadow-[8px_8px_0px_var(--shadow-color)]">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider sm:tracking-widest bg-[#171717] text-white px-2.5 sm:px-3.5 py-1 rounded-md border-2 border-[#171717]">
                  ISSUE #01 — WORKS &amp; SKILLS
                </span>
                <ArrowDownRight className="w-6 h-6 sm:w-8 sm:h-8 stroke-[3] text-[#171717]" aria-hidden="true" />
              </div>

              <div>
                <h2 className="text-3xl min-[400px]:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight sm:tracking-tighter leading-none select-none uppercase text-[#171717] drop-shadow-sm break-words">
                  PORTFOLIO
                </h2>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-black text-[#171717] max-w-lg leading-relaxed">
                  AN ACTION-PACKED SHOWCASE OF FULL-STACK ENGINEERING, INTERACTIVE ARCHITECTURE, AND DIGITAL PRODUCTS.
                </p>
              </div>
            </div>

            {/* Terminal Widget */}
            <TerminalWidget />

            {/* Micro Highlight Bento Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="comic-panel p-4 sm:p-6 bg-[var(--comic-green)] text-[#171717] rounded-xl sm:rounded-2xl border-2 sm:border-[3.5px] border-[var(--border-color)] shadow-[4px_4px_0px_var(--shadow-color)] sm:shadow-[5px_5px_0px_var(--shadow-color)]">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider bg-[#171717] text-white px-2 py-0.5 rounded border border-[#171717]">
                    TECH STACK
                  </span>
                  <Code2 className="w-5 h-5 stroke-[3] text-[#171717]" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#171717] uppercase mb-1">
                  Full Stack Arsenal
                </h3>
                <p className="text-xs font-bold text-[#171717] leading-relaxed">
                  React, Next.js App Router, TypeScript, Node.js, REST APIs &amp; Tailwind CSS.
                </p>
              </div>

              <div className="comic-panel p-4 sm:p-6 bg-[var(--comic-blue)] text-white rounded-xl sm:rounded-2xl border-2 sm:border-[3.5px] border-[var(--border-color)] shadow-[4px_4px_0px_var(--shadow-color)] sm:shadow-[5px_5px_0px_var(--shadow-color)]">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider bg-[var(--comic-yellow)] text-[#171717] px-2 py-0.5 rounded border border-[var(--border-color)]">
                    MISSION
                  </span>
                  <CheckCircle2 className="w-5 h-5 stroke-[3] text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white uppercase mb-1">
                  Open for Action
                </h3>
                <p className="text-xs font-bold text-white/95 leading-relaxed">
                  Available for full-stack engineering roles, contracts, and software builds.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
