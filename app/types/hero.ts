// src/types/hero.ts
export interface HeroContent {
    tagline: string
    headline: {
      line1: string
      line2: string
      line3: string
    }
    description: string
    buttons: {
      primary: CTAButton
      secondary: CTAButton
    }
  }
  
  export interface CTAButton {
    text: string
    href: string
    variant: 'primary' | 'secondary'
    onClick?: () => void
  }
  
  export interface HeroImage {
    src: string
    alt: string
    width: number
    height: number
    decorativeIcon?: string
    decorativeColor?: string
  }
  
  export interface ImageGridProps {
    images: HeroImage[]
    className?: string
  }
  
  export interface HeroSectionProps {
    content: HeroContent
    images: HeroImage[]
    className?: string
  }
  
  export interface DecorativeElement {
    id: string
    type: 'circle' | 'star' | 'diamond' | 'heart'
    position: {
      top?: string
      bottom?: string
      left?: string
      right?: string
    }
    size: 'sm' | 'md' | 'lg'
    color: string
    animation?: 'pulse' | 'bounce' | 'none'
    delay?: number
  }