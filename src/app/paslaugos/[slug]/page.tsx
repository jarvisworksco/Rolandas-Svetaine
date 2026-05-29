import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Phone, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/shared/ContactForm";
import { siteData } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return siteData.paslaugos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const paslauga = siteData.paslaugos.find((p) => p.slug === slug);
  if (!paslauga) return {};
  return {
    title: paslauga.kategorija,
    description: paslauga.aprasymas,
    alternates: { canonical: `/paslaugos/${slug}` },
  };
}

export default async function PaslaugaPage({ params }: Props) {
  const { slug } = await params;
  const paslauga = siteData.paslaugos.find((p) => p.slug === slug);
  if (!paslauga) notFound();

  const others = siteData.paslaugos.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Header />
      <main id="pagrindinis-turinys" className="pt-20">
        {/* Hero */}
        <div className="relative h-72 md:h-96">
          <Image
            src={paslauga.foto}
            alt={paslauga.kategorija}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 to-brand-dark/80" />
          <div className="absolute inset-0 flex items-end pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <Link
                href="/paslaugos"
                className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Visos paslaugos
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-white">{paslauga.kategorija}</h1>
              <p className="mt-2 text-cream font-semibold">{paslauga.kaina}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Apie paslaugą</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{paslauga.aprasymas}</p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Kas įeina į paslaugą</h3>
                <ul className="flex flex-col gap-3 mb-8">
                  {paslauga.punktai.map((punkt, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-brand-light shrink-0 mt-0.5" />
                      {punkt}
                    </li>
                  ))}
                </ul>

                <div className="bg-brand-tint rounded-xl p-6">
                  <h3 className="font-semibold text-brand mb-2">Nemokama konsultacija</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    Norite sužinoti kainą ar aptarti savo situaciją? Susisiekite – atvyksime
                    nemokamai ir pasiūlysime optimalų sprendimą.
                  </p>
                  <a
                    href={`tel:${siteData.telefonas_href}`}
                    className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold py-2.5 px-5 rounded-md transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    {siteData.telefonas}
                  </a>
                </div>
              </div>

              {/* Sidebar form */}
              <div>
                <ContactForm prefillPaslauga={paslauga.kategorija} />
              </div>
            </div>
          </div>
        </section>

        {/* Other services */}
        {others.length > 0 && (
          <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Kitos paslaugos</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {others.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/paslaugos/${p.slug}`}
                    className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="relative h-40">
                      <Image
                        src={p.foto}
                        alt={p.kategorija}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 text-sm">{p.kategorija}</h3>
                      <p className="text-xs text-brand font-medium mt-1">{p.kaina}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
