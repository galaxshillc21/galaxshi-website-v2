import Link from "next/link";
import { Store } from "lucide-react";
import Image from "next/image";
import { SiteDictionary } from "@/utils/i18n";

type TrackingStoryProps = {
  content: SiteDictionary["tracking"];
};

export default function TrackingStory({ content }: TrackingStoryProps) {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-cyan-50 p-8 shadow-sm sm:p-10">
          <div className="flex gap-10">
            <div className="w-3/5">
              <p className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">{content.badge}</p>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{content.title}</h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-600">{content.description}</p>
            </div>
            <div className="w-2/5 max-w-md h-[300px] relative flex items-center justify-center">
              <Image src="/images/demo-store.webp" alt={content.imageAlt} fill className="h-auto w-full object-contain mix-blend-multiply pointer-events-none" priority />
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {content.cards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-slate-200 bg-white p-6 border-[2px] transition-all duration-300 hover:border-slate-300 hover:shadow-lg">
                <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/demo-store" className="inline-flex w-fit items-center gap-2 rounded-md bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700">
              <span>{content.cta}</span>
              <Store aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
