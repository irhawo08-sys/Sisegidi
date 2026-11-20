
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#244B3B",
          light: "#3D7058",
          dark: "#173326",
        },

        beige: {
          DEFAULT: "#FFF8ED",
          dark: "#F3EBDD",
        },

        gold: {
          DEFAULT: "#E9B94D",
          light: "#F5D887",
          dark: "#A87A0E",
        },

        peach: "#E7BFA5",
        sage: "#DCE8D8",
        butter: "#F1E5C9",
        lavender: "#E9E1F0",
        rose: "#F2DCD8",

        ink: "#26342C",
        mist: "#718078",
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
        card: "0 2px 10px rgba(36, 75, 59, 0.06)",
        cardHover: "0 12px 30px rgba(36, 75, 59, 0.12)",
      },

      backgroundImage: {
        "compass-ring":
          "conic-gradient(from 0deg, #E9B94D 0deg, #F5D887 60deg, #244B3B 60deg, #244B3B 360deg)",
      },

      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(12px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        ringDraw: {
          "0%": {
            strokeDashoffset: "283",
          },
          "100%": {
            strokeDashoffset: "var(--ring-offset)",
          },
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
