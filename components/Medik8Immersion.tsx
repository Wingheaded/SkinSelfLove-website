"use client";

import { motion } from "framer-motion";
import { useVibeStore } from "@/lib/useVibeStore";
import { useLanguage } from "@/components/LanguageContext";

// ─── Medik8 Brand Immersion View ──────────────────────────────────────────────
// Renders INSIDE the FLIP overlay managed by page.tsx.
// Clinical Elegance aesthetic: clean, precise, science-forward.
export function Medik8Immersion() {
  const { activeBrand } = useVibeStore();
  const { language } = useLanguage();

  if (!activeBrand) return null;

  const { theme, typography } = activeBrand;
  const isPortuguese = language === "pt-PT";

  const headingStyle = {
    fontFamily: typography.headingFont,
    letterSpacing: typography.letterSpacing,
    fontWeight: typography.weight ?? "500",
    color: theme.text,
  };

  return (
    <>
      {/* ── Hero Section ───────────────────────────────────────────────────── */}
      <section className="flex min-h-screen flex-col items-center justify-center px-8 text-center">

        {/* Precision accent — thin, sage green */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mb-8 h-[1.5px] w-12 origin-center"
          style={{ backgroundColor: theme.primaryAccent }}
        />

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="mb-5 font-sans text-[11px] tracking-[0.35em] uppercase"
          style={{ color: theme.primaryAccent }}
        >
          {isPortuguese ? "Dermociência de Referência" : "Reference Dermo-Science"}
        </motion.p>

        {/* Brand Name — Inter weight 500, tighter tracking */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-[clamp(4rem,8.5vw,7.5rem)] leading-[1.05]"
          style={headingStyle}
        >
          Medik8
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
          className="mt-6 max-w-xl font-sans text-base leading-relaxed md:text-lg"
          style={{ color: `${theme.text}90` }}
        >
          {isPortuguese
            ? "A filosofia CSA — Vitamina C, Protector Solar, Vitamina A — assenta numa dermatologia baseada em evidência que entrega resultados reais e mensuráveis."
            : "The CSA philosophy — Vitamin C, SPF, Vitamin A — is grounded in evidence-based dermatology that delivers real, measurable results."}
        </motion.p>

        {/* Subtle divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
          className="mt-8 h-px w-20 origin-center"
          style={{ backgroundColor: `${theme.primaryAccent}35` }}
        />
      </section>

      {/* ── Brand Pillars ───────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1200px] px-8 pb-32 pt-16 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
          className="grid gap-12 md:grid-cols-3"
        >
          {/* Pillar 1 — CSA Philosophy */}
          <div className="group">
            <div
              className="mb-4 h-[1.5px] w-6 transition-all duration-500 group-hover:w-14"
              style={{ backgroundColor: theme.primaryAccent }}
            />
            <h3
              className="mb-3 text-base tracking-tight"
              style={headingStyle}
            >
              {isPortuguese ? "Filosofia CSA" : "CSA Philosophy"}
            </h3>
            <p className="font-sans text-sm leading-relaxed" style={{ color: `${theme.text}75` }}>
              {isPortuguese
                ? "Vitamina C, Protetor Solar e Vitamina A — um protocolo diário de três passos validado pela dermatologia científica moderna."
                : "Vitamin C, SPF, and Vitamin A — a scientifically validated three-step daily protocol rooted in modern clinical dermatology."}
            </p>
          </div>

          {/* Pillar 2 — Clinical Efficacy */}
          <div className="group">
            <div
              className="mb-4 h-[1.5px] w-6 transition-all duration-500 group-hover:w-14"
              style={{ backgroundColor: theme.primaryAccent }}
            />
            <h3
              className="mb-3 text-base tracking-tight"
              style={headingStyle}
            >
              {isPortuguese ? "Eficácia Clínica" : "Clinical Efficacy"}
            </h3>
            <p className="font-sans text-sm leading-relaxed" style={{ color: `${theme.text}75` }}>
              {isPortuguese
                ? "Cada formulação é testada clinicamente para garantir resultados mensuráveis, com estudos de eficácia conduzidos em condições rigorosas."
                : "Every formulation is clinically tested to ensure measurable results, with efficacy studies conducted under rigorous conditions."}
            </p>
          </div>

          {/* Pillar 3 — Skin Longevity */}
          <div className="group">
            <div
              className="mb-4 h-[1.5px] w-6 transition-all duration-500 group-hover:w-14"
              style={{ backgroundColor: theme.primaryAccent }}
            />
            <h3
              className="mb-3 text-base tracking-tight"
              style={headingStyle}
            >
              {isPortuguese ? "Longevidade da Pele" : "Skin Longevity"}
            </h3>
            <p className="font-sans text-sm leading-relaxed" style={{ color: `${theme.text}75` }}>
              {isPortuguese
                ? "Mais do que tratar, Medik8 educa na prevenção — construindo uma pele mais saudável e resiliente ao longo do tempo."
                : "Beyond treatment, Medik8 educates on prevention — building healthier, more resilient skin over the long term."}
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
