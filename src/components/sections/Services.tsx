"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle, BookOpen, TreePine, Shovel, Leaf, Truck, Scissors, Apple } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import { siteData } from "@/lib/site-data";

const iconMap: Record<string, React.ElementType> = {
  TreePine,
  Shovel,
  Leaf,
  Truck,
  Scissors,
  Apple,
};

export default function Services() {
  return (
    <section id="paslaugos" className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            label="PASLAUGOS"
            title={
              <>
                Visi sprendimai aplinkos{" "}
                <span className="text-brand-light">tvarkymui</span>
              </>
            }
            subtitle="Teikiame pilną medžių priežiūros ir aplinkos tvarkymo paslaugų spektrą. Atvykstame visoje Lietuvoje nemokamai."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.paslaugos.map((paslauga, i) => {
            const Icon = iconMap[paslauga.ikona] || TreePine;
            return (
              <motion.article
                key={paslauga.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              >
                <div className="relative h-52">
                  <Image
                    src={paslauga.foto}
                    alt={paslauga.kategorija}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <span className="absolute bottom-3 left-3 bg-brand text-white text-xs uppercase tracking-wider px-3 py-1 rounded font-medium">
                    {String(i + 1).padStart(2, "0")} / {paslauga.kategorija.split(" ")[0]}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-brand-tint p-2 rounded-lg shrink-0">
                      <Icon className="w-5 h-5 text-brand" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                      {paslauga.kategorija}
                    </h3>
                  </div>

                  <ul className="flex flex-col gap-2 mb-4">
                    {paslauga.punktai.map((punkt, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-brand-light shrink-0 mt-0.5" />
                        {punkt}
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm font-semibold text-brand mb-4">{paslauga.kaina}</p>

                  <div className="flex gap-2">
                    <a
                      href="#kontaktai"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("kontaktai")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="flex-1 text-center text-sm bg-brand hover:bg-brand-dark text-white font-medium py-2 px-3 rounded-md transition-colors"
                    >
                      Užsakyti →
                    </a>
                    <Link
                      href={`/paslaugos/${paslauga.slug}`}
                      className="flex items-center gap-1 text-sm border border-brand text-brand hover:bg-brand hover:text-white py-2 px-3 rounded-md transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      Plačiau
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
