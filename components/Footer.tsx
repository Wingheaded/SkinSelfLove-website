"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { useLanguage } from "@/components/LanguageContext";

type NavKey = "about" | "brands" | "professionals" | "contact";

const navLinks: { key: NavKey; href: string }[] = [
  { key: "about", href: "#about" },
  { key: "brands", href: "#brands" },
  { key: "professionals", href: "#professionals" },
  { key: "contact", href: "#contact" },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#F4F5F2] py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-8 md:px-16">
        <ScrollReveal>
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            {/* Brand column */}
            <div className="md:col-span-4">
              <Image
                src="/SKIN SELF LOVE_LOGO_HORIZONTAL_MANCHA_RGB.png"
                alt="Skin Self Love"
                width={160}
                height={42}
                className="mb-6 h-8 w-auto object-contain"
              />
              <p className="max-w-xs font-sans text-sm leading-relaxed text-[#6b7280]">
                {t.footer.desc}
              </p>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3 md:col-start-6">
              <p className="mb-5 font-sans text-xs tracking-[0.2em] uppercase text-[#1A1A1A]">
                {t.footer.navigation}
              </p>
              <nav className="flex flex-col gap-3">
                {navLinks.map(({ key, href }) => (
                  <a
                    key={key}
                    href={href}
                    className="font-sans text-sm text-[#6b7280] transition-colors duration-400 hover:text-[#1A1A1A]"
                  >
                    {t.nav[key]}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className="md:col-span-3">
              <p className="mb-5 font-sans text-xs tracking-[0.2em] uppercase text-[#1A1A1A]">
                {t.footer.contact}
              </p>
              <div className="flex flex-col gap-3">
                <p className="font-sans text-sm text-[#6b7280]">
                  {t.footer.location}
                </p>
                <a
                  href="mailto:info@skinselflove.pt"
                  className="font-sans text-sm text-[#6b7280] transition-colors duration-400 hover:text-[#1A1A1A]"
                >
                  info@skinselflove.pt
                </a>
                <a
                  href="tel:+351123456789"
                  className="font-sans text-sm text-[#6b7280] transition-colors duration-400 hover:text-[#1A1A1A]"
                >
                  +351 123 456 789
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#1A1A1A]/8 pt-8 md:flex-row">
          <p className="font-sans text-xs tracking-wide text-[#6b7280]">
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#6b7280] transition-colors duration-400 hover:text-[#A9B3A1]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#6b7280] transition-colors duration-400 hover:text-[#A9B3A1]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
