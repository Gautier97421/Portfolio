// lib/useLanguage.ts

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

export function useLanguage(): [ "fr" | "en" | "de", (lang: "fr" | "en" | "de") => void ] {
  const searchParams = useSearchParams()
  const langParam = searchParams.get("lang") as "fr" | "en" | "de" | null
  const [language, setLanguage] = useState<"fr" | "en" | "de">("fr")

  useEffect(() => {
    const storedLang = localStorage.getItem("language") as "fr" | "en" | "de" | null

    if (langParam === "fr" || langParam === "en" || langParam === "de") {
      setLanguage(langParam)
      localStorage.setItem("language", langParam)
    } else if (storedLang) {
      setLanguage(storedLang)
    } else {
      setLanguage("fr")
    }
  }, [langParam])

  const updateLanguage = (lang: "fr" | "en" | "de") => {
    localStorage.setItem("language", lang)
    setLanguage(lang)
  }

  return [language, updateLanguage]
}