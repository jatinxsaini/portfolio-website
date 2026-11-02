'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface TubelightNavItem {
  label: string;
  href: string;
}

interface TubelightNavbarProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  items: TubelightNavItem[];
  activeHref?: string;
  onChange?: (href: string) => void;
}

export const TubelightNavbar: React.FC<TubelightNavbarProps> = ({
  items,
  activeHref,
  onChange,
  className,
  ...props
}) => {
  const [internalActive, setInternalActive] = useState<string>(items[0]?.href ?? '#');
  const currentHref = activeHref ?? internalActive;

  const handleSelect = (href: string) => {
    setInternalActive(href);
    onChange?.(href);
  };

  return (
    <nav
      className={cn(
        'relative flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)]/85 p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl',
        className,
      )}
      {...props}
    >
      {items.map((item) => {
        const isActive = currentHref === item.href;

        return (
          <a
            key={item.href}
            href={item.href}
            onMouseEnter={() => setInternalActive(item.href)}
            onFocus={() => setInternalActive(item.href)}
            onClick={() => handleSelect(item.href)}
            className={cn(
              'group relative z-10 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold tracking-[-0.02em] transition-all duration-300 ease-out',
              isActive
                ? 'text-[#171717]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
            )}
          >
            <span
              className={cn(
                'absolute inset-0 rounded-full transition-all duration-300',
                isActive
                  ? 'bg-[var(--comic-yellow)] shadow-[0_0_20px_rgba(255,199,103,0.7)]'
                  : 'bg-transparent group-hover:bg-[color:var(--card-subtle)]/80',
              )}
              aria-hidden="true"
            />

            <span className="relative z-10 inline-flex items-center gap-2">
              <span>{item.label}</span>
              <ArrowRight
                className={cn(
                  'h-4 w-4 transition-transform duration-300',
                  isActive ? 'translate-x-0' : 'group-hover:translate-x-0.5',
                )}
                aria-hidden="true"
              />
            </span>
          </a>
        );
      })}
    </nav>
  );
};

export default TubelightNavbar;
