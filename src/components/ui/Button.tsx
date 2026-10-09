'use client';

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

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
  const baseStyles = 'inline-flex items-center justify-center font-black uppercase tracking-wider transition-all duration-150 cursor-pointer select-none border-[3px] border-[#171717] shadow-[4px_4px_0px_#171717] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_#171717] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#171717] focus:outline-none';

  const variants = {
    primary: 'bg-[#FFE500] text-[#171717]',
    secondary: 'bg-[#FFFFFF] text-[#171717]',
    outline: 'bg-[#B9F227] text-[#171717]',
    ghost: 'bg-transparent text-[#171717] hover:bg-[#FFE500]',
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5 rounded-lg',
    md: 'px-5 py-2.5 text-sm gap-2 rounded-xl',
    lg: 'px-7 py-3.5 text-base gap-2.5 rounded-xl',
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    const isExternal = external || href.startsWith('http') || href.startsWith('mailto:');
    return (
      <a
        href={href}
        download={download}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={combinedClasses}
      >
        {children}
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
