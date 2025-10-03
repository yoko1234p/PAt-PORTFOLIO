import type { Metadata } from 'next';
import './globals.scss';
import { AOSProvider } from '@/components/layout/AOSProvider';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { WaveBackground } from '@/components/labs/WaveBackground';

export const metadata: Metadata = {
  metadataBase: new URL('https://patrick-portfolio.vercel.app'),
  title: {
    default: 'Patrick Ho — Full-Stack Developer & Front-End Specialist',
    template: '%s | Patrick Ho',
  },
  description:
    'Full Stack / Front-End developer specializing in Next.js, React Native, and AEM — delivering enterprise-grade experiences with liquid glass aesthetics and high-performance animations.',
  keywords: [
    'Patrick Ho',
    'Full Stack Developer',
    'Front-End Developer',
    'Next.js',
    'React',
    'AEM',
    'React Native',
    'TypeScript',
    'Hong Kong Developer',
  ],
  authors: [{ name: 'Patrick Ho' }],
  creator: 'Patrick Ho',
  openGraph: {
    type: 'website',
    locale: 'zh_HK',
    alternateLocale: ['en_US'],
    url: '/',
    title: 'Patrick Ho — Full-Stack Developer & Front-End Specialist',
    description: 'Full Stack / Front-End developer specializing in Next.js, React Native, and AEM',
    siteName: 'Patrick Ho Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patrick Ho — Full-Stack Developer & Front-End Specialist',
    description: 'Full Stack / Front-End developer specializing in Next.js, React Native, and AEM',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Patrick Ho',
              jobTitle: 'Full Stack / Front-End Developer',
              email: 'mailto:pathoworkmail@gmail.com',
              telephone: '+85253011499',
              knowsAbout: ['Next.js', 'React', 'AEM', 'React Native', 'TypeScript', 'DevOps'],
              url: 'https://patrick-portfolio.vercel.app',
            }),
          }}
        />
      </head>
      <body className="antialiased min-h-screen" suppressHydrationWarning>
        <WaveBackground />
        <AOSProvider>
          <CustomCursor />
          {children}
        </AOSProvider>
      </body>
    </html>
  );
}
