"use client";

import { ScrollReveal } from "./ScrollReveal";
import { useLanguage } from "@/components/LanguageContext";
import TeamShowcase from "@/components/ui/team-showcase";

export function About() {
  const { t } = useLanguage();

  const pillars: Array<{
    number: string;
    title: string;
    text: string;
    chips?: string[];
  }> = [
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
      chips: t.about.valores,
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-[#FAFAFA] py-32 md:py-44"
    >
      <div className="mx-auto max-w-[1400px] px-8 md:px-16">
        <div className="grid gap-16 md:grid-cols-12 md:gap-8">

          {/* ── Left column — Sobre ───────────────────────────────────────── */}
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

            {/* Know-how chips */}
            <ScrollReveal delay={0.3}>
              <div className="mt-10">
                <p className="mb-3 font-sans text-xs tracking-[0.25em] uppercase text-[#A9B3A1]">
                  {t.about.knowhowLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.about.knowhowTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 rounded-full bg-[#edeeea] font-sans text-xs tracking-[0.1em] text-[#2f3430]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Criteria chips */}
            <ScrollReveal delay={0.4}>
              <div className="mt-8">
                <p className="mb-3 font-sans text-xs tracking-[0.25em] uppercase text-[#A9B3A1]">
                  {t.about.criteriaLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.about.criteriaTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 rounded-full border border-[#A9B3A1]/40 font-sans text-xs tracking-[0.1em] text-[#2f3430]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right column — Missão / Visão / Valores ───────────────────── */}
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

                  {/* Render chips for Valores, text for Mission/Vision */}
                  {pillar.chips ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {pillar.chips.map((chip) => (
                        <span
                          key={chip}
                          className="px-3.5 py-1.5 rounded-full bg-[#edeeea] font-sans text-xs tracking-[0.1em] text-[#2f3430]"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-4 font-sans text-sm leading-relaxed text-[#6b7280]">
                      {pillar.text}
                    </p>
                  )}

                  <div className="mt-6 h-px w-full bg-[#1A1A1A]/6" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ── Team showcase ─────────────────────────────────────────────────── */}
        <div className="mt-32 md:mt-48 pt-32 border-t border-[#1A1A1A]/5">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="font-heading text-4xl leading-tight tracking-tight text-[#1A1A1A] md:text-5xl lg:text-6xl">
                {t.about.teamTitle}
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex justify-center py-20 md:py-24">
              <TeamShowcase />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
