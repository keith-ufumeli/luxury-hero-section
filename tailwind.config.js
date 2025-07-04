/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        'sans': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'luxury-gold': {
          50: '#fffdf2',
          100: '#fefce8',
          200: '#fef9c3',
          300: '#fef08a',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        'luxury-black': '#0a0a0a',
        'luxury-charcoal': '#1a1a1a',
        'luxury-slate': '#2a2a2a',
        'luxury-silver': '#8a8a8a',
        'luxury-pearl': '#f8f8f8',
        'accent-rose': '#f43f5e',
        'accent-emerald': '#10b981',
        'accent-sapphire': '#3b82f6',
        'accent-amethyst': '#8b5cf6',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 40%, #2a2a2a 70%, #000000 100%)',
        'gradient-text-gold': 'linear-gradient(135deg, #facc15 0%, #fde047 50%, #eab308 100%)',
        'gradient-button-primary': 'linear-gradient(135deg, #facc15 0%, #fde047 100%)',
        'gradient-button-primary-hover': 'linear-gradient(135deg, #fde047 0%, #facc15 100%)',
        'gradient-overlay': 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '18': '4.5rem',   // 72px
        '88': '22rem',    // 352px
        '100': '25rem',   // 400px
        '112': '28rem',   // 448px
        '128': '32rem',   // 512px
        '144': '36rem',   // 576px
        '160': '40rem',   // 640px
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.1' }],
        '9xl': ['8rem', { lineHeight: '1.1' }],
      },
      letterSpacing: {
        'luxury': '0.025em',
        'wide': '0.1em',
        'wider': '0.15em',
        'widest': '0.2em',
      },
      lineHeight: {
        'extra-tight': '1.1',
        'luxury': '1.3',
      },
      boxShadow: {
        'luxury-sm': '0 2px 8px rgba(250, 204, 21, 0.1)',
        'luxury-md': '0 4px 16px rgba(250, 204, 21, 0.15)',
        'luxury-lg': '0 8px 32px rgba(250, 204, 21, 0.2)',
        'luxury-xl': '0 16px 64px rgba(250, 204, 21, 0.25)',
        'luxury-2xl': '0 32px 128px rgba(250, 204, 21, 0.3)',
        'elegant-sm': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'elegant-md': '0 4px 16px rgba(0, 0, 0, 0.15)',
        'elegant-lg': '0 8px 32px rgba(0, 0, 0, 0.2)',
        'elegant-xl': '0 16px 64px rgba(0, 0, 0, 0.25)',
        'elegant-2xl': '0 32px 128px rgba(0, 0, 0, 0.3)',
        'glow-gold': '0 0 20px rgba(250, 204, 21, 0.3)',
        'glow-white': '0 0 20px rgba(255, 255, 255, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: '200px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(250, 204, 21, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(250, 204, 21, 0.4)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
      },
      borderRadius: {
        'luxury': '2rem',
        'elegant': '1.5rem',
      },
      aspectRatio: {
        'portrait': '4/5',
        'hero': '16/9',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'elegant': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
        '1500': '1500ms',
      },
      zIndex: {
        '-1': '-1',
        '100': '100',
        '1000': '1000',
      },
    },
  },
  plugins: [
    // Add custom plugin for luxury utilities
    function({ addUtilities }) {
      const newUtilities = {
        '.text-gradient-gold': {
          background: 'linear-gradient(135deg, #facc15 0%, #fde047 50%, #eab308 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'color': 'transparent',
        },
        '.text-gradient-silver': {
          background: 'linear-gradient(135deg, #f8f8f8 0%, #e5e5e5 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'color': 'transparent',
        },
        '.glass-effect': {
          'backdrop-filter': 'blur(16px) saturate(180%)',
          '-webkit-backdrop-filter': 'blur(16px) saturate(180%)',
          'background-color': 'rgba(255, 255, 255, 0.1)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.luxury-border': {
          'border-image': 'linear-gradient(135deg, #facc15 0%, #fde047 100%) 1',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}