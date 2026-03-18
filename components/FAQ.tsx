"use client";

import React, { useState } from "react";

const items = [
  {
    q: "¿Cuánto tiempo toma una implementación completa de GA4 y GTM?",
    a: "Depende de la complejidad del proyecto. Una implementación estándar toma entre 2-4 semanas. Incluye auditoría, configuración, testing y capacitación. Proyectos complejos con múltiples plataformas pueden tomar 6-8 semanas.",
  },
  {
    q: "¿Trabajan con WordPress y WooCommerce?",
    a: "Sí. Tenemos amplia experiencia implementando tracking en WordPress y WooCommerce, incluyendo ecommerce y seguimiento de conversiones.",
  },
  {
    q: "¿Pueden migrar mi configuración de Universal Analytics a GA4?",
    a: "Por supuesto. Analizamos tu configuración actual, mapeamos eventos y objetivos, y migramos/replicamos la lógica en GA4.",
  },
  {
    q: "¿Ofrecen soporte técnico después de la implementación?",
    a: "Ofrecemos paquetes de soporte y mantenimiento para asegurar que el tracking se mantenga correcto y actualizado.",
  },
  {
    q: "¿Qué incluye la auditoría gratuita?",
    a: "Revisamos tu implementación actual de GA4/GTM, identificamos errores críticos, eventos duplicados, conversiones rotas y te entregamos un reporte con hallazgos y recomendaciones prioritarias.",
  },
  {
    q: "¿Trabajan con aplicaciones Next.js y React?",
    a: "Sí. Implementamos tracking en aplicaciones modernas (SSR/SSG/SPA) y adaptamos la solución al stack (Next.js, React, etc.).",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="FAQ" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full mb-4">FAQ</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">Preguntas frecuentes</h2>
        <p className="text-center text-slate-500 mt-3">Todo lo que necesitas saber sobre nuestros servicios</p>

        <div className="mt-10 max-w-3xl mx-auto space-y-4">
          {items.map((it, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-xl shadow-sm">
              <button type="button" onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left" aria-expanded={open === i} aria-controls={`faq-${i}`}>
                <span className="text-slate-700">{it.q}</span>
                <span className="ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600">
                  <svg className={`w-4 h-4 transform transition-transform ${open === i ? "rotate-45" : "rotate-0"}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>

              <div id={`faq-${i}`} className={`px-6 pb-4 text-slate-600 transition-all ${open === i ? "block" : "hidden"}`}>
                {it.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
