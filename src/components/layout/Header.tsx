"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { TreeLogo } from "@/components/shared/Logo";
import { siteData } from "@/lib/site-data";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [paslaugosOpen, setPaslaugosOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 bg-brand transition-all duration-300 ${
          scrolled ? "h-16 backdrop-blur bg-brand/95 shadow-md" : "h-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-bold shrink-0"
          >
            <div className="flex items-center gap-2">
              <TreeLogo className="w-7 h-7 text-cream" />
              <div className="leading-tight">
                <div className="text-xs uppercase tracking-widest text-cream/80 font-semibold">Rolandas</div>
                <div className="text-lg font-bold">{siteData.verslo_pavadinimas.split(' ')[1]}</div>
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Pagrindinis meniu">
            <Link
              href="/"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              Pagrindinis
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setPaslaugosOpen(true)}
              onMouseLeave={() => setPaslaugosOpen(false)}
            >
              <button className="flex items-center gap-1 text-white/90 hover:text-white text-sm font-medium transition-colors">
                Paslaugos
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${paslaugosOpen ? "rotate-180" : ""}`}
                />
              </button>
              {paslaugosOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 pt-3">
                  {siteData.paslaugos.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/paslaugos/${p.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-tint hover:text-brand transition-colors"
                    >
                      {p.kategorija}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <Link
                      href="/paslaugos"
                      className="block px-4 py-2 text-sm text-brand font-medium hover:bg-brand-tint transition-colors"
                    >
                      Visos paslaugos →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/apie-mus"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              Apie mus
            </Link>
            <Link
              href="/galerija"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              Galerija
            </Link>
            <Link
              href="/kontaktai"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              Kontaktai
            </Link>
          </nav>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteData.telefonas_href}`}
              className="flex items-center gap-2 text-white text-sm font-medium hover:text-cream transition-colors"
            >
              <Phone className="w-4 h-4" />
              {siteData.telefonas}
            </a>
            <Link
              href="/kontaktai"
              className="bg-cream hover:bg-cream/90 text-brand-dark text-sm font-semibold px-4 py-2 rounded-md transition-colors"
            >
              Susisiekti
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Atidaryti meniu"
            className="lg:hidden p-2 text-white/80 hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </>
  );
}
