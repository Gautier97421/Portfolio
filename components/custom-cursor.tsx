"use client"

import { useState, useEffect } from "react"
import { motion, useMotionValue, useSpring, animate } from "framer-motion"

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Valeurs dynamiques et animées pour le curseur
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const trailX = useMotionValue(0)
  const trailY = useMotionValue(0)

  const springX = useSpring(trailX, { stiffness: 100, damping: 10 })
  const springY = useSpring(trailY, { stiffness: 100, damping: 10 })

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      if (!isHovering) {
        const { clientX, clientY } = e
        setMousePosition({ x: clientX, y: clientY })
        cursorX.set(clientX - 8)
        cursorY.set(clientY - 8)
        trailX.set(clientX - 20)
        trailY.set(clientY - 20)
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const hoverTarget = target.closest("button, a, .absorb-cursor")

      if (hoverTarget) {
        setIsHovering(true)

        const rect = hoverTarget.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        // Animer le curseur vers le centre de l’élément
        animate(cursorX, centerX - 12, { duration: 0.2 })
        animate(cursorY, centerY - 12, { duration: 0.2 })
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", updatePosition)
    document.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseover", handleMouseOver)
    }
  }, [isHovering])

  return (
    <>
      {/* Curseur principal */}
      <motion.div
        className="fixed rounded-full pointer-events-none z-[9999]"
        style={{
          left: cursorX,
          top: cursorY,
          width: isHovering ? 24 : 16,
          height: isHovering ? 24 : 16,
          backgroundColor: "#a855f7",
          mixBlendMode: "difference",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />

      {/* Cercle secondaire (effet trailing) */}
      {!isHovering && (
        <motion.div
          className="fixed rounded-full pointer-events-none z-[9998] border border-[#a855f7]"
          style={{
            left: springX,
            top: springY,
            width: 40,
            height: 40,
          }}
        />
      )}

      {/* Style global */}
      <style jsx global>{`
        body,
        button,
        a,
        .absorb-cursor {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}
