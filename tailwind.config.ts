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
        primary: "#FF0000",
        secondary: "#FFFF00",
        accent: "#FFFFFF",
        custom: "#1D2D3C",
      },
      // fontFamily: {
      //   roboto: ["var(--font-roboto)"],
      // },
    },
  },
  plugins: [],
};
export default config;
