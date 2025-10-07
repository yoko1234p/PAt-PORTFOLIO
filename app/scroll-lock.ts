'use client';

export function preventOverscroll() {
  if (typeof window === 'undefined') return;

  let lastScrollTop = 0;
  let isScrolling = false;

  const handleScroll = () => {
    if (isScrolling) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Prevent scrolling above the top
    if (scrollTop < 0) {
      isScrolling = true;
      window.scrollTo(0, 0);
      setTimeout(() => {
        isScrolling = false;
      }, 50);
    }

    lastScrollTop = scrollTop;
  };

  const handleWheel = (e: WheelEvent) => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Prevent scroll up when at top
    if (scrollTop <= 0 && e.deltaY < 0) {
      e.preventDefault();
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const touch = e.touches[0];

    if (scrollTop <= 0) {
      (e.target as any)._startY = touch.clientY;
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop <= 0 && (e.target as any)._startY) {
      const touch = e.touches[0];
      const deltaY = touch.clientY - (e.target as any)._startY;

      // Prevent pull-to-refresh / overscroll when at top
      if (deltaY > 0) {
        e.preventDefault();
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('wheel', handleWheel, { passive: false });
  window.addEventListener('touchstart', handleTouchStart, { passive: true });
  window.addEventListener('touchmove', handleTouchMove, { passive: false });

  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('wheel', handleWheel);
    window.removeEventListener('touchstart', handleTouchStart);
    window.removeEventListener('touchmove', handleTouchMove);
  };
}
