// src/components/ImageGrid.tsx
import React from 'react'
import Image from 'next/image'
import { HeroImage } from '@/types/hero'

interface ImageGridProps {
  images: HeroImage[]
  className?: string
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, className = '' }) => {
  const gridPositions = [
    { className: 'hero-image', containerClass: '' },
    { className: 'hero-image', containerClass: 'mt-8' },
    { className: 'hero-image', containerClass: '-mt-4' },
    { className: 'hero-image', containerClass: '' },
  ]

  const decorativePositions = [
    { position: '-top-2 -right-2', icon: '✦' },
    { position: '-bottom-2 -left-2', icon: '♥' },
    { position: '-top-2 -right-2', icon: '◆' },
    { position: '-bottom-2 -left-2', icon: '✨' },
  ]

  return (
    <div className={`w-full lg:w-1/2 ${className}`}>
      <div className="relative max-w-md mx-auto">
        
        {/* Main Image Grid */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${gridPositions[index]?.className} ${gridPositions[index]?.containerClass} relative`}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-neutral-200 to-neutral-300">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  priority={index < 2} // Prioritize first two images
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                />
              </div>
              
              {/* Decorative Icon */}
              {image.decorativeIcon && (
                <div className={`
                  absolute w-6 h-6 rounded-full flex items-center justify-center
                  ${decorativePositions[index]?.position}
                  ${image.decorativeColor}
                  shadow-lg
                `}>
                  <span className="text-white text-xs font-bold" aria-hidden="true">
                    {image.decorativeIcon}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Floating Decorative Elements */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-amber-400 rounded-full opacity-20 animate-bounce" />
        <div className="absolute -bottom-6 right-1/4 w-6 h-6 bg-rose-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '500ms' }} />
      </div>
    </div>
  )
}

export default ImageGrid