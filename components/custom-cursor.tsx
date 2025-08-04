"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
  const [ready, setReady] = useState(false)

  const cursorX = useRef(useMotionValue(0))
  const cursorY = useRef(useMotionValue(0))
  const trailX = useRef(useMotionValue(0))
  const trailY = useRef(useMotionValue(0))

  const springX = useSpring(trailX.current, { stiffness: 80, damping: 12 })
  const springY = useSpring(trailY.current, { stiffness: 80, damping: 12 })

  useEffect(() => {
    // Initialise après que le DOM est disponible
    cursorX.current.set(window.innerWidth / 2)
    cursorY.current.set(window.innerHeight / 2)
    trailX.current.set(window.innerWidth / 2)
    trailY.current.set(window.innerHeight / 2)
    setReady(true)

    let frameId: number | null = null

    const updatePosition = (e: MouseEvent) => {
      if (frameId) return
      frameId = requestAnimationFrame(() => {
        cursorX.current.set(e.clientX - 8)
        cursorY.current.set(e.clientY - 8)
        trailX.current.set(e.clientX - 20)
        trailY.current.set(e.clientY - 20)
        frameId = null
      })
    }

    window.addEventListener("mousemove", updatePosition)
    return () => {
      if (frameId) cancelAnimationFrame(frameId)
      window.removeEventListener("mousemove", updatePosition)
    }
  }, [])

  if (!ready) return null // évite le rendu côté serveur sans `window`

  return (
    <>
      {/* Curseur principal */}
      <motion.div
        className="fixed rounded-full pointer-events-none z-[9999]"
        style={{
          left: cursorX.current,
          top: cursorY.current,
          width: 16,
          height: 16,
          backgroundColor: "#a855f7",
          mixBlendMode: "difference",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />

      {/* Cercle secondaire */}
      <motion.div
        className="fixed rounded-full pointer-events-none z-[9998] border border-[#a855f7]"
        style={{
          left: springX,
          top: springY,
          width: 40,
          height: 40,
        }}
      />

      <style jsx global>{`
        body {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}
