"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const STORAGE_KEY = "cookie_consent";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [prefs, setPrefs] = useState({ statistics: true, marketing: false });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) setShow(true);
  }, []);

  const save = (consent: { statistics: boolean; marketing: boolean }) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...consent, necessary: true, timestamp: Date.now() }));
    setShow(false);
    setShowModal(false);
  };

  if (!show) return null;

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg animate-in slide-in-from-bottom-4 duration-300"
        role="dialog"
        aria-label="Slapukų nustatymai"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-sm text-gray-700 flex-1">
              Naudojame slapukus, kad svetainė veiktų sklandžiai ir matuotume jos efektyvumą.{" "}
              <Link href="/slapuku-politika" className="text-brand underline hover:no-underline">
                Slapukų politika
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-2 shrink-0">
              <button
                onClick={() => setShowModal(true)}
                className="text-sm text-gray-600 underline hover:no-underline whitespace-nowrap"
              >
                Tvarkyti pasirinkimą
              </button>
              <button
                onClick={() => save({ statistics: false, marketing: false })}
                className="text-sm border border-gray-300 hover:border-brand text-gray-700 hover:text-brand px-4 py-2 rounded-md transition-colors whitespace-nowrap"
              >
                Tik būtinieji
              </button>
              <button
                onClick={() => save({ statistics: true, marketing: true })}
                className="text-sm bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-md transition-colors whitespace-nowrap"
              >
                Sutinku su visais
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-semibold text-gray-900">Slapukų nustatymai</h2>
              <button
                onClick={() => setShowModal(false)}
                aria-label="Uždaryti"
                className="p-1 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm text-gray-900">Būtinieji slapukai</p>
                  <p className="text-xs text-gray-500 mt-1">Reikalingi svetainės veikimui</p>
                </div>
                <div className="w-10 h-6 bg-brand rounded-full flex items-center justify-end px-1">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm text-gray-900">Statistikos slapukai</p>
                  <p className="text-xs text-gray-500 mt-1">Padeda suprasti lankytojų elgesį</p>
                </div>
                <button
                  onClick={() => setPrefs((p) => ({ ...p, statistics: !p.statistics }))}
                  className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${
                    prefs.statistics ? "bg-brand justify-end" : "bg-gray-300 justify-start"
                  }`}
                  aria-checked={prefs.statistics}
                  role="switch"
                  aria-label="Statistikos slapukai"
                >
                  <div className="w-4 h-4 bg-white rounded-full" />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm text-gray-900">Rinkodaros slapukai</p>
                  <p className="text-xs text-gray-500 mt-1">Leidžia rodyti aktualias reklamas</p>
                </div>
                <button
                  onClick={() => setPrefs((p) => ({ ...p, marketing: !p.marketing }))}
                  className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${
                    prefs.marketing ? "bg-brand justify-end" : "bg-gray-300 justify-start"
                  }`}
                  aria-checked={prefs.marketing}
                  role="switch"
                  aria-label="Rinkodaros slapukai"
                >
                  <div className="w-4 h-4 bg-white rounded-full" />
                </button>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => save(prefs)}
                className="flex-1 bg-brand hover:bg-brand-dark text-white font-medium py-2.5 rounded-md transition-colors text-sm"
              >
                Išsaugoti pasirinkimą
              </button>
              <button
                onClick={() => save({ statistics: true, marketing: true })}
                className="flex-1 border border-brand text-brand hover:bg-brand hover:text-white font-medium py-2.5 rounded-md transition-colors text-sm"
              >
                Sutinku su visais
              </button>
            </div>

            <p className="mt-4 text-xs text-gray-400 text-center">
              Skaityti{" "}
              <Link href="/slapuku-politika" className="underline hover:no-underline" onClick={() => setShowModal(false)}>
                slapukų politiką
              </Link>{" "}
              ir{" "}
              <Link href="/privatumo-politika" className="underline hover:no-underline" onClick={() => setShowModal(false)}>
                privatumo politiką
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
