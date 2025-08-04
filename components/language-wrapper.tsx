// components/Language-wrapper.tsx

"use client"

import { useLanguage } from "@/lib/use_language"
import { useEffect } from "react"

export function LanguageWrapper({ children }: { children: React.ReactNode }) {
  const [language] = useLanguage()

  useEffect(() => {
    console.log("Langue détectée :", language)
  }, [language])

  return <>{children}</>
}
