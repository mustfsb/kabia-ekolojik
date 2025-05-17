"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrollTextRevealProps {
  text: string
  className?: string
  lightColor?: string
  darkColor?: string
  threshold?: [number, number] // Scroll eşik değerleri [başlangıç, bitiş]
}

export default function ScrollTextReveal({
  text,
  className,
  lightColor = "#e5e5e5",
  darkColor = "#000000",
  threshold = [0, 0.5], // Varsayılan olarak scroll'un 0% ile 50%'si arasında efekt tamamlanır
}: ScrollTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Metni harflere böl
  const characters = text.split("")
  const colors = characters.map((_, i) => {
    const charThreshold = [
      threshold[0] + (threshold[1] - threshold[0]) * (i / characters.length),
      threshold[0] + (threshold[1] - threshold[0]) * ((i + 8) / characters.length),
    ]
    return useTransform(scrollYProgress, [charThreshold[0], charThreshold[1]], [lightColor, darkColor])
  })

  return (
    <div ref={containerRef} className={cn("py-20 min-h-[50vh] flex items-center justify-center", className)}>
      <div className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
        {characters.map((char, i) => (
          <motion.span key={i} style={{ color: colors[i] }} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </div>
  )
}
