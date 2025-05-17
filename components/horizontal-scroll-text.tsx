"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HorizontalScrollTextProps {
  items: string[]
  speed?: number
  className?: string
}

export default function HorizontalScrollText({ items, speed = 15, className = "" }: HorizontalScrollTextProps) {
  const [isPaused, setIsPaused] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  // Duplicate items to create a seamless loop
  const duplicatedItems = [...items, ...items, ...items]

  // Calculate total width of text for animation
  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 0.3)
    }
  }, [items])

  return (
    <div
      className={cn("overflow-hidden bg-transparent py-12", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false)
        setHoveredIndex(null)
      }}
    >
      <div className="relative flex items-center overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex whitespace-nowrap"
          animate={{
            x: isPaused ? "current" : -width,
          }}
          transition={{
            x: {
              duration: items.length * speed,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              repeatDelay: 0,
            },
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center px-4 md:px-8"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span
                className={cn(
                  "text-4xl md:text-6xl font-bold tracking-widest uppercase",
                  hoveredIndex === index ? "text-green-500" : "text-transparent",
                )}
                style={{
                  WebkitTextStroke: hoveredIndex === index ? "1px #22c55e" : "0.5px rgba(100, 100, 100, 0.6)", // thinner gray border for light mode
                  textStroke: hoveredIndex === index ? "1px #22c55e" : "0.5px rgba(100, 100, 100, 0.6)",
                  fontFamily: "Space Grotesk",
                  letterSpacing: "0.1em",
                }}
              >
                {item}
              </span>
              {index < duplicatedItems.length - 1 && <span className="pl-14 text-2xl">🍃</span>}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
