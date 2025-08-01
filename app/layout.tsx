import type { Metadata } from 'next'
import './globals.css'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div>Chargement...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}