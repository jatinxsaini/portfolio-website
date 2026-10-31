'use client';

import React from 'react';
import { ArrowUpRight, Mail, Sparkles } from 'lucide-react';
import type { SocialLink } from '@/types';
import { Button } from './Button';
import { SocialIcon } from './SocialIcon';

interface StarburstThanksFooterProps {
  name: string;
  email: string;
  tagline: string;
  signoff: string;
  copyright: string;
  links: SocialLink[];
}

export const StarburstThanksFooter: React.FC<StarburstThanksFooterProps> = ({
  name,
  email,
  tagline,
  signoff,
  copyright,
  links,
}) => (
  <footer className="starburst-footer">
    <div className="starburst-footer__panel">
      <div className="starburst-footer__topline">
        <a className="starburst-footer__brand" href="#top">
          {name}
          <ArrowUpRight aria-hidden="true" />
        </a>
        <span className="starburst-footer__edition">A LITTLE CORNER OF THE INTERNET</span>
      </div>

      <div className="starburst-footer__main">
        <div className="starburst-footer__message">
          <p className="starburst-footer__eyebrow">
            <Sparkles aria-hidden="true" />
            THAT&apos;S A WRAP
          </p>
          <h2>{tagline}</h2>
          <p className="starburst-footer__signoff">{signoff}</p>
          {email && (
            <Button href={`mailto:${email}`} size="md" variant="secondary" className="starburst-footer__email">
              <Mail aria-hidden="true" />
              {email}
            </Button>
          )}
        </div>

        <div className="starburst-footer__stamp" aria-hidden="true">
          <span>THANKS</span>
          <Sparkles />
        </div>
      </div>

      <div className="starburst-footer__bottom">
        <p className="starburst-footer__copyright">{copyright}</p>

        <nav className="starburst-footer__links" aria-label="Social links">
          {links.map((link) => (
            <Button
              key={link.platform}
              href={link.url}
              external
              size="sm"
              variant="secondary"
              arrow="none"
              aria-label={link.label}
              title={link.label}
              className="starburst-footer__social"
            >
              <SocialIcon name={link.iconName} className="h-4 w-4" />
            </Button>
          ))}
        </nav>

        <Button
          className="starburst-footer__top"
          type="button"
          size="sm"
          variant="secondary"
          arrow="up"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          BACK TO TOP
        </Button>
      </div>
    </div>
  </footer>
);
