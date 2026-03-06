import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nishant Nirmal | AI & Data Science Engineer',
  description: 'AI & Data Science Engineer specializing in Generative AI, RAG systems, vector search, and full-stack AI application development. Building intelligent solutions with LangChain, FAISS, and modern AI frameworks.',
  keywords: ['AI Engineer', 'Data Science', 'RAG', 'Vector Search', 'Generative AI', 'LangChain', 'FAISS', 'Full Stack AI'],
  authors: [{ name: 'Nishant Nirmal' }],
  creator: 'Nishant Nirmal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nishantnirmal.com',
    title: 'Nishant Nirmal | AI & Data Science Engineer',
    description: 'AI & Data Science Engineer specializing in Generative AI, RAG systems, vector search, and full-stack AI application development.',
    siteName: 'Nishant Nirmal Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nishant Nirmal | AI & Data Science Engineer',
    description: 'AI & Data Science Engineer specializing in Generative AI, RAG systems, vector search, and full-stack AI application development.',
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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
