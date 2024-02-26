import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
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
        {/* <Navbar /> */}
        {children}
        <Footer />
        <PrelineScript />
        <Analytics />
      </body>
    </html>
  )
}
