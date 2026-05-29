import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privatumo politika",
  description: `${siteData.verslo_pavadinimas} privatumo politika.`,
  alternates: { canonical: "/privatumo-politika" },
};

export default function PrivatumoPage() {
  return (
    <>
      <Header />
      <main id="pagrindinis-turinys" className="pt-20">
        <div className="bg-brand py-12 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Privatumo politika</h1>
          </div>
        </div>
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed">
            <p className="text-sm text-gray-500">Paskutinį kartą atnaujinta: 2024-01-01</p>

            <h2>1. Bendrosios nuostatos</h2>
            <p>
              {siteData.verslo_pavadinimas} gerbia Jūsų privatumą ir įsipareigoja saugoti Jūsų
              asmens duomenis. Ši privatumo politika aprašo, kaip mes renkame, naudojame ir
              saugome Jūsų asmens duomenis.
            </p>

            <h2>2. Renkami duomenys</h2>
            <p>Mes galime rinkti šiuos asmens duomenis:</p>
            <ul>
              <li>Vardas ir pavardė</li>
              <li>El. pašto adresas</li>
              <li>Telefono numeris</li>
              <li>Žinutės turinys</li>
              <li>IP adresas (automatiškai)</li>
            </ul>

            <h2>3. Duomenų naudojimas</h2>
            <p>Renkami duomenys naudojami tik šiais tikslais:</p>
            <ul>
              <li>Atsakymui į Jūsų užklausas</li>
              <li>Paslaugų teikimui</li>
              <li>Sutarties sudarymo ir vykdymo tikslais</li>
            </ul>

            <h2>4. Duomenų saugojimas</h2>
            <p>
              Jūsų duomenys saugomi ne ilgiau nei reikia aukščiau nurodytiems tikslams pasiekti
              arba pagal teisės aktų reikalavimus (paprastai iki 5 metų).
            </p>

            <h2>5. Duomenų perdavimas</h2>
            <p>
              Mes neperduodame Jūsų asmens duomenų trečiosioms šalims, išskyrus atvejus, kai tai
              reikalaujama pagal įstatymą.
            </p>

            <h2>6. Jūsų teisės</h2>
            <p>Pagal BDAR, Jūs turite teisę:</p>
            <ul>
              <li>Susipažinti su savo duomenimis</li>
              <li>Reikalauti juos ištaisyti ar ištrinti</li>
              <li>Apriboti duomenų tvarkymą</li>
              <li>Pateikti skundą priežiūros institucijai</li>
            </ul>

            <h2>7. Kontaktai</h2>
            <p>
              Klausimais dėl asmens duomenų tvarkymų kreipkitės:{" "}
              <a href={`mailto:${siteData.el_pastas}`}>{siteData.el_pastas}</a> arba telefonu{" "}
              <a href={`tel:${siteData.telefonas_href}`}>{siteData.telefonas}</a>.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
