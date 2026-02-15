import type { Metadata } from "next";
import Link from "next/link";
import { PriceConfigurator } from "@/components/price-configurator";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wstepna wycena mebli",
  description:
    "Skorzystaj z konfiguratora i poznaj orientacyjna cene mebli na wymiar. Ostateczna oferta po pomiarze i konsultacji projektu.",
  alternates: {
    canonical: "/wycena",
  },
  openGraph: {
    title: "Wstepna wycena mebli | Drewniana Noga",
    description:
      "Dobierz parametry mebla i sprawdz orientacyjna wycene. Konsultacja w Bydgoszczy i okolicy.",
    url: absoluteUrl("/wycena"),
    images: [
      {
        url: absoluteUrl("/img/image_031.jpg"),
        width: 1080,
        height: 1350,
        alt: "Stolarski detal mebla premium",
      },
    ],
  },
};

export default function WycenaPage() {
  return (
    <main className="pb-16 pt-28 md:pb-24 md:pt-32">
      <div className="grid-main">
        <div className="mb-12 max-w-3xl">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.22em] text-brand-muted">
            Wstepna kalkulacja
          </span>
          <h1 className="font-display text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Oszacuj budzet realizacji
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Kalkulator pokazuje orientacyjny poziom cenowy. Koncowa wycena
            uwzglednia szczegoly techniczne, sposob wykonczenia i montaz.
          </p>
        </div>

        <PriceConfigurator />

        <section className="mt-14 rounded-3xl border border-border/70 bg-surface-soft p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Potrzebujesz szczegolowej oferty?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Wyslij rzut, inspiracje albo opis pomieszczenia. Wrocimy z
                rekomendacja materialow i planem kolejnych etapow.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <Link
                href="/kontakt"
                className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Wyslij zapytanie
              </Link>
              <a
                href="tel:724239328"
                className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-surface-soft"
              >
                Zadzwon
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
