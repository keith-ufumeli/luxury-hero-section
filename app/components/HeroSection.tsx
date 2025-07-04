// src/components/HeroSection.tsx
"use client"

import React, { useEffect, useRef, useState } from 'react'
import { HeroSectionProps } from '@/types/hero'
import HeroText from './HeroText'
import ImageGrid from './ImageGrid'
import DecorativeElements from './DecorativeElements'
import { decorativeElements } from '@/data/heroContent'
import { animateHeroElements, shouldAnimate } from '@/lib/gsap'

const HeroSection: React.FC<HeroSectionProps> = ({ 
  content, 
  images, 
  className = '' 
}) => {
  const heroRef = useRef<HTMLElement>(null)
  const animationRef = useRef<GSAPTimeline | null>(null)
  const [animationFailed, setAnimationFailed] = useState(false)

  useEffect(() => {
    // Fallback timer to ensure content is visible
    const fallbackTimer = setTimeout(() => {
      setAnimationFailed(true)
    }, 3000) // 3 seconds fallback

    if (!shouldAnimate()) {
      setAnimationFailed(true)
      return
    }

    try {
      // Initialize GSAP animations
      animationRef.current = animateHeroElements()
      
      // Cleanup function
      return () => {
        clearTimeout(fallbackTimer)
        if (animationRef.current) {
          animationRef.current.kill()
        }
      }
    } catch (error) {
      console.error('GSAP animation failed:', error)
      setAnimationFailed(true)
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className={`
        relative min-h-screen overflow-hidden
        bg-gradient-to-br from-luxury-black via-luxury-charcoal to-luxury-black
        ${className}
      `}
      aria-label="Hero section showcasing luxury jewelry collection"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(250,204,21,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(250,204,21,0.05)_0%,transparent_50%)]" />
      </div>
      
      {/* Background Decorative Elements */}
      <DecorativeElements 
        elements={decorativeElements}
        className="z-0"
      />
      
      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-6rem)] lg:min-h-[calc(100vh-12rem)]">
          
          {/* Left Column - Text Content */}
          <div className={`w-full lg:w-1/2 lg:pr-12 xl:pr-16 text-center lg:text-left order-2 lg:order-1 ${animationFailed ? 'opacity-100' : ''}`}>
            <HeroText 
              content={content}
              className="max-w-2xl mx-auto lg:mx-0"
            />
          </div>
          
          {/* Right Column - Image Grid */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-8 sm:mb-12 lg:mb-0">
            <ImageGrid 
              images={images}
              className="relative z-10"
            />
          </div>
        </div>
      </div>
      
      {/* Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/30 via-transparent to-transparent pointer-events-none z-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/20 via-transparent to-transparent pointer-events-none z-5" />
      
      {/* Subtle Animated Glow Effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold-400/5 rounded-full blur-3xl animate-pulse-gold pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-luxury-gold-300/3 rounded-full blur-3xl animate-pulse-gold animation-delay-2000 pointer-events-none" />
    </section>
  )
}

export default HeroSection