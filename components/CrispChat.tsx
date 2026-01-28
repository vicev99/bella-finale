'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

export function CrispChat() {
  useEffect(() => {
    // Initialize Tawk.to live chat
    if (typeof window !== 'undefined' && !window.Tawk_API) {
      window.Tawk_LoadStart = new Date();

      const script = document.createElement('script');
      script.src = 'https://embed.tawk.to/5f45c3e0c04c4ba0a5d15c5a/1hhd8gkq1';
      script.async = true;
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      document.body.appendChild(script);
    }
  }, []);

  return null;
}
