'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { profileData } from '@/data/profile';
import { sectionConfig } from '@/config/sections';
import { DotExpand } from '../ui/DotExpand';
import { ThemeToggle } from '../ui/ThemeToggle';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const initials = profileData.name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    { label: 'About', href: '#about', enabled: sectionConfig.about },
    { label: 'Skills', href: '#skills', enabled: sectionConfig.skills },
    { label: 'Projects', href: '#projects', enabled: sectionConfig.projects },
    { label: 'Achievements', href: '#achievements', enabled: sectionConfig.achievements },
    { label: 'Contact', href: '#contact', enabled: sectionConfig.contact },
  ].filter((item) => item.enabled);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="site-brand" href="#top" aria-label={`${profileData.name} — home`}>
          <span className="site-brand-mark">{initials}</span>
          <DotExpand className="dot-expand--compact" />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
              <DotExpand />
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle className="theme-toggle" />
          {profileData.resumeUrl && (
            <a className="resume-link" href={profileData.resumeUrl} download>
              Résumé PDF
              <DotExpand />
            </a>
          )}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mobile-nav"
          >
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                {item.label}
                <DotExpand />
              </a>
            ))}
            {profileData.resumeUrl && (
              <a href={profileData.resumeUrl} download onClick={() => setMobileMenuOpen(false)}>
                Résumé PDF
                <DotExpand />
              </a>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
