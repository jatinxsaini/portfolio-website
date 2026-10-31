'use client';

import React, { useSyncExternalStore, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { retroAudio } from '@/lib/audio';
import { toast } from 'sonner';
import { Button } from './Button';

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
    <Button
      type="button"
      onClick={handleToggle}
      aria-label={enabled ? 'Mute 8-bit Sound FX' : 'Enable 8-bit Sound FX'}
      aria-pressed={enabled}
      title={enabled ? 'Mute 8-bit Sound FX' : 'Enable 8-bit Sound FX'}
      size="sm"
      variant="secondary"
      arrow="none"
      className={`sound-toggle-flow ${enabled ? 'sound-toggle-flow--enabled' : ''} ${className}`}
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
    </Button>
  );
};
