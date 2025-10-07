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
        // Base backgrounds
        bg: {
          base: "#FFFFFF",
          secondary: "#f9f9f8",
          tertiary: "#e8f4fa",
          dark: "#023047",
        },
        // Sky Blue palette
        'sky-blue': {
          DEFAULT: '#8ecae6',
          100: '#0d2e3d',
          200: '#1b5c7a',
          300: '#288ab7',
          400: '#51aed9',
          500: '#8ecae6',
          600: '#a5d5eb',
          700: '#bbdff0',
          800: '#d2eaf5',
          900: '#e8f4fa',
        },
        // Blue Green palette
        'blue-green': {
          DEFAULT: '#219ebc',
          100: '#071f25',
          200: '#0d3e4b',
          300: '#145d70',
          400: '#1a7d95',
          500: '#219ebc',
          600: '#39bcdc',
          700: '#6bcce5',
          800: '#9cddee',
          900: '#ceeef6',
        },
        // Prussian Blue palette
        'prussian-blue': {
          DEFAULT: '#023047',
          100: '#00090e',
          200: '#01131c',
          300: '#011c2a',
          400: '#012638',
          500: '#023047',
          600: '#04699b',
          700: '#06a3f1',
          800: '#54c3fb',
          900: '#a9e1fd',
        },
        // Selective Yellow palette
        'selective-yellow': {
          DEFAULT: '#ffb703',
          100: '#342500',
          200: '#684b00',
          300: '#9c7000',
          400: '#d09500',
          500: '#ffb703',
          600: '#ffc637',
          700: '#ffd569',
          800: '#ffe39b',
          900: '#fff1cd',
        },
        // UT Orange palette
        'ut-orange': {
          DEFAULT: '#fb8500',
          100: '#321b00',
          200: '#643500',
          300: '#965000',
          400: '#c86b00',
          500: '#fb8500',
          600: '#ff9e2f',
          700: '#ffb663',
          800: '#ffce97',
          900: '#ffe7cb',
        },
        // Accent shortcuts
        accent: {
          primary: '#219ebc',      // Blue Green
          secondary: '#023047',    // Prussian Blue
          tertiary: '#8ecae6',     // Sky Blue
          yellow: '#ffb703',       // Selective Yellow
          orange: '#fb8500',       // UT Orange
          success: '#059669',
          warning: '#fb8500',
        },
        // Text colors
        text: {
          primary: '#023047',      // Prussian Blue
          secondary: '#219ebc',    // Blue Green
          tertiary: '#8ecae6',     // Sky Blue
          light: '#e8f4fa',        // Sky Blue 900
        },
        // Glass effects
        glass: {
          light: "rgba(142, 202, 230, 0.1)",
          lighter: "rgba(142, 202, 230, 0.05)",
          border: "rgba(2, 48, 71, 0.08)",
          shadow: "rgba(2, 48, 71, 0.12)",
          blue: "rgba(33, 158, 188, 0.1)",
          prussian: "rgba(2, 48, 71, 0.1)",
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
        'gradient-ocean': 'linear-gradient(135deg, #023047 0%, #219ebc 50%, #8ecae6 100%)',
        'gradient-sky': 'linear-gradient(135deg, #8ecae6 0%, #a5d5eb 50%, #e8f4fa 100%)',
        'gradient-prussian': 'linear-gradient(135deg, #023047 0%, #04699b 50%, #06a3f1 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #fb8500 0%, #ffb703 50%, #ffd569 100%)',
        'gradient-vibrant': 'linear-gradient(135deg, #219ebc 0%, #8ecae6 50%, #ffb703 100%)',
      },
      boxShadow: {
        'sm': '0 1px 3px 0 rgba(2, 48, 71, 0.08)',
        'DEFAULT': '0 4px 12px 0 rgba(2, 48, 71, 0.08)',
        'md': '0 8px 24px 0 rgba(2, 48, 71, 0.12)',
        'lg': '0 16px 48px 0 rgba(2, 48, 71, 0.16)',
        'xl': '0 24px 64px 0 rgba(2, 48, 71, 0.20)',
        'glow-blue': '0 0 20px rgba(33, 158, 188, 0.3)',
        'glow-sky': '0 0 20px rgba(142, 202, 230, 0.3)',
        'glow-yellow': '0 0 20px rgba(255, 183, 3, 0.3)',
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
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
