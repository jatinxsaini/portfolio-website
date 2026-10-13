'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { profileData } from '@/data/profile';
import { sectionConfig } from '@/config/sections';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
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
        scrolled
          ? 'py-2.5 sm:py-3 bg-[var(--bg-canvas)]/95 backdrop-blur-md border-b-[3px] border-[var(--border-color)] shadow-[0_4px_0px_var(--shadow-color)]'
          : 'py-3 sm:py-5 bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between gap-3">
          {/* Logo / Brand */}
          <Link
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group min-w-0"
            aria-label="Home"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[var(--comic-yellow)] text-[#171717] border-[2.5px] sm:border-[3px] border-[var(--border-color)] shadow-[2.5px_2.5px_0px_var(--shadow-color)] sm:shadow-[3px_3px_0px_var(--shadow-color)] flex items-center justify-center font-black text-lg sm:text-xl tracking-wider transition-transform group-hover:-rotate-3 flex-shrink-0">
              JS
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-black tracking-tight text-[var(--text-primary)] text-sm sm:text-base leading-none uppercase truncate">
                {profileData.displayName || profileData.name}
              </span>
              <span className="text-[10px] sm:text-xs text-[var(--text-secondary)] font-extrabold mt-0.5 uppercase truncate">
                {profileData.role}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 bg-[var(--card-bg)] px-3 py-1.5 xl:px-4 xl:py-2 rounded-2xl border-[3px] border-[var(--border-color)] shadow-[4px_4px_0px_var(--shadow-color)]"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-1.5 text-xs font-black tracking-wider uppercase text-[var(--text-primary)] hover:bg-[var(--comic-yellow)] hover:text-[#171717] border-2 border-transparent hover:border-[var(--border-color)] rounded-lg transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons on Desktop */}
          <div className="hidden lg:flex items-center gap-2.5">
            <ThemeToggle />
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

          {/* Mobile Right Controls: Theme Toggle + Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="p-2 sm:p-2.5 rounded-xl bg-[var(--comic-yellow)] border-2 sm:border-[3px] border-[var(--border-color)] shadow-[2.5px_2.5px_0px_var(--shadow-color)] text-[#171717] font-black cursor-pointer flex items-center justify-center min-w-[38px] min-h-[38px]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 stroke-[3]" /> : <Menu className="w-5 h-5 stroke-[3]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            role="region"
            aria-label="Mobile Navigation Menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[var(--bg-canvas)] border-b-[3.5px] border-[var(--border-color)] shadow-[0_6px_0px_var(--shadow-color)] px-4 py-5"
          >
            <div className="flex flex-col gap-2.5 max-w-sm mx-auto">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-xs sm:text-sm font-black uppercase text-[var(--text-primary)] bg-[var(--card-bg)] border-[2.5px] border-[var(--border-color)] shadow-[3px_3px_0px_var(--shadow-color)] flex items-center justify-between hover:bg-[var(--comic-yellow)] hover:text-[#171717] transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                </a>
              ))}

              <div className="pt-3 mt-1 border-t-2 border-[var(--border-color)] flex flex-col gap-2">
                {profileData.resumeUrl && (
                  <Button
                    href={profileData.resumeUrl}
                    download
                    size="md"
                    variant="outline"
                    className="w-full justify-center text-xs"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <FileText className="w-4 h-4 stroke-[3]" />
                    <span>Download Resume</span>
                  </Button>
                )}
                <Button
                  href="#contact"
                  size="md"
                  variant="primary"
                  className="w-full justify-center text-xs"
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
