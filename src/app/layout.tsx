import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Cyperus Enterprise - Premium Tigernut Products",
  description: "Discover our range of premium tigernut products, sustainably sourced and crafted with care.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bebasNeue.className}>
        <div className="min-h-screen flex flex-col bg-amber-50">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}


