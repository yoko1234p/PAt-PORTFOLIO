'use client';

import { useEffect } from 'react';
import { preventOverscroll } from './scroll-lock';

export function ScrollLockProvider() {
  useEffect(() => {
    const cleanup = preventOverscroll();
    return cleanup;
  }, []);

  return null;
}
