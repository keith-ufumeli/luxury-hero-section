// src/styles/responsive.ts
// Responsive design utilities and breakpoint system

import { useState, useEffect } from 'react'

export const breakpoints = {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    '3xl': '1920px',
  } as const
  
  export const containerMaxWidths = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1400px',
  } as const
  
  // Responsive typography scale
  export const responsiveTypography = {
    tagline: {
      fontSize: 'clamp(0.75rem, 2vw, 1rem)',
      lineHeight: '1.5',
      letterSpacing: '0.1em',
    },
    headline: {
      fontSize: 'clamp(2rem, 6vw, 4rem)',
      lineHeight: '1.1',
      letterSpacing: '-0.02em',
    },
    description: {
      fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
      lineHeight: '1.6',
      letterSpacing: '0.01em',
    },
    button: {
      fontSize: 'clamp(0.875rem, 2vw, 1rem)',
      lineHeight: '1.5',
      letterSpacing: '0.025em',
    },
  } as const
  
  // Responsive spacing system
  export const responsiveSpacing = {
    sectionPadding: {
      mobile: '4rem 1.5rem',
      tablet: '6rem 2rem',
      desktop: '8rem 3rem',
    },
    containerPadding: {
      mobile: '1rem',
      tablet: '1.5rem',
      desktop: '2rem',
    },
    gridGap: {
      mobile: '1rem',
      tablet: '1.5rem',
      desktop: '2rem',
    },
  } as const
  
  // Media query utilities
  export const mediaQueries = {
    xs: `@media (min-width: ${breakpoints.xs})`,
    sm: `@media (min-width: ${breakpoints.sm})`,
    md: `@media (min-width: ${breakpoints.md})`,
    lg: `@media (min-width: ${breakpoints.lg})`,
    xl: `@media (min-width: ${breakpoints.xl})`,
    '2xl': `@media (min-width: ${breakpoints['2xl']})`,
    '3xl': `@media (min-width: ${breakpoints['3xl']})`,
    
    // Max-width queries
    'max-xs': `@media (max-width: ${breakpoints.xs})`,
    'max-sm': `@media (max-width: ${breakpoints.sm})`,
    'max-md': `@media (max-width: ${breakpoints.md})`,
    'max-lg': `@media (max-width: ${breakpoints.lg})`,
    'max-xl': `@media (max-width: ${breakpoints.xl})`,
    
    // Orientation queries
    portrait: '@media (orientation: portrait)',
    landscape: '@media (orientation: landscape)',
    
    // Device-specific queries
    mobile: '@media (max-width: 767px)',
    tablet: '@media (min-width: 768px) and (max-width: 1023px)',
    desktop: '@media (min-width: 1024px)',
    
    // Touch and interaction queries
    hover: '@media (hover: hover)',
    'no-hover': '@media (hover: none)',
    'fine-pointer': '@media (pointer: fine)',
    'coarse-pointer': '@media (pointer: coarse)',
    
    // Accessibility queries
    'reduced-motion': '@media (prefers-reduced-motion: reduce)',
    'high-contrast': '@media (prefers-contrast: high)',
    'dark-mode': '@media (prefers-color-scheme: dark)',
    'light-mode': '@media (prefers-color-scheme: light)',
  } as const
  
  // Responsive image sizes
  export const responsiveImageSizes = {
    hero: {
      mobile: '(max-width: 768px) 100vw',
      tablet: '(max-width: 1024px) 50vw',
      desktop: '25vw',
    },
    grid: {
      mobile: '(max-width: 768px) 50vw',
      tablet: '(max-width: 1024px) 33vw',
      desktop: '25vw',
    },
  } as const
  
  // CSS custom properties for responsive design
  export const responsiveCSSVariables = `
    :root {
      /* Responsive spacing */
      --spacing-xs: clamp(0.25rem, 1vw, 0.5rem);
      --spacing-sm: clamp(0.5rem, 2vw, 1rem);
      --spacing-md: clamp(1rem, 3vw, 2rem);
      --spacing-lg: clamp(2rem, 5vw, 4rem);
      --spacing-xl: clamp(3rem, 8vw, 6rem);
      --spacing-2xl: clamp(4rem, 10vw, 8rem);
      
      /* Responsive typography */
      --font-size-xs: clamp(0.75rem, 1.5vw, 0.875rem);
      --font-size-sm: clamp(0.875rem, 2vw, 1rem);
      --font-size-base: clamp(1rem, 2.5vw, 1.125rem);
      --font-size-lg: clamp(1.125rem, 3vw, 1.25rem);
      --font-size-xl: clamp(1.25rem, 3.5vw, 1.5rem);
      --font-size-2xl: clamp(1.5rem, 4vw, 2rem);
      --font-size-3xl: clamp(1.875rem, 5vw, 2.5rem);
      --font-size-4xl: clamp(2.25rem, 6vw, 3rem);
      --font-size-5xl: clamp(2.5rem, 7vw, 4rem);
      --font-size-6xl: clamp(3rem, 8vw, 4.5rem);
      
      /* Container widths */
      --container-xs: 20rem;
      --container-sm: 24rem;
      --container-md: 28rem;
      --container-lg: 32rem;
      --container-xl: 36rem;
      --container-2xl: 42rem;
      --container-3xl: 48rem;
      --container-4xl: 56rem;
      --container-5xl: 64rem;
      --container-6xl: 72rem;
      --container-7xl: 80rem;
      
      /* Responsive borders */
      --border-radius-sm: clamp(0.25rem, 1vw, 0.5rem);
      --border-radius-md: clamp(0.5rem, 2vw, 1rem);
      --border-radius-lg: clamp(1rem, 3vw, 2rem);
      --border-radius-xl: clamp(1.5rem, 4vw, 3rem);
    }
    
    /* Mobile-first responsive adjustments */
    @media (max-width: 640px) {
      :root {
        --section-padding: 2rem 1rem;
        --grid-gap: 1rem;
        --button-padding: 0.75rem 1.5rem;
      }
    }
    
    @media (min-width: 641px) and (max-width: 1024px) {
      :root {
        --section-padding: 4rem 2rem;
        --grid-gap: 1.5rem;
        --button-padding: 1rem 2rem;
      }
    }
    
    @media (min-width: 1025px) {
      :root {
        --section-padding: 6rem 3rem;
        --grid-gap: 2rem;
        --button-padding: 1rem 2rem;
      }
    }
  `
  
  // React hook for responsive design
  export const useResponsive = () => {
    const [windowSize, setWindowSize] = useState({
      width: typeof window !== 'undefined' ? window.innerWidth : 0,
      height: typeof window !== 'undefined' ? window.innerHeight : 0,
    })
    
    useEffect(() => {
      if (typeof window === 'undefined') return
      
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
      
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])
    
    const isMobile = windowSize.width < 768
    const isTablet = windowSize.width >= 768 && windowSize.width < 1024
    const isDesktop = windowSize.width >= 1024
    const isLarge = windowSize.width >= 1280
    const isExtraLarge = windowSize.width >= 1536
    
    return {
      windowSize,
      isMobile,
      isTablet,
      isDesktop,
      isLarge,
      isExtraLarge,
      breakpoint: isMobile ? 'mobile' : isTablet ? 'tablet' : isDesktop ? 'desktop' : 'large',
    }
  }
  
  // Responsive utility functions
  export const getResponsiveValue = (
    mobile: string | number,
    tablet?: string | number,
    desktop?: string | number
  ) => {
    return {
      mobile,
      tablet: tablet || mobile,
      desktop: desktop || tablet || mobile,
    }
  }
  
  export const createResponsiveStyles = (
    property: string,
    values: { mobile: string | number; tablet?: string | number; desktop?: string | number }
  ) => {
    return {
      [property]: values.mobile,
      [mediaQueries.md]: {
        [property]: values.tablet || values.mobile,
      },
      [mediaQueries.lg]: {
        [property]: values.desktop || values.tablet || values.mobile,
      },
    }
  }