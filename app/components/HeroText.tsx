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
    <div className={`space-y-6 sm:space-y-8 lg:space-y-10 ${className}`}>
      
      {/* Tagline */}
      <div className="hero-text">
        <p className="tagline text-luxury-gold-300 opacity-90 relative inline-block">
          <span className="inline-block mr-2 text-luxury-gold-400 animate-pulse" aria-hidden="true">
            ✨
          </span>
          <span className="relative">
            {tagline}
            <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-luxury-gold-400 via-luxury-gold-300 to-transparent opacity-60"></span>
          </span>
        </p>
      </div>
      
      {/* Main Headline */}
      <div className="hero-text">
        <h1 className="headline text-white relative">
          <span className="block leading-none">{headline.line1}</span>
          <span className="block text-gradient-gold leading-none my-2 sm:my-3 lg:my-4 relative">
            {headline.line2}
            <span className="absolute -inset-4 bg-luxury-gold-400/10 blur-xl rounded-full opacity-50 animate-pulse-gold"></span>
          </span>
          <span className="block text-luxury-pearl leading-none">{headline.line3}</span>
        </h1>
      </div>
      
      {/* Description */}
      <div className="hero-text">
        <p className="description text-neutral-300 max-w-lg mx-auto lg:mx-0 relative">
          {description}
        </p>
      </div>
      
      {/* CTA Buttons */}
      <div className="hero-text">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center">
          <CTAButton
            {...buttons.primary}
            className="w-full sm:w-auto min-w-[200px] relative group"
            aria-label={`${buttons.primary.text} - Browse our luxury jewelry collection`}
          />
          <CTAButton
            {...buttons.secondary}
            className="w-full sm:w-auto min-w-[200px] relative group"
            aria-label={`${buttons.secondary.text} - Discover our precious gems`}
          />
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="hero-text opacity-60">
        <div className="flex justify-center lg:justify-start space-x-8 text-luxury-gold-400/40">
          <div className="text-xs animate-bounce-gentle">◆</div>
          <div className="text-xs animate-bounce-gentle animation-delay-500">✦</div>
          <div className="text-xs animate-bounce-gentle animation-delay-1000">◆</div>
        </div>
      </div>
    </div>
  )
}

export default HeroText