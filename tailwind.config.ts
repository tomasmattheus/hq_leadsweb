import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--brand-cream)",
        "off-white": "var(--brand-off-white)",
        ink: "var(--brand-black-ink)",
        "mid-gray": "var(--brand-mid-gray)",
        "light-gray": "var(--brand-light-gray)",
        indigo: "var(--brand-indigo)",
        acid: "var(--brand-acid-yellow)",
        blood: "var(--brand-blood-red)",
        "hot-pink": "var(--brand-hot-pink)",
        safety: "var(--brand-safety-orange)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
