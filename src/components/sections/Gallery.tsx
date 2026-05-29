"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import { siteData } from "@/lib/site-data";

export default function Gallery() {
  return (
    <section id="galerija" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            label="GALERIJA"
            title={
              <>
                Mūsų atlikti{" "}
                <span className="text-brand-light">darbai</span>
              </>
            }
            subtitle="Keli iš daugelio sėkmingai atliktų projektų. Kiekvienas darbas – kruopščiai ir saugiai."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteData.galerija.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="relative aspect-video">
                <Image
                  src={item.foto}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-3 left-3 bg-cream text-brand-dark text-xs font-medium px-2.5 py-1 rounded">
                  {item.kategorija}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.aprasymas}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
