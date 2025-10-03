# Patrick Ho - Portfolio

Enterprise-grade portfolio website built with Next.js 15, TypeScript, and Tailwind CSS featuring liquid glass aesthetics and sprite particle interactions.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion, Canvas API
- **Runtime**: Bun
- **Deployment**: Vercel

## ✨ Features

- 🎨 Liquid Glass (Glassmorphism) design system
- ✨ Sprite/Fairy particle interactions
- 🌐 i18n support (繁中 / English)
- ♿ WCAG 2.1 AA accessibility
- 🚀 Optimized for Lighthouse 90+ scores
- 📱 Fully responsive design
- 🎭 Reduced motion support

## 🛠️ Development

```bash
# Install dependencies
bun install

# Run development server
bun dev

# Build for production
bun run build

# Start production server
bun start

# Lint code
bun run lint
```

## 📂 Project Structure

```
├── app/                 # Next.js App Router pages
├── components/          # React components
│   ├── ui/             # UI components (Button, Card)
│   ├── layout/         # Layout components (Header, Footer, Sections)
│   ├── motion/         # Animation components
│   └── labs/           # Interactive demos (SpriteCanvas)
├── data/               # Static data (profile, projects)
├── lib/                # Utilities and i18n
├── styles/             # Global styles
└── public/             # Static assets
```

## 🎨 Design System

### Glass Tokens

- **glass-1**: `blur(18px) saturate(1.25)` - Light elevation
- **glass-2**: `blur(24px) saturate(1.35)` - Medium elevation
- **glass-3**: `blur(36px) saturate(1.45)` - High elevation

### Color Palette

- **Cyan**: `#5BE7E7` - Primary accent
- **Violet**: `#9B8CFF` - Secondary accent
- **Pink**: `#FF7AC6` - Tertiary accent
- **Amber**: `#FFC466` - Highlight accent

## 📄 License

© Patrick Ho. All rights reserved.

## 📧 Contact

- Email: pathoworkmail@gmail.com
- Phone: +852 5301 1499
