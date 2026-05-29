"use client";

import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Truck,
  ClipboardCheck,
  MapPin,
  Mail,
  AlertTriangle,
  Copy,
  Check,
} from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/shared/SocialIcons";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import ContactForm from "@/components/shared/ContactForm";
import { siteData } from "@/lib/site-data";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      aria-label={`Kopijuoti: ${text}`}
      className="p-1.5 rounded text-gray-400 hover:text-brand hover:bg-brand-tint transition-colors"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
}

export default function Contact() {
  return (
    <section id="kontaktai" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            label="KONTAKTAI"
            title={
              <>
                Susisiekite su{" "}
                <span className="text-brand-light">mūsų komanda</span>
              </>
            }
            subtitle="Atsakome greitai. Konsultacija ir atvykimas – nemokamai."
          />
        </motion.div>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            {
              icon: Phone,
              title: "Skambinkite mums",
              value: siteData.telefonas,
              sub: "Atsiliepiame greitai",
            },
            {
              icon: MessageCircle,
              title: "Parašykite užklausą",
              value: "Užpildykite formą",
              sub: "Atsakysime per parą",
            },
            {
              icon: Truck,
              title: "Dirbame visoje Lietuvoje",
              value: "Atvykstame pas jus",
              sub: "Visi miestai ir rajonai",
            },
            {
              icon: ClipboardCheck,
              title: "Nemokamas įvertinimas",
              value: "Apžiūra ir pasiūlymas",
              sub: "Įvertiname darbus vietoje",
            },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-gray-50 rounded-xl p-5 flex items-center gap-4"
              >
                <div className="bg-brand-tint p-3 rounded-lg shrink-0">
                  <Icon className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">{card.title}</p>
                  <p className="text-xs text-brand font-medium mt-0.5">{card.value}</p>
                  <p className="text-xs text-gray-500">{card.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Form + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="flex items-center gap-2 font-semibold text-gray-900 mb-5">
                <MapPin className="w-5 h-5 text-brand" />
                Kontaktinė informacija
              </h3>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                Susisiekite su mumis bet kuriuo patogiu būdu. Atsakome greitai, o atvykimas –
                visiškai nemokamas.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-brand-light shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">Telefonas</p>
                      <a
                        href={`tel:${siteData.telefonas_href}`}
                        className="text-sm font-medium text-gray-900 hover:text-brand transition-colors"
                      >
                        {siteData.telefonas}
                      </a>
                    </div>
                  </div>
                  <CopyButton text={siteData.telefonas} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-brand-light shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">El. paštas</p>
                      <a
                        href={`mailto:${siteData.el_pastas}`}
                        className="text-sm font-medium text-gray-900 hover:text-brand transition-colors"
                      >
                        {siteData.el_pastas}
                      </a>
                    </div>
                  </div>
                  <CopyButton text={siteData.el_pastas} />
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-brand-light shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500">Vieta</p>
                    <p className="text-sm font-medium text-gray-900">{siteData.adresas}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <ClipboardCheck className="w-4 h-4 text-brand-light shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500">Darbo laikas</p>
                    <p className="text-sm font-medium text-gray-900">{siteData.darbo_laikas}</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-gray-200">
                <p className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-3">
                  Sekite mus
                </p>
                <div className="flex gap-3">
                  <a
                    href={siteData.facebook_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex items-center gap-2 bg-brand-tint hover:bg-brand-tint/80 text-brand px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4" />
                    Facebook
                  </a>
                  <a
                    href={siteData.instagram_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex items-center gap-2 bg-brand-tint hover:bg-brand-tint/80 text-brand px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Urgent box */}
            <div className="border-2 border-red-200 bg-red-50/50 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
                <span className="font-bold text-red-600 text-sm uppercase tracking-wide">
                  SKUBU
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                Avarinė situacija ar darbai ne darbo metu? Skambinkite – atsiliepiame ir
                savaitgaliais bei vakarais.
              </p>
              <a
                href={`tel:${siteData.telefonas_href}`}
                className="flex items-center justify-center gap-2 w-full bg-brand hover:bg-brand-dark text-white font-semibold py-3 rounded-md transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                Skubus skambutis: {siteData.telefonas}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
