"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  testimonial: {
    name: string
    role: string
    comment: string
    rating: number
    image: string
  }
  index: number
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className="bg-white dark:bg-zinc-800/30 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Quote mark */}
        <div className="absolute top-6 right-8 text-6xl text-[#7ED957]/10 font-serif">"</div>

        <div className="flex items-center mb-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#7ED957]/20">
            <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-medium text-lg">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>

        <div className="flex mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        <p className="text-muted-foreground italic relative z-10">"{testimonial.comment}"</p>
      </div>
    </motion.div>
  )
}
