"use client";

import { useState, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { useLanguage } from "@/components/LanguageContext";

const easeOut = [0.22, 1, 0.36, 1] as const;

const inputBase =
  "w-full bg-transparent border-b border-[#1A1A1A]/15 pb-2.5 pt-1 " +
  "font-sans text-sm text-[#1A1A1A] placeholder:text-[#6b7280]/50 " +
  "focus:outline-none focus:border-[#A9B3A1] transition-colors duration-300";

const labelBase =
  "block font-sans text-[10px] tracking-[0.25em] uppercase text-[#A9B3A1] mb-1.5";

export function Contact() {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    company: "",
    bizType: "",
    city: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#FAFAFA] py-32 md:py-44"
    >
      <div className="mx-auto max-w-[1400px] px-8 md:px-16">
        <div className="grid gap-16 md:grid-cols-12 md:gap-8">

          {/* ── Left — headline + contact info + partnership desc ─────────── */}
          <div className="md:col-span-5">
            <ScrollReveal>
              <p className="mb-4 font-sans text-xs tracking-[0.3em] uppercase text-[#A9B3A1]">
                {t.contact.label}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-4xl leading-tight tracking-tight text-[#1A1A1A] md:text-5xl lg:text-6xl">
                {t.contact.h2Part1}
                <br />
                <span className="italic text-[#A9B3A1]">{t.contact.h2Italic}</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-8 max-w-sm font-sans text-base leading-relaxed text-[#6b7280]">
                {t.contact.desc}
              </p>
            </ScrollReveal>

            {/* Contact details */}
            <ScrollReveal delay={0.3}>
              <div className="mt-10 flex flex-col gap-6">
                <div>
                  <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#A9B3A1] mb-1">
                    {t.contact.locationLabel}
                  </p>
                  <p className="font-sans text-sm text-[#1A1A1A]">{t.contact.locationVal}</p>
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#A9B3A1] mb-1">
                    {t.contact.emailLabel}
                  </p>
                  <a
                    href="mailto:info@skinselflove.pt"
                    className="font-sans text-sm text-[#1A1A1A] transition-colors duration-500 hover:text-[#A9B3A1]"
                  >
                    info@skinselflove.pt
                  </a>
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#A9B3A1] mb-1">
                    {t.contact.phoneLabel}
                  </p>
                  <a
                    href="tel:+351123456789"
                    className="font-sans text-sm text-[#1A1A1A] transition-colors duration-500 hover:text-[#A9B3A1]"
                  >
                    +351 123 456 789
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Partnership teaser */}
            <ScrollReveal delay={0.4}>
              <div className="mt-12 bg-white p-8">
                <p className="mb-2 font-sans text-xs tracking-[0.25em] uppercase text-[#A9B3A1]">
                  {t.contact.partnershipTitle}
                </p>
                <p className="font-sans text-sm leading-relaxed text-[#6b7280]">
                  {t.contact.partnershipText}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right — Partnership form ──────────────────────────────────── */}
          <div className="md:col-span-6 md:col-start-7">
            <ScrollReveal delay={0.15}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: easeOut }}
                  className="flex flex-col items-start justify-center h-full min-h-[400px]"
                >
                  <span className="mb-4 font-sans text-xs tracking-[0.25em] uppercase text-[#A9B3A1]">
                    ✓
                  </span>
                  <p className="font-heading text-2xl text-[#1A1A1A] md:text-3xl">
                    {t.contact.formSuccess}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                  {/* Row 1: Nome + Empresa */}
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelBase}>
                        {t.contact.formName}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className={inputBase}
                        placeholder={t.contact.formName}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className={labelBase}>
                        {t.contact.formCompany}
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={form.company}
                        onChange={handleChange}
                        className={inputBase}
                        placeholder={t.contact.formCompany}
                      />
                    </div>
                  </div>

                  {/* Row 2: Tipo de negócio + Localidade */}
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                      <label htmlFor="bizType" className={labelBase}>
                        {t.contact.formBizType}
                      </label>
                      <select
                        id="bizType"
                        name="bizType"
                        required
                        value={form.bizType}
                        onChange={handleChange}
                        className={inputBase + " cursor-pointer appearance-none"}
                      >
                        <option value="" disabled>
                          {t.contact.formBizTypePlaceholder}
                        </option>
                        {t.contact.formBizTypeOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="city" className={labelBase}>
                        {t.contact.formCity}
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        required
                        value={form.city}
                        onChange={handleChange}
                        className={inputBase}
                        placeholder={t.contact.formCity}
                      />
                    </div>
                  </div>

                  {/* Row 3: Email + Telefone */}
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className={labelBase}>
                        {t.contact.formEmail}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className={inputBase}
                        placeholder="email@empresa.pt"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelBase}>
                        {t.contact.formPhone}
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputBase}
                        placeholder="+351 900 000 000"
                      />
                    </div>
                  </div>

                  {/* Row 4: Mensagem */}
                  <div>
                    <label htmlFor="message" className={labelBase}>
                      {t.contact.formMessage}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className={inputBase + " resize-none"}
                      placeholder="..."
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
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
                      {t.contact.formSubmit}
                    </button>
                  </div>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
