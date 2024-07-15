import "/styles/global.css";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SHOESAFARI",
  description: "YOUR OUTFIT",
  openGraph: {
    type: "website",
    url: "https://shoesafari.vercel.app/",
    title: "SHOESAFARI",
    description: "YOUR OUTFIT",
    images: [
      {
        url: "https://shoesafari.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "SHOESAFARI",
      },
    ],
  },
};
  
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <link rel="icon" href="/images/shoelogoo.png"/>
      <meta property="og:image" content="/images/shoelogoo.png" />{" "}
      <body>
        <Navbar />
        <main className="app">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
