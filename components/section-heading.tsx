"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  label?: string
  className?: string
  align?: "left" | "center" | "right"
  titleClassName?: string
  subtitleClassName?: string
  labelClassName?: string
}

export default function SectionHeading({
  title,
  subtitle,
  label,
  className,
  align = "center",
  titleClassName,
  subtitleClassName,
  labelClassName,
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.div
      className={cn("mb-12 md:mb-16", alignClass[align], className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {label && (
        <motion.p className={cn("text-[#7ED957] mb-2 font-medium", labelClassName)} variants={itemVariants}>
          {label}
        </motion.p>
      )}

      <motion.h2
        className={cn("text-3xl md:text-5xl font-medium tracking-tight mb-4", titleClassName)}
        variants={itemVariants}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className={cn("text-muted-foreground text-lg max-w-[600px] mx-auto", subtitleClassName)}
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
