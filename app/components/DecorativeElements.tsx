// src/components/DecorativeElements.tsx
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
        return 'w-2 h-2'
      case 'md':
        return 'w-4 h-4'
      case 'lg':
        return 'w-8 h-8'
      default:
        return 'w-4 h-4'
    }
  }

  const getAnimationClasses = (animation: DecorativeElement['animation']) => {
    switch (animation) {
      case 'pulse':
        return 'animate-pulse'
      case 'bounce':
        return 'animate-bounce'
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

  return (
    <>
      {elements.map((element) => (
        <div
          key={element.id}
          className={`
            absolute rounded-full opacity-20
            ${getSizeClasses(element.size)}
            ${element.color}
            ${getAnimationClasses(element.animation)}
            ${className}
          `}
          style={{
            ...getPositionStyles(element.position),
            ...getDelayStyle(element.delay),
          }}
        />
      ))}
    </>
  )
}

export default DecorativeElements