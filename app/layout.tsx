import { Space_Grotesk } from "next/font/google"
import { JetBrains_Mono } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Kabia Ekolojik Badem | Doğal ve Organik Badem Satışı",
    template: "%s | Kabia Ekolojik Badem",
  },
  description:
    "Kabia Ekolojik olarak, tamamen doğal ve organik yöntemlerle yetiştirilmiş taze bademleri sizlere sunuyoruz. Sağlıklı yaşam ve kaliteli beslenme için en iyi bademler burada! Ekolojik tarım ile üretilen bademlerimizi hemen keşfedin.",
  keywords: [
    "badem",
    "ekolojik badem",
    "organik badem",
    "badem satışı",
    "doğal badem",
    "kabuklu badem",
    "çiğ badem",
    "badem üreticisi",
    "badem çiftliği",
    "ekolojik tarım",
    "organik tarım",
    "kabia ekolojik",
    "taze badem",
    "badem satın al",
    "badem fiyatları",
    "badem online",
    "badem sipariş",
    "sağlıklı atıştırmalık",
    "yerli badem",
    "badem nereden alınır"
  ],
  authors: [{ name: "Kabia Ekolojik" }],
  creator: "Kabia Ekolojik",
  publisher: "Kabia Ekolojik",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 72 72'><text y='50%' x='50%' dominant-baseline='middle' text-anchor='middle' font-size='56'>🍃</text></svg>",
        sizes: "32x32",
        type: "image/svg+xml",
      },
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 72 72'><text y='50%' x='50%' dominant-baseline='middle' text-anchor='middle' font-size='56'>🍃</text></svg>",
        sizes: "192x192",
        type: "image/svg+xml",
      },
    ],
    shortcut:
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 72 72'><text y='50%' x='50%' dominant-baseline='middle' text-anchor='middle' font-size='56'>🍃</text></svg>",
    apple:
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 72 72'><text y='50%' x='50%' dominant-baseline='middle' text-anchor='middle' font-size='56'>🍃</text></svg>",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://kabiaekolojik.com",
    siteName: "Kabia Ekolojik Badem",
    title: "Kabia Ekolojik Badem | Doğal ve Organik Badem Satışı",
    description:
      "Kabia Ekolojik, ekolojik tarım ile üretilen doğal ve organik bademleriyle sağlıklı yaşamı destekler. Taze bademlerimizi hemen inceleyin ve sipariş verin.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201171274909-6qAc0l9yFtnmWK0yfTDOWwiPgp4bEd.png",
        width: 1200,
        height: 630,
        alt: "Kabia Ekolojik Badem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kabia Ekolojik Badem | Doğal ve Organik Badem Satışı",
    description:
      "Kabia Ekolojik, ekolojik tarım ile üretilen doğal ve organik bademleriyle sağlıklı yaşamı destekler. Taze bademlerimizi hemen inceleyin ve sipariş verin.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201171274909-6qAc0l9yFtnmWK0yfTDOWwiPgp4bEd.png",
    ],
    creator: "@kabiaekolojik",
    site: "@kabiaekolojik",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  applicationName: "Kabia Ekolojik Badem",
  appleWebApp: {
    capable: true,
    title: "Kabia Ekolojik Badem",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: "#924FE8",
  category: "gıda",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} font-sans bg-[#0B0C0E] dark:bg-[#0B0C0E] text-black dark:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import "./globals.css"
