"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Phone, Mail, MapPin } from "lucide-react"
import VideoTextMask from "@/components/video-text-mask"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Form gönderildi",
        description: "Mesajınız için teşekkürler. En kısa sürede size dönüş yapacağız.",
      })
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      details: "+90 123 456 7890",
      action: "tel:+901234567890",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@kabia.com",
      action: "mailto:info@kabia.com",
    },
    {
      icon: MapPin,
      title: "Adres",
      details: "Sakarya, Türkiye",
      action: "https://maps.google.com/?q=Sakarya,Turkey",
    },
  ]

  const inputClasses =
    "border-[#E8F4E5] dark:border-[#3A6D2B]/30 focus:border-[#5A9D4B] dark:focus:border-[#7ED957] focus:ring-[#5A9D4B]/20 dark:focus:ring-[#7ED957]/20 bg-white dark:bg-[#1A2718]/60"

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Blur Elements */}
      <div className="fixed top-[10%] left-[5%] w-64 h-64 rounded-full bg-[#7ED957]/5 dark:bg-[#7ED957]/10 blur-2xl -z-10"></div>
      <div className="fixed top-[30%] right-[8%] w-72 h-72 rounded-full bg-[#7ED957]/4 dark:bg-[#7ED957]/10 blur-2xl -z-10"></div>
      <div className="fixed top-[60%] left-[15%] w-80 h-80 rounded-full bg-[#7ED957]/5 dark:bg-[#7ED957]/10 blur-2xl -z-10"></div>
      <div className="fixed top-[80%] right-[20%] w-96 h-96 rounded-full bg-[#7ED957]/4 dark:bg-[#7ED957]/10 blur-2xl -z-10"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto">
          <div className="mb-16">
            <VideoTextMask
              videoUrl="https://videos.pexels.com/video-files/4480875/4480875-uhd_2560_1440_24fps.mp4"
              text="İLETİŞİM"
              playbackRate={1.5}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <motion.div
              className="lg:col-span-1 bg-gradient-to-br from-[#F7FAF5] to-white dark:from-[#1A2718] dark:to-[#243020] p-6 rounded-xl border border-[#E8F4E5] dark:border-[#3A6D2B]/50"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2 className="text-2xl font-bold mb-6 text-[#5A9D4B] dark:text-[#7ED957]" variants={itemVariants}>
                Bizimle İletişime Geçin
              </motion.h2>

              <motion.p className="text-muted-foreground dark:text-gray-400 mb-8" variants={itemVariants}>
                Sorularınız, önerileriniz veya işbirliği talepleriniz için bizimle iletişime geçebilirsiniz. En kısa
                sürede size dönüş yapacağız.
              </motion.p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.action}
                    target={item.icon === MapPin ? "_blank" : undefined}
                    rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-[#F7FAF5] dark:hover:bg-[#243020] transition-colors duration-200 border border-transparent hover:border-[#E8F4E5] dark:hover:border-[#3A6D2B]/50"
                    variants={itemVariants}
                  >
                    <div className="bg-[#5A9D4B]/15 dark:bg-[#7ED957]/20 p-3 rounded-full">
                      <item.icon className="h-6 w-6 text-[#5A9D4B] dark:text-[#7ED957]" />
                    </div>
                    <div>
                      <h3 className="font-medium dark:text-white">{item.title}</h3>
                      <p className="text-muted-foreground dark:text-gray-400">{item.details}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2 bg-gradient-to-br from-white to-[#F7FAF5] dark:from-[#243020] dark:to-[#1A2718] rounded-xl p-6 shadow-sm border border-[#E8F4E5] dark:border-[#3A6D2B]/50"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2 className="text-2xl font-bold mb-6 dark:text-white" variants={itemVariants}>
                Mesaj Gönderin
              </motion.h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 dark:text-gray-300">
                      İsim Soyisim
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="İsminizi giriniz"
                      required
                      className={inputClasses}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 dark:text-gray-300">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email adresinizi giriniz"
                      required
                      className={inputClasses}
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1 dark:text-gray-300">
                    Telefon
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Telefon numaranızı giriniz"
                    className={inputClasses}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1 dark:text-gray-300">
                    Konu
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Mesajınızın konusu"
                    required
                    className={inputClasses}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 dark:text-gray-300">
                    Mesaj
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mesajınızı buraya yazınız"
                    rows={5}
                    required
                    className={`resize-none ${inputClasses}`}
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="pt-2">
                  <Button
                    type="submit"
                    className="w-full bg-[#5A9D4B] hover:bg-[#4A8C3B] dark:bg-[#7ED957] dark:hover:bg-[#6BC945] text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Gönderiliyor...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Mesaj Gönder
                        <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#7ED957]/10 dark:border-[#3A6D2B]/50 h-[400px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192220.85974740426!2d30.25973275!3d40.773004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccadf2977958d7%3A0xc7996fa884f94c03!2sSakarya!5e0!3m2!1str!2str!4v1652267849462!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kabia Ekolojik Konum"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
