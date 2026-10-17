import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#B8860B",
          light: "#D4A017",
          dark: "#8A6508",
        },
        beige: {
          DEFAULT: "#000000",
          dark: "#000000",
        },
        gold: {
          DEFAULT: "#D4A017",
          light: "#E8C158",
          dark: "#A87A0E",
        },
        ink: "#E8C158",
        mist: "#8A6A3A",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 2px 10px rgba(0, 0, 0, 0.6)",
        cardHover: "0 12px 30px rgba(0, 0, 0, 0.8)",
      },
      backgroundImage: {
        "compass-ring":
          "conic-gradient(from 0deg, #D4A017 0deg, #E8C158 60deg, #000000 60deg, #000000 360deg)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        ringDraw: {
          "0%": { strokeDashoffset: "283" },
          "100%": { strokeDashoffset: "var(--ring-offset)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out both",
        ringDraw: "ringDraw 1.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
