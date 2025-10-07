import React from 'react';

interface FooterProps {
  lang?: 'zh-hk' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang = 'zh-hk' }) => {
  const currentYear = new Date().getFullYear();
  const rightsText =
    lang === 'zh-hk'
      ? `© ${currentYear} Patrick Ho. 版權所有.`
      : `© ${currentYear} Patrick Ho. All rights reserved.`;

  const madeWith = lang === 'zh-hk' ? '用 ❤️ 以' : 'Made with ❤️ using';

  return (
    <footer className=" py-12 border-t border-selective-yellow-500/20 bg-prussian-blue-600 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-selective-yellow-500 font-semibold mb-1">{rightsText}</p>
            <p className="text-sky-blue-700 text-sm">
              {madeWith} Next.js, TypeScript & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-blue-700 hover:text-selective-yellow-500 transition-colors text-sm font-medium"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/patrick-ho-256b581b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-blue-700 hover:text-selective-yellow-500 transition-colors text-sm font-medium"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="mailto:pathoworkmail@gmail.com"
              className="text-sky-blue-700 hover:text-selective-yellow-500 transition-colors text-sm font-medium"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-selective-yellow-500/20 text-center">
          <p className="text-xs text-sky-blue-700">
            {lang === 'zh-hk'
              ? '以企業級標準打造，專注細節與性能'
              : 'Built with enterprise-grade standards, focusing on details and performance'}
          </p>
        </div>
      </div>
    </footer>
  );
};
