'use client';

import React from 'react';
import { profileData } from '@/data/profile';
import { socialLinksData } from '@/data/social-links';
import { siteConfig } from '@/config/site';
import { StarburstThanksFooter } from '../ui/StarburstThanksFooter';

export const Footer: React.FC = () => {
  const activeFooterLinks = socialLinksData.filter(
    (link) => link.url && link.showInFooter !== false && link.platform !== 'email'
  );

  return (
    <StarburstThanksFooter
      name={profileData.displayName || profileData.name}
      email={profileData.email}
      tagline="Thanks for stopping by."
      signoff="Let’s build something useful."
      copyright={siteConfig.copyright}
      links={activeFooterLinks}
    />
  );
};
