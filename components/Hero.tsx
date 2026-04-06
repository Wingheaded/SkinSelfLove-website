"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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

    // Resize to fill parent
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Blob definitions — each has a base position, radii range, phase offset and period
    const blobs = [
      { bx: 0.20, by: 0.30, rMin: 0.28, rMax: 0.40, phase: 0,    period: 11000, color: "169,179,161" },
      { bx: 0.75, by: 0.25, rMin: 0.22, rMax: 0.34, phase: 2.1,  period:  9000, color: "169,179,161" },
      { bx: 0.50, by: 0.70, rMin: 0.30, rMax: 0.42, phase: 4.2,  period: 12000, color: "200,208,196" },
      { bx: 0.85, by: 0.65, rMin: 0.18, rMax: 0.28, phase: 1.1,  period:  8500, color: "169,179,161" },
      { bx: 0.15, by: 0.75, rMin: 0.20, rMax: 0.30, phase: 3.5,  period: 10000, color: "220,224,218" },
    ] as const;

    const mouseMult = 0.06; // subtle mouse-follow displacement

    const draw = (now: number) => {
      const w = canvas.width;
      const h = canvas.height;
      const dim = Math.max(w, h);

      ctx.clearRect(0, 0, w, h);

      // Off-white base
      ctx.fillStyle = "#F9F9F7";
      ctx.fillRect(0, 0, w, h);

      for (const blob of blobs) {
        const t = now / blob.period;
        const breathe = 0.5 + 0.5 * Math.sin(t * Math.PI * 2 + blob.phase);
        const r = (blob.rMin + (blob.rMax - blob.rMin) * breathe) * dim;

        // Mouse displacement — pulls blob gently toward cursor
        const cx = (blob.bx + (mouse.current.x - 0.5) * mouseMult) * w;
        const cy = (blob.by + (mouse.current.y - 0.5) * mouseMult) * h;

        // Soft alpha oscillates with a secondary sine for extra organicism
        const alpha = 0.10 + 0.08 * Math.sin(t * Math.PI * 2 + blob.phase + 1.0);

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

// ─── Hero content ─────────────────────────────────────────────────────────────
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: easeOut, delay },
});

export function Hero() {
  const { t } = useLanguage();
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["medik8", "Luxmetique", "GUM"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2800); // Further slowed down for premium feel
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{ backgroundColor: "#F9F9F7" }}
    >
      {/* Breathing canvas background */}
      <BreathingCanvas />

      {/* Navigation provided by global Header */}

      {/* Main content — centered, weightless */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-20 pb-8 px-6 text-center">
        {/* Eyebrow label */}
        <motion.p
          {...fadeUp(0.2)}
          className="font-sans text-xs tracking-[0.3em] uppercase text-[#A9B3A1] mb-2 md:mb-3"
        >
          {t.hero.eyebrow}
        </motion.p>

        {/* H1 with animated word scrolling */}
        <motion.h1
          {...fadeUp(0.45)}
          className="font-heading w-full text-4xl md:text-6xl lg:text-[clamp(3.5rem,8vw,6.5rem)] leading-[1.1] tracking-tight text-[#1A1A1A] max-w-full md:max-w-7xl mb-2 md:mb-4"
        >
          <span className="block mb-1 md:mb-2 text-balance">Skin Self Love</span>
          <span className="relative flex w-full justify-center overflow-hidden text-center min-h-[1.2em] md:min-h-[1.3em] py-1 md:py-2 px-8">
            &nbsp;
            {titles.map((title, index) => (
              <motion.span
                key={index}
                className="absolute inset-0 flex items-center justify-center font-bold text-[#A9B3A1] italic whitespace-nowrap"
                initial={{ opacity: 0, y: "150%" }}
                transition={{ type: "spring", stiffness: 35, damping: 20 }}
                animate={
                  titleNumber === index
                    ? {
                        y: 0,
                        opacity: 1,
                      }
                    : {
                        y: titleNumber > index ? "-150%" : "150%",
                        opacity: 0,
                      }
                }
              >
                {title}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.0, ease: easeOut, delay: 0.65 }}
          className="w-12 h-px bg-[#A9B3A1] mt-1 mb-4 origin-center"
        />

        {/* Subtext */}
        <motion.p
          {...fadeUp(0.75)}
          className="font-sans text-sm md:text-base leading-relaxed text-[#6b7280] max-w-xl mb-6 md:mb-8"
        >
          {t.hero.subtext}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.95)}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Primary button */}
          <a
            href="#brands"
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
