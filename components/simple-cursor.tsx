// components/simple-cursor.tsx

"use client"

import React, { useEffect, useState } from "react";

export default function SimpleCursorDot() {
  const [pos, setPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: pos.y,
        left: pos.x,
        width: 16,
        height: 16,
        cursor: "none",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        backgroundColor: "#a855f7"
      }}
    />
  );
}