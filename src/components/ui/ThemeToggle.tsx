'use client';

import React, { useSyncExternalStore } from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

const emptySubscribe = () => () => {};

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const isDark = useSyncExternalStore(
    (callback) => {
      if (typeof window === 'undefined') return () => {};
      const observer = new MutationObserver(() => callback());
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
      return () => observer.disconnect();
    },
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark'),
    () => false
  );

  const toggleTheme = () => {
    if (typeof document === 'undefined') return;
    const isCurrentlyDark = document.documentElement.classList.contains('dark');
    if (isCurrentlyDark) {
      document.documentElement.classList.remove('dark');
      try {
        localStorage.setItem('portfolio-theme', 'light');
      } catch {
        // Ignore storage errors in private browsing
      }
    } else {
      document.documentElement.classList.add('dark');
      try {
        localStorage.setItem('portfolio-theme', 'dark');
      } catch {
        // Ignore storage errors
      }
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`inline-flex items-center justify-center p-2 rounded-xl border-2 border-[var(--border-color)] bg-[var(--comic-yellow)] text-[#171717] shadow-[2px_2px_0px_var(--shadow-color)] hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[var(--comic-yellow)] min-w-[38px] min-h-[38px] ${className}`}
    >
      {isMounted ? (
        isDark ? (
          <Sun className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
        ) : (
          <Moon className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
        )
      ) : (
        <span className="w-4 h-4 block" aria-hidden="true" />
      )}
    </button>
  );
};
