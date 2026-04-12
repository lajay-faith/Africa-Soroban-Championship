import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Africa Soroban Championship | ASC",
  description:
    "A continent-wide educational initiative powered by the Stellar Soroban methodology — transforming numeracy education across Africa.",
  keywords: ["Soroban", "Africa", "Math", "Championship", "Education", "STEM", "Abacus"],
  openGraph: {
    title: "Africa Soroban Championship",
    description: "Transforming numeracy education across Africa through competitive mental math.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
