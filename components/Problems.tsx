"use client";

import React from "react";

const cards = [
  {
    title: "GA4 no recoge datos",
    desc: "Tu propiedad de GA4 está configurada pero no recibes información",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current">
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" className="text-[#ff6b6b]" />
        <path d="M9 9l6 6M15 9l-6 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white" />
      </svg>
    ),
  },
  {
    title: "Eventos duplicados",
    desc: "Múltiples disparos del mismo evento distorsionan tus métricas",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M12 9v4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white stroke-current" />
        <path d="M12 17h.01" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white stroke-current" />
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" strokeWidth="1.2" fill="none" className="text-[#ff6b6b] stroke-current" />
      </svg>
    ),
  },
  {
    title: "Migración incompleta desde Universal Analytics",
    desc: "Perdiste funcionalidad crítica en la transición a GA4",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M3 12h18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white stroke-current" />
        <path d="M3 6h6M15 18h6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white stroke-current" />
      </svg>
    ),
  },
  {
    title: "Ecommerce tracking roto",
    desc: "No puedes medir conversiones ni ingresos correctamente",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" className="text-white fill-current" />
        <path d="M4 4l16 16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff6b6b] stroke-current" />
      </svg>
    ),
  },
  {
    title: "Falta de Data Layer",
    desc: "Datos desorganizados e imposibles de aprovechar estratégicamente",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
        <rect x="5" y="5" width="14" height="4" rx="1" className="text-white fill-current" />
        <rect x="5" y="11" width="14" height="4" rx="1" className="text-white fill-current" />
        <rect x="5" y="17" width="14" height="2" rx="1" className="text-white fill-current" />
      </svg>
    ),
  },
];

export default function Problems() {
  return (
    <section id="Problems" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <span className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">Problemas comunes</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">¿Te suena familiar?</h2>
        <p className="text-center text-slate-500 mt-3">Estos errores de implementación pueden costarte decisiones equivocadas y oportunidades perdidas</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* first row: 3 cards */}
          {cards.slice(0, 5).map((c, i) => (
            <article key={i} className={`rounded-xl bg-white p-6 min-h-[140px] transform transition-transform duration-200 border border-slate-100 hover:shadow-lg border-[2px] hover:border-red-200 `}>
              <div className="flex flex-col items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#fff0f2] flex items-center justify-center text-pink-600">{c.icon}</div>
                <h3 className="text-slate-900 font-semibold text-lg">{c.title}</h3>
                <p className="text-slate-500 text-sm">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
