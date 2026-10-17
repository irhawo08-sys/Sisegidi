import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#C9A24B",
          light: "#D9B86A",
          dark: "#A6822F",
        },
        beige: {
          DEFAULT: "#171513",
          dark: "#0F0D0C",
        },
        gold: {
          DEFAULT: "#D4A017",
          light: "#E8C158",
          dark: "#A87A0E",
        },
        ink: "#D9C9A8",
        mist: "#8A7A5E",
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
        card: "0 2px 10px rgba(0, 0, 0, 0.4)",
        cardHover: "0 12px 30px rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        "compass-ring":
          "conic-gradient(from 0deg, #D4A017 0deg, #E8C158 60deg, #171513 60deg, #171513 360deg)",
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
