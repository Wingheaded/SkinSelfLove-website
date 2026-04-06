"use client";

import { ScrollReveal } from "./ScrollReveal";
import { useLanguage } from "@/components/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative bg-[#FAFAFA] py-32 md:py-44"
    >
      <div className="mx-auto max-w-[1400px] px-8 md:px-16">
        <div className="grid gap-16 md:grid-cols-12 md:gap-8">
          {/* Left — headline */}
          <div className="md:col-span-6">
            <ScrollReveal>
              <p className="mb-4 font-sans text-xs tracking-[0.3em] uppercase text-[#A9B3A1]">
                {t.contact.label}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-4xl leading-tight tracking-tight text-[#1A1A1A] md:text-5xl lg:text-6xl">
                {t.contact.h2Part1}
                <br />
                <span className="italic text-[#A9B3A1]">{t.contact.h2Italic}</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-8 max-w-md font-sans text-base leading-relaxed text-[#6b7280]">
                {t.contact.desc}
              </p>
            </ScrollReveal>
          </div>

          {/* Right — contact details */}
          <div className="flex flex-col justify-center gap-12 md:col-span-5 md:col-start-8">
            <ScrollReveal delay={0.15}>
              <div>
                <p className="mb-2 font-sans text-xs tracking-[0.2em] uppercase text-[#A9B3A1]">
                  {t.contact.emailLabel}
                </p>
                <a
                  href="mailto:info@skinselflove.pt"
                  className="font-sans text-lg text-[#1A1A1A] transition-colors duration-500 hover:text-[#A9B3A1] md:text-xl"
                >
                  info@skinselflove.pt
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div>
                <p className="mb-2 font-sans text-xs tracking-[0.2em] uppercase text-[#A9B3A1]">
                  {t.contact.phoneLabel}
                </p>
                <a
                  href="tel:+351123456789"
                  className="font-sans text-lg text-[#1A1A1A] transition-colors duration-500 hover:text-[#A9B3A1] md:text-xl"
                >
                  +351 123 456 789
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div>
                <p className="mb-2 font-sans text-xs tracking-[0.2em] uppercase text-[#A9B3A1]">
                  {t.contact.locationLabel}
                </p>
                <p className="font-sans text-lg text-[#1A1A1A] md:text-xl">
                  {t.contact.locationVal}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
