import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from "next/font/google"; // Replace Sora with Roboto
import "./globals.css";
import ResponsiveNavbar from "./Components/Home/Navbar/ResponsiveNavbar";
import Footer from "./Components/Home/Footer/Footer";
import ScrollToTop from "./Components/Helper/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";

const font = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kishanth Portfolio",
  description: "Kishanth portfolio with next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body
        className={`${font.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="hidden md:block">
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={2}
            outerScale={2}
            outerAlpha={0}
            innerStyle={{
              backgroundColor: "white",

            }}
            outerStyle={{
              border:'3px solid white'
            }}
          />
        </div>
        <ResponsiveNavbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
