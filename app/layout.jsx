import "/styles/global.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Metadata } from "next";

export const metadata = {
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
  
const RootLayout = ({ children }) => {
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
