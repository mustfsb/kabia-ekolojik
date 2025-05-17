"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProductCardProps {
  product: {
    name: string
    description: string
    price: string
    image: string
  }
  index: number
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-800/50 shadow-lg">
        <motion.div
          className="relative h-[280px] overflow-hidden"
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        >
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />

          {/* Overlay gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.7 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="p-6 relative"
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -10 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-medium mb-2">{product.name}</h3>
          <p className="text-muted-foreground text-sm mb-4">{product.description}</p>

          <div className="flex justify-between items-center">
            <span className="font-bold text-[#7ED957]">{product.price}</span>
            <Button className="bg-[#7ED957] hover:bg-[#6BC745] text-white rounded-full px-4 py-2 h-auto">
              Sepete Ekle
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
