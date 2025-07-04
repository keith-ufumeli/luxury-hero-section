// src/lib/gsap.ts
// GSAP utilities and configuration

import { gsap } from 'gsap'

// Animation presets
export const animationPresets = {
  fadeInUp: {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  },
  fadeInScale: {
    scale: 0.9,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  },
  slideInLeft: {
    x: -40,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  },
  slideInRight: {
    x: 40,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  },
}

// Custom animation functions
export const createHeroTimeline = () => {
  const tl = gsap.timeline({ 
    defaults: { 
      ease: 'power3.out',
      duration: 1 
    } 
  })
  
  return tl
}

export const animateHeroElements = () => {
  const tl = createHeroTimeline()
  
  // Animate text elements with stagger
  tl.from('.hero-text', {
    ...animationPresets.fadeInUp,
    stagger: 0.2,
  })
  
  // Animate images with stagger
  tl.from('.hero-image', {
    ...animationPresets.fadeInScale,
    stagger: 0.2,
  }, '-=0.8') // Start 0.8 seconds before the previous animation ends
  
  return tl
}

// Utility to check if animations should be enabled
export const shouldAnimate = () => {
  if (typeof window === 'undefined') return false
  
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  return !prefersReducedMotion.matches
}

// Clean up GSAP animations on unmount
export const killGSAPAnimations = (selector?: string) => {
  if (selector) {
    gsap.killTweensOf(selector)
  } else {
    gsap.killTweensOf('*')
  }
}