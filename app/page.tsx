import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Problems from "@/components/Problems";
import AboutSection from "@/components/AboutSection";
import FAQ from "@/components/FAQ";
import AuditForm from "@/components/AuditForm";
import DemoStoreCTA from "@/components/DemoStoreCTA";

export default function Home() {
  return (
    <main className="Main">
      <Hero />

      <DemoStoreCTA />

      <Problems />

      <Services />

      <Process />

      <Technologies />

      <AboutSection />

      <FAQ />

      <AuditForm />
    </main>
  );
}
