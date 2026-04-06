# Design System: Clinical Elegance

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Sanctuary."** 

This is not a standard medical interface; it is a high-end editorial experience that balances scientific authority with the "Quiet Luxury" of a premium spa. We move beyond the rigid, boxy layouts of traditional web design by embracing **intentional asymmetry** and **expansive whitespace**. The goal is to make the user feel as though they are flipping through a bespoke dermatological journal. We achieve this through "breathable" layouts where elements are allowed to overlap slightly, creating a sense of physical depth and curated sophistication.

---

## 2. Color Strategy
Our palette is rooted in the calming, botanical authority of Sage Green and the purity of clinical environments.

- **Primary & Tonal Sage:** Use `primary` (#556351) for core actions. Use `primary_container` (#D8E7D1) for large, soft background washes to provide a "watercolor" depth.
- **The "No-Line" Rule:** We do not use 1px solid borders to separate sections. Boundaries must be defined through background shifts. For example, a `surface_container_low` (#F2F4F4) block should sit flush against a `surface` (#F9F9F9) background.
- **Surface Hierarchy & Nesting:** Treat the UI as a series of stacked fine papers. 
    - Base Layer: `surface` (#F9F9F9).
    - Content Cards: `surface_container_lowest` (#FFFFFF) to provide a subtle "pop" of pristine white against the grey.
- **Glassmorphism:** Sticky headers and floating action panels must use a backdrop-blur (12px–20px) combined with a semi-transparent `surface_container_lowest` (80% opacity). This allows the soft Sage and Grey tones to bleed through, softening the interface.
- **Signature Textures:** For Hero sections, use a subtle radial gradient transitioning from `primary_fixed` (#D8E7D1) to `surface` (#F9F9F9) to mimic natural light hitting a matte surface.

---

## 3. Typography
The typographic voice is dual-natured: the authority of a clinician and the elegance of a fashion editor.

- **The Serif (Noto Serif):** Used for `display` and `headline` scales. This provides the "Editorial" feel. Use high contrast in sizes (e.g., a `display-lg` headline next to a small `label-md`) to create visual drama.
- **The Sans (Inter):** Used for `title`, `body`, and `labels`. It provides the "Clinical" clarity. Inter’s geometric nature ensures legibility in dense product information.
- **Hierarchy Note:** All `headline` elements should have a slightly tighter letter-spacing (-0.02em) to feel more "locked-in" and premium, while `label-sm` should have increased tracking (+0.05em) for a sophisticated, technical look.

---

## 4. Elevation & Depth
In this design system, shadows are an afterthought; **Tonal Layering** is the priority.

- **The Layering Principle:** Instead of shadows, use the "Surface Scale." A card on `surface_container_low` should be `surface_container_highest` (#DFE3E4). This creates a natural, soft lift.
- **Ambient Shadows:** If a shadow is required (e.g., a floating product modal), it must be a "Soft Glow."
    - Offset: 0px 12px | Blur: 32px | Color: `on_surface` (#2F3334) at **4% opacity**.
- **The Ghost Border:** For input fields or secondary containment, use `outline_variant` (#AFB3B3) at 20% opacity. Never use 100% opaque borders; they feel too "engineered" for a luxury experience.

---

## 5. Components

### Buttons
- **Primary:** `primary` (#556351) background with `on_primary` (#EEFDE7) text. Use `rounded-sm` (0.125rem) for a sharp, architectural look.
- **Secondary:** Transparent background with a `Ghost Border` and `primary` text.
- **Motion:** On hover, the background color should shift to `primary_dim` (#4A5746) with a slow, 400ms ease-in-out transition.

### Cards & Lists
- **Rule:** Forbid the use of horizontal dividers.
- **Implementation:** Separate list items with `1.5rem` of vertical whitespace. If a physical break is needed, use a background color shift to `surface_container_low` for alternating items.

### Input Fields
- **Style:** Minimalist. Only a bottom border using `outline_variant` (30% opacity). 
- **States:** On focus, the bottom border transitions to `primary` (#556351) and the label (Inter, `label-sm`) shifts upward with a staggered fade-in.

### Clinical Chips
- **Usage:** For skin type tags (e.g., "Oily," "Sensitive").
- **Style:** `surface_container_high` background, no border, `on_surface_variant` text. High `rounded-full` (9999px) for a soft, pill-like feel.

---

## 6. Do's and Don'ts

### Do
- **Use Staggered Motion:** When a page loads, elements should fade in and translate upward by 20px. Use a `cubic-bezier(0.22, 1, 0.36, 1)` for a "deliberate" feel.
- **Embrace White Space:** If you think there is enough space, add 20% more. Luxury is defined by the space you don't use.
- **Align to the Serif:** Align body copy to the vertical stem of the Serif headlines to maintain a strong editorial axis.

### Don't
- **Don't use pure black:** Always use `on_background` (#2F3334) or the Dark Charcoal (#1A1A1A) mentioned in the brief. Pure black is too harsh for the "Clinical Elegance" aesthetic.
- **Don't use "Heavy" Shadows:** Avoid standard Material Design elevation shadows. They feel "app-like" rather than "experience-like."
- **Don't use standard icons:** Avoid chunky, filled icons. Use ultra-thin (1pt or 1.5pt) stroke icons to match the geometric precision of the Inter typeface.