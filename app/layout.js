import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
// import GoogleAdsense from "./components/GoogleAdsense";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog Archives",
  description: "Worlds leading blog site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
      {/* <GoogleAdsense pId={"key"}/> */}
    </html>
  );
}
