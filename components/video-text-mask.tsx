"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface VideoTextMaskProps {
  videoUrl: string
  text: string
  playbackRate?: number
}

export default function VideoTextMask({ videoUrl, text, playbackRate = 1.75 }: VideoTextMaskProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      // Responsive dimensions based on screen size
      const width = window.innerWidth < 768 ? window.innerWidth * 0.9 : 800
      const height = width * 0.3 // Maintain aspect ratio
      setDimensions({ width, height })
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    const canvas = canvasRef.current

    if (!video || !canvas || dimensions.width === 0) return

    // Set canvas dimensions
    canvas.width = dimensions.width
    canvas.height = dimensions.height

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configure text
    const fontSize = dimensions.width < 500 ? "80px" : "120px"
    ctx.font = `bold ${fontSize} 'Space Grotesk', sans-serif`
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    // Function to draw the video frame into the text
    const drawVideoFrame = () => {
      if (!video || !ctx) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create text path
      ctx.fillStyle = "white" // This won't be visible, just for the clip path
      ctx.save()
      ctx.beginPath()
      ctx.fillText(text, canvas.width / 2, canvas.height / 2)
      ctx.globalCompositeOperation = "source-in"

      // Draw video frame into the text path
      if (video.readyState >= video.HAVE_CURRENT_DATA) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
      }

      ctx.restore()

      // Request next frame
      requestAnimationFrame(drawVideoFrame)
    }

    const handleVideoReady = () => {
      setIsLoaded(true)
      video.play()
      video.playbackRate = playbackRate || 1.75 // Use provided playbackRate or default to 1.75x
      drawVideoFrame()
    }

    if (video.readyState >= video.HAVE_CURRENT_DATA) {
      handleVideoReady()
    } else {
      video.addEventListener("canplay", handleVideoReady)
    }

    return () => {
      video.removeEventListener("canplay", handleVideoReady)
    }
  }, [dimensions, text, videoUrl, playbackRate])

  return (
    <div className="relative">
      {/* Hidden video element */}
      <video
        ref={videoRef}
        src={videoUrl}
        muted
        loop
        playsInline
        crossOrigin="anonymous"
        className="hidden"
        onError={(e) => console.error("Video error:", e)}
      />

      {/* Canvas for video text mask */}
      <motion.canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className={`mx-auto ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {/* Fallback text in case video doesn't load */}
      {!isLoaded && (
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center text-[#7ED957]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {text}
        </motion.h1>
      )}
    </div>
  )
}
