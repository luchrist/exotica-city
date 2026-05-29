import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bone: "#FFF2E4",
        ink: "#2A1712",
        rosso: {
          50: "#FFF1E9",
          100: "#FFDCC8",
          200: "#FBB58D",
          300: "#F28B57",
          400: "#DD6330",
          500: "#B94724",
          600: "#94351B",
          700: "#6F2817",
          800: "#4D1E14",
          900: "#32130D"
        },
        mango: {
          50: "#FFF8DE",
          100: "#FFECA8",
          200: "#FFD66A",
          300: "#F9BA35",
          400: "#E69A17",
          500: "#C7770C",
          600: "#9F580A",
          700: "#773F0C",
          800: "#532C0B",
          900: "#351B08"
        },
        basilico: {
          50: "#F0F8DE",
          100: "#DDF0AC",
          200: "#BFE06A",
          300: "#9DCA35",
          400: "#78AE18",
          500: "#5F9011",
          600: "#486F0E",
          700: "#35540D",
          800: "#263B0B",
          900: "#182608"
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
