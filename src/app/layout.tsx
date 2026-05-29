import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteData } from "@/lib/site-data";
import { Toaster } from "@/components/ui/sonner";
import CookieBanner from "@/components/shared/CookieBanner";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteData.verslo_pavadinimas} – Arboristo paslaugos, medžių pjovimas ir aplinkos tvarkymas Vilniuje ir visoje Lietuvoje`,
    template: `%s | ${siteData.verslo_pavadinimas}`,
  },
  description: siteData.trumpas_apibudinimas,
  keywords: [
    "arboristo paslaugos",
    "medžių pjovimas",
    "medžių genėjimas",
    "avarinių medžių pjovimas",
    "vaismedžių genėjimas",
    "tujų karpymas",
    "gyvatvorių trumpinimas",
    "vejos pjovimas",
    "malkos",
    "Vilnius",
    "Lietuva",
  ],
  authors: [{ name: siteData.verslo_pavadinimas }],
  creator: siteData.verslo_pavadinimas,
  metadataBase: new URL(`https://${siteData.domenas}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "lt_LT",
    url: `https://${siteData.domenas}`,
    siteName: siteData.verslo_pavadinimas,
    title: `${siteData.verslo_pavadinimas} – Medžių pjovimas ir aplinkos tvarkymas`,
    description: siteData.trumpas_apibudinimas,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteData.verslo_pavadinimas} – Medžių pjovimas Lietuvoje`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteData.verslo_pavadinimas} – Medžių pjovimas`,
    description: siteData.trumpas_apibudinimas,
    images: ["/images/og-image.jpg"],
  },
  other: {
    "geo.region": "LT",
    "geo.placename": "Vilnius",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteData.verslo_pavadinimas,
  description: siteData.trumpas_apibudinimas,
  telephone: siteData.telefonas,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vilnius",
    addressCountry: "LT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 54.6872,
    longitude: 25.2797,
  },
  openingHours: "Mo-Fr 08:00-18:00",
  areaServed: "Lietuva",
  url: `https://${siteData.domenas}`,
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#pagrindinis-turinys"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand focus:text-white focus:rounded-md"
        >
          Pereiti į pagrindinį turinį
        </a>
        {children}
        <Toaster richColors position="top-right" />
        <CookieBanner />
      </body>
    </html>
  );
}
