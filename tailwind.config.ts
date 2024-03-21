import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       boxShadow:{
        "primary":"rgba(0, 0, 0, 0.176) 4.4px 4.4px",
       }
    }
  },
  plugins: [],
};
export default config;
