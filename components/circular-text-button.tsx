"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Play, X } from "lucide-react"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"

interface CircularTextButtonProps {
  text: string
  onClick?: () => void
  videoUrl?: string
}

const CircularTextButton: React.FC<CircularTextButtonProps> = ({
  text,
  onClick,
  videoUrl = "https://videos.pexels.com/video-files/2876087/2876087-hd_1920_1080_30fps.mp4", // Varsayılan video URL'si
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const handleButtonClick = () => {
    setIsVideoOpen(true)
    if (onClick) onClick()
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions based on parent container
    const parentSize = canvas.parentElement?.offsetWidth || 120
    const size = parentSize
    canvas.width = size
    canvas.height = size

    // Clear canvas
    ctx.clearRect(0, 0, size, size)

    // Set text properties - responsive font size
    const fontSize = Math.max(size / 10, 12) // Minimum font size of 12px
    ctx.font = `bold ${fontSize}px Arial`
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    // Calculate the radius for the text
    const radius = size / 2 - (size / 8) // Responsive padding

    // Draw the text in a circle
    const characters = text.split("")
    const angleStep = (2 * Math.PI) / characters.length

    characters.forEach((char, i) => {
      const angle = i * angleStep - Math.PI / 2

      const x = size / 2 + radius * Math.cos(angle)
      const y = size / 2 + radius * Math.sin(angle)

      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(angle + Math.PI / 2)
      ctx.fillText(char, 0, 0)
      ctx.restore()
    })
  }, [text])

  return (
    <>
      <motion.div
        className="relative w-full h-full rounded-full bg-[#7ED957] flex items-center justify-center cursor-pointer shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleButtonClick}
      >
        {/* Play icon in the center */}
        <Play className="text-white w-1/3 h-1/3 absolute" />

        {/* Rotating canvas with text */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <canvas ref={canvasRef} className="w-full h-full" />
        </motion.div>
      </motion.div>

      {/* Video Dialog */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-black rounded-lg">
          <div className="relative">
            <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-black/40 p-2 text-white hover:bg-black/60">
              <X className="h-6 w-6" />
              <span className="sr-only">Kapat</span>
            </DialogClose>
            <video src={videoUrl} controls autoPlay className="w-full h-auto max-h-[80vh]" />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CircularTextButton
