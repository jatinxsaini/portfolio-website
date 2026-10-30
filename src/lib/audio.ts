/**
 * Web Audio API 8-bit Sound Synthesizer
 * Zero-dependency, purely programmatic retro chip-tunes and sound FX.
 */

class RetroAudioService {
  private ctx: AudioContext | null = null;
  private isSoundEnabled = false;

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('retro-sfx-enabled');
        this.isSoundEnabled = saved === 'true';
      } catch {
        this.isSoundEnabled = false;
      }
    }
  }

  private initCtx() {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public getSoundEnabled(): boolean {
    return this.isSoundEnabled;
  }

  public setSoundEnabled(enabled: boolean) {
    this.isSoundEnabled = enabled;
    try {
      localStorage.setItem('retro-sfx-enabled', enabled ? 'true' : 'false');
    } catch {
      // Ignore storage errors
    }
    if (enabled) {
      this.playCoin();
    }
  }

  public toggleSound(): boolean {
    const next = !this.isSoundEnabled;
    this.setSoundEnabled(next);
    return next;
  }

  /**
   * Quick retro button click blip
   */
  public playClick() {
    if (!this.isSoundEnabled) return;
    const ctx = this.initCtx();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {
      // Audio error silently handled
    }
  }

  /**
   * Retro arcade coin sound (B-ling!)
   */
  public playCoin() {
    if (!this.isSoundEnabled) return;
    const ctx = this.initCtx();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(987.77, now); // B5
      osc.frequency.setValueAtTime(1318.51, now + 0.08); // E6

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.setValueAtTime(0.1, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
    } catch {
      // Audio error silently handled
    }
  }

  /**
   * Retro 1-UP / Level Up Chime
   */
  public playLevelUp() {
    if (!this.isSoundEnabled) return;
    const ctx = this.initCtx();
    if (!ctx) return;

    try {
      const notes = [330, 392, 659, 523, 587, 784];
      const now = ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const startTime = now + idx * 0.07;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.12, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.12);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.12);
      });
    } catch {
      // Audio error silently handled
    }
  }

  /**
   * Retro dialogue typing blip
   */
  public playDialogueBlip() {
    if (!this.isSoundEnabled) return;
    const ctx = this.initCtx();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(220 + Math.random() * 40, ctx.currentTime);

      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.03);
    } catch {
      // Audio error silently handled
    }
  }
}

export const retroAudio = new RetroAudioService();

