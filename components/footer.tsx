"use client"

import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Footer() {
  const pathname = usePathname()

  const quickLinks = [
    { href: "/", label: "Anasayfa" },
    { href: "/about", label: "Hakkımızda" },
    { href: "/blog", label: "Blog" },
    { href: "/shop", label: "Mağaza" },
    { href: "/contact", label: "İletişim" },
  ]

  const products = [
    { href: "#", label: "Organik Çiğ Badem" },
    { href: "#", label: "Kavrulmuş Badem" },
    { href: "#", label: "Badem Ezmesi" },
    { href: "#", label: "Badem Sütü" },
  ]

  const contactInfo = [
    { icon: MapPin, details: "Sakarya, Türkiye" },
    { icon: Mail, details: "info@kabia.com", href: "mailto:info@kabia.com" },
    { icon: Phone, details: "+90 123 456 7890", href: "tel:+901234567890" },
  ]

  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
  ]

  return (
    <footer className="py-16 border-t border-zinc-800/30 bg-zinc-100 dark:bg-zinc-900">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-8 h-8 overflow-hidden flex items-center justify-center">
                <span className="text-2xl" role="img" aria-label="Leaf">
                  🍃
                </span>
              </div>
              <span className="font-mono text-xl">kabia</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Ekolojik tarım yöntemleriyle üretilen doğal ürünler. Sağlıklı ve lezzetli bir tercih için doğru
              yerdesiniz.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-[#7ED957]/10 flex items-center justify-center text-[#7ED957] hover:bg-[#7ED957] hover:text-white transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-6">Hızlı Bağlantılar</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${
                      pathname === link.href ? "text-[#7ED957]" : "text-muted-foreground hover:text-[#7ED957]"
                    } transition-colors`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-6">Ürünlerimiz</h3>
            <ul className="space-y-4">
              {products.map((product, index) => (
                <li key={index}>
                  <a href={product.href} className="text-muted-foreground hover:text-[#7ED957] transition-colors">
                    {product.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-6">İletişim</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <item.icon className="h-5 w-5 text-[#7ED957] mr-3 mt-0.5" />
                  {item.href ? (
                    <a href={item.href} className="text-muted-foreground hover:text-[#7ED957] transition-colors">
                      {item.details}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{item.details}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800/10 mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kabia. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
