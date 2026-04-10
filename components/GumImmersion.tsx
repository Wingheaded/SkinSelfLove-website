"use client";

import { motion } from "framer-motion";
import { useVibeStore } from "@/lib/useVibeStore";
import { useLanguage } from "@/components/LanguageContext";

// ─── GUM Brand Immersion View ──────────────────────────────────────────────────
// Renders INSIDE the FLIP overlay managed by page.tsx.
// Brand personality: "Fluidity" — calm, trustworthy, science-meets-wellness.
export function GumImmersion() {
  const { activeBrand } = useVibeStore();
  const { language } = useLanguage();

  if (!activeBrand) return null;

  const { theme, typography } = activeBrand;
  const isPortuguese = language === "pt-PT";

  const headingStyle = {
    fontFamily: typography.headingFont,
    letterSpacing: typography.letterSpacing,
    fontWeight: typography.weight ?? "400",
    color: theme.text,
  };

  return (
    <>
      {/* ── Hero Section ───────────────────────────────────────────────────── */}
      <section className="flex min-h-screen flex-col items-center justify-center px-8 text-center">

        {/* Fluid wave accent — wider, softer than the other brands */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mb-8 h-[1px] w-20 origin-center"
          style={{ backgroundColor: theme.primaryAccent }}
        />

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="mb-5 font-sans text-[11px] tracking-[0.35em] uppercase"
          style={{ color: theme.primaryAccent }}
        >
          {isPortuguese ? "Saúde Oral de Referência" : "Reference Oral Health"}
        </motion.p>

        {/* Brand Name — DM Sans weight 400, slightly wider tracking for openness */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
          className="text-5xl md:text-7xl lg:text-[clamp(4rem,8.5vw,7.5rem)] leading-[1.05]"
          style={headingStyle}
        >
          GUM
        </motion.h1>

        {/* Sub-brand / Sunstar callout */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          className="mt-3 font-sans text-xs tracking-[0.2em] uppercase"
          style={{ color: `${theme.text}50` }}
        >
          by Sunstar
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
          className="mt-8 max-w-xl font-sans text-base leading-relaxed md:text-lg"
          style={{ color: `${theme.text}85` }}
        >
          {isPortuguese
            ? "Inovação suíça ao serviço da saúde oral — produtos clínicos desenvolvidos para profissionais e formulados para o dia a dia."
            : "Swiss innovation in service of oral health — clinical products developed for professionals and formulated for everyday life."}
        </motion.p>

        {/* Subtle fluid divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          className="mt-8 h-px w-24 origin-center"
          style={{ backgroundColor: `${theme.primaryAccent}30` }}
        />
      </section>

      {/* ── Brand Pillars ───────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1200px] px-8 pb-32 pt-16 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
          className="grid gap-12 md:grid-cols-3"
        >
          {/* Pillar 1 — Swiss Innovation */}
          <div className="group">
            <div
              className="mb-4 h-[1px] w-6 transition-all duration-700 group-hover:w-14"
              style={{ backgroundColor: theme.primaryAccent }}
            />
            <h3
              className="mb-3 text-base"
              style={headingStyle}
            >
              {isPortuguese ? "Inovação Suíça" : "Swiss Innovation"}
            </h3>
            <p className="font-sans text-sm leading-relaxed" style={{ color: `${theme.text}70` }}>
              {isPortuguese
                ? "Desenvolvida pelo grupo Sunstar, a GUM combina décadas de investigação com os mais altos padrões de qualidade da indústria farmacêutica suíça."
                : "Developed by the Sunstar Group, GUM combines decades of research with the highest quality standards of the Swiss pharmaceutical industry."}
            </p>
          </div>

          {/* Pillar 2 — Clinical Range */}
          <div className="group">
            <div
              className="mb-4 h-[1px] w-6 transition-all duration-700 group-hover:w-14"
              style={{ backgroundColor: theme.primaryAccent }}
            />
            <h3
              className="mb-3 text-base"
              style={headingStyle}
            >
              {isPortuguese ? "Gama Clínica" : "Clinical Range"}
            </h3>
            <p className="font-sans text-sm leading-relaxed" style={{ color: `${theme.text}70` }}>
              {isPortuguese
                ? "Escovas, escovas interdentais, fios dentários e enxaguatórios especialmente formulados para responder às necessidades clínicas dos profissionais de saúde oral."
                : "Brushes, interdental brushes, dental floss and mouthwashes specially formulated to meet the clinical needs of oral health professionals."}
            </p>
          </div>

          {/* Pillar 3 — Everyday Wellness */}
          <div className="group">
            <div
              className="mb-4 h-[1px] w-6 transition-all duration-700 group-hover:w-14"
              style={{ backgroundColor: theme.primaryAccent }}
            />
            <h3
              className="mb-3 text-base"
              style={headingStyle}
            >
              {isPortuguese ? "Bem-Estar Diário" : "Everyday Wellness"}
            </h3>
            <p className="font-sans text-sm leading-relaxed" style={{ color: `${theme.text}70` }}>
              {isPortuguese
                ? "Da consulta para a casa — a GUM traduz protocolos clínicos de excelência em rotinas acessíveis e eficazes para o consumidor."
                : "From the clinic to the home — GUM translates excellence clinical protocols into accessible and effective routines for the consumer."}
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
