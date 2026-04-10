import { Geist, Geist_Mono, Playfair_Display, Cormorant_Garamond } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { SmoothScroll } from "@/components/SmoothScroll"
import { cn } from "@/lib/utils";

import { LanguageProvider } from "@/components/LanguageContext"

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Skin Self Love Portugal | Premium Health & Wellness Brand Representative",
  description:
    "Skin Self Love is the exclusive Portuguese representative for Medik8, Luxmetique, and Sunstar GUM — premium dermo-cosmetic, nutricosmetic, and oral health brands.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-PT"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, geist.variable, playfair.variable, cormorant.variable)}
    >
      <body>
        <LanguageProvider>
          <ThemeProvider>
            <SmoothScroll />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>

    </html>
  )
}
