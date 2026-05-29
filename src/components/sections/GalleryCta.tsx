"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function GalleryCta() {
  return (
    <section className="bg-brand py-20 md:py-24 text-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Norite pamatyti daugiau projektų?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Peržiūrėkite visą mūsų darbų galeriją – dešimtys realių projektų nuotraukų prieš ir po.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/galerija"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-brand font-semibold px-8 py-3.5 rounded-md transition-colors"
            >
              Peržiūrėti visus projektus →
            </Link>
            <Link
              href="/kontaktai"
              className="inline-flex items-center justify-center bg-cream hover:bg-cream/90 text-brand-dark font-semibold px-8 py-3.5 rounded-md transition-colors"
            >
              Susisiekite
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
