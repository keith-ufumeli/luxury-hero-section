// src/lib/utils.ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Utility for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Image optimization helpers
export const getOptimizedImageUrl = (
  src: string,
  width: number,
  height: number,
  quality: number = 80
): string => {
  // For Unsplash images, add optimization parameters
  if (src.includes('unsplash.com')) {
    const url = new URL(src)
    url.searchParams.set('w', width.toString())
    url.searchParams.set('h', height.toString())
    url.searchParams.set('fit', 'crop')
    url.searchParams.set('crop', 'center')
    url.searchParams.set('q', quality.toString())
    return url.toString()
  }
  return src
}

// Animation delay helpers
export const getStaggerDelay = (index: number, baseDelay: number = 200): number => {
  return index * baseDelay
}

// Responsive breakpoint helpers
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

export const isClient = typeof window !== 'undefined'

// Accessibility helpers
export const getAriaLabel = (
  text: string,
  context?: string
): string => {
  return context ? `${text} - ${context}` : text
}

// Performance helpers
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

export const preloadImages = async (images: string[]): Promise<void[]> => {
  return Promise.all(images.map(preloadImage))
}