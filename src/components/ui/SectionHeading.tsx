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
  badgeBg,
}) => {
  return (
    <div className={cn('section-heading', className)}>
      {badge && (
        <span className={cn('section-eyebrow', badgeBg)}>
          {badge}
        </span>
      )}
      <h2>{title}</h2>
      {description && (
        <p>{description}</p>
      )}
    </div>
  );
};
