"use client"

import type React from "react"
import { useState, useCallback, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"

const SSL_SAGE = "#A9B3A1"
const SSL_SAGE_DARK = "#8a9682"
const SSL_TEXT = "#1A1A1A"
const SSL_MUTED = "#6b7280"
const SSL_BG = "#F9F9F7"
const SSL_BORDER = "#e5e7eb"

const testimonials = [
  {
    quote:
      "A Skin Self Love tem aquele equilíbrio raro entre calma, credibilidade e resultados visíveis. As clientes confiam nas recomendações porque o critério é sempre consistente.",
    author: "Marta",
    role: "Fundadora de Clínica",
    company: "Porto",
    avatar: "/Team/Claudia.jpg",
  },
  {
    quote:
      "Cada produto parece escolhido com intenção, nunca apenas para aumentar a oferta. Isso torna o planeamento dos tratamentos muito mais claro e coerente.",
    author: "Ines",
    role: "Terapeuta Facial",
    company: "Lisboa",
    avatar: "/Team/Adelaide.jpg",
  },
  {
    quote:
      "O que mais se destaca é a orientação por trás de cada escolha. A Skin Self Love transforma conhecimento técnico em rotinas que as pessoas conseguem mesmo manter.",
    author: "Rita",
    role: "Diretora de Farmácia",
    company: "Braga",
    avatar: "/Team/Alexandra.jpg",
  },
  {
    quote:
      "Existe uma confiança real na forma como a marca comunica. Tudo parece informado, próximo e totalmente alinhado com a saúde da pele a longo prazo.",
    author: "Joana",
    role: "Editora de Beleza",
    company: "Coimbra",
    avatar: "/Team/Antonio.jpg",
  },
  {
    quote:
      "Comecei por seguir uma recomendação e hoje toda a minha rotina vem da Skin Self Love. A minha pele está mais equilibrada e finalmente sinto confiança no que uso.",
    author: "Helena",
    role: "Cliente de Skincare",
    company: "Cascais",
    avatar: "/Team/Nadia.jpg",
  },
]

function usePreloadImages(images: string[]) {
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [images])
}

function SplitText({ text }: { text: string }) {
  const words = text.split(" ")
  return (
    <span className="inline">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.4, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

function TestimonialWidget() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  usePreloadImages(testimonials.map((t) => t.avatar))

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 150 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    },
    [mouseX, mouseY],
  )

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const current = testimonials[activeIndex]

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-2xl mx-auto py-20 px-8"
      style={{ cursor: "none" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleNext}
    >
      {/* Custom magnetic cursor */}
      <motion.div
        className="pointer-events-none absolute z-50 mix-blend-multiply"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          className="rounded-full flex items-center justify-center"
          style={{ backgroundColor: SSL_SAGE }}
          animate={{
            width: isHovered ? 80 : 0,
            height: isHovered ? 80 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
        >
          <motion.span
            className="text-white text-xs font-medium tracking-wider uppercase"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.1 }}
          >
            Próximo
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Index indicator */}
      <motion.div
        className="absolute top-8 right-8 flex items-baseline gap-1 font-mono text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.span
          className="text-2xl font-light"
          style={{ color: SSL_TEXT }}
          key={activeIndex}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {String(activeIndex + 1).padStart(2, "0")}
        </motion.span>
        <span style={{ color: SSL_MUTED }}>/</span>
        <span style={{ color: SSL_MUTED }}>{String(testimonials.length).padStart(2, "0")}</span>
      </motion.div>

      {/* Stacked avatar previews */}
      <motion.div
        className="absolute top-8 left-8 flex -space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.6 }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className={`w-6 h-6 rounded-full border-2 overflow-hidden transition-all duration-300 ${
              i === activeIndex ? "grayscale-0 opacity-100" : "grayscale opacity-50"
            }`}
            style={{
              borderColor: SSL_BG,
              outline: i === activeIndex ? `1px solid ${SSL_SAGE}` : "none",
              outlineOffset: "1px",
            }}
            whileHover={{ scale: 1.1, opacity: 1 }}
          >
            <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </motion.div>

      {/* Quote */}
      <div className="relative pt-8">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="text-xl md:text-2xl font-light leading-relaxed tracking-tight font-heading"
            style={{ color: SSL_TEXT }}
          >
            <SplitText text={current.quote} />
          </motion.blockquote>
        </AnimatePresence>

        {/* Author */}
        <motion.div className="mt-12 relative" layout>
          <div className="flex items-center gap-4">
            {/* Stacked avatar images */}
            <div className="relative w-12 h-12">
              <motion.div
                className="absolute -inset-1.5 rounded-full border"
                style={{ borderColor: `${SSL_SAGE}60` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              {testimonials.map((t, i) => (
                <motion.img
                  key={t.avatar}
                  src={t.avatar}
                  alt={t.author}
                  className="absolute inset-0 w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-500"
                  animate={{
                    opacity: i === activeIndex ? 1 : 0,
                    zIndex: i === activeIndex ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              ))}
            </div>

            {/* Author info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="relative pl-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-px"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originY: 0, backgroundColor: SSL_SAGE } as React.CSSProperties}
                />
                <span className="block text-sm font-medium tracking-wide" style={{ color: SSL_TEXT }}>
                  {current.author}
                </span>
                <span className="block text-xs mt-0.5 font-mono uppercase tracking-widest" style={{ color: SSL_MUTED }}>
                  {current.role} — {current.company}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Progress bar */}
        <div className="mt-16 h-px relative overflow-hidden" style={{ backgroundColor: SSL_BORDER }}>
          <motion.div
            className="absolute inset-y-0 left-0"
            style={{ backgroundColor: SSL_SAGE }}
            initial={{ width: "0%" }}
            animate={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      {/* Click hint */}
      <motion.div
        className="absolute bottom-8 left-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.5 : 0.25 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-[10px] uppercase tracking-widest font-mono" style={{ color: SSL_MUTED }}>
          Clique para continuar
        </span>
      </motion.div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-32 md:py-44" style={{ backgroundColor: SSL_BG }}>
      <div className="mx-auto max-w-[1400px] px-8 md:px-16">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="mb-4 font-sans text-xs tracking-[0.3em] uppercase"
            style={{ color: SSL_SAGE }}
          >
            Testemunhos
          </p>
          <h2
            className="font-heading text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl"
            style={{ color: SSL_TEXT }}
          >
            Uma galeria de
            <br />
            <span className="italic" style={{ color: SSL_SAGE }}>
              confiança real
            </span>
          </h2>
          <p
            className="mt-6 font-sans text-base leading-relaxed md:text-lg"
            style={{ color: SSL_MUTED }}
          >
            Uma seleção de experiências de profissionais e clientes que confiam
            na Skin Self Love no tratamento e na rotina de casa.
          </p>
        </div>

        {/* Decorative divider */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-16 opacity-30" style={{ backgroundColor: SSL_SAGE }} />
          <div className="w-1 h-1 rounded-full opacity-40" style={{ backgroundColor: SSL_SAGE }} />
          <div className="h-px w-16 opacity-30" style={{ backgroundColor: SSL_SAGE }} />
        </div>

        {/* Interactive testimonial widget */}
        <TestimonialWidget />
      </div>
    </section>
  )
}
