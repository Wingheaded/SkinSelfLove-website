"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { useLanguage } from "@/components/LanguageContext";
import { useVibeStore, LUXMETIQUE_PAYLOAD, MEDIK8_PAYLOAD, GUM_PAYLOAD } from "@/lib/useVibeStore";

export function PortfolioPreview() {
  const { t } = useLanguage();
  const { activeBrand, setActiveBrand, setHomeScroll } = useVibeStore();

  const brands = [
    {
      name: "Medik8",
      brandId: MEDIK8_PAYLOAD.brandId,
      tagline: t.portfolio.medik8Tagline,
      description: t.portfolio.medik8Desc,
      accent: "#80897C",
      onClick: () => { setHomeScroll(window.scrollY); setActiveBrand(MEDIK8_PAYLOAD); },
    },
    {
      name: "Luxmetique",
      brandId: LUXMETIQUE_PAYLOAD.brandId,
      tagline: t.portfolio.luxTagline,
      description: t.portfolio.luxDesc,
      accent: "#D4AF37",
      onClick: () => { setHomeScroll(window.scrollY); setActiveBrand(LUXMETIQUE_PAYLOAD); },
    },
    {
      name: "GUM",
      brandId: GUM_PAYLOAD.brandId,
      tagline: t.portfolio.gumTagline,
      description: t.portfolio.gumDesc,
      accent: "#4A90E2",
      onClick: () => { setHomeScroll(window.scrollY); setActiveBrand(GUM_PAYLOAD); },
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

        {/* Equal 3-Column grid */}
        <div className="mt-24 grid gap-8 md:mt-32 md:grid-cols-3 md:gap-6 lg:gap-8">
          {brands.map((brand, i) => {
            return (
              <ScrollReveal
                key={brand.name}
                delay={i * 0.15}
                className="h-full"
              >
                <motion.div
                  // Drop layoutId when a brand overlay is active so the
                  // reverse-FLIP has no target — forces the opacity dissolve.
                  layoutId={activeBrand ? undefined : `brand-bg-${brand.brandId}`}
                  onClick={brand.onClick}
                  className="group relative flex flex-col h-full cursor-pointer overflow-hidden bg-[#FAFAFA] p-10 transition-all duration-700 hover:bg-white hover:shadow-[0_40px_80px_rgba(0,0,0,0.04)] md:p-14"
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
                  <p className="max-w-md flex-1 font-sans text-sm leading-relaxed text-[#6b7280]">
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
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
