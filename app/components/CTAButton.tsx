// src/components/CTAButton.tsx
import React from 'react'
import { CTAButton as CTAButtonType } from '@/types/hero'

interface CTAButtonProps extends Omit<CTAButtonType, 'href' | 'onClick'> {
  className?: string
  'aria-label'?: string
}

const CTAButton: React.FC<CTAButtonProps> = ({
  text,
  variant = 'primary',
  className = '',
  'aria-label': ariaLabel,
}) => {
  const baseClasses = `
    inline-flex items-center justify-center
    px-10 py-4 font-semibold
    transition-all duration-500 transform
    hover:scale-105 focus:outline-none focus:ring-4
    focus:ring-amber-400/30 active:scale-95
    whitespace-nowrap cursor-pointer
    relative overflow-hidden
  `

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-amber-400 to-amber-500 text-black
      shadow-[0_8px_32px_rgba(250,204,21,0.3)]
      hover:shadow-[0_12px_40px_rgba(250,204,21,0.4)]
      hover:from-amber-500 hover:to-amber-600
      focus:from-amber-500 focus:to-amber-600
      rounded-[2rem]
    `,
    secondary: `
      border-2 border-white/80 text-white
      hover:bg-white/10 hover:border-white
      focus:bg-white/10 focus:border-white
      backdrop-blur-sm
      rounded-[2rem]
    `,
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault()
    // Disable navigation - buttons are now decorative
    console.log('Button clicked:', text)
  }

  const buttonContent = (
    <span className="relative z-10 font-medium tracking-wide">
      {text}
    </span>
  )

  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${className}
  `

  return (
    <button
      onClick={handleClick}
      className={combinedClasses}
      aria-label={ariaLabel || text}
      type="button"
      disabled={false}
    >
      {buttonContent}
    </button>
  )
}

export default CTAButton