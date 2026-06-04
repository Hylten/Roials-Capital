import type { SyntheticEvent } from 'react';

/** Lokalt sparade bilder med postimg-reserv om CDN fallerar. */
export const ASSETS = {
  lion: {
    local: '/assets/lion.png',
    remote:
      'https://i.postimg.cc/rFZDjGDT/Lion-King-ROIALS-Chat-GPT-Image-Mar-26-2025-09-42-11-AM-removebg-preview.png',
  },
  mountainBg: {
    local: '/assets/mountain-bg.jpg',
    remote: 'https://i.postimg.cc/0y2p2G4p/ivo-ivanov-c-F72u29mc-Ao-unsplash.jpg',
  },
} as const;

export function handleImageFallback(
  event: SyntheticEvent<HTMLImageElement>,
  remoteUrl: string
): void {
  const img = event.currentTarget;
  if (!img.dataset.fallbackUsed) {
    img.dataset.fallbackUsed = 'true';
    img.src = remoteUrl;
  }
}
