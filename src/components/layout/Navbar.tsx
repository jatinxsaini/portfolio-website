'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { profileData } from '@/data/profile';
import { sectionConfig } from '@/config/sections';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about', enabled: sectionConfig.about },
    { label: 'Skills', href: '#skills', enabled: sectionConfig.skills },
    { label: 'Projects', href: '#projects', enabled: sectionConfig.projects },
    { label: 'Achievements', href: '#achievements', enabled: sectionConfig.achievements },
    { label: 'Contact', href: '#contact', enabled: sectionConfig.contact },
  ].filter((item) => item.enabled);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'py-3 bg-[#FFF8E7] border-b-[3.5px] border-[#171717] shadow-[0_4px_0px_#171717]' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="#"
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 rounded-xl bg-[#FFE500] text-[#171717] border-[3px] border-[#171717] shadow-[3px_3px_0px_#171717] flex items-center justify-center font-black text-xl tracking-wider transition-transform group-hover:-rotate-3">
              JS
            </div>
            <div className="flex flex-col">
              <span className="font-black tracking-tight text-[#171717] text-base leading-none uppercase">
                {profileData.displayName || profileData.name}
              </span>
              <span className="text-xs text-[#171717] font-extrabold mt-0.5 uppercase">
                {profileData.role}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-[#FFFFFF] px-4 py-2 rounded-2xl border-[3px] border-[#171717] shadow-[4px_4px_0px_#171717]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-1.5 text-xs font-black tracking-wider uppercase text-[#171717] hover:bg-[#FFE500] border-2 border-transparent hover:border-[#171717] rounded-lg transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {profileData.resumeUrl && (
              <Button
                href={profileData.resumeUrl}
                download
                size="sm"
                variant="outline"
              >
                <FileText className="w-3.5 h-3.5 stroke-[3]" />
                <span>Resume</span>
              </Button>
            )}
            <Button
              href="#contact"
              size="sm"
              variant="primary"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-[#FFE500] border-[3px] border-[#171717] shadow-[3px_3px_0px_#171717] text-[#171717] font-black cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 stroke-[3]" /> : <Menu className="w-5 h-5 stroke-[3]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#FFF8E7] border-b-[3.5px] border-[#171717] shadow-[0_6px_0px_#171717] px-4 py-6"
          >
            <div className="flex flex-col gap-3 max-w-sm mx-auto">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-black uppercase text-[#171717] bg-[#FFFFFF] border-[2.5px] border-[#171717] shadow-[3px_3px_0px_#171717] flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                </a>
              ))}

              <div className="pt-4 mt-2 border-t-2 border-[#171717] flex flex-col gap-2">
                {profileData.resumeUrl && (
                  <Button
                    href={profileData.resumeUrl}
                    download
                    size="md"
                    variant="outline"
                    className="w-full justify-center"
                  >
                    <FileText className="w-4 h-4 stroke-[3]" />
                    <span>Download Resume</span>
                  </Button>
                )}
                <Button
                  href="#contact"
                  size="md"
                  variant="primary"
                  className="w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Get in Touch</span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
