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
  badgeBg = 'bg-[#FF3B30] text-white',
}) => {
  return (
    <div className={cn('mb-8 sm:mb-12', className)}>
      {badge && (
        <span
          className={cn(
            'inline-block px-4 py-1 text-xs font-black tracking-widest uppercase border-[3px] border-[#171717] shadow-[3px_3px_0px_#171717] rounded-md mb-3 transform -rotate-1',
            badgeBg
          )}
        >
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#171717] uppercase drop-shadow-sm">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base sm:text-lg text-[#171717] max-w-2xl font-bold leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
