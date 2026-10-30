'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { DotExpand } from './DotExpand';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  download?: boolean | string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  download,
  external,
  children,
  className,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-black uppercase tracking-wider transition-all duration-150 cursor-pointer select-none border-2 sm:border-[3px] border-[var(--border-color)] shadow-[3px_3px_0px_var(--shadow-color)] sm:shadow-[4px_4px_0px_var(--shadow-color)] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[5px_5px_0px_var(--shadow-color)] sm:hover:shadow-[6px_6px_0px_var(--shadow-color)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_var(--shadow-color)] focus:outline-none';

  const variants = {
    primary: 'bg-[var(--comic-yellow)] text-[#171717]',
    secondary: 'bg-[var(--card-bg)] text-[var(--text-primary)] hover:bg-[var(--comic-yellow)] hover:text-[#171717]',
    outline: 'bg-[var(--comic-green)] text-[#171717]',
    ghost: 'bg-transparent text-[var(--text-primary)] hover:bg-[var(--comic-yellow)] hover:text-[#171717]',
  };

  const sizes = {
    sm: 'px-3 py-1.5 min-h-[36px] text-xs gap-1.5 rounded-lg',
    md: 'px-4 sm:px-5 py-2.5 min-h-[44px] text-xs sm:text-sm gap-2 rounded-xl',
    lg: 'px-5 sm:px-7 py-3 sm:py-3.5 min-h-[48px] text-sm sm:text-base gap-2.5 rounded-xl',
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    const isMailto = href.startsWith('mailto:');
    const isExternal = external || (href.startsWith('http') && !download);
    const opensNewTab = isExternal && !isMailto && !download;

    return (
      <a
        href={href}
        download={download}
        target={opensNewTab ? '_blank' : undefined}
        rel={opensNewTab ? 'noopener noreferrer' : undefined}
        className={combinedClasses}
      >
        {children}
        <DotExpand />
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
};
