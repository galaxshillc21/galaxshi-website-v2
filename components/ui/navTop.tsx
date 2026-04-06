"use client";
import Link from "next/link";
import { Home, Wrench, ClipboardList, MessagesSquare, Store } from "lucide-react";
import { Locale } from "@/utils/i18n";
import LocaleSwitcher from "@/components/ui/LocaleSwitcher";

type NavTopProps = {
  lang: Locale;
};

type MenuItem = {
  href: string;
  label: string;
  icon: React.ElementType;
};

export default function NavTop({ lang }: NavTopProps) {
  const isSpanish = lang === "es";
  const basePath = isSpanish ? "/es" : "/";

  const menuItems: MenuItem[] = [
    { href: `${basePath}#Hero`, label: isSpanish ? "Inicio" : "Home", icon: Home },
    { href: `${basePath}#Services`, label: isSpanish ? "Servicios" : "Services", icon: Wrench },
    { href: `${basePath}#Process`, label: isSpanish ? "Proceso" : "Process", icon: ClipboardList },
    { href: `${basePath}#Contact`, label: isSpanish ? "Contacto" : "Contact", icon: MessagesSquare },
    { href: "/demo-store", label: isSpanish ? "Tienda" : "Store", icon: Store },
  ];

  return (
    <nav className="fixed top-3 left-0 right-0 z-[999] px-3">
      <div className="mx-auto flex max-w-4xl items-center justify-between rounded-full border border-white/15 bg-slate-950/55 px-3 py-2 shadow-xl backdrop-blur-sm">
        <Link href={basePath} className="px-3 text-sm font-semibold tracking-wide text-white" aria-label="Go to homepage">
          GALAXSHI
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link key={item.href} href={item.href} className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-white/85 transition hover:bg-white/10 hover:text-white">
                <Icon size={16} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <div className="lg:hidden">
            <Link href={menuItems[4].href} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-3 py-2 text-sm text-white/90 transition hover:bg-white/10">
              <Store size={16} />
              <span>{menuItems[4].label}</span>
            </Link>
          </div>
          <LocaleSwitcher lang={lang} />
        </div>
      </div>
    </nav>
  );
}
