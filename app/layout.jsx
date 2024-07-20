"use client"
import "/styles/global.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Metadata } from "next";
import { AuthProvider } from '../lib/AuthContext';

// export const metadata = {
//   title: "SHOESAFARI",
//   description: "YOUR OUTFIT",
//   openGraph: {
//     type: "website",
//     url: "https://shoesafari.vercel.app/",
//     title: "SHOESAFARI",
//     description: "YOUR OUTFIT",
//     images: [
//       {
//         url: "https://shoesafari.vercel.app/images/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "SHOESAFARI",
//       },
//     ],
//   },
// };
  
const RootLayout = ({ children }) => {
  return (
    <AuthProvider>
    <html lang="en">
      <link rel="icon" href="/images/shoelogoo.png" />
      <meta property="og:image" content="/images/shoelogoo.png" />{" "}
      <body className="h-full ">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="app flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
      </html>
      </AuthProvider>
  );
};

export default RootLayout;
