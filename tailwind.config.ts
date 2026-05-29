import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bone: "#FDF6EF",
        ink: "#1A1410",
        rosso: {
          50: "#FEF2EC",
          100: "#FCDBC6",
          200: "#F8B494",
          300: "#F28E66",
          400: "#E96E40",
          500: "#C4512A",
          600: "#A63E1E",
          700: "#842F17",
          800: "#632312",
          900: "#44180C"
        },
        basilico: {
          50: "#F0F9E8",
          100: "#DAF1C4",
          200: "#B2E28E",
          300: "#8AD15E",
          400: "#66BC3C",
          500: "#4A9A2B",
          600: "#387A21",
          700: "#2A5E19",
          800: "#1F4513",
          900: "#152F0D"
        }
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-geist)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"]
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      }
    }
  },
  plugins: []
};

export default config;
