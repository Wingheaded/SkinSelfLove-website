"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { PortfolioPreview } from "@/components/PortfolioPreview";
import { About } from "@/components/About";
import { Professionals } from "@/components/Professionals";
import { Contact } from "@/components/Contact";
import { LuxmetiqueImmersion } from "@/components/LuxmetiqueImmersion";
import { Medik8Immersion } from "@/components/Medik8Immersion";
import { GumImmersion } from "@/components/GumImmersion";
import { useVibeStore } from "@/lib/useVibeStore";
import { useLayoutEffect } from "react";

export default function Page() {
  const { activeBrand, isExiting } = useVibeStore();

  // ── Scroll Lock ──────────────────────────────────────────────────────────────
  // Freeze the Home grid scroll the instant a brand is active so the user
  // never accidentally scrolls the invisible base layer.
  useLayoutEffect(() => {
    const lenis = (window as any).lenis;
    if (activeBrand) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [activeBrand]);

  // ── Brand → Component routing ────────────────────────────────────────────────
  const renderImmersion = () => {
    if (!activeBrand) return null;
    switch (activeBrand.brandId) {
      case "medik8-002":    return <Medik8Immersion />;
      case "luxmetique-001": return <LuxmetiqueImmersion />;
      case "gum-003":       return <GumImmersion />;
      default:              return null;
    }
  };

  return (
    <>
      {/* ── Base Layer (Always Mounted) ──────────────────────────────────────── */}
      <main>
        <Hero />
        <PortfolioPreview />
        <About />
        <Professionals />
        <Contact />
      </main>

      {/* ── Cinematic Overlay (Asymmetrical Transition) ─────────────────────── */}
      {/* No AnimatePresence — we manually control opacity via isExiting.        */}
      {/* Entry: FLIP geometry expansion via layoutId (spring physics).          */}
      {/* Exit:  isExiting → opacity:0 over 0.8s, then setTimeout unmounts.     */}
      {activeBrand && (
        <motion.div
          layoutId={`brand-bg-${activeBrand.brandId}`}
          animate={{ opacity: isExiting ? 0 : 1 }}
          transition={{
            opacity: { duration: 0.8, ease: "easeInOut" },
            layout: {
              type: activeBrand.motion.transitionType,
              stiffness: activeBrand.motion.stiffness,
              damping: activeBrand.motion.damping,
              duration: activeBrand.motion.scalingDuration,
            },
          }}
          className="fixed inset-0 z-50 w-screen h-screen overflow-y-auto"
          style={{ backgroundColor: activeBrand.theme.background }}
          data-lenis-prevent
        >
          {renderImmersion()}
        </motion.div>
      )}
    </>
  );
}
