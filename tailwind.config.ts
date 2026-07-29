import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f7f4ee",
        foreground: "#142338",
        primary: "#17324d",
        accent: "#3d7f7a",
        gold: "#b08a45",
      },
      boxShadow: {
        soft: "0 12px 32px rgba(20,35,56,.08)",
      },
    },
  },
  plugins: [],
};

export default config;
