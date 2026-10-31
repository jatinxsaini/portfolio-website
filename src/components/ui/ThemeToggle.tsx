'use client';

import React, { useSyncExternalStore } from 'react';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
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
    const nextTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');

    try {
      localStorage.setItem('portfolio-theme', nextTheme);
    } catch {
      // The visual theme still works when storage is unavailable.
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`sky-theme-toggle ${className}`}
    >
      <span className="sky-theme-toggle__track" aria-hidden="true">
        <span className="sky-theme-toggle__clouds" />
        <span className="sky-theme-toggle__stars">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 40" fill="none">
            <path
              fill="currentColor"
              d="m12 4 2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Zm27 10 1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5 1.5-4Zm25-9 1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5 1.5-4ZM23 29l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5 1.5-3Z"
            />
          </svg>
        </span>
        <span className="sky-theme-toggle__orb">
          <span className="sky-theme-toggle__sun-moon">
            <span className="sky-theme-toggle__moon">
              <span className="sky-theme-toggle__spot" />
              <span className="sky-theme-toggle__spot" />
              <span className="sky-theme-toggle__spot" />
            </span>
          </span>
        </span>
      </span>
    </button>
  );
};
