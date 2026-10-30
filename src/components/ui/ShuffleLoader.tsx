'use client';

import { useEffect, useState, type CSSProperties } from 'react';

const tiles = Array.from({ length: 9 }, (_, index) => index);

export const ShuffleLoader = () => {
  const [phase, setPhase] = useState<'visible' | 'exiting' | 'hidden'>('visible');

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const exitTimer = window.setTimeout(
      () => setPhase('exiting'),
      reducedMotion ? 50 : 1250
    );
    const hideTimer = window.setTimeout(
      () => setPhase('hidden'),
      reducedMotion ? 100 : 1500
    );

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (phase === 'hidden') return null;

  return (
    <div
      className={`shuffle-loader${phase === 'exiting' ? ' shuffle-loader--exiting' : ''}`}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="shuffle-loader-content">
        <div className="shuffle-loader-grid" aria-hidden="true">
          {tiles.map((tile) => (
            <span
              key={tile}
              className={`shuffle-loader-tile${tile === 4 ? ' shuffle-loader-tile--mark' : ''}`}
              style={{ '--tile-index': tile } as CSSProperties}
            >
              {tile === 4 ? 'JS' : ''}
            </span>
          ))}
        </div>
        <span className="shuffle-loader-caption" aria-hidden="true">
          JATIN SAINI
        </span>
      </div>
    </div>
  );
};
