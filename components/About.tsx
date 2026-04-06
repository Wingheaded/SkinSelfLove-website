"use client";

import { ScrollReveal } from "./ScrollReveal";
import { useLanguage } from "@/components/LanguageContext";

export function About() {
  const { t } = useLanguage();

  const pillars = [
    {
      number: "01",
      title: t.about.p1Title,
      text: t.about.p1Text,
    },
    {
      number: "02",
      title: t.about.p2Title,
      text: t.about.p2Text,
    },
    {
      number: "03",
      title: t.about.p3Title,
      text: t.about.p3Text,
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-[#FAFAFA] py-32 md:py-44"
    >
      <div className="mx-auto max-w-[1400px] px-8 md:px-16">
        <div className="grid gap-16 md:grid-cols-12 md:gap-8">
          {/* Left column — headline */}
          <div className="md:col-span-5">
            <ScrollReveal>
              <p className="mb-4 font-sans text-xs tracking-[0.3em] uppercase text-[#A9B3A1]">
                {t.about.label}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-4xl leading-tight tracking-tight text-[#1A1A1A] md:text-5xl lg:text-6xl">
                {t.about.h2Part1}
                <br />
                {t.about.h2Part2 && <>{t.about.h2Part2}<br /></>}
                <span className="italic text-[#A9B3A1]">{t.about.h2Italic}</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-8 max-w-sm font-sans text-base leading-relaxed text-[#6b7280]">
                {t.about.desc}
              </p>
            </ScrollReveal>
          </div>

          {/* Right column — pillars */}
          <div className="flex flex-col gap-12 md:col-span-6 md:col-start-7 md:gap-16">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.number} delay={i * 0.12}>
                <div className="group">
                  <span className="font-sans text-xs tracking-[0.2em] text-[#A9B3A1]/60">
                    {pillar.number}
                  </span>
                  <h3 className="mt-3 font-heading text-2xl tracking-tight text-[#1A1A1A] md:text-3xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-[#6b7280]">
                    {pillar.text}
                  </p>
                  <div className="mt-6 h-px w-full bg-[#1A1A1A]/6" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
