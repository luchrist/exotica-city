import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bone: "#FAF8F5",
        ink: "#15130F",
        rosso: {
          50: "#FBF5E8",
          100: "#F4E6C2",
          200: "#E6CE92",
          300: "#D7B66A",
          400: "#C9A058",
          500: "#B8893E",
          600: "#9C7029",
          700: "#7C5820",
          800: "#5C411A",
          900: "#3F2D12"
        },
        basilico: {
          50: "#EEF3E9",
          100: "#D5E0C7",
          200: "#AEC58E",
          300: "#88A85F",
          400: "#6A8C43",
          500: "#4F6F31",
          600: "#3D5826",
          700: "#2E441E",
          800: "#223317",
          900: "#16240F"
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
