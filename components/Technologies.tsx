"use client";

import React from "react";

const techs = [
  { name: "Google Analytics 4", key: "ga4" },
  { name: "Google Tag Manager", key: "gtm" },
  { name: "Data Layer", key: "dl" },
  { name: "WordPress", key: "wp" },
  { name: "WooCommerce", key: "wc" },
  { name: "Next.js", key: "next" },
  { name: "React", key: "react" },
];

function Icon({ keyName }: { keyName: string }) {
  switch (keyName) {
    case "ga4":
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="#fff" />
          <path d="M6 17h3v-6H6v6zM10 13h3V7h-3v6zM14 17h4v-9h-4v9z" fill="#ff7a00" />
        </svg>
      );
    case "gtm":
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="#fff" />
          <path d="M7 8h10v8H7z" stroke="#2563eb" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="1.5" fill="#2563eb" />
        </svg>
      );
    case "dl":
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="#fff" />
          <path d="M8 9h8v6H8z" stroke="#8b5cf6" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 11h4v2h-4z" fill="#8b5cf6" />
        </svg>
      );
    case "wp":
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="#fff" />
          <path d="M6 17l6-10 6 10" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "wc":
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="#fff" />
          <path d="M7 7h10v6H7z" stroke="#a78bfa" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "next":
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="#fff" />
          <path d="M7 17l5-10 5 10" stroke="#0f172a" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "react":
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="#fff" />
          <path d="M12 7c2.5 0 4.5 2 4.5 4.5S14.5 16 12 16s-4.5-2-4.5-4.5S9.5 7 12 7z" stroke="#06b6d4" strokeWidth="1.5" fill="none" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Technologies() {
  return (
    <section id="Technologies" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <span className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full mb-4">Tecnologías</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">Expertos en las herramientas que usas</h2>

        <div className="mt-8">
          <div className="flex gap-6 items-stretch justify-center overflow-x-auto py-6 px-2">
            {techs.map((t) => (
              <div key={t.key} className="min-w-[140px] flex-shrink-0 bg-white rounded-xl border border-slate-100 shadow-sm px-6 py-8 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center mb-4">
                  <Icon keyName={t.key} />
                </div>
                <div className="text-sm text-slate-600">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
