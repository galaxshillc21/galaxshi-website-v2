import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Galaxshi | GA4, GTM and Data Layer Implementation",
  description: "We implement GA4, Google Tag Manager, and data layers for ecommerce, corporate websites, and Next.js, React, and WordPress applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en">
      <body className={inter.className}>
        {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
        {children}
      </body>
    </html>
  );
}
