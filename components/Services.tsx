"use client";

import Link from "next/link";
import React from "react";

const services = [
  {
    title: "Implementación Profesional de GA4",
    desc: "Configuración completa de Google Analytics 4 desde cero, con eventos personalizados, conversiones y reportes adaptados a tu negocio.",
    bullets: ["Configuración de propiedades y flujos de datos", "Eventos estándar y personalizados", "Conversiones y objetivos", "Informes personalizados"],
  },
  {
    title: "Google Tag Manager – Configuración Avanzada",
    desc: "Implementación y gestión de GTM con arquitectura escalable, triggers inteligentes y debugging profesional.",
    bullets: ["Estructura de contenedores optimizada", "Variables y triggers avanzados", "Testing y depuración", "Documentación completa"],
  },
  {
    title: "Implementación de Data Layer",
    desc: "Diseño e implementación de Data Layer estructurado para capturar datos de forma consistente y confiable.",
    bullets: ["Arquitectura de datos personalizada", "Eventos de ecommerce completos", "Validación y testing", "Integración con GTM"],
  },
  {
    title: "Integraciones WordPress y Next.js/React",
    desc: "Implementaciones técnicas especializadas para WordPress, WooCommerce y aplicaciones modernas en React/Next.js.",
    bullets: ["Plugins y hooks personalizados", "Single Page Apps (SPA)", "Server-side tracking", "Performance optimizado"],
  },
];

export default function Services() {
  return (
    <section id="Services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full mb-4">Nuestros servicios</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">Soluciones completas de analítica</h2>
        <p className="text-center text-slate-500 mt-3">Todo lo que necesitas para medir, analizar y optimizar tu negocio digital</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <article key={i} className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-2xl border-[2px] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#e6f0ff] flex items-center justify-center text-[#1e63ff]">
                  {/* simple square icon placeholder */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
                    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 12h6l3 8 4-16 3 8h5" />
                  </svg>
                </div>

                <div className="flex-1">
                  <h3 className="text-slate-900 font-semibold text-lg">{s.title}</h3>
                  <p className="text-slate-500 mt-2 text-sm">{s.desc}</p>

                  <ul className="mt-3 list-disc ml-5 text-slate-500 text-sm space-y-1">
                    {s.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <Link href="#" className="text-[#1e63ff] text-sm font-medium inline-flex items-center gap-2">
                      Más información
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor">
                        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
