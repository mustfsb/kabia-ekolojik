"use client"
import Image from "next/image"
import { Play, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/scroll-reveal"

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <div>
            <ScrollReveal>
              <div className="text-[#7ED957] font-medium mb-4">
                <span>NEDEN BİZİ SEÇMELİSİNİZ</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Diğer Tarım İşletmelerinden Farklıyız
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground text-lg mb-10">
                15 yıllık tarım ve ekolojik çiftçilik deneyimimizle, dünya çapında profesyonellerle çalışarak en
                kaliteli ürünleri sunuyoruz.
              </p>
            </ScrollReveal>

            {/* Feature boxes */}
            <ScrollReveal delay={0.3}>
              <div className="flex items-start gap-5 mb-8">
                <div className="w-16 h-16 rounded-full bg-[#0B6623] flex items-center justify-center flex-shrink-0">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 7V13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 10L12 7L16 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 15C8 15 9.5 17 12 17C14.5 17 16 15 16 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 19.4C7 19.4 9 21 12 21C15 21 17 19.4 17 19.4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sürdürülebilir & Yenileyici Tarım</h3>
                  <p className="text-muted-foreground">
                    Küçük ve büyük işletmeler için sürdürülebilir tarım çözümleri sunuyoruz. Doğaya saygılı
                    yöntemlerimizle toprak sağlığını koruyoruz.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex items-start gap-5 mb-10">
                <div className="w-16 h-16 rounded-full bg-[#0B6623] flex items-center justify-center flex-shrink-0">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 9C8 9 9 8 12 8C15 8 16 9 16 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 15C8 15 9 16 12 16C15 16 16 15 16 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8V16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 12H16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Organik Tarım & Gıda Üretimi</h3>
                  <p className="text-muted-foreground">
                    Kimyasal gübre ve ilaç kullanmadan, doğal yöntemlerle üretim yapıyoruz. Sağlıklı ve lezzetli
                    ürünlerimizle fark yaratıyoruz.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Features list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <ScrollReveal delay={0.5}>
                <div className="flex items-center gap-2">
                  <Check className="text-[#7ED957] h-5 w-5" />
                  <span>%100 Doğal</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.6}>
                <div className="flex items-center gap-2">
                  <Check className="text-[#7ED957] h-5 w-5" />
                  <span>Yüksek Teknoloji İşleme</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.7}>
                <div className="flex items-center gap-2">
                  <Check className="text-[#7ED957] h-5 w-5" />
                  <span>Eve Teslimat Hizmeti</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.8}>
                <div className="flex items-center gap-2">
                  <Check className="text-[#7ED957] h-5 w-5" />
                  <span>En Kaliteli Ürün</span>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.9}>
              <Button
                className="bg-[#0B6623] hover:bg-[#094d1c] text-white rounded-full px-6 py-3 h-auto text-sm md:text-md flex items-center gap-2"
                onClick={() => {
                  // Handle button click
                }}
              >
                Daha Fazla Keşfet
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </ScrollReveal>
          </div>

          {/* Right column - Images */}
          <div className="relative overflow-hidden shadow-xl" style={{ borderBottomLeftRadius: "40%" }}>
            {/* Main image */}
            <ScrollReveal direction="left">
              <div className="relative overflow-hidden shadow-xl">
                <Image
                  src="/images/why-choose-us.jpg"
                  alt="Organik Tarım"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl"
                  style={{ borderBottomLeftRadius: "40%" }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
