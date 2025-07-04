// src/app/fonts.ts
// Google Fonts configuration using Next.js 15

import { Cinzel, Source_Sans_3 } from 'next/font/google'

export const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cinzel',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-sans',
  weight: ['300', '400', '500', '600', '700'],
})

// Alternative: Local font import (if you have custom fonts)
// import localFont from 'next/font/local'
// 
// export const customFont = localFont({
//   src: './fonts/CustomFont.woff2',
//   display: 'swap',
//   variable: '--font-custom',
// })