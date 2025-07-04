// src/app/page.tsx
import React from 'react'
import { HeroSection, Navbar } from '@/components'
import { heroContent, heroImages } from '@/data/heroContent'

export default function HomePage() {
  return (
    <main className="bg-luxury-black">
      <Navbar />
      <HeroSection 
        content={heroContent}
        images={heroImages}
        className="font-sans"
      />
    </main>
  )
}

// Optional: Add metadata for SEO
export const metadata = {
  title: 'Luxury Jewelry Collection - Adorned with Meaning',
  description: 'Discover our exquisite collection of luxury jewelry. Each delicate design carries the warmth of a feeling, the magic of a moment, and the beauty of a promise kept.',
  keywords: 'luxury jewelry, diamonds, gold jewelry, engagement rings, wedding bands, fine jewelry',
  openGraph: {
    title: 'Luxury Jewelry Collection - Adorned with Meaning',
    description: 'Discover our exquisite collection of luxury jewelry.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxury Jewelry Collection',
      },
    ],
  },
}