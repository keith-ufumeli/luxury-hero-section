// src/components/CTAButton.tsx
import React from 'react'
import { CTAButton as CTAButtonType } from '@/types/hero'

interface CTAButtonProps extends CTAButtonType {
  className?: string
  'aria-label'?: string
}

const CTAButton: React.FC<CTAButtonProps> = ({
  text,
  href,
  variant = 'primary',
  onClick,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const baseClasses = `
    inline-flex items-center justify-center
    px-8 py-4 rounded-full font-semibold
    transition-all duration-300 transform
    hover:scale-105 focus:outline-none focus:ring-4
    focus:ring-amber-400/50 active:scale-95
    whitespace-nowrap
  `

  const variantClasses = {
    primary: `
      bg-amber-400 text-black shadow-lg
      hover:bg-amber-500 hover:shadow-xl
      focus:bg-amber-500
    `,
    secondary: `
      border-2 border-white text-white
      hover:bg-white hover:text-black
      focus:bg-white focus:text-black
    `,
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      e.preventDefault()
      onClick()
    }
  }

  const buttonContent = (
    <span className="relative z-10">
      {text}
    </span>
  )

  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${className}
  `

  if (href && !onClick) {
    return (
      <a
        href={href}
        className={combinedClasses}
        aria-label={ariaLabel || text}
        role="button"
      >
        {buttonContent}
      </a>
    )
  }

  return (
    <button
      onClick={handleClick}
      className={combinedClasses}
      aria-label={ariaLabel || text}
      type="button"
    >
      {buttonContent}
    </button>
  )
}

export default CTAButton