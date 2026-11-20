
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#173F5F",
          light: "#285B7D",
          dark: "#102E46",
        },
        coral: {
          DEFAULT: "#F76C5E",
          light: "#FF9185",
          dark: "#D95449",
        },
        sunshine: {
          DEFAULT: "#F7C948",
          light: "#FFE080",
          dark: "#D9A923",
        },
        teal: {
          DEFAULT: "#70C1B3",
          light: "#A0D9CE",
          dark: "#45998B",
        },
        cream: "#FFF9F0",
        ink: "#263746",
        muted: "#6D7B84",
      },

      fontFamily: {
        display: ["Manrope", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },

      borderRadius: {
        xl2: "1.25rem",
      },

      boxShadow: {
        card: "0 4px 16px rgba(23, 63, 95, 0.07)",
        cardHover: "0 14px 32px rgba(23, 63, 95, 0.13)",
      },

      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(22px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-9px)" },
        },
      },

      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
        fadeIn: "fadeIn 0.9s ease-out both",
        float: "float 4s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};

export default config;
