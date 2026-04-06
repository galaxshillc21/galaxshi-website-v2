import Link from "next/link";
import { Store } from "lucide-react";

export default function DemoStoreCTA() {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-cyan-200 bg-gradient-to-r from-cyan-50 to-sky-100 p-8 shadow-sm border-[2px] transition-all duration-300 hover:border-cyan-400 hover:shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">Demo en vivo</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">Explora nuestra tienda demo de analitica</h2>
              <p className="mt-2 text-slate-700">Recorre un flujo de ecommerce simulado y observa eventos para vistas de producto, carrito, checkout y compra.</p>
            </div>

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
