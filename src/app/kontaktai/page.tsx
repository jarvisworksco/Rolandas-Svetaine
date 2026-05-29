import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Kontaktai",
  description: `Susisiekite su ${siteData.verslo_pavadinimas}. Telefonas: ${siteData.telefonas}. Atvykimas ir konsultacija nemokamai.`,
  alternates: { canonical: "/kontaktai" },
};

export default function KontaktaiPage() {
  return (
    <>
      <Header />
      <main id="pagrindinis-turinys" className="pt-20">
        <div className="bg-brand py-16 md:py-20 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <span className="text-xs uppercase tracking-[0.2em] text-cream/80 font-medium">
              Susisiekite
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              Kontaktai
            </h1>
            <p className="mt-4 text-white/80">
              Susisiekite šiandien – atvyksime nemokamai ir įvertinsime darbus vietoje.
            </p>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
