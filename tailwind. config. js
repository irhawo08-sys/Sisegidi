import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#161013",
          light: "#2A2320",
          dark: "#0D0B0A",
        },
        beige: {
          DEFAULT: "#F7F1E6",
          dark: "#ECE2CC",
        },
        gold: {
          DEFAULT: "#7A2231",
          light: "#9C3A4B",
          dark: "#5C1825",
        },
        ink: "#1A1512",
        mist: "#8A7368",
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
        card: "0 2px 10px rgba(22, 16, 19, 0.08)",
        cardHover: "0 12px 30px rgba(22, 16, 19, 0.16)",
      },
      backgroundImage: {
        "compass-ring":
          "conic-gradient(from 0deg, #7A2231 0deg, #9C3A4B 60deg, #161013 60deg, #161013 360deg)",
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
