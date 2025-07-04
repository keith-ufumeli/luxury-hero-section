// src/components/index.ts
// Centralized component exports for clean imports

export { default as HeroSection } from './HeroSection'
export { default as HeroText } from './HeroText'
export { default as CTAButton } from './CTAButton'
export { default as ImageGrid } from './ImageGrid'
export { default as DecorativeElements } from './DecorativeElements'
export { default as Navbar } from './Navbar'

// Re-export types for convenience
export type { 
  HeroSectionProps,
  HeroContent,
  HeroImage,
  CTAButton as CTAButtonType,
  ImageGridProps,
  DecorativeElement 
} from '../types/hero'