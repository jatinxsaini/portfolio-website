'use client';

import React, { useSyncExternalStore, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { retroAudio } from '@/lib/audio';
import { toast } from 'sonner';

interface SoundToggleProps {
  className?: string;
}

const emptySubscribe = () => () => {};

export const SoundToggle: React.FC<SoundToggleProps> = ({ className = '' }) => {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [enabled, setEnabled] = useState(() => {
    if (typeof window !== 'undefined') {
      return retroAudio.getSoundEnabled();
    }
    return false;
  });

  const handleToggle = () => {
    const nextState = retroAudio.toggleSound();
    setEnabled(nextState);
    if (nextState) {
      toast.success('🔊 8-BIT AUDIO ENABLED!');
    } else {
      toast.info('🔇 8-BIT AUDIO MUTED');
    }
  };

  if (!isMounted) {
    return (
      <div className={`h-9 w-9 rounded-lg border-2 border-[var(--border-color)] bg-[var(--card-bg)] opacity-50 ${className}`} />
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={enabled ? 'Mute 8-bit Sound FX' : 'Enable 8-bit Sound FX'}
      title={enabled ? 'Mute 8-bit Sound FX' : 'Enable 8-bit Sound FX'}
      className={`inline-flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg border-2 border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-primary)] shadow-[2px_2px_0px_var(--shadow-color)] hover:bg-[var(--pixel-gold)] hover:text-[var(--pixel-dark)] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer font-arcade text-[10px] min-h-[38px] ${
        enabled ? 'bg-[var(--pixel-gold)] text-[var(--pixel-dark)]' : ''
      } ${className}`}
    >
      {enabled ? (
        <>
          <Volume2 className="h-4 w-4 stroke-[2.5]" aria-hidden="true" />
          <span className="hidden sm:inline font-bold">SFX</span>
        </>
      ) : (
        <>
          <VolumeX className="h-4 w-4 stroke-[2.5] opacity-70" aria-hidden="true" />
          <span className="hidden sm:inline opacity-70">SFX</span>
        </>
      )}
    </button>
  );
};
