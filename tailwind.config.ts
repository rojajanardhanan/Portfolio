import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            900: "#071328",
            800: "#0B1E3F",
            700: "#132A54",
            600: "#1F3864",
            500: "#2B4B82",
          },
          dark: "#101418",
          darkCard: "#161B22",
          light: "#FAFAF8",
          lightCard: "#FFFFFF",
          cyan: {
            DEFAULT: "#00D9FF",
            glow: "rgba(0, 217, 255, 0.35)",
            muted: "#0891B2",
          },
          gold: {
            DEFAULT: "#C9A86A",
            glow: "rgba(201, 168, 106, 0.35)",
            light: "#E5C88F",
          },
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        glowCyan: "0 0 25px rgba(0, 217, 255, 0.35)",
        glowGold: "0 0 25px rgba(201, 168, 106, 0.35)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
        cardDark: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "drift-slow": "drift 20s ease-in-out infinite alternate",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
        "float-slow": "float 5s ease-in-out infinite",
      },
      keyframes: {
        drift: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(30px, -40px) scale(1.08)" },
          "100%": { transform: "translate(-25px, 25px) scale(0.95)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
