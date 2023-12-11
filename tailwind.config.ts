import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: "rgba(255 255 255)",
      black: "rgba(0 0 0)",
      containersBG: "rgb(21 20 20)",
      primary: "rgba(150 130 255)",
      blue: "#4663FA",
      textColor: "#858E96",
      background: "rgba(14 14 14)"
    },
  },
  plugins: [],
};
export default config;
