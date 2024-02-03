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
        "dark_blue-dark": "hsl(209, 23%, 22%)",
        "very_dark_blue-dark": "hsl(207, 26%, 17%)",
        "very_dark_blue-light": "hsl(200, 15%, 8%)",
        "dark_gray-light": "hsl(0, 0%, 52%)",
        "very_light_gray-light": "hsl(0, 0%, 98%)",
      }
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
