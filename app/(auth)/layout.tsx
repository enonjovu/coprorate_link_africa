import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import PrelineScript from '../components/PrelineScripts'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Corporate Link Africa',
  description: 'Simplified Business Narratives',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <PrelineScript />
        <Analytics />
      </body>
    </html>
  )
}
