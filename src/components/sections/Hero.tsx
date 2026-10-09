'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Mail, MapPin, Sparkles, FileText, ArrowDownRight, CheckCircle2, Code2, Zap } from 'lucide-react';
import { profileData } from '@/data/profile';
import { socialLinksData } from '@/data/social-links';
import { Button } from '../ui/Button';
import { SocialIcon } from '../ui/SocialIcon';
import { TerminalWidget } from '../ui/TerminalWidget';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const activeSocials = socialLinksData.filter((link) => link.url && link.showInHeader !== false);

  return (
    <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-halftone">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* LEFT COLUMN: Comic Book Profile Panel Card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 comic-panel p-6 sm:p-8 flex flex-col justify-between relative bg-[#FFFFFF] rounded-3xl border-[4px] border-[#171717] shadow-[8px_8px_0px_#171717]"
          >
            {/* Top Right Comic Badge Sticker */}
            <div className="flex items-center justify-between gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md text-xs font-black uppercase bg-[#FF3B30] text-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717] -rotate-2">
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>{profileData.badgeText || 'HERO DEVELOPER'}</span>
              </span>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-black uppercase bg-[#B9F227] text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#171717]" />
                <span>AVAILABLE</span>
              </div>
            </div>

            <div>
              {/* Profile Photo Frame */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden mb-6 border-[3.5px] border-[#171717] bg-[#FFE500] shadow-[4px_4px_0px_#171717] flex items-center justify-center group">
                {profileData.avatarUrl && !imageError ? (
                  <Image
                    src={profileData.avatarUrl}
                    alt={profileData.name}
                    fill
                    className="object-cover"
                    onError={() => setImageError(true)}
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-[#FFE500] flex items-center justify-center text-[#171717]">
                    <span className="font-black text-4xl tracking-wider">
                      {profileData.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                )}
              </div>

              {/* Title & Role */}
              <h1 className="text-3xl sm:text-4xl font-black text-[#171717] uppercase tracking-tight leading-none mb-2">
                {profileData.name}
              </h1>
              <p className="text-base sm:text-lg font-black text-[#245BFF] uppercase mb-4">
                {profileData.role}
              </p>

              {/* Bio Intro */}
              <p className="text-sm sm:text-base font-bold text-[#171717] leading-relaxed mb-6">
                {profileData.shortIntro}
              </p>

              {/* Location */}
              {profileData.location && (
                <div className="flex items-center gap-2 text-xs font-black uppercase text-[#171717] mb-6">
                  <MapPin className="w-4 h-4 text-[#FF3B30] stroke-[3]" />
                  <span>{profileData.location}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t-3 border-[#171717] flex flex-col gap-3">
              <div className="flex items-center gap-2">
                {profileData.resumeUrl && (
                  <Button
                    href={profileData.resumeUrl}
                    download
                    size="sm"
                    variant="primary"
                    className="flex-1"
                  >
                    <FileText className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Download CV</span>
                  </Button>
                )}
                <Button
                  href={`mailto:${profileData.email}`}
                  size="sm"
                  variant="secondary"
                  className="flex-1"
                >
                  <Mail className="w-3.5 h-3.5 stroke-[3]" />
                  <span>Email Me</span>
                </Button>
              </div>

              {/* Social Icon Row */}
              {activeSocials.length > 0 && (
                <div className="flex items-center justify-center gap-2 pt-2">
                  {activeSocials.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-[#FFFFFF] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] hover:bg-[#FFE500] transition-all text-[#171717]"
                      title={link.label}
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
            className="lg:col-span-7 flex flex-col justify-between gap-6"
          >
            {/* Oversized PORTFOLIO Header Card */}
            <div className="comic-panel p-8 sm:p-10 relative overflow-hidden bg-[#FFE500] text-[#171717] rounded-3xl border-[4px] border-[#171717] shadow-[8px_8px_0px_#171717]">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-black uppercase tracking-widest bg-[#171717] text-white px-3.5 py-1 rounded-md border-2 border-[#171717]">
                  ISSUE #01 — WORKS &amp; SKILLS
                </span>
                <ArrowDownRight className="w-8 h-8 stroke-[3] text-[#171717]" />
              </div>

              <div>
                <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-none select-none uppercase text-[#171717] drop-shadow-sm">
                  PORTFOLIO
                </h2>
                <p className="mt-4 text-sm sm:text-base font-black text-[#171717] max-w-lg leading-relaxed">
                  AN ACTION-PACKED SHOWCASE OF FULL-STACK ENGINEERING, INTERACTIVE ARCHITECTURE, AND DIGITAL PRODUCTS.
                </p>
              </div>
            </div>

            {/* Terminal Widget */}
            <TerminalWidget />

            {/* Micro Highlight Bento Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="comic-panel p-6 bg-[#B9F227] text-[#171717] rounded-2xl border-[3.5px] border-[#171717] shadow-[5px_5px_0px_#171717]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black uppercase tracking-wider bg-[#171717] text-white px-2.5 py-0.5 rounded border border-[#171717]">
                    TECH STACK
                  </span>
                  <Code2 className="w-5 h-5 stroke-[3]" />
                </div>
                <h3 className="text-xl font-black text-[#171717] uppercase mb-1">
                  Full Stack Arsenal
                </h3>
                <p className="text-xs font-bold text-[#171717] leading-relaxed">
                  React, Next.js App Router, TypeScript, Node.js, REST APIs &amp; Tailwind CSS.
                </p>
              </div>

              <div className="comic-panel p-6 bg-[#245BFF] text-white rounded-2xl border-[3.5px] border-[#171717] shadow-[5px_5px_0px_#171717]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black uppercase tracking-wider bg-[#FFE500] text-[#171717] px-2.5 py-0.5 rounded border border-[#171717]">
                    MISSION
                  </span>
                  <CheckCircle2 className="w-5 h-5 stroke-[3]" />
                </div>
                <h3 className="text-xl font-black text-white uppercase mb-1">
                  Open for Action
                </h3>
                <p className="text-xs font-bold text-white leading-relaxed">
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
