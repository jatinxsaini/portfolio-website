'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { profileData } from '@/data/profile';
import { sectionConfig } from '@/config/sections';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/Button';
import { TubelightNavbar } from '../ui/TubelightNavbar';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const homePath = pathname === '/' ? '' : '/';
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
    { label: 'About', href: `${homePath}#about`, enabled: sectionConfig.about },
    { label: 'Skills', href: `${homePath}#skills`, enabled: sectionConfig.skills },
    { label: 'Projects', href: `${homePath}#projects`, enabled: sectionConfig.projects },
    { label: 'Achievements', href: `${homePath}#achievements`, enabled: sectionConfig.achievements },
    { label: 'Contact', href: `${homePath}#contact`, enabled: sectionConfig.contact },
  ].filter((item) => item.enabled);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="site-brand" href={`${homePath}#top`} aria-label={`${profileData.name} — home`}>
          <span className="site-brand-mark">{initials}</span>
        </a>

        <TubelightNavbar
          aria-label="Main navigation"
          items={navItems.map(({ label, href }) => ({ label, href }))}
        />

        <div className="header-actions">
          <ThemeToggle className="theme-toggle" />
          {profileData.resumeUrl && (
            <Button
              href="/resume"
              size="sm"
              variant="secondary"
              className="nav-resume-button"
            >
              Résumé
            </Button>
          )}
          <Button
            type="button"
            className="mobile-menu-toggle"
            size="sm"
            variant="secondary"
            arrow="none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
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
              <Button
                className="mobile-nav-flow-link"
                key={item.label}
                href={item.href}
                size="md"
                variant="secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Button>
            ))}
            {profileData.resumeUrl && (
              <Button
                href="/resume"
                size="md"
                variant="secondary"
                className="mobile-nav-resume"
                onClick={() => setMobileMenuOpen(false)}
              >
                Résumé
              </Button>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
