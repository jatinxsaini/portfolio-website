import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DotExpandProps {
  className?: string;
}

export const DotExpand: React.FC<DotExpandProps> = ({ className }) => (
  <span className={cn('dot-expand', className)} aria-hidden="true">
    <span className="dot-expand-point" />
    <ArrowUpRight className="dot-expand-arrow" />
  </span>
);
