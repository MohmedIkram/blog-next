import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { GoogleTagManager } from "@next/third-parties/google";
import Head from "next/head";
import Script from "next/script";
import { StoreProvider } from "./redux/StoreProvider";
// import GoogleAdsense from "./components/GoogleAdsense";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog Archives",
  description: "Worlds leading blog site",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
    <html lang="en">
      <Head>
        <meta name="google-adsense-account" content="ca-pub-2061189000957812" />
      </Head>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2061189000957812"
        crossorigin="anonymous"
      />
      <GoogleTagManager gtmId="GTM-K3VZFJB7" />
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
      {/* <GoogleAdsense pId={"key"}/> */}
    </html>
    </StoreProvider>
  );
}
