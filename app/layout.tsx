import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { PAGE_DESCRIPTION, PAGE_TITLE } from '@/constants'

import './globals.css'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
}

const inter = Inter({ subsets: ['latin-ext'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${inter.className} min-w-fit`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
