"use client";

import { create } from "zustand";

// ─── Brand Payload Types ──────────────────────────────────────────────────────
export interface BrandTheme {
  background: string;
  primaryAccent: string;
  surface: string;
  text: string;
}

export interface BrandTypography {
  headingFont: string;
  letterSpacing: string;
  weight?: string;
}

export interface BrandMotion {
  transitionType: "spring" | "tween";
  stiffness: number;
  damping: number;
  scalingDuration: number;
}

export interface BrandPayload {
  brandId: string;
  theme: BrandTheme;
  typography: BrandTypography;
  motion: BrandMotion;
}

// ─── Luxmetique Payload ───────────────────────────────────────────────────────
export const LUXMETIQUE_PAYLOAD: BrandPayload = {
  brandId: "luxmetique-001",
  theme: {
    background: "#F9F9F7",
    primaryAccent: "#D4AF37",
    surface: "rgba(255, 255, 255, 0.8)",
    text: "#1A1A1A",
  },
  typography: {
    headingFont: "Cormorant Garamond, serif",
    letterSpacing: "-0.02em",
  },
  motion: {
    transitionType: "spring",
    stiffness: 100,
    damping: 20,
    scalingDuration: 0.8,
  },
};

// ─── Medik8 Payload ───────────────────────────────────────────────────────────
export const MEDIK8_PAYLOAD: BrandPayload = {
  brandId: "medik8-002",
  theme: {
    background: "#F4F6F5",
    primaryAccent: "#80897C",
    surface: "rgba(244, 246, 245, 0.85)",
    text: "#111111",
  },
  typography: {
    headingFont: "Inter, sans-serif",
    letterSpacing: "-0.04em",
    weight: "500",
  },
  motion: {
    transitionType: "spring",
    stiffness: 120,
    damping: 18,
    scalingDuration: 0.6,
  },
};

// ─── GUM Payload ─────────────────────────────────────────────────────────────
export const GUM_PAYLOAD: BrandPayload = {
  brandId: "gum-003",
  theme: {
    background: "#F0F5F9",
    primaryAccent: "#4A90E2",
    surface: "rgba(240, 245, 249, 0.8)",
    text: "#1A2530",
  },
  typography: {
    headingFont: "DM Sans, sans-serif",
    letterSpacing: "0.02em",
    weight: "400",
  },
  motion: {
    transitionType: "spring",
    stiffness: 80,
    damping: 25,
    scalingDuration: 1.0,
  },
};

// ─── Default CSS variable values (SSL brand) ─────────────────────────────────
const DEFAULT_VIBE = {
  "--vibe-bg": "#F9F9F7",
  "--vibe-accent": "#A9B3A1",
  "--vibe-text": "#1A1A1A",
  "--vibe-surface": "rgba(255, 255, 255, 0.8)",
} as const;

// ─── Zustand Store ────────────────────────────────────────────────────────────
interface VibeState {
  activeBrand: BrandPayload | null;
  isExiting: boolean;                  // Drives the 0.8s opacity dissolve
  isTransitioning: boolean;
  homeScrollPosition: number;
  setActiveBrand: (payload: BrandPayload) => void;
  clearActiveBrand: () => void;
  closeVibe: () => void;               // The Asymmetrical Exit
  setHomeScroll: (y: number) => void;
}

export const useVibeStore = create<VibeState>((set) => ({
  activeBrand: null,
  isExiting: false,
  isTransitioning: false,
  homeScrollPosition: 0,

  setActiveBrand: (payload) => {
    set({ isTransitioning: true, isExiting: false });
    requestAnimationFrame(() => {
      set({ activeBrand: payload, isTransitioning: false });
    });
  },

  clearActiveBrand: () => {
    set({ isTransitioning: true });
    requestAnimationFrame(() => {
      set({ activeBrand: null, isExiting: false, isTransitioning: false });
    });
  },

  // ── Asymmetrical Exit ─────────────────────────────────────────────────────
  // Step 1: Set isExiting → true (drives opacity to 0 via animate prop)
  // Step 2: After 800ms dissolve completes, unmount the overlay
  closeVibe: () => {
    set({ isExiting: true });
    setTimeout(() => {
      set({ activeBrand: null, isExiting: false });
    }, 800); // Must match the dissolve transition duration
  },

  setHomeScroll: (y) => set({ homeScrollPosition: y }),
}));

// ─── CSS Variable Side-Effect ─────────────────────────────────────────────────
// Subscribe to store changes and sync CSS variables on <html>
if (typeof window !== "undefined") {
  useVibeStore.subscribe((state) => {
    const root = document.documentElement;
    if (state.activeBrand) {
      const { theme } = state.activeBrand;
      root.style.setProperty("--vibe-bg", theme.background);
      root.style.setProperty("--vibe-accent", theme.primaryAccent);
      root.style.setProperty("--vibe-text", theme.text);
      root.style.setProperty("--vibe-surface", theme.surface);
    } else {
      Object.entries(DEFAULT_VIBE).forEach(([key, value]) => {
        root.style.setProperty(key, value);
      });
    }
  });
}
