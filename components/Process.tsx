"use client";

import React from "react";

const steps = [
  {
    title: "Auditoría Inicial",
    number: "01",
    desc: `Revisamos tu implementación actual, identificamos errores y oportunidades de mejora`,
  },
  {
    title: "Estrategia de Medición",
    number: "02",
    desc: `Definimos qué medir, cómo medirlo y qué insights necesitas para tu negocio`,
  },
  {
    title: "Implementación Técnica",
    number: "03",
    desc: `Configuramos GA4, GTM y Data Layer con las mejores prácticas del mercado`,
  },
  {
    title: "Validación",
    number: "04",
    desc: `Testing exhaustivo para garantizar que todos los datos fluyen correctamente`,
  },
  {
    title: "Capacitación",
    number: "05",
    desc: `Entrenamos a tu equipo para que pueda aprovechar al máximo la nueva implementación`,
  },
];

export default function Process() {
  return (
    <section id="Process" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full mb-4">Nuestro proceso</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">Metodología probada en más de 150 proyectos</h2>
        <p className="text-center text-slate-500 mt-3 max-w-2xl mx-auto">Un enfoque sistemático que garantiza resultados precisos y sostenibles</p>

        <div className="relative mt-12">
          {/* Horizontal connector line for large screens */}
          <div className="hidden lg:block absolute left-8 right-8 top-16 h-0.5 bg-slate-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-start">
            {steps.map((s, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-4 lg:px-0">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg">
                    {/* simple icon - vary by index */}
                    {idx === 0 && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
                      </svg>
                    )}
                    {idx === 1 && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 8c.667-1.333 2-2 4-2 2 0 4 1.333 4 4 0 2-1.333 3.333-2 4-2 2-5 2-7 0s-2-5 0-7z" />
                      </svg>
                    )}
                    {idx === 2 && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M8 16h8M8 12h8M8 8h8" />
                      </svg>
                    )}
                    {idx === 3 && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {idx === 4 && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422M12 14L5.84 10.578" />
                      </svg>
                    )}
                  </div>
                  {/* number below icon on small screens or above small */}
                </div>

                <div className="mt-4 text-sm text-blue-500 font-medium">{s.number}</div>
                <h3 className="mt-2 text-base font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-3 text-sm text-slate-500 max-w-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
