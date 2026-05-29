"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { contactFormSchema, type ContactFormData } from "@/lib/validators";
import { siteData } from "@/lib/site-data";

export default function ContactForm({ prefillPaslauga }: { prefillPaslauga?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      paslauga: prefillPaslauga || "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    if (data.website) return; // honeypot
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Klaida");
      setSubmitted(true);
      reset();
      toast.success("Ačiū! Susisieksime artimiausiu metu.");
    } catch {
      toast.error("Įvyko klaida. Bandykite dar kartą arba skambinkite telefonu.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-8 text-center bg-green-50 border border-green-200 rounded-xl">
        <CheckCircle className="w-16 h-16 text-green-600 mb-4" />
        <h3 className="text-xl font-bold text-green-900 mb-2">Žinutė išsiųsta!</h3>
        <p className="text-green-700">Ačiū! Susisieksime su Jumis artimiausiu metu.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-green-700 underline hover:no-underline"
        >
          Siųsti dar vieną žinutę
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
      <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-6">
        <Send className="w-5 h-5 text-brand" />
        Parašykite mums
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
        {/* Honeypot */}
        <input type="text" {...register("website")} className="hidden" tabIndex={-1} aria-hidden="true" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="vardas" className="block text-sm font-medium text-gray-700 mb-1">
              Vardas ir pavardė <span className="text-red-500">*</span>
            </label>
            <input
              id="vardas"
              type="text"
              autoComplete="name"
              placeholder="Jonas Jonaitis"
              {...register("vardas")}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-colors"
            />
            {errors.vardas && (
              <p className="mt-1 text-xs text-red-600">{errors.vardas.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="telefonas" className="block text-sm font-medium text-gray-700 mb-1">
              Telefono numeris <span className="text-red-500">*</span>
            </label>
            <input
              id="telefonas"
              type="tel"
              autoComplete="tel"
              placeholder="+370 600 00000"
              {...register("telefonas")}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-colors"
            />
            {errors.telefonas && (
              <p className="mt-1 text-xs text-red-600">{errors.telefonas.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            El. paštas <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="jonas@gmail.com"
            {...register("email")}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-colors"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="imone" className="block text-sm font-medium text-gray-700 mb-1">
            Įmonės pavadinimas <span className="text-gray-400 text-xs">(neprivaloma)</span>
          </label>
          <input
            id="imone"
            type="text"
            autoComplete="organization"
            placeholder="UAB Pavyzdys"
            {...register("imone")}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-colors"
          />
        </div>

        <div>
          <label htmlFor="paslauga" className="block text-sm font-medium text-gray-700 mb-1">
            Dominanti paslauga <span className="text-gray-400 text-xs">(neprivaloma)</span>
          </label>
          <select
            id="paslauga"
            {...register("paslauga")}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-colors bg-white"
          >
            <option value="">Pasirinkite paslaugą...</option>
            {siteData.paslaugos.map((p) => (
              <option key={p.slug} value={p.kategorija}>
                {p.kategorija}
              </option>
            ))}
            <option value="Kita">Kita</option>
          </select>
        </div>

        <div>
          <label htmlFor="zinute" className="block text-sm font-medium text-gray-700 mb-1">
            Žinutė <span className="text-red-500">*</span>
          </label>
          <textarea
            id="zinute"
            rows={5}
            placeholder="Aprašykite darbus, vietą, aplinkybes..."
            {...register("zinute")}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-colors resize-none"
          />
          {errors.zinute && (
            <p className="mt-1 text-xs text-red-600">{errors.zinute.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark disabled:opacity-60 text-white font-semibold py-3 px-6 rounded-md transition-colors w-full"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Siunčiama...
            </>
          ) : (
            <>
              Siųsti žinutę
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
