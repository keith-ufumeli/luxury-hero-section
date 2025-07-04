// src/components/HeroSection.tsx
"use client"

import React, { useEffect, useRef } from 'react'
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

  useEffect(() => {
    if (!shouldAnimate()) {
      return
    }

    try {
      // Initialize GSAP animations
      animationRef.current = animateHeroElements()
      
      // Cleanup function
      return () => {
        if (animationRef.current) {
          animationRef.current.kill()
        }
      }
    } catch (error) {
      console.error('GSAP animation failed:', error)
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className={`
        min-h-screen bg-luxury-gradient relative overflow-hidden pt-20
        ${className}
      `}
      aria-label="Hero section showcasing luxury jewelry collection"
    >
      {/* Background Decorative Elements */}
      <DecorativeElements 
        elements={decorativeElements}
        className="z-0"
      />
      
      {/* Main Content Container */}
      <div className="container mx-auto px-6 py-12 lg:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-5rem)] lg:min-h-0">
          
          {/* Left Column - Text Content */}
          <HeroText 
            content={content}
            className="order-2 lg:order-1"
          />
          
          {/* Right Column - Image Grid */}
          <ImageGrid 
            images={images}
            className="order-1 lg:order-2 mb-8 lg:mb-0"
          />
        </div>
      </div>
      
      {/* Subtle Overlay for Depth */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-5"
        aria-hidden="true"
      />
    </section>
  )
}

export default HeroSection