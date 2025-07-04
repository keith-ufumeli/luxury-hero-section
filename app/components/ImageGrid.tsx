// src/components/ImageGrid.tsx
"use client"

import React from 'react'
import Image from 'next/image'
import { HeroImage } from '@/types/hero'

interface ImageGridProps {
  images: HeroImage[]
  className?: string
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, className = '' }) => {
  const gridPositions = [
    { 
      className: 'hero-image transform hover:scale-105 transition-all duration-700', 
      containerClass: 'relative z-10' 
    },
    { 
      className: 'hero-image transform hover:scale-105 transition-all duration-700', 
      containerClass: 'mt-4 sm:mt-6 lg:mt-8 relative z-20' 
    },
    { 
      className: 'hero-image transform hover:scale-105 transition-all duration-700', 
      containerClass: '-mt-2 sm:-mt-3 lg:-mt-4 relative z-20' 
    },
    { 
      className: 'hero-image transform hover:scale-105 transition-all duration-700', 
      containerClass: 'relative z-10' 
    },
  ]

  const decorativePositions = [
    { 
      position: '-top-2 -right-2 sm:-top-3 sm:-right-3', 
      icon: '✦',
      bgColor: 'bg-luxury-gold-400',
      textColor: 'text-luxury-black'
    },
    { 
      position: '-bottom-2 -left-2 sm:-bottom-3 sm:-left-3', 
      icon: '♥',
      bgColor: 'bg-accent-rose',
      textColor: 'text-white'
    },
    { 
      position: '-top-2 -right-2 sm:-top-3 sm:-right-3', 
      icon: '◆',
      bgColor: 'bg-accent-sapphire',
      textColor: 'text-white'
    },
    { 
      position: '-bottom-2 -left-2 sm:-bottom-3 sm:-left-3', 
      icon: '✨',
      bgColor: 'bg-accent-emerald',
      textColor: 'text-white'
    },
  ]

  return (
    <div className={`w-full ${className}`}>
      <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
        
        {/* Main Image Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${gridPositions[index]?.containerClass} group`}
            >
              <div className={`${gridPositions[index]?.className} aspect-portrait overflow-hidden rounded-luxury shadow-elegant-lg hover:shadow-elegant-xl transition-all duration-700`}>
                {/* Image Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold-100/20 via-luxury-pearl/10 to-luxury-gold-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Main Image */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  priority={index < 2}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Decorative Icon */}
                {image.decorativeIcon && (
                  <div className={`
                    absolute w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 
                    rounded-full flex items-center justify-center
                    shadow-luxury-md hover:shadow-luxury-lg
                    transition-all duration-300 transform hover:scale-110
                    ${decorativePositions[index]?.position}
                    ${decorativePositions[index]?.bgColor}
                    group-hover:animate-pulse-gold
                  `}>
                    <span className={`
                      text-xs sm:text-sm font-bold
                      ${decorativePositions[index]?.textColor}
                    `} aria-hidden="true">
                      {image.decorativeIcon}
                    </span>
                  </div>
                )}
                
                {/* Luxury Border Effect */}
                <div className="absolute inset-0 rounded-luxury border border-luxury-gold-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Floating Decorative Elements */}
        <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-luxury-gold-400/30 rounded-full animate-bounce-gentle blur-sm" />
        <div className="absolute -bottom-4 sm:-bottom-6 right-1/4 w-4 h-4 sm:w-6 sm:h-6 bg-accent-rose/30 rounded-full animate-pulse-gold blur-sm" style={{ animationDelay: '500ms' }} />
        
        {/* Background Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-40 sm:h-40 bg-luxury-gold-400/5 rounded-full blur-2xl animate-pulse-gold pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-28 h-28 sm:w-36 sm:h-36 bg-luxury-gold-300/3 rounded-full blur-2xl animate-pulse-gold pointer-events-none" style={{ animationDelay: '1000ms' }} />
      </div>
    </div>
  )
}

export default ImageGrid