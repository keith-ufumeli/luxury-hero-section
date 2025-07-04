// src/components/DecorativeElements.tsx
"use client"

import React from 'react'
import { DecorativeElement } from '@/types/hero'

interface DecorativeElementsProps {
  elements: DecorativeElement[]
  className?: string
}

const DecorativeElements: React.FC<DecorativeElementsProps> = ({ 
  elements, 
  className = '' 
}) => {
  const getSizeClasses = (size: DecorativeElement['size']) => {
    switch (size) {
      case 'sm':
        return 'w-2 h-2 sm:w-3 sm:h-3'
      case 'md':
        return 'w-4 h-4 sm:w-5 sm:h-5'
      case 'lg':
        return 'w-6 h-6 sm:w-8 sm:h-8'
      default:
        return 'w-4 h-4 sm:w-5 sm:h-5'
    }
  }

  const getAnimationClasses = (animation: DecorativeElement['animation']) => {
    switch (animation) {
      case 'pulse':
        return 'animate-pulse-gold'
      case 'bounce':
        return 'animate-bounce-gentle'
      case 'none':
      default:
        return ''
    }
  }

  const getPositionStyles = (position: DecorativeElement['position']) => {
    return {
      top: position.top,
      bottom: position.bottom,
      left: position.left,
      right: position.right,
      transform: position.left === '50%' ? 'translateX(-50%)' : undefined,
    }
  }

  const getDelayStyle = (delay?: number) => {
    return delay ? { animationDelay: `${delay}ms` } : {}
  }

  const getElementContent = (type: DecorativeElement['type']) => {
    switch (type) {
      case 'star':
        return '✦'
      case 'diamond':
        return '◆'
      case 'heart':
        return '♥'
      case 'circle':
      default:
        return null
    }
  }

  return (
    <>
      {elements.map((element) => {
        const content = getElementContent(element.type)
        
        return (
          <div
            key={element.id}
            className={`
              absolute opacity-20 hover:opacity-40 transition-opacity duration-500
              ${getSizeClasses(element.size)}
              ${getAnimationClasses(element.animation)}
              ${className}
            `}
            style={{
              ...getPositionStyles(element.position),
              ...getDelayStyle(element.delay),
            }}
          >
            {/* Glow Effect */}
            <div className={`
              absolute inset-0 rounded-full blur-sm
              ${element.color}
              opacity-60
            `} />
            
            {/* Main Element */}
            <div className={`
              relative w-full h-full rounded-full flex items-center justify-center
              ${element.color}
              shadow-luxury-sm
            `}>
              {content && (
                <span className="text-white text-xs font-bold" aria-hidden="true">
                  {content}
                </span>
              )}
            </div>
            
            {/* Additional Glow Ring */}
            <div className={`
              absolute inset-0 rounded-full blur-md opacity-30
              ${element.color}
              scale-150
            `} />
          </div>
        )
      })}
    </>
  )
}

export default DecorativeElements