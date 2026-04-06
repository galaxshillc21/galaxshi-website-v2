import { SiteDictionary } from "@/utils/i18n";

type SolutionsSectionProps = {
  content: SiteDictionary["solutions"];
};

export default function SolutionsSection({ content }: SolutionsSectionProps) {
  return (
    <section id="Solutions" className="bg-slate-950 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">{content.badge}</p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">{content.title}</h2>
          <p className="mt-4 text-lg text-slate-300">{content.description}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {content.cards.map((solution) => (
            <article key={solution.title} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/30 border-[2px] transition-all duration-300 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10">
              <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{solution.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
