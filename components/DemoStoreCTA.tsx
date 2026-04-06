import Link from "next/link";

export default function DemoStoreCTA() {
  return (
    <section className="mx-auto my-10 w-[92%] max-w-6xl rounded-2xl border border-cyan-200 bg-gradient-to-r from-cyan-50 to-sky-100 p-8 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">Live demo</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">Try our analytics sandbox store</h2>
          <p className="mt-2 text-slate-700">Walk through a fake ecommerce flow and watch events fire for product views, cart interactions, checkout, and purchase.</p>
        </div>

        <Link href="/demo-store" className="inline-flex w-fit items-center rounded-md bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700">
          Open demo store
        </Link>
      </div>
    </section>
  );
}
