"use client"

import { motion } from "framer-motion"
import { CalendarClock, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Blur Elements */}
      <div className="fixed top-[10%] left-[5%] w-64 h-64 rounded-full bg-[#7ED957]/5 dark:bg-[#7ED957]/10 blur-2xl -z-10"></div>
      <div className="fixed top-[60%] right-[15%] w-80 h-80 rounded-full bg-[#7ED957]/5 dark:bg-[#7ED957]/10 blur-2xl -z-10"></div>

      {/* Navbar */}
      <Navbar />

      <div className="container mx-auto py-20 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#5A9D4B] to-[#7ED957] dark:from-[#7ED957] dark:to-[#A3E57F] bg-clip-text text-transparent">
              Blog
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground dark:text-gray-400 mb-12">
              Ekolojik tarım, sürdürülebilir yaşam ve doğal ürünler hakkında bilgi ve deneyimlerimizi paylaşacağımız
              blog sayfamız çok yakında sizlerle.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[#5A9D4B]/10 dark:bg-[#7ED957]/20 p-4 rounded-full">
              <CalendarClock className="h-12 w-12 text-[#5A9D4B] dark:text-[#7ED957]" />
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-[#F7FAF5] to-white dark:from-[#1A2718] dark:to-[#243020] p-8 rounded-2xl border border-[#E8F4E5] dark:border-[#3A6D2B]/50 shadow-sm mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-[#5A9D4B] dark:text-[#7ED957]">Haberdar Olun</h2>
            <p className="text-muted-foreground dark:text-gray-400 mb-6">
              Blog sayfamız yayına girdiğinde haberdar olmak için e-posta adresinizi bırakın.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="E-posta adresiniz"
                className="border-[#E8F4E5] dark:border-[#3A6D2B]/30 focus:border-[#5A9D4B] dark:focus:border-[#7ED957] focus:ring-[#5A9D4B]/20 dark:focus:ring-[#7ED957]/20 bg-white dark:bg-[#1A2718]/60"
              />
              <Button className="bg-[#5A9D4B] hover:bg-[#4A8C3B] dark:bg-[#7ED957] dark:hover:bg-[#6BC945] text-white">
                <span className="flex items-center">
                  Abone Ol
                  <Mail className="ml-2 h-4 w-4" />
                </span>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-[#F7FAF5] to-white dark:from-[#1A2718] dark:to-[#243020] p-6 rounded-xl border border-[#E8F4E5] dark:border-[#3A6D2B]/50 shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-[#5A9D4B] dark:text-[#7ED957]">Ekolojik Tarım</h3>
              <p className="text-muted-foreground dark:text-gray-400 mb-4">
                Doğaya saygılı tarım yöntemleri ve sürdürülebilir uygulamalar hakkında bilgiler.
              </p>
              <div className="text-[#5A9D4B] dark:text-[#7ED957] font-medium flex items-center">
                Yakında <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F7FAF5] to-white dark:from-[#1A2718] dark:to-[#243020] p-6 rounded-xl border border-[#E8F4E5] dark:border-[#3A6D2B]/50 shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-[#5A9D4B] dark:text-[#7ED957]">Doğal Ürünler</h3>
              <p className="text-muted-foreground dark:text-gray-400 mb-4">
                Kimyasal içermeyen, sağlıklı ve doğal ürünlerin faydaları ve kullanım alanları.
              </p>
              <div className="text-[#5A9D4B] dark:text-[#7ED957] font-medium flex items-center">
                Yakında <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F7FAF5] to-white dark:from-[#1A2718] dark:to-[#243020] p-6 rounded-xl border border-[#E8F4E5] dark:border-[#3A6D2B]/50 shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-[#5A9D4B] dark:text-[#7ED957]">Sürdürülebilir Yaşam</h3>
              <p className="text-muted-foreground dark:text-gray-400 mb-4">
                Doğayla uyumlu yaşam için pratik bilgiler ve günlük hayata uygulanabilir öneriler.
              </p>
              <div className="text-[#5A9D4B] dark:text-[#7ED957] font-medium flex items-center">
                Yakında <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
