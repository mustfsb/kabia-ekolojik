"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface ParallaxProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  offset?: [string, string]
}

export default function ParallaxEffect({
  children,
  className,
  speed = 0.2,
  direction = "up",
  offset = ["start end", "end start"],
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  })

  const yTransform = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? [`${10 * speed}%`, `${-10 * speed}%`] : [`${-10 * speed}%`, `${10 * speed}%`],
  )
  const xTransform = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? [`${10 * speed}%`, `${-10 * speed}%`] : [`${-10 * speed}%`, `${10 * speed}%`],
  )

  // Calculate transform based on direction and speed
  const transform = direction === "up" || direction === "down" ? { y: yTransform } : { x: xTransform }

  return (
    <motion.div ref={ref} className={cn("relative", className)} style={transform}>
      {children}
    </motion.div>
  )
}
