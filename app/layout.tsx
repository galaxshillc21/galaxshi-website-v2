import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Galaxshi",
  description: "A dynamic duo of married developers, passionate about crafting functional and beautiful websites.",
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
        <footer className="border-t border-slate-800/60 bg-slate-950 px-6 py-5 text-center text-sm text-slate-300">
          <p>This site uses anonymous tracking only for demo and analytics showcase purposes. We do not use cookies for user tracking.</p>
        </footer>
      </body>
    </html>
  );
}
