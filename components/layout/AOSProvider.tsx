'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
      delay: 100,
    });

    // Refresh AOS on route changes
    AOS.refresh();
  }, []);

  return <>{children}</>;
}
