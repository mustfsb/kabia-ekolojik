"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import CircularTextButton from "@/components/circular-text-button"

interface VideoSectionProps {
  imageUrl: string
}

export default function VideoSection({ imageUrl }: VideoSectionProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="relative w-full h-[500px] md:h-[600px]">
        <Image src={imageUrl || "/placeholder.svg"} alt="Video Background" fill className="object-cover" priority />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Oval Bottom Shape */}
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-32 bg-white dark:bg-zinc-950"
        style={{
          width: "120%",
          borderTopLeftRadius: "50% 80%",
          borderTopRightRadius: "50% 80%",
        }}
      ></div>

      {/* Play Button with Circular Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={() => {
            // Handle video play functionality here
            console.log("Play video")
          }}
        >
          {/* Circular Text Button */}
          <div className="w-full h-full">
            <CircularTextButton text="EKOLOJIK • KABİA" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
