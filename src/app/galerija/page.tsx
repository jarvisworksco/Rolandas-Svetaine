import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Galerija",
  description:
    "Atliktų darbų galerija – avarinių medžių pjovimas, kelmų frezavimas, vaismedžių genėjimas, gyvatvorių karpymas, vejos priežiūra ir malkos.",
  alternates: { canonical: "/galerija" },
};

export default function GalerijaPage() {
  const allItems = [...siteData.galerija, ...siteData.galerija];

  return (
    <>
      <Header />
      <main id="pagrindinis-turinys" className="pt-20">
        {/* Hero */}
        <div className="bg-brand py-16 md:py-24 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <span className="text-xs uppercase tracking-[0.2em] text-cream/80 font-medium">
              Mūsų darbai
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              Darbų galerija
            </h1>
            <p className="mt-4 text-white/80">
              Realūs projektai – medžių pjovimas, kelmų naikinimas, sklypų tvarkymas ir daugiau.
            </p>
          </div>
        </div>

        {/* Gallery grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allItems.map((item, i) => (
                <div
                  key={i}
                  className="group rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={item.foto}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <span className="absolute top-3 left-3 bg-cream text-brand-dark text-xs font-medium px-2.5 py-1 rounded">
                      {item.kategorija}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.aprasymas}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand py-16 text-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Norite tokio rezultato?</h2>
            <p className="text-white/80 mb-8">
              Susisiekite – atvyksime nemokamai ir aptarsime darbus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteData.telefonas_href}`}
                className="inline-flex items-center justify-center gap-2 bg-cream hover:bg-cream/90 text-brand-dark font-semibold px-8 py-3.5 rounded-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteData.telefonas}
              </a>
              <Link
                href="/kontaktai"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-md transition-colors"
              >
                Rašyti žinutę
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
