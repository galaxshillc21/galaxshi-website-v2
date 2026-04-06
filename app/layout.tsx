import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Galaxshi | Implementacion de GA4, GTM y Data Layer",
  description: "Implementamos GA4, Google Tag Manager y data layers para ecommerce, sitios corporativos y aplicaciones en Next.js, React y WordPress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="es">
      <body className={inter.className}>
        {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
        {children}
        <footer className="border-t border-slate-800/60 bg-slate-950 px-6 py-5 text-center text-sm text-slate-300">
          <p>Este sitio usa tracking anonimo solo con fines de demostracion. No utilizamos cookies para rastrear usuarios.</p>
        </footer>
      </body>
    </html>
  );
}
