'use client';

import React from 'react';
import Image from 'next/image';

interface PixelAvatarProps {
  avatarUrl?: string;
  name?: string;
  className?: string;
}

export const PixelAvatar: React.FC<PixelAvatarProps> = ({ avatarUrl, name = 'Jatin Saini', className = '' }) => {
  // If user provides a custom image, show it with a retro pixel frame
  if (avatarUrl && avatarUrl.trim() !== '') {
    return (
      <div className={`relative w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-xl border-3 border-[var(--border-color)] overflow-hidden shadow-[4px_4px_0px_var(--shadow-color)] bg-[var(--card-subtle)] ${className}`}>
        <Image
          src={avatarUrl}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-pixel-grid pointer-events-none opacity-20" />
      </div>
    );
  }

  // Handcrafted 8-bit / 16-bit Developer Hero Sprite
  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {/* Floating 8-bit Level / Status Indicator */}
      <div className="absolute -top-3 sm:-top-4 z-20 flex items-center gap-1.5 px-2.5 py-0.5 rounded border-2 border-[var(--border-color)] bg-[var(--pixel-gold)] text-[var(--pixel-dark)] shadow-[2px_2px_0px_var(--shadow-color)] font-arcade text-[9px] sm:text-[10px]">
        <span className="w-1.5 h-1.5 bg-[#244855] rounded-xs animate-pixel-blink" />
        <span>LVL.99 HERO</span>
      </div>

      {/* Retro Sprite Frame */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl border-3 border-[var(--border-color)] bg-[var(--bg-canvas)] shadow-[5px_5px_0px_var(--shadow-color)] p-2 flex items-center justify-center overflow-hidden">
        {/* Background Dot Grid */}
        <div className="absolute inset-0 bg-pixel-grid opacity-30" />

        {/* Animated Pixel Sprite SVG */}
        <svg
          viewBox="0 0 64 64"
          className="w-full h-full animate-pixel-bob"
          style={{ imageRendering: 'pixelated' }}
          shapeRendering="crispEdges"
        >
          {/* Hair / Headband (Purple/Indigo) */}
          <rect x="22" y="10" width="20" height="4" fill="#244855" />
          <rect x="20" y="14" width="24" height="4" fill="#244855" />
          <rect x="18" y="18" width="6" height="8" fill="#244855" />
          <rect x="40" y="18" width="6" height="8" fill="#244855" />

          {/* Face (Warm Pixel Skin Tone) */}
          <rect x="24" y="16" width="16" height="14" fill="#FFDBAC" />
          {/* Eyes (Pixel Black) */}
          <rect x="26" y="20" width="3" height="3" fill="#244855" />
          <rect x="35" y="20" width="3" height="3" fill="#244855" />
          {/* Eye Sparkle */}
          <rect x="26" y="20" width="1" height="1" fill="#FFFFFF" />
          <rect x="35" y="20" width="1" height="1" fill="#FFFFFF" />
          {/* Friendly Smile */}
          <rect x="29" y="26" width="6" height="1" fill="#D48C68" />
          <rect x="30" y="27" width="4" height="1" fill="#D48C68" />

          {/* Glasses / AR Visor Accent */}
          <rect x="24" y="19" width="7" height="1" fill="#90AEAD" opacity="0.8" />
          <rect x="33" y="19" width="7" height="1" fill="#90AEAD" opacity="0.8" />
          <rect x="31" y="20" width="2" height="1" fill="#90AEAD" opacity="0.8" />

          {/* Hoodie / Armor (Arcade Violet / Navy) */}
          <rect x="20" y="30" width="24" height="14" fill="#874F41" />
          <rect x="28" y="30" width="8" height="10" fill="#FFDBAC" />
          <rect x="30" y="33" width="4" height="6" fill="#E64833" /> {/* Gold Pendant */}

          {/* Arms & Hands typing */}
          <rect x="16" y="32" width="4" height="10" fill="#874F41" />
          <rect x="44" y="32" width="4" height="10" fill="#874F41" />
          <rect x="18" y="42" width="6" height="4" fill="#FFDBAC" />
          <rect x="40" y="42" width="6" height="4" fill="#FFDBAC" />

          {/* Laptop & Cyber Terminal Desk */}
          <rect x="14" y="46" width="36" height="3" fill="#90AEAD" />
          <rect x="22" y="38" width="20" height="8" fill="#244855" />
          <rect x="23" y="39" width="18" height="6" fill="#90AEAD" /> {/* Screen glow */}
          {/* Code lines on screen */}
          <rect x="25" y="41" width="10" height="1" fill="#244855" />
          <rect x="25" y="43" width="6" height="1" fill="#244855" />

          {/* Steaming Coffee Mug */}
          <rect x="48" y="43" width="4" height="5" fill="#E64833" />
          <rect x="52" y="44" width="2" height="3" fill="#E64833" />
          <rect x="49" y="39" width="1" height="2" fill="#FBE9D0" opacity="0.6" />
          <rect x="51" y="38" width="1" height="2" fill="#FBE9D0" opacity="0.6" />

          {/* Floating 8-bit Star / XP Coin */}
          <rect x="8" y="14" width="2" height="4" fill="#E64833" />
          <rect x="7" y="15" width="4" height="2" fill="#E64833" />
          <rect x="54" y="12" width="2" height="4" fill="#90AEAD" />
          <rect x="53" y="13" width="4" height="2" fill="#90AEAD" />
        </svg>

        {/* Retro Scanline subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />
      </div>

      {/* HP Bar under avatar */}
      <div className="w-32 sm:w-40 mt-2 px-1">
        <div className="flex items-center justify-between font-arcade text-[8px] text-[var(--text-secondary)] mb-0.5">
          <span>HP</span>
          <span className="text-[var(--pixel-green)] font-bold">100%</span>
        </div>
        <div className="w-full h-2 rounded-xs border border-[var(--border-color)] bg-[var(--card-subtle)] overflow-hidden">
          <div className="h-full bg-[var(--pixel-green)] w-full" />
        </div>
      </div>
    </div>
  );
};

