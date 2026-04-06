"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { useLanguage } from "@/components/LanguageContext";

export function PortfolioPreview() {
  const { t } = useLanguage();

  const brands = [
    {
      name: "Medik8",
      tagline: t.portfolio.medik8Tagline,
      description: t.portfolio.medik8Desc,
      href: "#",
      accent: "#A9B3A1",
    },
    {
      name: "Luxmetique",
      tagline: t.portfolio.luxTagline,
      description: t.portfolio.luxDesc,
      href: "#",
      accent: "#C8D0C4",
    },
    {
      name: "GUM",
      tagline: t.portfolio.gumTagline,
      description: t.portfolio.gumDesc,
      href: "#",
      accent: "#B8C2B0",
    },
  ];

  return (
    <section
      id="brands"
      className="relative bg-white py-32 md:py-44"
    >
      {/* Section header */}
      <div className="mx-auto max-w-[1400px] px-8 md:px-16">
        <ScrollReveal>
          <p className="mb-4 font-sans text-xs tracking-[0.3em] uppercase text-[#A9B3A1]">
            {t.portfolio.label}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-heading text-4xl leading-tight tracking-tight text-[#1A1A1A] md:text-6xl lg:text-7xl">
            {t.portfolio.headline}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-[#6b7280] md:text-lg">
            {t.portfolio.desc}
          </p>
        </ScrollReveal>

        {/* Asymmetrical editorial grid */}
        <div className="mt-24 grid gap-8 md:mt-32 md:grid-cols-12 md:gap-6">
          {brands.map((brand, i) => {
            // Asymmetric placement: first card spans 7 cols, second 5, third 6 offset
            const colClasses = [
              "md:col-span-7",
              "md:col-span-5",
              "md:col-span-6 md:col-start-4",
            ][i];

            return (
              <ScrollReveal
                key={brand.name}
                delay={i * 0.15}
                className={colClasses}
              >
                <a
                  href={brand.href}
                  className="group relative block overflow-hidden bg-[#FAFAFA] p-10 transition-all duration-700 hover:bg-white hover:shadow-[0_40px_80px_rgba(0,0,0,0.04)] md:p-14"
                >
                  {/* Brand number */}
                  <span className="font-sans text-xs tracking-[0.2em] text-[#A9B3A1]/60">
                    0{i + 1}
                  </span>

                  {/* Brand name */}
                  <div className="mt-8 flex items-end justify-between gap-4">
                    <h3 className="font-heading text-3xl tracking-tight text-[#1A1A1A] md:text-4xl lg:text-5xl">
                      {brand.name}
                    </h3>
                    <span className="mb-1 font-sans text-xs tracking-[0.15em] uppercase text-[#6b7280] transition-colors duration-500 group-hover:text-[#A9B3A1]">
                      {brand.tagline}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="my-8 h-px w-full bg-[#1A1A1A]/8" />

                  {/* Description */}
                  <p className="max-w-md font-sans text-sm leading-relaxed text-[#6b7280]">
                    {brand.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-10 flex items-center gap-3">
                    <span className="font-sans text-xs tracking-[0.15em] uppercase text-[#1A1A1A] transition-colors duration-500 group-hover:text-[#A9B3A1]">
                      {t.portfolio.explore}
                    </span>
                    <motion.span
                      className="inline-block text-[#A9B3A1]"
                      initial={{ x: 0 }}
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      &rarr;
                    </motion.span>
                  </div>

                  {/* Hover accent line */}
                  <span
                    className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
                    style={{ backgroundColor: brand.accent }}
                  />
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
