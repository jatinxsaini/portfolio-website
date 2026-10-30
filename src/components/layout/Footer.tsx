'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { profileData } from '@/data/profile';
import { socialLinksData } from '@/data/social-links';
import { siteConfig } from '@/config/site';
import { DotExpand } from '../ui/DotExpand';
import { SocialIcon } from '../ui/SocialIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeFooterLinks = socialLinksData.filter(
    (link) => link.url && link.showInFooter !== false
  );

  return (
    <footer className="mt-12 sm:mt-20 md:mt-24 border-t-3 sm:border-t-[4px] border-[var(--border-color)] bg-[var(--card-bg)] py-8 sm:py-12 px-3 sm:px-6 lg:px-8 xl:px-10">
      <div className="w-full max-w-[1520px] 2xl:max-w-[1640px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
        {/* Left Side Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <Link href="#" className="inline-flex items-center gap-2 font-black text-lg sm:text-xl uppercase tracking-tight text-[var(--text-primary)]">
            {profileData.displayName || profileData.name}
            <DotExpand />
          </Link>
          <p className="text-[11px] sm:text-xs font-bold text-[var(--text-secondary)] uppercase">
            {siteConfig.copyright}
          </p>
        </div>

        {/* Center Social Links */}
        {activeFooterLinks.length > 0 && (
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap justify-center">
            {activeFooterLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link p-2 sm:p-2.5 rounded-xl bg-[var(--card-subtle)] border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)] hover:bg-[var(--comic-yellow)] hover:text-[#171717] transition-all text-[var(--text-primary)]"
                aria-label={link.label}
              >
                <SocialIcon name={link.iconName} className="w-4 h-4" />
                <DotExpand className="dot-expand--compact" />
              </a>
            ))}
          </div>
        )}

        {/* Right Side Scroll to Top */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top of page"
          className="flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs font-black uppercase tracking-wider text-[#171717] bg-[var(--comic-yellow)] border-2 border-[var(--border-color)] shadow-[2.5px_2.5px_0px_var(--shadow-color)] sm:shadow-[3px_3px_0px_var(--shadow-color)] rounded-xl hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-4 h-4 stroke-[3]" aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
};
