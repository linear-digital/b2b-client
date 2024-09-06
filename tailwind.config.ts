import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8E9E84",
        black: "#121511",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        elMessiri: ["El Messiri", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
