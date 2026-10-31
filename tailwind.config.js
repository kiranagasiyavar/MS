/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: '#970747',
          5: 'rgba(151, 7, 71, 0.05)',
          10: 'rgba(151, 7, 71, 0.1)',
          15: 'rgba(151, 7, 71, 0.15)',
          20: 'rgba(151, 7, 71, 0.2)',
          30: 'rgba(151, 7, 71, 0.3)',
          40: 'rgba(151, 7, 71, 0.4)',
          50: 'rgba(151, 7, 71, 0.5)',
          60: 'rgba(151, 7, 71, 0.6)',
          70: 'rgba(151, 7, 71, 0.7)',
          80: 'rgba(151, 7, 71, 0.8)',
          90: 'rgba(151, 7, 71, 0.9)',
          pure: '#970747',
        },
        white: {
          DEFAULT: '#FFFFFF',
          5: 'rgba(255, 255, 255, 0.05)',
          10: 'rgba(255, 255, 255, 0.1)',
          15: 'rgba(255, 255, 255, 0.15)',
          20: 'rgba(255, 255, 255, 0.2)',
          30: 'rgba(255, 255, 255, 0.3)',
          40: 'rgba(255, 255, 255, 0.4)',
          50: 'rgba(255, 255, 255, 0.5)',
          60: 'rgba(255, 255, 255, 0.6)',
          70: 'rgba(255, 255, 255, 0.7)',
          80: 'rgba(255, 255, 255, 0.8)',
          90: 'rgba(255, 255, 255, 0.9)',
          pure: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-inter)',
          'var(--font-noto-devanagari)',
          'var(--font-noto-kannada)',
          'var(--font-noto-tamil)',
          'var(--font-noto-telugu)',
          'var(--font-noto-bengali)',
          'system-ui',
          'sans-serif',
        ],
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
