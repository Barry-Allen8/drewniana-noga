import type { Metadata } from "next";
import { MapPin, Phone, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Skontaktuj się z nami — Piękna 13, 85-303 Bydgoszcz. Telefon: 724 239 328.",
};

export default function KontaktPage() {
  return (
    <main className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-sm font-medium tracking-[0.25em] text-stone-500">
            KONTAKT
          </span>
          <h1 className="font-display text-4xl font-light tracking-wide text-stone-100 sm:text-5xl">
            Porozmawiajmy
          </h1>
          <p className="mt-4 mx-auto max-w-xl text-stone-400">
            Masz pomysł na meble na wymiar? Napisz do nas lub zadzwoń — chętnie
            pomożemy.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-2xl border border-stone-800/60 bg-stone-900/30 p-8 backdrop-blur-sm">
              <h2 className="mb-6 font-display text-xl font-light tracking-wide text-stone-100">
                Dane kontaktowe
              </h2>

              <div className="space-y-6">
                <a
                  href="https://maps.google.com/?q=Piekna+13+Bydgoszcz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 text-stone-400 transition-colors hover:text-stone-200"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-stone-700/50 bg-stone-950/50">
                    <MapPin className="size-4 text-stone-500 transition-colors group-hover:text-stone-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-300">Adres</p>
                    <p className="mt-0.5 text-sm text-stone-500">
                      Piękna 13, 85-303 Bydgoszcz
                    </p>
                  </div>
                </a>

                <a
                  href="tel:724239328"
                  className="group flex items-start gap-4 text-stone-400 transition-colors hover:text-stone-200"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-stone-700/50 bg-stone-950/50">
                    <Phone className="size-4 text-stone-500 transition-colors group-hover:text-stone-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-300">
                      Telefon
                    </p>
                    <p className="mt-0.5 text-sm text-stone-500">
                      724 239 328
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-stone-400">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-stone-700/50 bg-stone-950/50">
                    <Clock className="size-4 text-stone-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-300">
                      Godziny pracy
                    </p>
                    <p className="mt-0.5 text-sm text-stone-500">
                      Pon–Pt: 8:00–17:00
                    </p>
                    <p className="text-sm text-stone-500">Sob: 9:00–13:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-stone-800/60 bg-stone-900/30 p-8 backdrop-blur-sm md:p-10">
              <h2 className="mb-8 font-display text-xl font-light tracking-wide text-stone-100">
                Formularz kontaktowy
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
