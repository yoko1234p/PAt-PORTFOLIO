'use client';

import React, { useEffect, useState } from 'react';

interface PageIndicatorProps {
  sections: { id: string; label: string }[];
}

export const PageIndicator: React.FC<PageIndicatorProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = sections.findIndex(section => section.id === entry.target.id);
          if (index !== -1) {
            setActiveSection(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-[200] hidden md:block">
      <ul className="flex flex-col gap-1">
        {sections.map((section, index) => (
          <li key={section.id}>
            <button
              onClick={() => handleClick(section.id)}
              className="group relative flex items-center justify-center p-3"
              aria-label={`Go to ${section.label}`}
            >
              {/* Dot indicator */}
              <span
                className={`block w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                  activeSection === index
                    ? 'bg-selective-yellow-500 border-selective-yellow-500 scale-150'
                    : 'bg-transparent border-sky-blue-600 hover:border-selective-yellow-500 hover:scale-125'
                }`}
                style={
                  activeSection === index
                    ? {
                        boxShadow: '0 0 15px 3px rgba(255, 183, 3, 0.6), 0 0 30px 6px rgba(255, 183, 3, 0.3)',
                      }
                    : undefined
                }
              />

              {/* Label tooltip */}
              <span
                className={`absolute right-12 whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none backdrop-blur-sm ${
                  activeSection === index
                    ? 'bg-selective-yellow-500 text-prussian-blue-500'
                    : 'bg-prussian-blue-400 text-sky-blue-900'
                }`}
                style={{
                  backgroundColor: activeSection !== index ? 'rgba(2, 48, 71, 0.9)' : undefined,
                }}
              >
                {section.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
