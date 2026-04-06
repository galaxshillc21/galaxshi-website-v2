import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Problems from "@/components/Problems";
import AboutSection from "@/components/AboutSection";
import FAQ from "@/components/FAQ";
import AuditForm from "@/components/AuditForm";
import DemoStoreCTA from "@/components/DemoStoreCTA";
import SolutionsSection from "@/components/SolutionsSection";
import TrackingStory from "@/components/TrackingStory";
import Header from "@/components/ui/Header";
import { Locale, dictionaries } from "@/utils/i18n";

type HomePageProps = {
  lang: Locale;
};

export default function HomePage({ lang }: HomePageProps) {
  const t = dictionaries[lang];

  return (
    <>
      <Header lang={lang} />

      <main className="Main" lang={lang}>
        <Hero content={t.hero} />

        <TrackingStory content={t.tracking} />

        <Problems content={t.problems} />

        <SolutionsSection content={t.solutions} />

        <Services content={t.services} />

        <Process content={t.process} />

        <Technologies content={t.technologies} />

        <AboutSection content={t.about} />

        <FAQ content={t.faq} />

        <DemoStoreCTA content={t.demoCta} />
      </main>

      <AuditForm lang={lang} content={t.auditForm} />

      <footer className="border-t border-slate-800/60 bg-slate-950 px-6 py-5 text-center text-sm text-slate-300">
        <p>{t.footer.notice}</p>
      </footer>
    </>
  );
}
