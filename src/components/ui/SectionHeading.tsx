import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  badgeBg?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  description,
  className,
  badgeBg = 'bg-[var(--comic-red)] text-white',
}) => {
  return (
    <div className={cn('mb-6 sm:mb-10 md:mb-12', className)}>
      {badge && (
        <span
          className={cn(
            'inline-block px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-black tracking-widest uppercase border-2 sm:border-[3px] border-[var(--border-color)] shadow-[2.5px_2.5px_0px_var(--shadow-color)] sm:shadow-[3px_3px_0px_var(--shadow-color)] rounded-md mb-2.5 sm:mb-3 transform -rotate-1',
            badgeBg
          )}
        >
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-primary)] uppercase drop-shadow-sm">
        {title}
      </h2>
      {description && (
        <p className="mt-2.5 sm:mt-3 text-xs sm:text-base md:text-lg text-[var(--text-secondary)] max-w-2xl font-bold leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
