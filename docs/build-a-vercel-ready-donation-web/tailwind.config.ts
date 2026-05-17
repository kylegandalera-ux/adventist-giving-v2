import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#09182f",
          900: "#0d2344",
          800: "#14345f"
        },
        gold: {
          500: "#d7aa45",
          400: "#e8c76f",
          100: "#fbf0cf"
        },
        linen: "#f7f1e6",
        cloud: "#f4f6f8"
      },
      boxShadow: {
        soft: "0 20px 45px rgba(9, 24, 47, 0.10)",
        glow: "0 18px 50px rgba(215, 170, 69, 0.25)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Lora", "Georgia", "ui-serif", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
