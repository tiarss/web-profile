import { PortfolioDetails } from "@/assets/img/const";
import { Metadata } from "next";
import '../globals.css'

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
    <main className="dark:after:infinite-background after:infinite-background-black relative">
      <div className='dark:block hidden absolute top-[-90px] left-1/2 transform -translate-x-1/2 md:w-[900px] h-[150px] rounded-[50%] bg-gradient-to-b from-indigo-900 via-purple-800 to-fuchsia-900 blur-3xl opacity-30' />
      <div className="p-4 md:p-8 lg:p-12 flex min-h-screen flex-col items-center justify-between -z-20">
        <div className="max-w-7xl w-full items-center justify-between font-sans">
          <div className="text-center mb-20 animate-fade-in mt-16 relative">
            <h1 className="relative">
              <span className="inline-block text-6xl md:text-8xl font-bold mb-6 text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-300">
                Portfolio
              </span>
              <div className="mx-auto h-0.5 w-16 bg-gray-900 dark:bg-white rounded-full mt-2"></div>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mt-8 leading-relaxed">
              <span className="font-medium text-gray-900 dark:text-white">
                Welcome to my creative space
              </span>
              <span className="mx-2 text-gray-600 dark:text-gray-400">—</span>
              <span className="text-gray-700 dark:text-gray-300">
                where innovation meets execution through carefully crafted projects.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {PortfolioDetails.map((project, index) => (
              <a key={index} className="relative">
                <div className="relative bg-white dark:bg-gray-800/90 backdrop-blur-lg rounded-xl p-8 flex flex-col h-full shadow-lg border border-gray-100/20 dark:border-gray-700/30">
                  <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white line-clamp-2">
                    {project.title}
                  </h3>

                  <div className="flex items-center mb-2 mt-2">
                    <svg className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="font-medium text-sm text-gray-600 dark:text-gray-300">
                      {project.year}
                    </p>
                  </div>

                  <div className="flex items-center mb-4">
                    <svg className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="font-semibold tracking-wide text-sm text-gray-700 dark:text-gray-200">
                      {project.role}
                    </p>
                  </div>

                  <p className="text-gray-700 dark:text-gray-200 text-base mb-6">
                    {project.longDesc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 
                        bg-gray-100
                        dark:bg-gray-800
                        text-gray-600 dark:text-gray-300
                        rounded-lg text-xs font-medium
                        border border-gray-200 dark:border-gray-700
                        hover:bg-gray-200 dark:hover:bg-gray-700
                        transition-colors duration-150
                        cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center justify-between">
                      {project.status === 'finished' ? (
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-green-100/80 text-green-800 dark:bg-green-900/70 dark:text-green-200">
                          <span className="mr-1.5 w-2 h-2 rounded-full bg-green-500"></span>
                          Completed
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-yellow-100/80 text-yellow-800 dark:bg-yellow-900/70 dark:text-yellow-200">
                          <span className="mr-1.5 w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                          In Progress
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-t from-slate-100 to-transparent dark:from-slate-900 dark:to-transparent py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:subratabahtiar@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                    subratabahtiar@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/6287855911143" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                    +62 878-5591-1143
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/tiarss" target="_blank" rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/bahtiarsubrata/" target="_blank" rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/portfolio" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Bahtiar Subrata. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
