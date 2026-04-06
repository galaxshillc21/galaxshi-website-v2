import Link from "next/link";
import { Store } from "lucide-react";
import Image from "next/image";

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
      <div className="container mx-auto px-4">
        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-cyan-50 p-8 shadow-sm sm:p-10">
          <div className="flex gap-10">
            <div className="w-3/5">
              <p className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">Tienda de demostración de GA4 y GTM</p>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Esta demo interactiva es un recurso para que descubras todo lo que se puede hacer con GA4</h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-600">El objetivo es enseñarte, de forma clara, cómo diseñamos la medición: desde los eventos clave hasta la estructura de datos y su validación, para que los equipos de marketing, producto y desarrollo trabajen con información fiable.</p>
            </div>
            <div className="w-2/5 max-w-md h-[300px] relative flex items-center justify-center">
              <Image src="/images/demo-store.webp" alt="Analytic demo store" fill className="h-auto w-full object-contain mix-blend-multiply pointer-events-none" priority />
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {trackingCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-slate-200 bg-white p-6 border-[2px] transition-all duration-300 hover:border-slate-300 hover:shadow-lg">
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
      </div>
    </section>
  );
}
