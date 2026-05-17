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
          950: "#06152d",
          900: "#0a1f44",
          800: "#003f7d"
        },
        adventist: {
          blue: "#003f7d",
          navy: "#0a1f44",
          gold: "#d6a935",
          cream: "#f7f1e3",
          charcoal: "#1f2933"
        },
        hope: {
          navy: "#08233f",
          blue: "#0057a8",
          sky: "#3ba7e0",
          gold: "#f2b705",
          tint: "#eaf6fc"
        },
        awr: {
          navy: "#061a2f",
          blue: "#004b8d",
          red: "#c62828",
          gold: "#f5b942",
          mist: "#eef5fa"
        },
        gold: {
          500: "#d6a935",
          400: "#e4c36c",
          100: "#fbf0cf"
        },
        linen: "#f7f1e3",
        cloud: "#f4f6f8"
      },
      boxShadow: {
        soft: "0 20px 45px rgba(10, 31, 68, 0.10)",
        glow: "0 18px 50px rgba(214, 169, 53, 0.25)",
        hope: "0 22px 55px rgba(0, 87, 168, 0.18)",
        awr: "0 22px 55px rgba(198, 40, 40, 0.14)"
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
