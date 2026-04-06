import Link from "next/link";
import { Store } from "lucide-react";

const trackingCards = [
  {
    title: "Eventos visibles",
    description: "La tienda demo muestra como se disparan eventos clave de ecommerce para que el visitante entienda la logica de implementacion.",
  },
  {
    title: "Data Layer estructurado",
    description: "Cada interaccion relevante se empuja con una estructura ecommerce consistente, lista para ser consumida por GTM.",
  },
  {
    title: "Validacion sin datos personales",
    description: "La experiencia esta pensada para demostrar arquitectura y depuracion sin depender de cookies ni de datos identificables del usuario.",
  },
];

export default function TrackingStory() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-[92%] max-w-6xl rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-cyan-50 p-8 shadow-sm sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">Como rastreamos esta demo</p>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">La demo no solo enseña una tienda falsa. Enseña como pensamos una implementacion real.</h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">El objetivo es demostrar criterio tecnico: diseño de eventos, estructura de data layer, validacion y claridad para equipos de marketing, producto y desarrollo.</p>
          </div>

          <div className="rounded-2xl border border-cyan-200 bg-slate-950 p-6 text-slate-100">
            <p className="text-sm uppercase tracking-[0.18em] text-cyan-300">Entregables tipicos</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              <li>Mapa de eventos y parametros para GTM.</li>
              <li>Plan de validacion para ecommerce y formularios.</li>
              <li>Recomendaciones de implementacion para el equipo tecnico.</li>
              <li>Guia para evitar duplicados, huecos de medicion y datos inutiles.</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {trackingCards.map((card) => (
            <article key={card.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/demo-store" className="inline-flex w-fit items-center gap-2 rounded-md bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700">
            <span>Abrir tienda demo</span>
            <Store aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
