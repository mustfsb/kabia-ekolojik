"use client"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/scroll-reveal"
import Image from "next/image"
import CategorySlider from "@/components/category-slider"
import ScrollTextReveal from "@/components/scroll-text-reveal"

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Category Slider at the top */}
      <CategorySlider className="absolute top-0 left-0 right-0 z-10" />

      {/* Scroll Text Reveal Component */}
      <ScrollTextReveal
        text="Magic UI will change the way you design."
        className="my-16 z-20 relative"
        lightColor="#e5e5e5"
        darkColor="#000000"
      />

      <div className="container relative z-10 mt-16">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image src="/images/testimonial-bg.png" alt="Background" fill className="object-cover" />
            <div className="absolute inset-0 bg-[#0B6623]/30 backdrop-blur-sm"></div>
          </div>

          <div className="relative z-10 py-16 md:py-24 px-8 md:px-16">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-white">
                  Doğanın Lezzetini Keşfedin
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-white/80 text-lg mb-8">
                  Ekolojik tarım yöntemleriyle üretilen ürünlerimizi deneyimlemek için hemen alışverişe başlayın.
                  Sağlıklı ve lezzetli bir tercih için doğru yerdesiniz.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Button
                  className="bg-[#7ED957] hover:bg-[#6BC745] text-white rounded-full px-8 py-6 h-auto text-md"
                  onClick={() => {
                    // Handle button click
                  }}
                >
                  Hemen Alışverişe Başla
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
