"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import { siteData } from "@/lib/site-data";

export default function Reviews() {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            label="ATSILIEPIMAI"
            title={
              <>
                Ką sako mūsų{" "}
                <span className="text-brand-light">klientai</span>
              </>
            }
            subtitle="11 klientų atsiliepimų su 4.9 vidurkiu. Kiekvienas klientas – mums svarbus."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.atsiliepimai.map((ats, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: ats.ivertinimas }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-4 italic">
                &ldquo;{ats.tekstas}&rdquo;
              </p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div>
                  <p className="font-semibold text-sm text-gray-900">{ats.vardas}</p>
                  <p className="text-xs text-gray-500">{ats.paslauga}</p>
                </div>
                <p className="text-xs text-gray-400">{ats.data}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
