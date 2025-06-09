import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import ThemeButton from '@/components/ThemeButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tiar Subrata | Frontend Developer',
  description: 'Frontend Developer specializing in web development, with expertise in React, TypeScript, and modern web technologies.',
  keywords: ['Frontend Developer', 'web developer', 'react', 'typescript', 'frontend developer'],
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
    url: 'https://tiarss.vercel.app/',
    siteName: 'Tiar Subrata',
    title: 'Tiar Subrata | Frontend Developer',
    description: 'Frontend Developer specializing in web development, with expertise in React, TypeScript, and modern web technologies.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tiar Subrata - Frontend Developer',
      },
    ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Tiar Subrata | Frontend Developer',
  //   description: 'Frontend Developer specializing in web development, with expertise in React, TypeScript, and modern web technologies.',
  //   images: ['/og-image.png'],
  //   creator: '@tiarsubrata',
  // },
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
          <ThemeButton />
        </Providers>
      </body>
    </html>
  )
}
