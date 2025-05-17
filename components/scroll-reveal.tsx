"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  duration?: number
  once?: boolean
  margin?: string
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 20,
  duration = 0.6,
  once = true,
  margin = "-100px",
}: ScrollRevealProps) {
  // Set initial animation properties based on direction
  let initial = { opacity: 0 }

  if (direction === "up") {
    initial = { ...initial, y: distance }
  } else if (direction === "down") {
    initial = { ...initial, y: -distance }
  } else if (direction === "left") {
    initial = { ...initial, x: distance }
  } else if (direction === "right") {
    initial = { ...initial, x: -distance }
  }

  return (
    <motion.div
      className={cn(className)}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
