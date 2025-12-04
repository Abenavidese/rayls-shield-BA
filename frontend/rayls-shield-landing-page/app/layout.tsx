import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'RaylsShield - Privacidad Institucional para Rayls',
  description: 'Transacciones privadas con cumplimiento regulatorio mediante Zero-Knowledge Proofs',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/images/image.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/images/image.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: '/images/image.png',
    shortcut: '/images/image.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
