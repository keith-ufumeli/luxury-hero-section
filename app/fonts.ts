// src/app/fonts.ts
// Google Fonts configuration using Next.js 15

import { Inter, Playfair_Display } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
})

// Alternative: Local font import (if you have custom fonts)
// import localFont from 'next/font/local'
// 
// export const customFont = localFont({
//   src: './fonts/CustomFont.woff2',
//   display: 'swap',
//   variable: '--font-custom',
// })