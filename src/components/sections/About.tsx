"use client";

import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  ShieldCheck,
  Clock,
  MapPin,
  Wrench,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { siteData } from "@/lib/site-data";

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Clock,
  MapPin,
  Wrench,
};

const carouselImages = [
  { src: "/images/about/01.jpg", alt: "Aplinkos sutvarkymas" },
  { src: "/images/about/02.jpg", alt: "Medkirčių komanda darbo metu" },
  { src: "/images/about/03.jpg", alt: "Avarinių medžių pjovimas" },
  { src: "/images/about/04.jpg", alt: "Atliktų darbų pavyzdys" },
];

export default function About() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [current, setCurrent] = useState(0);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  return (
    <section id="apie-mus" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            label="APIE MUS"
            title={
              <>
                Patirtis, atsakomybė ir{" "}
                <span className="text-brand-light">profesionali komanda</span>
              </>
            }
            subtitle="Miškininko vadovaujama komanda, atliekanti medžių pjovimo, genėjimo ir aplinkos tvarkymo darbus visoje Lietuvoje jau daugiau nei 34 metus."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
              <div className="flex">
                {carouselImages.map((img, i) => (
                  <div key={i} className="relative flex-[0_0_100%] min-w-0">
                    <div className="relative h-80 md:h-[420px]">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollPrev}
              aria-label="Ankstesnė nuotrauka"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-brand" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Kita nuotrauka"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-brand" />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { emblaApi?.scrollTo(i); setCurrent(i); }}
                  aria-label={`Nuotrauka ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/50"}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Kokybiškas ir saugus aplinkos sutvarkymas
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              {siteData.trumpa_istorija}
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Visiškai nesvarbu kokioje vietoje ar būklėje yra medis – ar kapinėse, ar prie
              elektros linijų. Mes jį saugiai nupjausime ir susmulkinsime. Atvažiuojame į bet kurią
              Lietuvos vietą, o atvykimas ir konsultacija – visiškai nemokamai.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {siteData.verciu_punktai.map((punkt, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-light shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{punkt}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${siteData.telefonas_href}`}
                className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-md transition-colors"
              >
                Susisiekti su komanda
              </a>
              <Link
                href="/apie-mus"
                className="inline-flex items-center justify-center gap-2 border border-brand text-brand hover:bg-brand hover:text-white font-medium px-6 py-3 rounded-md transition-colors"
              >
                Plačiau apie mus
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stat cards */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {siteData.statistikos.map((stat, i) => {
            const Icon = iconMap[stat.ikona] || ShieldCheck;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl mb-4">
                  <Icon className="w-6 h-6 text-brand" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">{stat.title}</p>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">{stat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
