import { ArrowLeft, Compass, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen min-h-[100dvh] bg-[var(--bg-page)] flex items-center justify-center p-4 sm:p-6 bg-halftone">
      <div className="max-w-lg w-full comic-panel bg-[var(--card-bg)] p-6 sm:p-10 md:p-12 text-center rounded-2xl sm:rounded-3xl border-3 sm:border-[4px] border-[var(--border-color)] shadow-[6px_6px_0px_var(--shadow-color)] sm:shadow-[10px_10px_0px_var(--shadow-color)]">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[var(--comic-yellow)] text-[#171717] border-2 sm:border-[3.5px] border-[var(--border-color)] shadow-[3px_3px_0px_var(--shadow-color)] sm:shadow-[4px_4px_0px_var(--shadow-color)] flex items-center justify-center mx-auto mb-5 sm:mb-6 -rotate-3">
          <Compass className="w-8 h-8 sm:w-10 sm:h-10 stroke-[3]" />
        </div>

        <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 text-[10px] sm:text-xs font-black uppercase tracking-widest bg-[var(--comic-red)] text-white border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)] rounded-md mb-4 -rotate-1">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>ISSUE #404 • PANEL MISSING</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--text-primary)] uppercase tracking-tight mb-3 sm:mb-4">
          PAGE NOT FOUND
        </h1>

        <p className="text-xs sm:text-sm md:text-base font-bold text-[var(--text-secondary)] mb-6 sm:mb-8 leading-relaxed max-w-sm mx-auto">
          The requested page or route could not be found. It may have been moved or never existed.
        </p>

        <div className="flex justify-center">
          <Button href="/" size="md" variant="primary">
            <ArrowLeft className="w-4 h-4 stroke-[3]" />
            <span>RETURN TO PORTFOLIO</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
