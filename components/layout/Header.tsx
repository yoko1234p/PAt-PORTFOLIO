'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

interface HeaderProps {
  lang?: 'zh-hk' | 'en';
}

export const Header: React.FC<HeaderProps> = ({ lang = 'zh-hk' }) => {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navItemsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // Initial animation
    const ctx = gsap.context(() => {
      gsap.from(logoRef.current, {
        opacity: 0,
        x: -20,
        duration: 0.6,
        ease: 'power3.out',
        delay: 0.2,
      });

      gsap.from(navItemsRef.current?.children ?? [], {
        opacity: 0,
        y: -10,
        duration: 0.5,
        stagger: 0.08,
        ease: 'back.out(1.5)',
        delay: 0.4,
      });
    });

    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;

      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);

        if (isScrolled) {
          gsap.to(headerRef.current, {
            paddingTop: '0.75rem',
            paddingBottom: '0.75rem',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            duration: 0.3,
            ease: 'power2.out',
          });
        } else {
          gsap.to(headerRef.current, {
            paddingTop: '1rem',
            paddingBottom: '1rem',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            backdropFilter: 'blur(0px)',
            duration: 0.3,
            ease: 'power2.out',
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems =
    lang === 'zh-hk'
      ? [
          { href: '#work', label: '作品' },
          { href: '#experience', label: '經歷' },
          { href: '#skills', label: '技能' },
          { href: '#about', label: '關於' },
          { href: '#contact', label: '聯絡' },
        ]
      : [
          { href: '#work', label: 'Work' },
          { href: '#experience', label: 'Experience' },
          { href: '#skills', label: 'Skills' },
          { href: '#about', label: 'About' },
          { href: '#contact', label: 'Contact' },
        ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-[300] transition-all duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link
            ref={logoRef}
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary bg-clip-text text-transparent"
          >
            Patrick Ho
          </Link>

          <ul ref={navItemsRef} className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative text-text-secondary hover:text-accent-primary transition-colors font-medium group"
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      y: -2,
                      duration: 0.3,
                      ease: 'power2.out',
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      y: 0,
                      duration: 0.3,
                      ease: 'elastic.out(1, 0.5)',
                    });
                  }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-tertiary group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            {/* <button
              aria-label="Switch language"
              className="px-4 py-2 rounded-lg text-text-secondary hover:text-accent-primary hover:bg-accent-primary/5 transition-all"
            >
              {lang === 'zh-hk' ? 'EN' : '繁'}
            </button> */}
          </div>
        </div>
      </nav>
    </header>
  );
};
