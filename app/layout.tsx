import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tiar Subrata | Software Engineer',
  description: 'Software Engineer specializing in web development, with expertise in React, TypeScript, and modern web technologies.',
  keywords: ['software engineer', 'web developer', 'react', 'typescript', 'frontend developer'],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  authors: [{ name: 'Tiar Subrata' }],
  creator: 'Tiar Subrata',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tiarsubrata.dev',
    siteName: 'Tiar Subrata',
    title: 'Tiar Subrata | Software Engineer',
    description: 'Software Engineer specializing in web development, with expertise in React, TypeScript, and modern web technologies.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tiar Subrata - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiar Subrata | Software Engineer',
    description: 'Software Engineer specializing in web development, with expertise in React, TypeScript, and modern web technologies.',
    images: ['/og-image.png'],
    creator: '@tiarsubrata',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} text-white bg-white dark:bg-[#041c23] antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
