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
        "error-image": "url('/images/notfoundimage.png')",
      },
    },
  },
  plugins: [],
};
export default config;
