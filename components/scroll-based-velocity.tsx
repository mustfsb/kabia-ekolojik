"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform, useSpring, type MotionValue } from "framer-motion"

interface ScrollBasedVelocityProps {
  items: string[]
  baseVelocity?: number
  className?: string
}

export default function ScrollBasedVelocity({ items, baseVelocity = 5, className = "" }: ScrollBasedVelocityProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Join items with separator
  const text = items.join(" ♦ ")

  // Create a smooth velocity value
  const smoothVelocity = useSpring(useTransform(scrollYProgress, [0, 1], [1, -1]), {
    damping: 50,
    stiffness: 400,
  })

  // Create x position based on velocity
  const x = useParallax(smoothVelocity, baseVelocity)

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden py-12 bg-zinc-100/50 dark:bg-zinc-900/50 ${className}`}
    >
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div className="flex whitespace-nowrap" style={{ x }}>
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {text.split(" ♦ ").map((word, index) => (
                <React.Fragment key={index}>
                  <span
                    className="text-4xl md:text-6xl font-bold tracking-widest uppercase mx-4 md:mx-8 transition-colors duration-300 hover:text-white"
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1px white",
                      textStroke: "1px white",
                      fontFamily: "Arial, sans-serif",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {word}
                  </span>
                  {index < text.split(" ♦ ").length - 1 && (
                    <span className="text-green-600 dark:text-green-500 mx-6 text-3xl">♦</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

// Custom hook to create parallax effect based on velocity
function useParallax(value: MotionValue<number>, baseVelocity: number) {
  const xRef = useRef<number>(0)
  const directionRef = useRef<number>(1)
  const prevTimeRef = useRef<number>(0)

  return useTransform(value, (latest) => {
    if (prevTimeRef.current === 0) {
      prevTimeRef.current = Date.now()
      return xRef.current
    }

    const now = Date.now()
    const elapsed = now - prevTimeRef.current
    prevTimeRef.current = now

    // Calculate new position based on velocity and time
    const velocity = latest * baseVelocity
    const delta = velocity * elapsed

    xRef.current -= delta

    // Reset position when it gets too far
    if (xRef.current < -10000) {
      xRef.current = 0
    } else if (xRef.current > 10000) {
      xRef.current = 0
    }

    return xRef.current
  })
}
