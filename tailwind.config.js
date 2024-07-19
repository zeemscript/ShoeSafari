import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('/images/ShoesafariLandingimage.png')",
        "auth-image": "url('/images/welcomeshoesafari.png')",
        // "shoe1": "url('/images/shoe1.png')",
        // "shoe2": "url('/images/shoe2.png')",
        // "shoe3": "url('/images/shoe3.png')",
        // "shoe4": "url('/images/shoe4.png')",
        // "shoe5": "url('/images/shoe5.png')",
      },
    },
  },
  plugins: [],
};
export default config;
