import { dictionaries } from "@/utils/i18n";

export default function GraciasEsPage() {
  const t = dictionaries.es.thanks;

  return (
    <main className="min-h-[70vh] bg-slate-950 text-white flex items-center justify-center px-4">
      <section className="max-w-xl text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{t.title}</h1>
        <p className="text-white/80 mb-6">{t.description}</p>
        <a href="/es" className="inline-flex items-center justify-center rounded-lg bg-cyan-400/90 hover:bg-cyan-300 text-slate-900 font-semibold px-5 py-3 transition">
          {t.backHome}
        </a>
      </section>
    </main>
  );
}
