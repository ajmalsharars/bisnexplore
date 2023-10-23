import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import NextTopLoader from "nextjs-toploader";
import Providers from "@/components/Providers";
import SessionCheck from "@/components/SessionCheck";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Bisnexplore",
  description: "Bisnexplore App",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
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
          <SessionCheck />
          {session ? "" : <Header />}

          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
