"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import ParallaxEffect from "@/components/parallax-effect"
import ScrollReveal from "@/components/scroll-reveal"
import WhyChooseUs from "@/components/why-choose-us"
import HorizontalScrollText from "@/components/horizontal-scroll-text"
import VideoSection from "@/components/video-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Create a client-only version of the Home component
const HomePage = () => {
  const videoSectionRef = useRef<HTMLDivElement>(null)
  const [videoError, setVideoError] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  const [cornerBlurConfig, setCornerBlurConfig] = useState(0) // 0: sol üst-sağ alt, 1: sağ üst-sol alt

  // Add state variables for product slider at the top of the component (after other state variables)
  const [activeProductIndex, setActiveProductIndex] = useState(0)
  const productSliderRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [sliderWidth, setSliderWidth] = useState(0)
  const [itemWidth, setItemWidth] = useState(0)

  // useEffect ekleyelim - slider boyutlarını hesaplamak için
  useEffect(() => {
    if (productSliderRef.current) {
      const containerWidth = productSliderRef.current.clientWidth
      const gap = 24 // gap-6 = 1.5rem = 24px
      const calculatedItemWidth = 280 + gap // min-w-[280px] + gap

      setSliderWidth(containerWidth)
      setItemWidth(calculatedItemWidth)
    }
  }, [])

  // For scroll-based animation
  const { scrollYProgress } = useScroll({
    target: videoSectionRef,
    offset: ["start end", "end start"],
  })

  // Create a scale transformation based on scroll position
  const videoScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1], // These values represent scroll progress points
    [1, 1.5, 1.5, 1], // Increased scale for more dramatic effect
  )

  // Hero section parallax effect
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(heroScrollProgress, [0, 1], [0, 150])
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.5], [1, 0])

  // Product slider functions
  const nextProduct = () => {
    if (!productSliderRef.current) return

    // Desktop için
    const maxScrollLeft = productSliderRef.current.scrollWidth - productSliderRef.current.clientWidth
    const newScrollLeft = Math.min(productSliderRef.current.scrollLeft + itemWidth, maxScrollLeft)

    // Eğer sona yaklaşıyorsak, başa dönelim (sonsuz döngü için)
    if (newScrollLeft >= maxScrollLeft - itemWidth) {
      // Başa dön
      productSliderRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      })
    } else {
      // Normal kaydırma
      productSliderRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }

    // Mobil için
    setActiveProductIndex((prevIndex) => (prevIndex + 1) % productItems.length)
  }

  const prevProduct = () => {
    if (!productSliderRef.current) return

    // Desktop için
    const newScrollLeft = Math.max(productSliderRef.current.scrollLeft - itemWidth, 0)

    // Eğer başa yaklaşıyorsak ve sonsuz döngü istiyorsak
    if (newScrollLeft <= 0) {
      // Sona git
      const maxScrollLeft = productSliderRef.current.scrollWidth - productSliderRef.current.clientWidth
      productSliderRef.current.scrollTo({
        left: maxScrollLeft,
        behavior: "smooth",
      })
    } else {
      // Normal kaydırma
      productSliderRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }

    // Mobil için
    setActiveProductIndex((prevIndex) => (prevIndex - 1 + productItems.length) % productItems.length)
  }

  // Mouse drag handlers for product slider
  const handleMouseDown = (e) => {
    if (!productSliderRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - productSliderRef.current.offsetLeft)
    setScrollLeft(productSliderRef.current.scrollLeft)
    // Prevent default to avoid text selection during drag
    e.preventDefault()

    // Cursor'ı grabbing yapalım
    document.body.style.cursor = "grabbing"
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    // Cursor'ı normal haline getirelim
    document.body.style.cursor = "default"
  }

  const handleMouseMove = (e) => {
    if (!isDragging || !productSliderRef.current) return
    e.preventDefault()
    const x = e.pageX - productSliderRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    productSliderRef.current.scrollLeft = scrollLeft - walk
  }

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    if (!productSliderRef.current) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - productSliderRef.current.offsetLeft)
    setScrollLeft(productSliderRef.current.scrollLeft)
  }

  const handleTouchMove = (e) => {
    if (!isDragging || !productSliderRef.current) return
    const x = e.touches[0].pageX - productSliderRef.current.offsetLeft
    const walk = (x - startX) * 2
    productSliderRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Feature items data
  const features = [
    {
      icon: (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-green-600"
        >
          {/* Badem ikonu - daha oval ve badem şeklinde */}
          <path
            d="M25 10C20 15 15 25 15 35C15 40 20 45 25 45C30 45 35 40 35 35C35 25 30 15 25 10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25 15C22 18 20 25 20 35"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Badem",
      description: "Pellentesque porttitor enim et ipsum",
    },
    {
      icon: (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-green-600"
        >
          {/* Meyve & Sebze ikonu - elma ve yaprak */}
          <path
            d="M20 15C20 12 22 10 25 10C28 10 30 12 30 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35 25C35 20 30 15 25 15C20 15 15 20 15 25C15 35 20 40 25 40C30 40 35 35 35 25Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M25 10L30 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Meyve & Sebze",
      description: "Pellentesque porttitor enim et ipsum",
    },
    {
      icon: (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-green-600"
        >
          {/* Tarım ikonu - traktör ve tarla */}
          <path d="M10 35H40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M15 35C15 37.5 12.5 40 10 40C7.5 40 5 37.5 5 35C5 32.5 7.5 30 10 30C12.5 30 15 32.5 15 35Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M45 35C45 37.5 42.5 40 40 40C37.5 40 35 37.5 35 35C35 32.5 37.5 30 40 30C42.5 30 45 32.5 45 35Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35 35H15V20L25 15H30L35 20V35Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M15 25H35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Tarım",
      description: "Pellentesque porttitor enim et ipsum",
    },
    {
      icon: (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-green-600"
        >
          {/* İçecek ikonu - bardak ve sıvı */}
          <path
            d="M15 15H35L32 40H18L15 15Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M12 15H38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M20 15L25 10L30 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M18 25H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "İçecek",
      description: "Pellentesque porttitor enim et ipsum",
    },
  ]

  // Products data
  const productItems = [
    {
      category: "Çiğ Badem",
      name: "Organik Naturel Badem",
      price: "₺189.90",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      category: "Kavrulmuş",
      name: "Tuzlu Kavrulmuş Badem",
      price: "₺209.90",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      category: "Özel Ürün",
      name: "Badem Ezmesi",
      price: "₺169.90",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      category: "İçecek",
      name: "Organik Badem Sütü",
      price: "₺149.90",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  // Create an infinite loop by duplicating products
  const products = [...productItems, ...productItems, ...productItems]

  // Testimonials data
  const testimonials = [
    {
      name: "Ayşe Yılmaz",
      role: "Sağlıklı Yaşam Koçu",
      comment:
        "Kabia'nın organik bademleri gerçekten fark yaratıyor. Müşterilerime her zaman tavsiye ediyorum ve geri dönüşler harika!",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Mehmet Demir",
      role: "Şef",
      comment:
        "Profesyonel bir şef olarak, kullandığım malzemelerin kalitesi benim için çok önemli. Kabia'nın ürünleri her zaman en yüksek kaliteyi sunuyor.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Zeynep Kaya",
      role: "Beslenme Uzmanı",
      comment:
        "Hastalarıma sağlıklı atıştırmalıklar önerirken Kabia'nın ürünlerini gönül rahatlığıyla tavsiye ediyorum. Doğal ve besleyici.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  // Benefits data
  const benefits = [
    {
      title: "Ekolojik Tarım",
      description: "Kimyasal gübre ve ilaç kullanmadan, doğaya saygılı yöntemlerle üretim yapıyoruz.",
      icon: "🌱",
    },
    {
      title: "Sürdürülebilirlik",
      description: "Kaynakları verimli kullanarak gelecek nesillere daha yaşanabilir bir dünya bırakmayı hedefliyoruz.",
      icon: "♻️",
    },
    {
      title: "Yerel Üretim",
      description: "Yerel çiftçilerle işbirliği yaparak bölge ekonomisine katkı sağlıyoruz.",
      icon: "🏡",
    },
    {
      title: "Sağlıklı Yaşam",
      description: "Ürünlerimiz katkı maddesi içermez, sağlıklı bir yaşam için doğal seçenekler sunar.",
      icon: "💚",
    },
  ]

  // Marquee slider items
  const marqueeItems = ["Kabia", "Lezzet", "Badem", "Organik", "Ekolojik"]

  useEffect(() => {
    // Rastgele olarak 0 veya 1 seçerek köşe konfigürasyonunu belirle
    const randomConfig = Math.round(Math.random())
    setCornerBlurConfig(randomConfig)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Blur Elements - Distributed throughout the page */}
      <div className="fixed top-[10%] left-[5%] w-64 h-64 rounded-full bg-[#7ED957]/5 blur-2xl -z-10"></div>
      <div className="fixed top-[30%] right-[8%] w-72 h-72 rounded-full bg-[#7ED957]/4 blur-2xl -z-10"></div>
      <div className="fixed top-[60%] left-[15%] w-80 h-80 rounded-full bg-[#7ED957]/5 blur-2xl -z-10"></div>
      <div className="fixed top-[80%] right-[20%] w-96 h-96 rounded-full bg-[#7ED957]/4 blur-2xl -z-10"></div>
      <div className="fixed top-[45%] left-[40%] w-64 h-64 rounded-full bg-[#7ED957]/3 blur-2xl -z-10"></div>
      <div className="fixed top-[15%] right-[30%] w-56 h-56 rounded-full bg-[#7ED957]/4 blur-2xl -z-10"></div>
      <div className="fixed top-[75%] left-[25%] w-72 h-72 rounded-full bg-[#7ED957]/3 blur-2xl -z-10"></div>
      <div className="fixed top-[20%] left-[35%] w-48 h-48 rounded-full bg-[#7ED957]/4 blur-2xl -z-10"></div>
      <div className="fixed top-[65%] right-[35%] w-60 h-60 rounded-full bg-[#7ED957]/3 blur-2xl -z-10"></div>
      <div className="fixed top-[40%] right-[15%] w-52 h-52 rounded-full bg-[#7ED957]/4 blur-2xl -z-10"></div>
      <div className="fixed top-[85%] left-[45%] w-64 h-64 rounded-full bg-[#7ED957]/3 blur-2xl -z-10"></div>
      <div className="fixed top-[5%] right-[45%] w-56 h-56 rounded-full bg-[#7ED957]/4 blur-2xl -z-10"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-[90vh] flex flex-col items-center justify-center pt-16 px-4 md:px-0 relative overflow-hidden"
      >
        {/* Köşelere yerleştirilmiş blur elementleri */}
        {cornerBlurConfig === 0 ? (
          // Sol üst ve sağ alt konfigürasyonu
          <>
            <div
              className="absolute rounded-full bg-[#7ED957]/30 blur-2xl -z-10"
              style={{
                top: "5%",
                left: "5%",
                width: "250px",
                height: "250px",
              }}
            ></div>
            <div
              className="absolute rounded-full bg-[#7ED957]/25 blur-2xl -z-10"
              style={{
                bottom: "5%",
                right: "5%",
                width: "300px",
                height: "300px",
              }}
            ></div>
          </>
        ) : (
          // Sağ üst ve sol alt konfigürasyonu
          <>
            <div
              className="absolute rounded-full bg-[#7ED957]/30 blur-2xl -z-10"
              style={{
                top: "5%",
                right: "5%",
                width: "250px",
                height: "250px",
              }}
            ></div>
            <div
              className="absolute rounded-full bg-[#7ED957]/25 blur-2xl -z-10"
              style={{
                bottom: "5%",
                left: "5%",
                width: "300px",
                height: "300px",
              }}
            ></div>
          </>
        )}

        <motion.div className="container relative z-10" style={{ y: heroY, opacity: heroOpacity }}>
          <div className="max-w-[850px] mx-auto text-center space-y-6">
            <motion.h1
              className="text-3xl md:text-[56px] leading-tight md:leading-[1.1] font-medium tracking-[-0.02em] bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Kabia ile topraktan gelen sağlık ve doğallıkla buluşun
            </motion.h1>
            <motion.p
              className="text-muted-foreground text-base md:text-xl leading-relaxed max-w-[600px] mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ekolojik tarım yöntemleriyle üretilen bademleri doğanın en saf halini sofranıza taşır. Sağlıklı ve
              lezzetli bir tercih için doğru yerdesiniz.
            </motion.p>
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                className="bg-[#7ED957] hover:bg-[#6BC745] hover:tracking-[1px] text-white rounded-full px-6 py-3 h-auto text-sm md:text-md transition-all"
                onClick={() => {
                  const videoSection = document.getElementById("video-section")
                  videoSection?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Hemen Keşfet
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Service Features */}
      <section className="py-8 relative z-10 -mt-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Fast Delivery */}
            <motion.div
              className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md rounded-3xl p-3.5 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 border border-gray-100/20 dark:border-zinc-700/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="bg-gradient-to-br from-[#7ED957] to-[#6BC745] rounded-2xl p-2.5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="7" cy="17" r="2" />
                  <circle cx="17" cy="17" r="2" />
                  <path d="M5 17H3v-4M2 5h11v12M15 7h1a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v2h-5" />
                  <path d="M15 17h-5" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">Hızlı Teslimat</h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Türkiye'nin her yerine</p>
              </div>
            </motion.div>

            {/* Return Policy */}
            <motion.div
              className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md rounded-3xl p-3.5 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 border border-gray-100/20 dark:border-zinc-700/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="bg-gradient-to-br from-[#7ED957] to-[#6BC745] rounded-2xl p-2.5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 8v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8" />
                  <path d="M3 4h18v4H3z" />
                  <path d="M12 19v-7" />
                  <path d="M8 15l4 4 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">İade Garantisi</h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs">14 gün içinde koşulsuz iade</p>
              </div>
            </motion.div>

            {/* Online Support */}
            <motion.div
              className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md rounded-3xl p-3.5 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 border border-gray-100/20 dark:border-zinc-700/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="bg-gradient-to-br from-[#7ED957] to-[#6BC745] rounded-2xl p-2.5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                  <path d="M16 21v-1a5 5 0 0 0-10 0v1" />
                  <path d="M21 12h1" />
                  <path d="M12 2V1" />
                  <path d="M12 23v-1" />
                  <path d="M2 12h1" />
                  <path d="M19.07 4.93l.73-.73" />
                  <path d="M4.93 19.07l.73-.73" />
                  <path d="M4.93 4.93l-.73-.73" />
                  <path d="M19.07 19.07l-.73-.73" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">7/24 Destek</h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Her zaman yanınızdayız</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Demo Section with Scroll Animation */}
      <div className="relative">
        <motion.section
          id="video-section"
          ref={videoSectionRef}
          className="py-20 md:py-40 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container flex justify-center items-center -mt-20">
            <motion.div
              className="w-full max-w-[800px] overflow-hidden rounded-2xl mt-10 md:rounded-2xl"
              style={{
                scale: videoScale,
                transformOrigin: "center center",
              }}
            >
              {videoError ? (
                <div className="w-full h-[450px] bg-zinc-800/20 flex items-center justify-center text-muted-foreground rounded-2xl">
                  <p>Video yüklenemedi</p>
                </div>
              ) : (
                <video
                  src="https://videos.pexels.com/video-files/2876087/2876087-hd_1920_1080_30fps.mp4"
                  className="w-full h-auto mt-8 rounded-2xl md:rounded-2xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                  onError={() => setVideoError(true)}
                />
              )}
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <section className="py-20 md:py-32 overflow-hidden">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              {/* Image with Parallax */}
              <ParallaxEffect className="w-full md:w-1/2 order-2 md:order-1" speed={0.2} direction="left">
                <div className="relative flex justify-center items-center">
                  <Image
                    src="/images/about.png"
                    alt="Kabia Ekolojik Çiftliği"
                    width={800}
                    height={600}
                    className="w-full h-full rounded-2xl"
                  />
                </div>
              </ParallaxEffect>

              {/* Text Content */}
              <div className="w-full md:w-1/2 space-y-6 order-1 md:order-2">
                <ScrollReveal delay={0.1}>
                  <p className="text-green-500">🍀 KABIA EKOLOJIK HAKKINDA</p>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <h2 className="text-2xl md:text-4xl font-medium tracking-tight">Doğanın En Saf Hali</h2>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Kabia Ekolojik olarak, doğanın bize sunduğu en değerli hediyelerden biri olan bademi, en saf ve doğal haliyle
                    sizlere ulaştırıyoruz. Ekolojik tarım yöntemlerimiz ve sürdürülebilir üretim anlayışımızla, hem
                    doğaya saygılı hem de sağlığınıza faydalı ürünler sunuyoruz.
                  </p>
                </ScrollReveal>

                {/* Features Grid */}
                <div className="grid grid-cols-2 xs:grid-cols-1 gap-6 mt-8">
                  {features.map((feature, index) => (
                    <ScrollReveal key={index} delay={0.1 * (index + 1)}>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-14 h-14 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center text-green-600">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-1">{feature.title}</h3>
                          <p className="text-muted-foreground text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

                <ScrollReveal delay={0.6}>
                  <Button
                    className="mt-8 bg-[#7ED957] hover:bg-[#6BC745] text-white rounded-full px-6 py-3 h-auto text-sm md:text-md"
                    onClick={() => {
                      // Handle button click
                    }}
                  >
                    Hakkımızda Daha Fazla
                  </Button>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal Scroll Text */}
        <HorizontalScrollText items={marqueeItems} speed={40} />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Products Section */}
        <section className="py-20 md:py-32 bg-zinc-50/50 dark:bg-zinc-900/50 overflow-hidden">
          <div className="container relative">
            {/* Background decorative elements with parallax */}
            <ParallaxEffect
              className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#7ED957]/3 blur-2xl"
              speed={0.2}
              direction="down"
            />
            <ParallaxEffect
              className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#7ED957]/3 blur-2xl"
              speed={0.3}
            />

            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm font-medium mb-4"
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 6H22L19 16H6L3 6Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 6L2 3H0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 20C9 21.1046 8.10457 22 7 22C5.89543 22 5 21.1046 5 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                BADEM ÇEŞİTLERİ
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
              >
                Doğadan Sofranıza
                <br />
                En Kaliteli Badem Çeşitleri
              </motion.h2>
            </div>

            {/* Desktop Products Slider */}
            <div className="hidden md:block relative">
              <div
                className="overflow-hidden h-[450px] py-8"
                ref={productSliderRef}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onMouseMove={handleMouseMove}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="flex gap-6 transition-all duration-300 h-full items-center"
                  style={{ touchAction: "pan-y" }}
                >
                  {products.map((product, index) => (
                    <motion.div
                      key={index}
                      className="min-w-[280px] bg-white dark:bg-zinc-800/50 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex-shrink-0 cursor-grab active:cursor-grabbing"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="p-6 flex flex-col h-full">
                        <div className="mb-4 text-xs text-gray-500 dark:text-gray-400">{product.category}</div>
                        <div className="relative h-48 mb-4 rounded-2xl overflow-hidden">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                        <div className="mt-auto flex items-center justify-between">
                          <span className="text-green-600 font-bold">{product.price}</span>
                          <button className="w-10 h-10 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3 6H22L19 16H6L3 6Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M3 6L2 3H0"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 20C9 21.1046 8.10457 22 7 22C5.89543 22 5 21.1046 5 20"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <Button
                  className="w-12 h-12 rounded-full bg-[#7ED957] text-white flex items-center justify-center shadow-md hover:bg-[#6BC745] transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    prevProduct()
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
                <Button
                  className="w-12 h-12 rounded-full bg-[#7ED957] text-white flex items-center justify-center shadow-md hover:bg-[#6BC745] transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    nextProduct()
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </div>

            {/* Mobile Products Slider */}
            <div className="md:hidden mt-6">
              <div className="relative">
                <div className="overflow-hidden h-[400px] py-6">
                  <motion.div
                    className="flex"
                    animate={{ x: `-${activeProductIndex * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {products.map((product, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <motion.div
                          className="bg-white dark:bg-zinc-800/50 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -5 }}
                        >
                          <div className="p-6 flex flex-col h-full">
                            <div className="mb-4 text-xs text-gray-500 dark:text-gray-400">{product.category}</div>
                            <div className="relative h-48 mb-4 rounded-2xl overflow-hidden">
                              <Image
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                            <div className="mt-auto flex items-center justify-between">
                              <span className="text-green-600 font-bold">{product.price}</span>
                              <button className="w-10 h-10 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M3 6H22L19 16H6L3 6Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M3 6L2 3H0"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M9 20C9 21.1046 8.10457 22 7 22C5.89543 22 5 21.1046 5 20"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </motion.div>
                </div>
                <div className="flex justify-between mt-4">
                  <Button
                    className="w-10 h-10 rounded-full bg-[#7ED957] text-white flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation()
                      prevProduct()
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 18L9 12L15 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                  <Button
                    className="w-10 h-10 rounded-full bg-[#7ED957] text-white flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation()
                      nextProduct()
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <ScrollReveal>
                <Button
                  className="bg-[#7ED957] hover:bg-[#6BC745] text-white rounded-full px-8 py-3 h-auto text-md"
                  onClick={() => {
                    // Handle button click
                  }}
                >
                  Tüm Ürünleri Gör <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* New Video Section with Oval Bottom */}
        <VideoSection imageUrl="https://images.pexels.com/photos/3013440/pexels-photo-3013440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

        {/* Benefits Section */}
        <section className="py-20 md:py-32 overflow-hidden">
          <div className="container relative">
            {/* Background decorative elements with parallax */}
            <ParallaxEffect
              className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-[#7ED957]/3 blur-2xl"
              speed={0.4}
            />
            <ParallaxEffect
              className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-[#7ED957]/3 blur-2xl"
              speed={0.3}
              direction="up"
            />
            <ParallaxEffect
              className="absolute top-1/2 left-1/3 w-56 h-56 rounded-full bg-[#7ED957]/4 blur-2xl"
              speed={0.6}
              direction="left"
            />

            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm font-medium mb-4"
              >
                NEDEN KABIA?
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
              >
                Farkımız
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="max-w-2xl mb-3 mx-auto text-muted-foreground"
              >
                Kabia'yı tercih etmeniz için birçok neden var. İşte bunlardan bazıları:
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-zinc-800/50 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/20 dark:border-zinc-700/20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Icon without background */}
                    <div className="text-3xl mb-6">
                      <span role="img" aria-label={benefit.title}>
                        {benefit.icon}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>

                    <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-700/20">
                      <a
                        href="#"
                        className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
                      >
                        Daha Fazla Bilgi
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-32 bg-zinc-50/50 dark:bg-zinc-900/50 overflow-hidden">
          <div className="container">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm font-medium mb-4"
              >
                MÜŞTERİ YORUMLARI
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
              >
                Müşterilerimiz Ne Diyor?
              </motion.h2>
            </div>
          </div>

          {/* Auto-scrolling testimonial carousel - Full width */}
          <div className="relative overflow-hidden h-[500px] py-10 w-screen max-w-[100vw]">
            <motion.div
              className="flex gap-8 pl-8"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {/* First set of testimonials */}
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="min-w-[350px] bg-white dark:bg-zinc-800/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/20 dark:border-zinc-700/20"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{testimonial.name}</h3>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">"{testimonial.comment}"</p>

                  <div className="flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#7ED957]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Duplicate testimonials for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`duplicate-${index}`}
                  className="min-w-[350px] bg-white dark:bg-zinc-800/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/20 dark:border-zinc-700/20"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{testimonial.name}</h3>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">"{testimonial.comment}"</p>

                  <div className="flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#7ED957]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section - with lighter green background */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7ED957]/90 to-[#6BC745]/90 opacity-90"></div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                Doğanın Sunduğu En İyi Lezzetler
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-white/80 text-lg mb-10"
              >
                Ekolojik tarım yöntemleriyle üretilen ürünlerimizi keşfedin ve doğanın en saf halini sofranıza taşıyın.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button className="bg-white text-green-800 hover:bg-gray-100 rounded-full px-8 py-3 h-auto text-md">
                  Ürünleri Keşfet
                </Button>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-3 h-auto text-md">
                  Bize Ulaşın
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-zinc-50/50 dark:bg-zinc-900/50 overflow-hidden">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">Yeniliklerden Haberdar Olun</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-muted-foreground text-lg mb-8">
                  Yeni ürünlerimiz, kampanyalarımız ve ekolojik tarım hakkında bilgiler için bültenimize abone olun.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="E-posta adresiniz"
                    className="flex h-12 w-full rounded-full border border-input bg-background px-5 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button className="h-12 bg-[#7ED957] hover:bg-[#6BC745] text-white rounded-full">Abone Ol</Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default HomePage
