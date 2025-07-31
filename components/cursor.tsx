"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isTouchDevice, setIsTouchDevice] = useState<boolean | null>(null)

  useEffect(() => {
    const isTouch =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0)

    setIsTouchDevice(isTouch)

    if (isTouch) return

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])
  if (isTouchDevice === null) return null


  if (isTouchDevice) return null

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: mousePosition.x - 10,
        y: mousePosition.y - 10,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    />
  )
}
