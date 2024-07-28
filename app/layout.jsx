import "../styles/global.css";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Whatsapp from "../components/Whatsapp";
import Footer from "../components/Footer";
import { AuthProvider } from "../lib/AuthContext";
import Head from "next/head";
import logo from "../public/images/favicon.ico"

// export const metadata = {
//   title: "SHOESAFARI",
//   description: "YOUR OUTFIT & FOOTWEARS",
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
    <html lang="en">
      <Head>
        {/* <title>{metadata.title}</title> */}
        <link rel="icon" href={logo} type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        {/* <meta name="description" content={metadata.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height}
        />
        <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        /> */}
      </Head>
      <body className="h-full">
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="app flex-grow">{children}</main>
            <Whatsapp />
            <ScrollToTop />
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
