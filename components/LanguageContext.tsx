"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

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
      eyebrow: "Dermocosmética de Excelência",
      subtext:
        "Descubra o portfólio dermocosmético de elite que representamos, unindo rigor médico a um luxo tranquilo.",
      ctaPrimary: "Descobrir o Portfólio",
      ctaSecondary: "Fale Connosco",
    },
    about: {
      label: "Sobre a Skin Self Love",
      h2Part1: "O Seu Parceiro de",
      h2Part2: "Confiança em",
      h2Italic: "Portugal",
      desc: "A Skin Self Love é a representante exclusiva em Portugal de um portfólio cuidadosamente selecionado de marcas de elite nas áreas da saúde e bem-estar. Unimos a inovação global à excelência clínica local.",
      p1Title: "Portfólio Curado",
      p1Text: "Representamos apenas marcas cujo rigor clínico e inovação vão ao encontro dos mais exigentes padrões farmacêuticos.",
      p2Title: "Especialização no Mercado Nacional",
      p2Text: "Profundo conhecimento do panorama farmacêutico português, do ambiente regulatório e das expectativas dos consumidores.",
      p3Title: "Apoio Clínico",
      p3Text: "Formação técnica dedicada e recursos profissionais para farmacêuticos e equipas clínicas de todo o país.",
    },
    portfolio: {
      label: "O Nosso Portfólio",
      headline: "Parceiros de Elite",
      desc: "Excelência clínica em dermocosmética, nutricosmética e saúde oral — aliando a inovação à confiança clínica.",
      explore: "Explorar",
      medik8Tagline: "Cuidados de Pele Dirigidos pela Ciência",
      medik8Desc: "Pioneiros em dermocosmética profissional, mundialmente reconhecidos pela sua filosofia CSA e formulações estabilizadas de Vitamina C com resultados antienvelhecimento visíveis.",
      luxTagline: "Nutricosmética Avançada",
      luxDesc: "Fundindo a ciência clínica de elite ao bem-estar diário, promovendo a beleza de dentro para fora através de uma suplementação premium.",
      gumTagline: "Cuidado Oral & Prevenção",
      gumDesc: "Soluções holísticas de cuidado oral recomendadas por profissionais globalmente, reconhecendo a ligação vital entre a saúde oral e o bem-estar sistémico.",
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
      label: "Entre em Contacto",
      h2Part1: "Vamos Iniciar uma",
      h2Italic: "Conversa",
      desc: "Seja uma farmácia, uma clínica ou um profissional de saúde interessado no nosso portfólio, teríamos o maior gosto em falar consigo.",
      emailLabel: "Email",
      phoneLabel: "Telefone",
      locationLabel: "Localização",
      locationVal: "Lisboa, Portugal",
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
      eyebrow: "Cosmeceuticals of Excellence",
      subtext:
        "Discover the elite dermo-cosmetic portfolio we represent, bridging rigorous medical credibility with quiet luxury.",
      ctaPrimary: "Discover the Portfolio",
      ctaSecondary: "Contact Us",
    },
    about: {
      label: "About Skin Self Love",
      h2Part1: "Your Trusted",
      h2Part2: "Partner in",
      h2Italic: "Portugal",
      desc: "Skin Self Love is the exclusive Portuguese representative for a carefully selected portfolio of elite health and wellness brands. We bridge global innovation with local clinical excellence.",
      p1Title: "Curated Portfolio",
      p1Text: "We represent only brands whose clinical rigor and innovation meet the highest pharmaceutical standards.",
      p2Title: "Portuguese Market Expertise",
      p2Text: "Deep understanding of the Portuguese pharmacy landscape, regulatory environment, and consumer expectations.",
      p3Title: "Clinical Support",
      p3Text: "Dedicated training and professional resources for pharmacists and clinical teams across Portugal.",
    },
    portfolio: {
      label: "Our Portfolio",
      headline: "Elite Partners",
      desc: "Curated excellence in dermatological science, nutricosmetics, and oral health — bridging innovation with clinical trust.",
      explore: "Explore",
      medik8Tagline: "Science-Led Skincare",
      medik8Desc: "Pioneers in professional skincare, renowned for their CSA philosophy and stabilized Vitamin C formulations delivering visible anti-aging results.",
      luxTagline: "Advanced Nutricosmetics",
      luxDesc: "Blending high-end clinical science with daily wellness, promoting beauty from within through premium supplementation.",
      gumTagline: "Oral Care & Prevention",
      gumDesc: "Leading holistic oral care solutions trusted by dental professionals globally, emphasizing the vital link between oral health and overall wellbeing.",
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
      label: "Get in Touch",
      h2Part1: "Let's Start a",
      h2Italic: "Conversation",
      desc: "Whether you're a pharmacy, clinic, or healthcare professional interested in our portfolio, we'd love to hear from you.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      locationVal: "Lisbon, Portugal",
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
    // Retrieve stored language preference on mount
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
