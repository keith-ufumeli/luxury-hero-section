// src/data/heroContent.ts
import { HeroContent, HeroImage, DecorativeElement } from '@/types/hero'

export const heroContent: HeroContent = {
  tagline: "For the Moments That Matter Most",
  headline: {
    line1: "Adorned with",
    line2: "Meaning,",
    line3: "Worn with Love"
  },
  description: "Each delicate design carries the warmth of a feeling, the magic of a moment, and the beauty of a promise kept.",
  buttons: {
    primary: {
      text: "DISCOVER PIECES",
      href: "#",
      variant: "primary"
    },
    secondary: {
      text: "VIEW GALLERY",
      href: "#",
      variant: "secondary"
    }
  }
}

export const heroImages: HeroImage[] = [
  {
    src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop&crop=center",
    alt: "Elegant diamond necklace showcasing timeless beauty",
    width: 400,
    height: 500,
    decorativeIcon: "✦",
    decorativeColor: "bg-amber-400"
  },
  {
    src: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=500&fit=crop&crop=center",
    alt: "Luxury gold bracelet with intricate craftsmanship",
    width: 400,
    height: 500,
    decorativeIcon: "♥",
    decorativeColor: "bg-rose-400"
  },
  {
    src: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=500&fit=crop&crop=center",
    alt: "Sapphire ring collection with precious stones",
    width: 400,
    height: 500,
    decorativeIcon: "◆",
    decorativeColor: "bg-blue-400"
  },
  {
    src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=500&fit=crop&crop=center",
    alt: "Emerald earrings with brilliant cut gems",
    width: 400,
    height: 500,
    decorativeIcon: "✨",
    decorativeColor: "bg-emerald-400"
  }
]

export const decorativeElements: DecorativeElement[] = [
  {
    id: "floating-star-1",
    type: "star",
    position: { top: "20%", left: "10%" },
    size: "md",
    color: "bg-amber-400",
    animation: "pulse",
    delay: 0
  },
  {
    id: "floating-circle-1",
    type: "circle",
    position: { top: "40%", right: "20%" },
    size: "sm",
    color: "bg-amber-300",
    animation: "pulse",
    delay: 1000
  },
  {
    id: "floating-diamond-1",
    type: "diamond",
    position: { bottom: "32%", left: "20%" },
    size: "sm",
    color: "bg-amber-400",
    animation: "pulse",
    delay: 2000
  },
  {
    id: "floating-main",
    type: "circle",
    position: { top: "-1.5rem", left: "50%" },
    size: "lg",
    color: "bg-amber-400",
    animation: "bounce"
  },
  {
    id: "floating-accent",
    type: "circle",
    position: { bottom: "-1.5rem", right: "25%" },
    size: "md",
    color: "bg-rose-400",
    animation: "pulse",
    delay: 500
  }
]