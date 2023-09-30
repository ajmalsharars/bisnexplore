import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Bisnexplore",
  description: "Bisnexplore App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={5}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 6px #2299DD,0 0 2px #2299DD"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
