import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#FFFFFF",
          secondary: "#FBFBFD",
          tertiary: "#F5F5F7",
        },
        accent: {
          primary: "#0071E3",    // Apple Blue
          secondary: "#147CE5",
          tertiary: "#06C",
          success: "#34C759",    // Apple Green
          warning: "#FF9500",    // Apple Orange
        },
        text: {
          primary: "#1D1D1F",    // Apple Dark Gray
          secondary: "#6E6E73",  // Apple Mid Gray
          tertiary: "#86868B",   // Apple Light Gray
        },
        glass: {
          light: "rgba(255,255,255,0.72)",
          lighter: "rgba(255,255,255,0.5)",
          border: "rgba(0,0,0,0.04)",
          shadow: "rgba(0,0,0,0.08)",
        },
      },
      backdropBlur: {
        'glass-sm': '12px',
        'glass-md': '20px',
        'glass-lg': '32px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-light': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-mesh': 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      },
      boxShadow: {
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.08)',
        'DEFAULT': '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
        'md': '0 8px 24px 0 rgba(0, 0, 0, 0.12)',
        'lg': '0 16px 48px 0 rgba(0, 0, 0, 0.16)',
        'xl': '0 24px 64px 0 rgba(0, 0, 0, 0.20)',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['80px', { lineHeight: '1.05', letterSpacing: '-0.015em', fontWeight: '600' }],
        'display': ['64px', { lineHeight: '1.0625', letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-sm': ['48px', { lineHeight: '1.0834', letterSpacing: '-0.003em', fontWeight: '600' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.7s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
