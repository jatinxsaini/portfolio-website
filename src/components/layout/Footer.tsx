'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { profileData } from '@/data/profile';
import { socialLinksData } from '@/data/social-links';
import { siteConfig } from '@/config/site';
import { SocialIcon } from '../ui/SocialIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeFooterLinks = socialLinksData.filter(
    (link) => link.url && link.showInFooter !== false
  );

  return (
    <footer className="mt-16 sm:mt-24 border-t-[4px] border-[#171717] bg-[#FFFFFF] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <Link href="#" className="font-black text-xl uppercase tracking-tight text-[#171717]">
            {profileData.displayName || profileData.name}
          </Link>
          <p className="text-xs font-bold text-[#171717] uppercase">
            {siteConfig.copyright}
          </p>
        </div>

        {/* Center Social Links */}
        {activeFooterLinks.length > 0 && (
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {activeFooterLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#FFF8E7] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] hover:bg-[#FFE500] transition-all text-[#171717]"
                aria-label={link.label}
              >
                <SocialIcon name={link.iconName} className="w-4 h-4" />
              </a>
            ))}
          </div>
        )}

        {/* Right Side Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#171717] bg-[#FFE500] border-2 border-[#171717] shadow-[3px_3px_0px_#171717] rounded-xl hover:-translate-y-0.5 transition-all cursor-pointer"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-4 h-4 stroke-[3]" />
        </button>
      </div>
    </footer>
  );
};
