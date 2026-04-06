# **Skin Self Love \- AI Coding Agent Directives**

## **1\. Project Context**

You are building a premium, highly cinematic B2B corporate website for a Portuguese health/wellness distributor.

**The Vibe:** "Clinical Elegance". Think of a high-end Swiss dermatology clinic. Pristine, quiet, authoritative.

## **2\. Strict Technical Constraints**

* **Stack:** Next.js (App Router), Tailwind CSS, Framer Motion (or GSAP), Lenis (Smooth Scroll).  
* **Scope:** Informational multi-page site. **NO E-COMMERCE.** **NO CONTACT FORMS.**  
* **Bilingual:** Support PT and EN routing.

## **3\. Visual & Aesthetic Rules (CRITICAL)**

* **Whitespace:** Maximize it. The DOM must breathe. Never crowd elements.  
* **Colors:** \- Primary Accent: Sage Green (Match provided logo).  
  * Backgrounds: \#FFFFFF (White) and \#FAFAFA (Soft Clinical Grey).  
  * Text: \#1A1A1A (Dark Charcoal). **NEVER use \#000000.**  
* **Typography:** Premium Serif for Headings. Geometric Sans-Serif for Body text.  
* **Materiality:** Use backdrop-filter: blur(10px) with semi-transparent white/grey for sticky headers or overlapping cards (Frosted glass effect).

## **4\. Motion Guidelines (Vibe Coding)**

* **Scroll:** Lenis smooth scrolling must be active globally.  
* **Reveals:** Elements must NEVER just pop into the DOM. As the user scrolls, text and images must stagger-reveal (e.g., y: 30, opacity: 0 to opacity: 1, duration 1.2s, easing power3.out).  
* **Interactions:** Hover states on buttons/links should be slow and magnetic. No abrupt, snappy CSS transitions.

## **5\. Development Mindset**

Code for quality, not just completion. Ensure semantic HTML, strict mobile responsiveness, and zero layout shift (CLS) using next/image.

# Agent Skill: Clinical Fluidity & Cinematic UI

## Context
You are a specialist in "Quiet Luxury" web design. Your goal is to create interfaces that feel expensive, medically precise, and emotionally calming.

## Motion Physics: The "Breathing" Logic
- **Cadence:** All animations must follow a sinusoidal (sin/cos) curve to mimic human breathing. 
- **Duration:** 8s to 12s per cycle. Avoid rapid movements.
- **Interpolation:** Use high-damping springs or ease-in-out quintic transitions. No linear motion.
- **Fluidity:** When coding background particles or shaders, ensure "Soft Collisions"—elements should appear to flow around each other like silk or liquid, never overlapping abruptly.

## Aesthetic Constraints
- **Typography:** Titles must use a Serif font with generous letter-spacing (tracking-tight or wide depending on the 'vibe').
- **Color Transitions:** Use "Perceptual Color Interpolation" (OKLCH or HSL). When moving from off-white to Sage Green, the transition must be nearly imperceptible to the naked eye.
- **Negative Space:** Maintain a "Less is More" philosophy. If a section feels crowded, increase padding-top/bottom by 20%.

## Code Standards
- **Performance:** Always use `requestAnimationFrame` for custom canvas work or `framer-motion` for React-based transitions.
- **Accessibility:** Ensure that even with fluid backgrounds, contrast ratios for text remain WCAG compliant (at least 4.5:1).