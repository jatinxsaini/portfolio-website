'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { profileData } from '@/data/profile';
import { DotExpand } from '../ui/DotExpand';

export const Hero: React.FC = () => {
  const [firstName, ...remainingName] = profileData.name.split(' ');
  const lastName = remainingName.join(' ');

  return (
    <section id="top" className="hero-section bg-halftone">
      <div className="hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="hero-copy"
        >
          <p className="hero-eyebrow">
            <MapPin aria-hidden="true" />
            {profileData.location}
            <span className="hero-eyebrow-rule" />
          </p>

          <h1 className="hero-title" aria-label={profileData.name}>
            <span>{firstName}</span>
            {lastName && <span>{lastName}</span>}
          </h1>

          <p className="hero-description">{profileData.shortIntro}</p>

          <div className="hero-actions">
            <a className="hero-primary-link" href="#projects">
              Explore my work
              <DotExpand />
            </a>
            {profileData.resumeUrl && (
              <a className="hero-secondary-link" href={profileData.resumeUrl} download>
                Résumé PDF
                <DotExpand />
              </a>
            )}
          </div>
        </motion.div>

        <div className="hero-mark" aria-hidden="true">
          <span className="hero-mark-dot" />
          <span className="hero-mark-label">AI · FULL STACK · ENGINEERING</span>
          <span className="hero-mark-index">01 / 05</span>
        </div>
      </div>
    </section>
  );
};
