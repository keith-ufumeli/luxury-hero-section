// src/app/layout.tsx
import { inter, playfair } from './fonts'
import './globals.css'

export const metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' 
    ? 'https://luxury-hero-section.vercel.app' 
    : 'http://localhost:3000'
  ),
  title: 'Luxury Jewelry Collection',
  description: 'Adorned with meaning, worn with love. Discover our exquisite collection of luxury jewelry.',
  keywords: 'luxury jewelry, diamonds, gold, rings, necklaces, bracelets',
  openGraph: {
    title: 'Luxury Jewelry Collection',
    description: 'Adorned with meaning, worn with love. Discover our exquisite collection of luxury jewelry.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LUXE Jewelry',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Jewelry Collection',
    description: 'Adorned with meaning, worn with love. Discover our exquisite collection of luxury jewelry.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#facc15" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}