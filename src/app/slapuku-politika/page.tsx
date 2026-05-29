import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Slapukų politika",
  description: `${siteData.verslo_pavadinimas} slapukų (cookies) naudojimo politika.`,
  alternates: { canonical: "/slapuku-politika" },
};

export default function SlapukuPage() {
  return (
    <>
      <Header />
      <main id="pagrindinis-turinys" className="pt-20">
        <div className="bg-brand py-12 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Slapukų politika</h1>
          </div>
        </div>
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed">
            <p className="text-sm text-gray-500">Paskutinį kartą atnaujinta: 2024-01-01</p>

            <h2>Kas yra slapukai?</h2>
            <p>
              Slapukai (angl. cookies) – tai maži tekstiniai failai, kurie saugomi Jūsų
              naršyklėje, kai lankotės interneto svetainėse. Jie padeda svetainei veikti
              teisingai ir teikia informaciją svetainės savininkams.
            </p>

            <h2>Kokius slapukus naudojame?</h2>

            <h3>Būtinieji slapukai</h3>
            <p>
              Šie slapukai yra būtini svetainės veikimui. Jie leidžia naršyti svetainėje ir
              naudotis jos funkcijomis. Be šių slapukų svetainė negalėtų veikti tinkamai.
            </p>
            <ul>
              <li>
                <strong>cookie_consent</strong> – saugo Jūsų slapukų sutikimo pasirinkimą (12
                mėn.)
              </li>
            </ul>

            <h3>Statistikos slapukai</h3>
            <p>
              Šie slapukai padeda mums suprasti, kaip lankytojai naudojasi svetaine, kur jie
              apsilanko ir kiek laiko praleidžia. Visa informacija yra anoniminė.
            </p>

            <h3>Rinkodaros slapukai</h3>
            <p>
              Šie slapukai naudojami Jums aktualių reklamų rodymui. Jie taip pat riboja, kiek
              kartų Jums parodoma reklama.
            </p>

            <h2>Kaip valdyti slapukus?</h2>
            <p>
              Savo sutikimą galite bet kada atšaukti arba pakeisti, spausdami žemiau esantį
              mygtuką arba naršyklės nustatymuose. Atkreipkite dėmesį, kad būtinųjų slapukų
              išjungimas gali sutrikdyti svetainės veikimą.
            </p>

            <h2>Susisiekite</h2>
            <p>
              Klausimais dėl slapukų naudojimo kreipkitės:{" "}
              <a href={`mailto:${siteData.el_pastas}`}>{siteData.el_pastas}</a>.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
