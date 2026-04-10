"use client";

import { motion } from "framer-motion";
import { useVibeStore } from "@/lib/useVibeStore";
import { useLanguage } from "@/components/LanguageContext";

// ─── Luxmetique Brand Immersion View ──────────────────────────────────────────
// Renders INSIDE the FLIP overlay managed by page.tsx.
// No outer wrapper, no positioning — that's the overlay's job.
export function LuxmetiqueImmersion() {
  const { activeBrand } = useVibeStore();
  const { language } = useLanguage();

  if (!activeBrand) return null;

  const { theme, typography } = activeBrand;
  const isPortuguese = language === "pt-PT";

  return (
    <>
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-8 text-center">
        {/* Golden accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="mb-8 h-px w-16 origin-center"
          style={{ backgroundColor: theme.primaryAccent }}
        />

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="mb-6 font-sans text-xs tracking-[0.3em] uppercase"
          style={{ color: theme.primaryAccent }}
        >
          {isPortuguese ? "Nutricosmética de Excelência" : "Excellence in Nutricosmetics"}
        </motion.p>

        {/* Brand name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-[clamp(4rem,9vw,8rem)] leading-[1.1] tracking-tight"
          style={{
            color: theme.text,
            fontFamily: typography.headingFont,
            letterSpacing: typography.letterSpacing,
          }}
        >
          Luxmetique
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
          className="mt-6 max-w-xl font-sans text-base leading-relaxed md:text-lg"
          style={{ color: `${theme.text}99` }}
        >
          {isPortuguese
            ? "Fundindo a ciência clínica de elite ao bem-estar diário, promovendo a beleza de dentro para fora através de uma suplementação premium."
            : "Blending high-end clinical science with daily wellness, promoting beauty from within through premium supplementation."}
        </motion.p>

        {/* Accent divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
          className="mt-8 h-px w-24 origin-center"
          style={{ backgroundColor: `${theme.primaryAccent}40` }}
        />
      </section>

      {/* Content Section — Brand Pillars */}
      <section className="mx-auto max-w-[1200px] px-8 pb-32 pt-16 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.0 }}
          className="grid gap-12 md:grid-cols-3"
        >
          {/* Pillar 1 */}
          <div className="group">
            <div
              className="mb-4 h-px w-8 transition-all duration-700 group-hover:w-16"
              style={{ backgroundColor: theme.primaryAccent }}
            />
            <h3
              className="mb-3 text-lg tracking-tight"
              style={{
                fontFamily: typography.headingFont,
                color: theme.text,
              }}
            >
              {isPortuguese ? "Ciência Clínica" : "Clinical Science"}
            </h3>
            <p className="font-sans text-sm leading-relaxed" style={{ color: `${theme.text}80` }}>
              {isPortuguese
                ? "Formulações desenvolvidas com rigor farmacêutico, sustentadas por evidência clínica e investigação científica de ponta."
                : "Formulations developed with pharmaceutical rigor, backed by clinical evidence and cutting-edge scientific research."}
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="group">
            <div
              className="mb-4 h-px w-8 transition-all duration-700 group-hover:w-16"
              style={{ backgroundColor: theme.primaryAccent }}
            />
            <h3
              className="mb-3 text-lg tracking-tight"
              style={{
                fontFamily: typography.headingFont,
                color: theme.text,
              }}
            >
              {isPortuguese ? "Beleza Interior" : "Beauty From Within"}
            </h3>
            <p className="font-sans text-sm leading-relaxed" style={{ color: `${theme.text}80` }}>
              {isPortuguese
                ? "A nutricosmética que transforma a sua rotina de cuidado pessoal, promovendo resultados visíveis através da suplementação inteligente."
                : "Nutricosmetics that transform your self-care routine, delivering visible results through intelligent supplementation."}
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="group">
            <div
              className="mb-4 h-px w-8 transition-all duration-700 group-hover:w-16"
              style={{ backgroundColor: theme.primaryAccent }}
            />
            <h3
              className="mb-3 text-lg tracking-tight"
              style={{
                fontFamily: typography.headingFont,
                color: theme.text,
              }}
            >
              {isPortuguese ? "Luxo Consciente" : "Conscious Luxury"}
            </h3>
            <p className="font-sans text-sm leading-relaxed" style={{ color: `${theme.text}80` }}>
              {isPortuguese
                ? "Ingredientes premium selecionados com responsabilidade, entregues numa experiência de marca que eleva o quotidiano."
                : "Premium ingredients responsibly selected, delivered in a brand experience that elevates the everyday."}
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
