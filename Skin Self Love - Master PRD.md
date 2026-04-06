# **Master Product Requirements Document (PRD)**

## **Project: Skin Self Love (SSL) \- B2B Digital Experience**

**Version:** 2.0 (Master Unified Blueprint)

**Prepared for:** Skin Self Love (Portugal)

**Document type:** Comprehensive Strategy, UX/UI, Vibe, and Technical Implementation Brief

**Languages:** Bilingual (Portuguese / English)

**Website type:** Premium B2B Corporate Representation Site (Non-eCommerce)

## **1\. Executive Summary & Vision**

Skin Self Love (SSL) requires a cinematic, bilingual corporate website establishing the company as the premier Portuguese representative for three elite health and wellness brands:

* **Medik8:** Science-led premium skincare.  
* **Luxmetique:** Advanced nutricosmetics.  
* **Sunstar GUM:** Oral care and prevention.

**Strategic Purpose:** The website acts as a high-end corporate trust layer. It is **not** an e-commerce platform. Product purchases must be seamlessly redirected to official brand websites. The site must convince **pharmacies and clinical professionals in Portugal** that SSL is a serious, sophisticated, and reliable partner.

## **2\. The "Vibe Coding" Directive: Clinical Elegance**

To appeal to high-end pharmacies and clinical directors, the site must bridge rigorous medical credibility with quiet luxury.

* **Mood:** Trustworthy, serene, authoritative, meticulously clean, and breathable.  
* **Space:** Utilize extreme, deliberate whitespace. The DOM must not feel crowded.  
* **Motion:** Slow, deliberate, and fluid. No abrupt state changes. Implement Lenis smooth scrolling so navigating the site feels like a deep, calming breath.  
* **Materiality:** Utilize CSS backdrop-filter: blur() for overlapping elements (headers, cards) to create a premium "frosted glass" aesthetic akin to a Swiss dermatology clinic.

## **3\. Design System & Brand Identity**

Derived directly from the official Skin Self Love logo.

* **Color Palette:**  
  * Primary Accent: Sage Green (Extract exact hex from the provided logo).  
  * Background Base: Pristine White (\#FFFFFF) to Warm Ivory.  
  * Secondary Neutral: Soft Clinical Grey (\#FAFAFA or \#F7F7F7) to separate sections without hard, aggressive borders.  
  * Text: Dark Charcoal (\#1A1A1A). **Rule:** Never use pure black (\#000000); it breaks the soft, premium feel.  
* **Typography:**  
  * Headings: High-contrast, elegant Serif (e.g., *Playfair Display*, *Cormorant Garamond*).  
  * Body / UI: Crisp, geometric Sans-Serif (e.g., *Inter*, *Helvetica Now*).

  ## **3.1\. 

  ## Hero Section Module
  **Project Overview**
Brand Name: Skin Self Love (SSL)

Project Goal: Establish a digital presence that bridges rigorous medical credibility with "Quiet Luxury" aesthetics.

Primary Hero Concept: "Clinical Elegance" — A minimalist, high-end hero section featuring organic, fluid motion.

**Element,Specification**
Aesthetic Tone,"Clinical, Ethereal, Sophisticated, Calm."
Primary Typography,Serif: Playfair Display (H1/Titles) for authority.
Secondary Typography,Sans-Serif: Geist (Body/Nav) for modern precision.
Color Palette,Background: #F9F9F7 (Off-white) / Accents: #A9B3A1 (Sage Green).
Imagery,Use the provided horizontal logo (SKIN SELF LOVE_LOGO...).

**Core Feature: The "Breathing" Hero**
Background Effect: A fluid, organic canvas animation.

Motion Logic: * Cadence: Slow, sinusoidal expansion/contraction (8–12s cycles).

Interaction: Subtle mouse-follow displacement (liquify effect).

Colors: Muted sage green and soft greys blending into the off-white base.

Call to Action (CTA): 1.  Primary: "DISCOVER THE PORTFOLIO" (Solid Sage Green button).
**Secondary: "CONTACT US" (Underlined text link).**

**Technical Requirements**
Framework: Next.js (App Router) + TypeScript.

Styling: Tailwind CSS + Radix UI (Nova Preset).

Animation: Framer Motion or Three.js (Canvas).

Performance: Must maintain 60fps on desktop and smooth transitions on mobile.

## **4\. Technical Architecture & Constraints**

* **Framework:** Next.js (App Router, React). Essential for SEO, i18n (bilingual routing), and lightning-fast server-side rendering.  
* **Styling:** Tailwind CSS. Strictly map the config to our custom color palette.  
* **Animation Engine:** GSAP or Framer Motion.  
  * *Constraint:* All easing curves must be power3.out or power4.out. No linear animations. Elements must *stagger reveal* (fade in and translate up slightly) as they enter the viewport.  
* **Scroll Hijacking:** Implement Lenis for studio-grade smooth scrolling.  
* **Asset Optimization:** next/image is mandatory for all imagery to prevent layout shifts (CLS).  
* **Forms/Logic:** strictly informational. **NO CONTACT FORMS** in Phase 1 to reduce friction and privacy overhead. Use mailto/tel links.

## **5\. Sitemap & Information Architecture (Bilingual)**

The site will use a Next.js localized routing structure (e.g., /pt/ and /en/).

1. **Home** (/)  
2. **About Skin Self Love** (/about)  
3. **Brands Portfolio** (/brands)  
   * Medik8 (/brands/medik8)  
   * Luxmetique (/brands/luxmetique)  
   * GUM (/brands/gum)  
4. **Professionals & Partners** (/professionals)  
5. **Contact** (/contact)

## **6\. Page-by-Page Narrative Flow**

### **6.1. Home Page**

* **Hero Sequence:** Minimalist, 100vh viewport. Large central placement of the SSL logo over a pristine white/sage ambient background. High-contrast serif headline fading in.  
* **Portfolio Preview:** Asymmetrical editorial layout introducing Medik8, Luxmetique, and GUM.  
* **Pharmacy Relevance:** Clean, 1px line-weight iconography highlighting local distribution and professional support.

### **6.2. About Page**

* **Focus:** SSL's identity, mission, and the logic behind curating this specific portfolio.  
* **Tone:** Corporate-editorial balance. Polished and concise.

### **6.3. Individual Brand Pages (x3)**

* **Layout:** Hero intro \-\> Brand Positioning \-\> Relevance for Pharmacies \-\> SSL Representation Disclaimer \-\> Primary CTA.  
* **Action:** Primary CTA must clearly state "Explore \[Brand\]" and open the official brand website in a new tab (target="\_blank").  
* **Constraint:** Do not reproduce their full catalog. Present a curated, high-level summary.

### **6.4. Professionals & Partners**

* **Focus:** Direct B2B pitch. Why partner with SSL? Highlighting reliability, dedicated clinical support, and portfolio synergy.

### **6.5. Contact Page**

* **Layout:** Extreme minimalism.  
* **Content:** Direct email, phone number, and physical headquarters location.  
* **Constraint:** Zero friction. No forms to fill out.

## **7\. SEO, UX & Accessibility**

* **Accessibility:** Target WCAG 2.2 AA. Ensure semantic HTML (H1 \-\> H2 \-\> H3 hierarchy). High contrast ratios (Charcoal on White/Sage).  
* **Bilingual UX:** Language switcher must be clearly visible in the header. Switching languages should keep the user on the current page's localized equivalent.  
* **SEO:** Unique Meta Titles and Descriptions per page (e.g., "Skin Self Love Portugal | Premium Health & Wellness Brand Representative"). Clean bilingual URL structures.  
* **Outbound Links:** All links to Medik8, Luxmetique, and GUM must be distinctly styled to indicate the user is leaving the SSL site.

## **8\. Build Checklist for Code Agents**

* \[ \] Initialize Next.js App Router with Tailwind CSS & Lenis.  
* \[ \] Configure tailwind.config.js with strictly approved brand colors (Sage, Ivory, Charcoal).  
* \[ \] Setup i18n routing (/pt, /en).  
* \[ \] Build global Layout (Sticky frosted-glass Header, Minimalist Footer).  
* \[ \] Implement staggered reveal animations globally using Intersection Observers \+ GSAP/Framer Motion.  
* \[ \] Build all 7 distinct page routes.  
* \[ \] Validate outbound links and mobile responsiveness.