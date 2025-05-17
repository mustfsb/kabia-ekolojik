"use client"

import { motion } from "framer-motion"

interface BenefitCardProps {
  benefit: {
    title: string
    description: string
    icon: string
  }
  index: number
}

export default function BenefitCard({ benefit, index }: BenefitCardProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      <div className="bg-gradient-to-br from-white/80 to-white/30 dark:from-zinc-800/50 dark:to-zinc-800/20 backdrop-blur-sm p-8 rounded-2xl shadow-lg transition-all duration-300 h-full border border-white/20 dark:border-zinc-700/30">
        <div className="flex flex-col h-full">
          <div className="text-5xl mb-6 relative">
            <div className="relative z-10 inline-block">
              <span>{benefit.icon}</span>
              <motion.div
                className="absolute -inset-4 rounded-full bg-[#7ED957]/10"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              />
            </div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#7ED957]/5 rounded-full blur-xl"></div>
          </div>

          <h3 className="text-xl font-medium mb-3 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
            {benefit.title}
          </h3>
          <p className="text-muted-foreground flex-grow">{benefit.description}</p>

          <motion.div
            className="mt-6 h-1 bg-gradient-to-r from-[#7ED957] to-[#7ED957]/30 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </motion.div>
  )
}
