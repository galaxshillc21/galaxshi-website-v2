const solutions = [
  {
    title: "Arquitectura de medicion confiable",
    description: "Corregimos implementaciones fragiles, eventos duplicados y data layers inconsistentes para que tus decisiones partan de datos utiles.",
  },
  {
    title: "Ecommerce medible de punta a punta",
    description: "Diseñamos eventos y parametros para producto, carrito, checkout y compra con estructura lista para GTM y GA4.",
  },
  {
    title: "Implementaciones adaptadas a tu stack",
    description: "Trabajamos con WordPress, WooCommerce, Shopify, Next.js y React sin depender de soluciones genericas que rompen con facilidad.",
  },
  {
    title: "Auditoria y documentacion accionable",
    description: "Entregamos hallazgos priorizados, plan de correccion y criterios de validacion para que el tracking se mantenga estable.",
  },
];

export default function SolutionsSection() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">Lo que resolvemos</p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">Implementaciones pensadas para negocio, no solo para disparar tags</h2>
          <p className="mt-4 text-lg text-slate-300">Galaxshi ayuda a equipos que necesitan datos confiables para optimizar campañas, medir leads y entender el rendimiento real de su ecommerce.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {solutions.map((solution) => (
            <article key={solution.title} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/30">
              <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{solution.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
