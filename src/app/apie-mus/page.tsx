import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Star } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Apie mus",
  description: `${siteData.verslo_pavadinimas} – ${siteData.metu_patirtis}+ metų patyrusi medkirčių komanda. Sužinokite daugiau apie mus, mūsų vertybes ir komandą.`,
  alternates: { canonical: "/apie-mus" },
};

export default function ApieMusPage() {
  return (
    <>
      <Header />
      <main id="pagrindinis-turinys" className="pt-20">
        {/* Hero */}
        <div className="bg-brand py-16 md:py-24 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <span className="text-xs uppercase tracking-[0.2em] text-cream/80 font-medium">
              Mūsų istorija
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              Apie mus
            </h1>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto leading-relaxed">
              Patyrusi medkirčių ir aukštalipių komanda, atliekanti darbus visoje Lietuvoje jau
              daugiau nei {siteData.metu_patirtis} metų.
            </p>
          </div>
        </div>

        {/* Main content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src="/images/about/01.jpg"
                    alt="Arboristo darbai – medžio pjovimas"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-40 rounded-xl overflow-hidden">
                    <Image
                      src="/images/about/02.jpg"
                      alt="Medžių pjovimas"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative h-40 rounded-xl overflow-hidden">
                    <Image
                      src="/images/about/03.jpg"
                      alt="Kelmų frezavimas"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-brand-light font-medium">
                  APIE MUS
                </span>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                  Kodėl verta pasirinkti <span className="text-brand-light">mus</span>?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">{siteData.trumpa_istorija}</p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Visiškai nesvarbu kokioje vietoje ar būklėje yra medis – ar kapinėse, ar prie
                  elektros linijų, ar arti pastato. Mes jį saugiai nupjausime ir susmulkinsime.
                  Atvažiuojame į bet kurią Lietuvos vietą – atvykimas visiškai nemokamas.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {siteData.verciu_punktai.map((punkt, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-brand-light shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{punkt}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`tel:${siteData.telefonas_href}`}
                  className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Susisiekti – {siteData.telefonas}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-brand py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              {[
                { value: `${siteData.metu_patirtis}+`, label: "Metų patirtis" },
                { value: "11", label: "Atsiliepimų" },
                { value: "4.9", label: "Vidurkis" },
                { value: "200+", label: "Projektų per metus" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-4xl font-bold text-cream">{stat.value}</p>
                  <p className="text-white/70 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-[0.2em] text-brand-light font-medium">
                ATSILIEPIMAI
              </span>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                Klientų <span className="text-brand-light">atsiliepimai</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteData.atsiliepimai.map((ats, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: ats.ivertinimas }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 italic mb-4">&ldquo;{ats.tekstas}&rdquo;</p>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{ats.vardas}</p>
                      <p className="text-xs text-gray-500">{ats.paslauga}</p>
                    </div>
                    <p className="text-xs text-gray-400">{ats.data}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Reikia aplinkos tvarkymo darbų?
            </h2>
            <p className="text-gray-600 mb-8">
              Susisiekite – atvyksime nemokamai ir įvertinsime darbus vietoje.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteData.telefonas_href}`}
                className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3.5 rounded-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteData.telefonas}
              </a>
              <Link
                href="/kontaktai"
                className="inline-flex items-center justify-center border border-brand text-brand hover:bg-brand hover:text-white font-semibold px-8 py-3.5 rounded-md transition-colors"
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
