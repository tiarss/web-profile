import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Portfolio | Tiar Subrata - Software Engineer',
    description: 'Explore my portfolio showcasing web development projects and expertise in React, TypeScript, Next.js, and modern web technologies.',
    keywords: ['software engineer', 'web developer', 'react', 'typescript', 'next.js', 'frontend developer', 'portfolio'],
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    authors: [{ name: 'Tiar Subrata' }],
    creator: 'Tiar Subrata',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://tiarsubrata.dev/portfolio',
      siteName: 'Tiar Subrata',
      title: 'Portfolio | Tiar Subrata - Software Engineer',
      description: 'Explore my portfolio showcasing web development projects and expertise in React, TypeScript, Next.js, and modern web technologies.',
      images: [
        {
          url: '/portfolio-og.png',
          width: 1200,
          height: 630,
          alt: 'Tiar Subrata Portfolio - Software Engineer',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Portfolio | Tiar Subrata - Software Engineer',
      description: 'Explore my portfolio showcasing web development projects and expertise in React, TypeScript, Next.js, and modern web technologies.',
      images: ['/portfolio-og.png'],
      creator: '@tiarsubrata',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }

export default function PortfolioPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">My Portfolio</h1>
        <p className="text-lg">{`Welcome to my portfolio page. Here you'll find a collection of my work and projects.`}</p>
      </div>
    </main>
  );
}
