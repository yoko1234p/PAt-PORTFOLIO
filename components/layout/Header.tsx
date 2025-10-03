'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface HeaderProps {
  lang?: 'zh-hk' | 'en';
}

export const Header: React.FC<HeaderProps> = ({ lang = 'zh-hk' }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' : 'py-4'
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent"
          >
            Patrick Ho
          </Link>

          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-text-secondary hover:text-accent-primary transition-colors font-medium"
                >
                  {item.label}
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
