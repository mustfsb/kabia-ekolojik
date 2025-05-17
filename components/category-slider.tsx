"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface CategorySliderProps {
  className?: string
}

export default function CategorySlider({ className }: CategorySliderProps) {
  const categories = [
    "Farming",
    "Vegetables",
    "Agriculture",
    "Fruits",
    "Organic",
    "Eco-friendly",
    "Sustainable",
    "Natural",
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right
  const containerRef = useRef<HTMLDivElement>(null)

  // Otomatik slider için
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setActiveIndex((current) => (current + 1) % categories.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [categories.length])

  // Görünür kategorileri hesapla
  const visibleCategories = () => {
    const visibleCount = 3 // Kaç kategori görünecek
    const result = []

    for (let i = 0; i < visibleCount; i++) {
      const index = (activeIndex + i) % categories.length
      result.push({
        category: categories[index],
        index,
      })
    }

    return result
  }

  return (
    <div className={cn("w-full overflow-hidden py-6", className)}>
      <div className="container">
        <div className="flex items-center justify-center">
          <div ref={containerRef} className="relative flex items-center justify-center h-20 overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              {visibleCategories().map(({ category, index }, i) => (
                <motion.div
                  key={category}
                  custom={direction}
                  initial={{
                    opacity: 0,
                    x: direction > 0 ? 100 : -100,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: i === 0 ? 1.1 : 1,
                    zIndex: 3 - i,
                  }}
                  exit={{
                    opacity: 0,
                    x: direction < 0 ? 100 : -100,
                    scale: 0.8,
                    zIndex: 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className={cn(
                    "absolute px-6 py-2 mx-2 border-2 rounded-full transition-all duration-300",
                    i === 0 ? "border-[#7ED957] bg-transparent" : "border-white/30 bg-transparent",
                  )}
                  style={{
                    left: `${i * 220}px`,
                    transform: `translateX(${i === 0 ? -110 : i === 1 ? 0 : 110}px)`,
                  }}
                >
                  <span
                    className={cn(
                      "text-xl md:text-2xl font-light tracking-wider whitespace-nowrap",
                      i === 0 ? "text-[#7ED957]" : "text-white/80",
                    )}
                  >
                    {category}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Separator Icons */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-16 md:space-x-24 pointer-events-none">
              <motion.div
                className="text-[#7ED957]"
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 45 }}
                transition={{ duration: 0.3 }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <rect x="2" y="2" width="12" height="12" rx="2" />
                </svg>
              </motion.div>

              <motion.div
                className="text-[#7ED957]"
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 45 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <rect x="2" y="2" width="12" height="12" rx="2" />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
