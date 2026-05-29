import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="pagrindinis-turinys" className="pt-20 flex-1 flex items-center justify-center py-32 bg-gray-50">
        <div className="text-center px-4">
          <p className="text-8xl font-bold text-brand/20 mb-4">404</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Puslapis nerastas</h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Atsiprašome, tokio puslapio neradome. Galbūt nuoroda pasikeitė arba puslapis buvo
            pašalintas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Į pagrindinį puslapį
            </Link>
            <Link
              href="/kontaktai"
              className="border border-brand text-brand hover:bg-brand hover:text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              Susisiekti
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
