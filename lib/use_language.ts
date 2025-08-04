// lib/useLanguage.ts

"use client"

import { useEffect, useState } from "react"

export function useLanguage(): [
  "fr" | "en" | "de",
  (lang: "fr" | "en" | "de") => void
] {
  const [language, setLanguage] = useState<"fr" | "en" | "de">("fr")

  useEffect(() => {
    const storedLang = localStorage.getItem("language") as "fr" | "en" | "de" | null
    if (storedLang === "fr" || storedLang === "en" || storedLang === "de") {
      setLanguage(storedLang)
    }
  }, [])

  const updateLanguage = (lang: "fr" | "en" | "de") => {
    localStorage.setItem("language", lang)
    setLanguage(lang)
  }

  return [language, updateLanguage]
}
