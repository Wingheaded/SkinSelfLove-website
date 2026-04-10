"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "pt-PT" | "en";

export const translations = {
  "pt-PT": {
    nav: {
      about: "Sobre",
      brands: "Marcas",
      professionals: "Profissionais",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Distribuição Seletiva · Portugal",
      headline: "Distribuição seletiva de marcas científicas",
      subheadline: "Dermocosmética, saúde oral e nutricosmética com foco em qualidade, inovação e resultados.",
      intro: "A Skin Self Love representa em Portugal marcas cuidadosamente selecionadas, reconhecidas pela sua eficácia, inovação e diferenciação no mercado.",
      ctaPrimary: "Conhecer a Skin Self Love",
      ctaSecondary: "Entrar em contacto",
    },
    about: {
      label: "Sobre a Skin Self Love",
      h2Part1: "Sobre a",
      h2Part2: "",
      h2Italic: "Skin Self Love",
      desc: "Fundada em 2024, a Skin Self Love nasce do empreendedorismo de Susana Santos, com o objetivo de introduzir e desenvolver em Portugal marcas diferenciadoras. Com uma equipa com mais de 20 anos de experiência no setor, a empresa destaca-se pelo elevado know-how e atua num modelo de distribuição seletiva, garantindo consistência de posicionamento e proximidade com os parceiros.",
      knowhowLabel: "Know-how",
      knowhowTags: ["Farmácia", "Dermocosmética", "Dermatologia", "Medicina estética", "Saúde oral"],
      criteriaLabel: "Critérios de seleção",
      criteriaTags: ["Qualidade", "Diferenciação", "Mercados em crescimento"],
      p1Title: "Missão",
      p1Text: "Proporcionar cuidados de excelência, combinando inovação científica com a nossa paixão em transformar vidas melhorando a auto-estima dos nossos consumidores.",
      p2Title: "Visão",
      p2Text: "Ser reconhecida como a empresa de referência em qualidade de serviço, em Portugal e estar no top of mind das farmácias, médicos e consumidores.",
      p3Title: "Valores",
      p3Text: "",
      valores: ["Pessoas", "Paixão", "Serviço", "Atitude", "Compromisso"],
      teamTitle: "A Equipa",
    },
    portfolio: {
      label: "As Nossas Marcas",
      headline: "As Nossas Marcas",
      desc: "Um portfólio de marcas científicas cuidadosamente selecionadas, reconhecidas pela eficácia, inovação e diferenciação no mercado.",
      explore: "Explorar",
      medik8Tagline: "Dermocosmética Científica",
      medik8Desc: "Marca de dermocosmética científica premium, reconhecida pela sua abordagem baseada em evidência e resultados visíveis. Especializada em soluções de antienvelhecimento e na filosofia CSA (Vitamina C e A).",
      luxTagline: "Nutricosmética Avançada",
      luxDesc: "Marca de nutricosmética avançada, focada na beleza e bem-estar de dentro para fora com ingredientes patenteados.",
      gumTagline: "Saúde Oral Preventiva",
      gumDesc: "Marca de referência em saúde oral preventiva, oferecendo soluções completas para a higiene oral diária.",
    },
    professionals: {
      label: "Para Profissionais",
      h2Part1: "Porquê Escolher a",
      h2Italic: "Skin Self Love?",
      desc: "Fornecemos às farmácias e especialistas clínicos em Portugal marcas de qualidade superior, suporte especializado e uma experiência de parceria exímia.",
      b1Title: "Fiabilidade & Confiança",
      b1Text: "Distribuição consistente e segura, apoiada por relacionamentos diretos com todas as marcas que representamos.",
      b2Title: "Formação Clínica Dedicada",
      b2Text: "Formação profissional contínua e programas de apresentação de produtos adaptados a equipas de farmácia e a especialistas em dermatologia.",
      b3Title: "Sinergia de Portfólio",
      b3Text: "Um trio complementar de dermocosmética, nutricosmética e cuidado oral — o que permite à sua farmácia uma oferta de bem-estar incrivelmente holística.",
      b4Title: "Inteligência de Mercado",
      b4Text: "Dados específicos acerca das tendências do consumidor português, das transições regulatórias e de posicionamento competitivo para a sua farmácia.",
    },
    contact: {
      label: "Contactos e Parcerias",
      h2Part1: "Contactos",
      h2Italic: "& Parcerias",
      desc: "Estamos disponíveis para responder a qualquer questão sobre as nossas marcas e sobre como nos tornarmos parceiros.",
      emailLabel: "Email",
      phoneLabel: "Telefone",
      locationLabel: "Localização",
      locationVal: "Lisboa, Portugal",
      partnershipTitle: "Quero ser parceiro",
      partnershipText: "Na Skin Self Love, acreditamos em parcerias de longo prazo. Trabalhamos com farmácias, clínicas e outros parceiros que procuram diferenciação e suporte especializado.",
      formName: "Nome",
      formCompany: "Empresa",
      formBizType: "Tipo de negócio",
      formBizTypePlaceholder: "Selecionar...",
      formBizTypeOptions: ["Farmácia", "Clínica", "Outro"],
      formCity: "Localidade",
      formEmail: "Email",
      formPhone: "Telefone",
      formMessage: "Mensagem",
      formSubmit: "Enviar pedido",
      formSuccess: "Pedido enviado com sucesso. Entraremos em contacto em breve.",
    },
    footer: {
      desc: "Representante em Portugal de marcas de elite de dermocosmética, nutricosmética e saúde oral.",
      navigation: "Navegação",
      contact: "Contacto",
      location: "Lisboa, Portugal",
      rights: "Skin Self Love. Todos os direitos reservados.",
    }
  },
  "en": {
    nav: {
      about: "About",
      brands: "Brands",
      professionals: "Professionals",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Selective Distribution · Portugal",
      headline: "Selective distribution of scientific brands",
      subheadline: "Dermo-cosmetics, oral health and nutricosmetics focused on quality, innovation and results.",
      intro: "Skin Self Love represents in Portugal carefully selected brands, recognized for their efficacy, innovation and market differentiation.",
      ctaPrimary: "Discover Skin Self Love",
      ctaSecondary: "Get in touch",
    },
    about: {
      label: "About Skin Self Love",
      h2Part1: "About",
      h2Part2: "",
      h2Italic: "Skin Self Love",
      desc: "Founded in 2024, Skin Self Love was born from the entrepreneurship of Susana Santos, with the goal of introducing and developing differentiated brands in Portugal. With a team of over 20 years of sector experience, the company stands out for its extensive know-how and operates on a selective distribution model, ensuring consistency of positioning and proximity with partners.",
      knowhowLabel: "Know-how",
      knowhowTags: ["Pharmacy", "Dermato-cosmetics", "Dermatology", "Aesthetic Medicine", "Oral Health"],
      criteriaLabel: "Selection Criteria",
      criteriaTags: ["Quality", "Differentiation", "Growing Markets"],
      p1Title: "Mission",
      p1Text: "To provide excellence in care, combining scientific innovation with our passion to transform lives by improving the self-esteem of our consumers.",
      p2Title: "Vision",
      p2Text: "To be recognized as the reference company in service quality in Portugal and to be top of mind among pharmacies, doctors and consumers.",
      p3Title: "Values",
      p3Text: "",
      valores: ["People", "Passion", "Service", "Attitude", "Commitment"],
      teamTitle: "The Team",
    },
    portfolio: {
      label: "Our Brands",
      headline: "Our Brands",
      desc: "A portfolio of carefully selected scientific brands, recognized for their efficacy, innovation and market differentiation.",
      explore: "Explore",
      medik8Tagline: "Scientific Dermato-cosmetics",
      medik8Desc: "A premium scientific dermato-cosmetic brand, recognized for its evidence-based approach and visible results. Specializing in anti-aging solutions and the CSA philosophy (Vitamin C and A).",
      luxTagline: "Advanced Nutricosmetics",
      luxDesc: "An advanced nutricosmetic brand focused on beauty and well-being from within with patented ingredients.",
      gumTagline: "Preventive Oral Health",
      gumDesc: "A reference brand in preventive oral health, offering complete solutions for daily oral hygiene.",
    },
    professionals: {
      label: "For Professionals",
      h2Part1: "Why Partner with",
      h2Italic: "Skin Self Love?",
      desc: "We provide pharmacies and clinical professionals across Portugal with premium brands, expert support, and a seamless partnership experience.",
      b1Title: "Reliability & Trust",
      b1Text: "Consistent, dependable distribution backed by direct relationships with every brand we represent.",
      b2Title: "Dedicated Clinical Training",
      b2Text: "Ongoing professional education and product training tailored for pharmacy teams and dermatology professionals.",
      b3Title: "Portfolio Synergy",
      b3Text: "A complementary trio of skincare, nutricosmetics, and oral care — enabling pharmacies to offer a holistic wellness experience.",
      b4Title: "Market Intelligence",
      b4Text: "Localized insights into Portuguese consumer trends, regulatory shifts, and competitive positioning for your pharmacy.",
    },
    contact: {
      label: "Contacts & Partnerships",
      h2Part1: "Contacts",
      h2Italic: "& Partnerships",
      desc: "We are available to answer any questions about our brands and how to become partners.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      locationVal: "Lisbon, Portugal",
      partnershipTitle: "I want to be a partner",
      partnershipText: "At Skin Self Love, we believe in long-term partnerships. We work with pharmacies, clinics and other partners looking for differentiation and specialized support.",
      formName: "Name",
      formCompany: "Company",
      formBizType: "Business type",
      formBizTypePlaceholder: "Select...",
      formBizTypeOptions: ["Pharmacy", "Clinic", "Other"],
      formCity: "City",
      formEmail: "Email",
      formPhone: "Phone",
      formMessage: "Message",
      formSubmit: "Send request",
      formSuccess: "Request sent successfully. We will be in touch shortly.",
    },
    footer: {
      desc: "Portuguese representative for elite dermo-cosmetic, nutricosmetic, and oral health brands.",
      navigation: "Navigation",
      contact: "Contact",
      location: "Lisbon, Portugal",
      rights: "Skin Self Love. All rights reserved.",
    }
  },
};

type TransType = typeof translations["pt-PT"];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TransType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt-PT");

  useEffect(() => {
    const storedLang = localStorage.getItem("ssl-language") as Language;
    if (storedLang === "pt-PT" || storedLang === "en") {
      setLanguage(storedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("ssl-language", lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
