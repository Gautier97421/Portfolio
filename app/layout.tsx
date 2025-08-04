// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import { LanguageWrapper } from '@/components/language-wrapper'

export const metadata: Metadata = {
  title: 'Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body>
        {/* ⚠️ Ne pas suspendre toute l’app ici */}
        {children}
      </body>
    </html>
  )
}
