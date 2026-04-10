"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

import { useLanguage } from "@/components/LanguageContext";
import { useVibeStore } from "@/lib/useVibeStore";

const easeOut = [0.22, 1, 0.36, 1] as const;

type NavKey = "about" | "brands" | "professionals" | "contact";

const navLinks: { key: NavKey; href: string }[] = [
  { key: "about", href: "#about" },
  { key: "brands", href: "#brands" },
  { key: "professionals", href: "#professionals" },
  { key: "contact", href: "#contact" },
];

// ─── Magnetic Hover Effect ────────────────────────────────────────────────────
function MagneticBackButton({ onClick }: { onClick: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });
  const { language } = useLanguage();

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    // Magnetic pull within 20px range
    x.set(distX * 0.15);
    y.set(distY * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="flex items-center gap-3 font-sans text-xs tracking-[0.15em] uppercase text-[#1A1A1A] transition-colors duration-500 hover:text-[var(--vibe-accent)]"
    >
      <motion.span
        initial={{ x: 0 }}
        whileHover={{ x: -4 }}
        transition={{ duration: 0.3 }}
        className="text-sm"
      >
        ←
      </motion.span>
      {language === "pt-PT" ? "Voltar ao Universo" : "Back to Universe"}
    </motion.button>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const activeBrand = useVibeStore((s) => s.activeBrand);
  const closeVibe = useVibeStore((s) => s.closeVibe);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Determine header background based on brand state
  const headerBg = activeBrand
    ? `${activeBrand.theme.surface}`
    : scrolled
      ? "bg-white/80 backdrop-blur-[14px] border-b border-[#1A1A1A]/5 shadow-[0_1px_20px_rgba(0,0,0,0.03)]"
      : "bg-transparent";

  const useInlineStyle = !!activeBrand;

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: easeOut }}
      className={[
        "fixed top-0 left-0 right-0 z-60",
        "transition-all duration-[1200ms] ease-in-out",
        !useInlineStyle ? headerBg : "backdrop-blur-[14px] border-b border-[#1A1A1A]/5",
      ].join(" ")}
      style={useInlineStyle ? { backgroundColor: activeBrand.theme.surface } : undefined}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-6 md:px-16">
        {/* Logo / Back Button */}
        <AnimatePresence mode="wait">
          {activeBrand ? (
            <motion.div
              key="back-button"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: easeOut }}
            >
              <MagneticBackButton onClick={closeVibe} />
            </motion.div>
          ) : (
            <motion.a
              key="logo"
              href="#"
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: easeOut }}
            >
              <Image
                src="/SKIN SELF LOVE_LOGO_HORIZONTAL_MANCHA_RGB.png"
                alt="Skin Self Love"
                width={180}
                height={48}
                priority
                loading="eager"
                className="h-9 w-auto object-contain"
              />
            </motion.a>
          )}
        </AnimatePresence>

        {/* Desktop Nav — hidden when brand is active */}
        <AnimatePresence>
          {!activeBrand && (
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="hidden items-center gap-10 md:flex"
            >
              {navLinks.map(({ key, href }) => (
                <a
                  key={key}
                  href={href}
                  className="group relative font-sans text-xs tracking-[0.15em] uppercase text-[#1A1A1A] transition-colors duration-500 hover:text-[#A9B3A1]"
                >
                  {t.nav[key]}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-[#A9B3A1] transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:origin-left group-hover:scale-x-100" />
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Actions (Toggle & Mobile Menu) */}
        <div className="flex items-center gap-6">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === "pt-PT" ? "en" : "pt-PT")}
            className="flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-[#1A1A1A] transition-colors hover:text-[#A9B3A1]"
          >
            <span className={language === "pt-PT" ? "font-bold text-[#A9B3A1]" : "opacity-50"}>PT</span>
            <span className="opacity-30">|</span>
            <span className={language === "en" ? "font-bold text-[#A9B3A1]" : "opacity-50"}>EN</span>
          </button>

          {/* Mobile hamburger — hidden when brand is active */}
          {!activeBrand && (
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col gap-1.5 md:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-px w-6 bg-[#1A1A1A] transition-all duration-500 ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-6 bg-[#1A1A1A] transition-all duration-500 ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && !activeBrand && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="overflow-hidden border-t border-[#1A1A1A]/5 bg-white/90 backdrop-blur-[14px] md:hidden"
          >
            <div className="flex flex-col gap-6 px-8 py-8">
              {navLinks.map(({ key, href }, i) => (
                <motion.a
                  key={key}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: easeOut }}
                  className="font-sans text-sm tracking-[0.15em] uppercase text-[#1A1A1A] transition-colors duration-500 hover:text-[#A9B3A1]"
                >
                  {t.nav[key]}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
