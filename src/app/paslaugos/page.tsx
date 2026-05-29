import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Phone } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Paslaugos",
  description:
    "Teikiamos paslaugos – tujų ir gyvatvorių karpymas, vejos pjovimas, malkų pardavimas, skaldymas ir pjovimas. Arboristo ir aplinkos tvarkymo darbai visoje Lietuvoje.",
  alternates: { canonical: "/paslaugos" },
};

export default function PaslaugosPage() {
  return (
    <>
      <Header />
      <main id="pagrindinis-turinys" className="pt-20">
        {/* Hero */}
        <div className="bg-brand py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-cream/80 font-medium">
              {siteData.verslo_pavadinimas}
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white tracking-tight">
              Mūsų paslaugos
            </h1>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              Pilnas aplinkos tvarkymo paslaugų spektras. Atvykstame visoje Lietuvoje nemokamai.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {siteData.paslaugos.map((p, i) => (
                <article
                  key={p.slug}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row"
                >
                  <div className="relative h-52 md:h-auto md:w-56 shrink-0">
                    <Image
                      src={p.foto}
                      alt={p.kategorija}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 224px"
                    />
                    <span className="absolute top-3 left-3 bg-brand text-white text-xs uppercase tracking-wider px-2 py-0.5 rounded font-medium">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-2">{p.kategorija}</h2>
                      <p className="text-sm text-brand font-semibold mb-3">{p.kaina}</p>
                      <ul className="flex flex-col gap-1.5 mb-4">
                        {p.punktai.map((punkt, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-brand-light shrink-0 mt-0.5" />
                            {punkt}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href={`/paslaugos/${p.slug}`}
                        className="text-sm bg-brand hover:bg-brand-dark text-white font-medium py-2 px-4 rounded-md transition-colors"
                      >
                        Skaityti plačiau →
                      </Link>
                      <a
                        href={`tel:${siteData.telefonas_href}`}
                        className="flex items-center gap-1 text-sm border border-brand text-brand hover:bg-brand hover:text-white py-2 px-4 rounded-md transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        Skambinti
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand py-16 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-4">Nematote reikalingos paslaugos?</h2>
            <p className="text-white/80 mb-8">
              Susisiekite – įvertinsime jūsų situaciją ir pasiūlysime optimalų sprendimą.
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
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-md border border-white/20 transition-colors"
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
