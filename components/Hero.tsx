"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";

// ─── Ease helper: cubic-bezier approximating power3.out ───────────────────────
const easeOut = [0.22, 1, 0.36, 1] as const;

// ─── Canvas "Clinical Fluidity" breathing background ─────────────────────────
function BreathingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const blobs = [
      { bx: 0.20, by: 0.30, rMin: 0.28, rMax: 0.40, phase: 0,    period: 11000, color: "169,179,161" },
      { bx: 0.75, by: 0.25, rMin: 0.22, rMax: 0.34, phase: 2.1,  period:  9000, color: "169,179,161" },
      { bx: 0.50, by: 0.70, rMin: 0.30, rMax: 0.42, phase: 4.2,  period: 12000, color: "200,208,196" },
      { bx: 0.85, by: 0.65, rMin: 0.18, rMax: 0.28, phase: 1.1,  period:  8500, color: "169,179,161" },
      { bx: 0.15, by: 0.75, rMin: 0.20, rMax: 0.30, phase: 3.5,  period: 10000, color: "220,224,218" },
    ] as const;

    const mouseMult = 0.06;

    const draw = (now: number) => {
      const w = canvas.width;
      const h = canvas.height;
      const dim = Math.max(w, h);

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#F9F9F7";
      ctx.fillRect(0, 0, w, h);

      for (const blob of blobs) {
        const t = now / blob.period;
        const breathe = 0.5 + 0.5 * Math.sin(t * Math.PI * 2 + blob.phase);
        const r = (blob.rMin + (blob.rMax - blob.rMin) * breathe) * dim;

        const cx = (blob.bx + (mouse.current.x - 0.5) * mouseMult) * w;
        const cy = (blob.by + (mouse.current.y - 0.5) * mouseMult) * h;

        const alpha = 0.10 + 0.08 * Math.sin(t * Math.PI * 2 + blob.phase + 1.0);

        if (!isFinite(cx) || !isFinite(cy) || !isFinite(r) || r <= 0) continue;

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0,   `rgba(${blob.color}, ${(alpha * 2.2).toFixed(3)})`);
        grad.addColorStop(0.5, `rgba(${blob.color}, ${(alpha).toFixed(3)})`);
        grad.addColorStop(1,   `rgba(${blob.color}, 0)`);

        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      rafId.current = requestAnimationFrame(draw);
    };

    rafId.current = requestAnimationFrame(draw);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) / rect.width;
      mouse.current.y = (e.clientY - rect.top) / rect.height;
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      cancelAnimationFrame(rafId.current);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}

// ─── Brand chips ──────────────────────────────────────────────────────────────
const brandChips = ["Medik8", "GUM", "Luxmetique", "Cysticlean"];

// ─── Fade-up animation helper ─────────────────────────────────────────────────
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, ease: easeOut, delay },
});

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{ backgroundColor: "#F9F9F7" }}
    >
      {/* Breathing canvas background */}
      <BreathingCanvas />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-24 pb-12 px-6 text-center">

        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0.2)}
          className="font-sans text-xs tracking-[0.3em] uppercase text-[#A9B3A1] mb-6"
        >
          {t.hero.eyebrow}
        </motion.p>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.4)}
          className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] tracking-tight text-[#1A1A1A] max-w-4xl mb-6"
        >
          {t.hero.headline}
        </motion.h1>

        {/* Thin divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.0, ease: easeOut, delay: 0.55 }}
          className="w-10 h-px bg-[#A9B3A1] mb-6 origin-center"
        />

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.65)}
          className="font-sans text-base md:text-lg leading-relaxed text-[#1A1A1A]/70 max-w-xl mb-4"
        >
          {t.hero.subheadline}
        </motion.p>

        {/* Intro */}
        <motion.p
          {...fadeUp(0.78)}
          className="font-sans text-sm leading-relaxed text-[#6b7280] max-w-lg mb-8"
        >
          {t.hero.intro}
        </motion.p>

        {/* Brand chips */}
        <motion.div
          {...fadeUp(0.9)}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {brandChips.map((brand) => (
            <span
              key={brand}
              className="px-4 py-1.5 rounded-full bg-[#edeeea] font-sans text-xs tracking-[0.12em] text-[#2f3430]"
            >
              {brand}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          {...fadeUp(1.05)}
          className="flex flex-col sm:flex-row items-center gap-5"
        >
          {/* Primary button */}
          <a
            href="#about"
            className="
              inline-flex items-center justify-center
              px-10 py-3.5
              bg-[#A9B3A1] hover:bg-[#8a9682]
              text-white font-sans text-xs tracking-[0.2em] uppercase
              rounded-none
              transition-colors duration-700
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A9B3A1]
            "
          >
            {t.hero.ctaPrimary}
          </a>

          {/* Secondary link */}
          <a
            href="#contact"
            className="
              font-sans text-xs tracking-[0.2em] uppercase
              text-[#1A1A1A] hover:text-[#A9B3A1]
              border-b border-[#1A1A1A] hover:border-[#A9B3A1]
              pb-0.5
              transition-colors duration-500
            "
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
