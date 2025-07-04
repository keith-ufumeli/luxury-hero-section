// src/styles/theme.ts
// Luxury theme configuration with semantic color names

export const luxuryTheme = {
    colors: {
      // Primary palette
      gold: {
        50: '#fffdf2',
        100: '#fefce8',
        200: '#fef9c3',
        300: '#fef08a',
        400: '#facc15', // Primary gold
        500: '#eab308',
        600: '#ca8a04',
        700: '#a16207',
        800: '#854d0e',
        900: '#713f12',
      },
      // Premium blacks and grays
      luxury: {
        black: '#0a0a0a',
        charcoal: '#1a1a1a',
        slate: '#2a2a2a',
        silver: '#8a8a8a',
        pearl: '#f8f8f8',
      },
      // Accent colors for decorative elements
      accent: {
        rose: '#f43f5e',
        emerald: '#10b981',
        sapphire: '#3b82f6',
        amethyst: '#8b5cf6',
      }
    },
    gradients: {
      // Hero background gradients
      hero: {
        primary: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 40%, #2a2a2a 70%, #000000 100%)',
        overlay: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
      },
      // Text gradients
      text: {
        gold: 'linear-gradient(135deg, #facc15 0%, #fde047 50%, #eab308 100%)',
        silver: 'linear-gradient(135deg, #f8f8f8 0%, #e5e5e5 100%)',
      },
      // Button gradients
      button: {
        primary: 'linear-gradient(135deg, #facc15 0%, #fde047 100%)',
        primaryHover: 'linear-gradient(135deg, #fde047 0%, #facc15 100%)',
        secondary: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 100%)',
      }
    },
    typography: {
      // Font families
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      // Typography scales
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
      }
    },
    spacing: {
      // Custom spacing scale
      '18': '4.5rem',   // 72px
      '88': '22rem',    // 352px
      '100': '25rem',   // 400px
      '112': '28rem',   // 448px
      '128': '32rem',   // 512px
    },
    shadows: {
      // Luxury shadow system
      luxury: {
        sm: '0 2px 8px rgba(250, 204, 21, 0.1)',
        md: '0 4px 16px rgba(250, 204, 21, 0.15)',
        lg: '0 8px 32px rgba(250, 204, 21, 0.2)',
        xl: '0 16px 64px rgba(250, 204, 21, 0.25)',
        '2xl': '0 32px 128px rgba(250, 204, 21, 0.3)',
      },
      elegant: {
        sm: '0 2px 8px rgba(0, 0, 0, 0.1)',
        md: '0 4px 16px rgba(0, 0, 0, 0.15)',
        lg: '0 8px 32px rgba(0, 0, 0, 0.2)',
        xl: '0 16px 64px rgba(0, 0, 0, 0.25)',
        '2xl': '0 32px 128px rgba(0, 0, 0, 0.3)',
      }
    },
    animation: {
      // Custom animations
      'fade-in': 'fadeIn 0.8s ease-in-out',
      'slide-up': 'slideUp 0.8s ease-out',
      'slide-in-left': 'slideInLeft 0.8s ease-out',
      'slide-in-right': 'slideInRight 0.8s ease-out',
      'scale-in': 'scaleIn 0.6s ease-out',
      'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
      'pulse-gold': 'pulseGold 3s ease-in-out infinite',
      'shimmer': 'shimmer 2s ease-in-out infinite',
    }
  }
  
  // CSS-in-JS utility for gradients
  export const gradientStyles = {
    heroBackground: {
      background: luxuryTheme.gradients.hero.primary,
    },
    textGold: {
      background: luxuryTheme.gradients.text.gold,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    buttonPrimary: {
      background: luxuryTheme.gradients.button.primary,
    },
  }