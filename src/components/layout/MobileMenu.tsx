"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Phone, ChevronDown } from "lucide-react";
import { TreeLogo } from "@/components/shared/Logo";
import { siteData } from "@/lib/site-data";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const [paslaugosOpen, setPaslaugosOpen] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-brand lg:hidden">
      <div className="flex items-center justify-between px-4 h-20 border-b border-white/10">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-2 text-white font-bold text-lg"
        >
          <TreeLogo className="w-6 h-6 text-cream" />
        </Link>
        <button
          onClick={onClose}
          aria-label="Uždaryti meniu"
          className="p-2 text-white/80 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-1">
        <Link
          href="/"
          onClick={onClose}
          className="text-white/90 hover:text-white text-lg font-medium py-3 border-b border-white/10"
        >
          Pagrindinis
        </Link>

        <div className="border-b border-white/10">
          <button
            onClick={() => setPaslaugosOpen(!paslaugosOpen)}
            className="w-full flex items-center justify-between text-white/90 hover:text-white text-lg font-medium py-3"
          >
            Paslaugos
            <ChevronDown
              className={`w-5 h-5 transition-transform ${paslaugosOpen ? "rotate-180" : ""}`}
            />
          </button>
          {paslaugosOpen && (
            <div className="pl-4 pb-3 flex flex-col gap-2">
              {siteData.paslaugos.map((p) => (
                <Link
                  key={p.slug}
                  href={`/paslaugos/${p.slug}`}
                  onClick={onClose}
                  className="text-white/70 hover:text-white text-base py-1"
                >
                  {p.kategorija}
                </Link>
              ))}
              <Link
                href="/paslaugos"
                onClick={onClose}
                className="text-cream text-base py-1 font-medium"
              >
                Visos paslaugos →
              </Link>
            </div>
          )}
        </div>

        <Link
          href="/apie-mus"
          onClick={onClose}
          className="text-white/90 hover:text-white text-lg font-medium py-3 border-b border-white/10"
        >
          Apie mus
        </Link>
        <Link
          href="/galerija"
          onClick={onClose}
          className="text-white/90 hover:text-white text-lg font-medium py-3 border-b border-white/10"
        >
          Galerija
        </Link>
        <Link
          href="/kontaktai"
          onClick={onClose}
          className="text-white/90 hover:text-white text-lg font-medium py-3 border-b border-white/10"
        >
          Kontaktai
        </Link>
      </nav>

      <div className="px-4 pb-8 flex flex-col gap-3">
        <a
          href={`tel:${siteData.telefonas_href}`}
          className="flex items-center justify-center gap-2 bg-cream text-brand-dark font-semibold py-3 px-6 rounded-md w-full"
        >
          <Phone className="w-5 h-5" />
          {siteData.telefonas}
        </a>
        <Link
          href="/kontaktai"
          onClick={onClose}
          className="flex items-center justify-center gap-2 border border-white text-white font-medium py-3 px-6 rounded-md w-full hover:bg-white/10 transition-colors"
        >
          Susisiekti
        </Link>
      </div>
    </div>
  );
}
