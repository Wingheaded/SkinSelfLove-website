"use client";

import { ScrollReveal } from "./ScrollReveal";
import { useLanguage } from "@/components/LanguageContext";

export function Professionals() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: t.professionals.b1Title,
      text: t.professionals.b1Text,
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: t.professionals.b2Title,
      text: t.professionals.b2Text,
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: t.professionals.b3Title,
      text: t.professionals.b3Text,
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      title: t.professionals.b4Title,
      text: t.professionals.b4Text,
    },
  ];

  return (
    <section
      id="professionals"
      className="relative bg-white py-32 md:py-44"
    >
      <div className="mx-auto max-w-[1400px] px-8 md:px-16">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <p className="mb-4 font-sans text-xs tracking-[0.3em] uppercase text-[#A9B3A1]">
              {t.professionals.label}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-4xl leading-tight tracking-tight text-[#1A1A1A] md:text-5xl lg:text-6xl">
              {t.professionals.h2Part1}
              <br />
              <span className="italic text-[#A9B3A1]">{t.professionals.h2Italic}</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 font-sans text-base leading-relaxed text-[#6b7280] md:text-lg">
              {t.professionals.desc}
            </p>
          </ScrollReveal>
        </div>

        {/* Benefits grid */}
        <div className="mt-24 grid gap-px bg-[#1A1A1A]/5 md:mt-32 md:grid-cols-2">
          {benefits.map((benefit, i) => (
            <ScrollReveal key={benefit.title} delay={i * 0.1}>
              <div className="group bg-white p-10 transition-colors duration-700 hover:bg-[#FAFAFA] md:p-14">
                <span className="text-[#A9B3A1] transition-colors duration-500 group-hover:text-[#8a9682]">
                  {benefit.icon}
                </span>
                <h3 className="mt-8 font-heading text-xl tracking-tight text-[#1A1A1A] md:text-2xl">
                  {benefit.title}
                </h3>
                <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-[#6b7280]">
                  {benefit.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
