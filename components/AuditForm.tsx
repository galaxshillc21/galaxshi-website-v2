"use client";

import { ArrowRight } from "lucide-react";
import type { FormEvent } from "react";

export default function AuditForm() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const encodedData = new URLSearchParams(Array.from(formData.entries()).map(([key, value]) => [key, String(value)])).toString();

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodedData,
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      window.location.href = "/gracias";
    } catch {
      window.alert("No pudimos enviar tu solicitud. Intenta nuevamente en unos minutos.");
    }
  };

  return (
    <section id="Contact" className="py-20 bg-gradient-to-b from-[#0b2a44] to-[#0b2133] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <span className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm text-blue-200 rounded-full mb-4 border border-blue-400/30">Contacto</span>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Solicita tu auditoría gratuita</h2>
          <p className="text-white/80 max-w-2xl">Revisaremos tu implementación actual y te enviaremos un reporte detallado con recomendaciones</p>
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-2xl text-slate-700">
            <form name="audit-request" onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="form-name" value="audit-request" />
              <p className="hidden" aria-hidden="true">
                <label>
                  Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                </label>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm text-slate-600 mb-2">Nombre completo</span>
                  <input name="nombre" type="text" required placeholder="Tu nombre" className="px-4 py-3 rounded-lg border border-slate-100 bg-white/90 focus:outline-none" />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm text-slate-600 mb-2">Email</span>
                  <input name="email" type="email" required placeholder="tu@email.com" className="px-4 py-3 rounded-lg border border-slate-100 bg-white/90 focus:outline-none" />
                </label>
              </div>

              <div>
                <label className="flex flex-col">
                  <span className="text-sm text-slate-600 mb-2">Plataforma</span>
                  <select name="plataforma" required className="w-full rounded-lg border border-slate-100 px-4 py-3 bg-white/90 focus:outline-none">
                    <option value="">Selecciona tu plataforma</option>
                    <option value="wordpress-woocommerce">WordPress / WooCommerce</option>
                    <option value="nextjs-react">Next.js / React</option>
                    <option value="shopify">Shopify</option>
                    <option value="otro">Otro</option>
                  </select>
                </label>
              </div>

              <div>
                <label className="flex flex-col">
                  <span className="text-sm text-slate-600 mb-2">Mensaje</span>
                  <textarea name="mensaje" required placeholder="Cuéntanos sobre tu proyecto y qué necesitas..." rows={6} className="w-full rounded-lg border border-slate-100 p-4 bg-white/90 focus:outline-none" />
                </label>
              </div>

              <div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-3 bg-[#1e63ff] hover:bg-[#1552d6] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
                  <ArrowRight className="h-5 w-5" />
                  Quiero mi auditoría gratuita
                </button>
              </div>

              <p className="text-center text-sm text-slate-500">Respuesta en menos de 24 horas</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
