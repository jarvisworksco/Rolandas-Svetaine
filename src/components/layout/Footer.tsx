import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/shared/SocialIcons";
import { TreeLogo } from "@/components/shared/Logo";
import { siteData } from "@/lib/site-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-brand-dark text-white relative"
      style={{
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg width='4' height='4' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='2' height='4' fill='%23000000' opacity='0.03'/%3E%3Crect x='2' height='4' width='2' fill='%23ffffff' opacity='0.02'/%3E%3C/svg%3E"),
          linear-gradient(45deg, transparent 48%, rgba(0,0,0,0.05) 49%, rgba(0,0,0,0.05) 51%, transparent 52%),
          linear-gradient(-45deg, transparent 48%, rgba(255,255,255,0.03) 49%, rgba(255,255,255,0.03) 51%, transparent 52%)
        `,
        backgroundSize: '100px 100px, 2px 2px, 2px 2px',
        backgroundPosition: '0 0, 0 0, 1px 1px'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 font-bold text-xl mb-4">
              <TreeLogo className="w-8 h-8 text-cream" />
              <div className="leading-tight">
                <div className="text-xs uppercase tracking-widest text-cream/80 font-semibold">Rolandas</div>
                <div className="text-lg font-bold">{siteData.verslo_pavadinimas.split(' ')[1]}</div>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {siteData.tagline}
              <br />
              <span className="mt-2 block">{siteData.trumpas_apibudinimas}</span>
            </p>
            <div className="flex gap-3">
              <a
                href={siteData.facebook_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook puslapis"
                className="w-9 h-9 bg-white/10 hover:bg-brand-light rounded-lg flex items-center justify-center transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={siteData.instagram_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram puslapis"
                className="w-9 h-9 bg-white/10 hover:bg-brand-light rounded-lg flex items-center justify-center transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Paslaugos */}
          <div>
            <h4 className="font-semibold text-white mb-4">Paslaugos</h4>
            <ul className="flex flex-col gap-2">
              {siteData.paslaugos.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/paslaugos/${p.slug}`}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {p.kategorija}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nuorodos */}
          <div>
            <h4 className="font-semibold text-white mb-4">Nuorodos</h4>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/", label: "Pagrindinis" },
                { href: "/paslaugos", label: "Paslaugos" },
                { href: "/apie-mus", label: "Apie mus" },
                { href: "/galerija", label: "Galerija" },
                { href: "/kontaktai", label: "Kontaktai" },
                { href: "/privatumo-politika", label: "Privatumo politika" },
                { href: "/slapuku-politika", label: "Slapukų politika" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontaktai */}
          <div>
            <h4 className="font-semibold text-white mb-4">Kontaktai</h4>
            <ul className="flex flex-col gap-3 mb-6">
              <li>
                <a
                  href={`tel:${siteData.telefonas_href}`}
                  className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0 text-brand-light" />
                  {siteData.telefonas}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteData.el_pastas}`}
                  className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0 text-brand-light" />
                  {siteData.el_pastas}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 shrink-0 text-brand-light" />
                {siteData.adresas}
              </li>
            </ul>
            <Link
              href="/kontaktai"
              className="inline-block bg-cream hover:bg-cream/90 text-brand-dark text-sm font-semibold px-4 py-2 rounded-md transition-colors"
            >
              Susisiekite dabar
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-white/60">
          <div>
            <p>© {year} {siteData.verslo_pavadinimas}. Visos teisės saugomos.</p>
            <p className="mt-1">
              Internetinė svetainė sukurta{" "}
              {siteData.agenturos_credit}.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span>{siteData.tagline}</span>
            <a
              href="#pagrindinis-turinys"
              aria-label="Grįžti į viršų"
              className="w-8 h-8 bg-white/10 hover:bg-brand-light rounded-lg flex items-center justify-center transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
