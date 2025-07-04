// src/components/HeroText.tsx
import React from 'react'
import { HeroContent } from '@/types/hero'
import CTAButton from './CTAButton'

interface HeroTextProps {
  content: HeroContent
  className?: string
}

const HeroText: React.FC<HeroTextProps> = ({ content, className = '' }) => {
  const { tagline, headline, description, buttons } = content

  return (
    <div className={`w-full lg:w-1/2 lg:pr-16 text-center lg:text-left ${className}`}>
      
      {/* Tagline */}
      <div className="hero-text mb-6">
        <p className="text-amber-300 text-sm md:text-base font-medium tracking-widest uppercase opacity-90">
          <span className="inline-block mr-2" aria-hidden="true">✨</span>
          {tagline}
        </p>
      </div>
      
      {/* Main Headline */}
      <div className="hero-text mb-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight font-serif">
          <span className="block text-white">{headline.line1}</span>
          <span className="block text-amber-400 text-gradient-gold">{headline.line2}</span>
          <span className="block text-white">{headline.line3}</span>
        </h1>
      </div>
      
      {/* Description */}
      <div className="hero-text mb-10">
        <p className="text-neutral-300 text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed text-balance">
          {description}
        </p>
      </div>
      
      {/* CTA Buttons */}
      <div className="hero-text flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <CTAButton
          {...buttons.primary}
          aria-label={`${buttons.primary.text} - Browse our luxury jewelry collection`}
        />
        <CTAButton
          {...buttons.secondary}
          aria-label={`${buttons.secondary.text} - Discover our precious gems`}
        />
      </div>
    </div>
  )
}

export default HeroText