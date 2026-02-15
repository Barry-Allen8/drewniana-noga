import type { Metadata } from "next";
import Link from "next/link";
import { GalleryGrid } from "@/components/gallery-grid";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Galeria realizacji",
  description:
    "Zobacz wybrane realizacje kuchni, zabudow i mebli drewnianych na wymiar wykonanych przez Drewniana Noga.",
  alternates: {
    canonical: "/galeria",
  },
  openGraph: {
    title: "Galeria realizacji | Drewniana Noga",
    description:
      "Portfolio mebli na wymiar: kuchnie, zabudowy i detale stolarskie z litego drewna.",
    url: absoluteUrl("/galeria"),
    images: [
      {
        url: absoluteUrl("/img/image_030.jpg"),
        width: 1080,
        height: 1350,
        alt: "Realizacja mebli na wymiar",
      },
    ],
  },
};

export default function GaleriaPage() {
  return (
    <main className="pb-16 pt-28 md:pb-24 md:pt-32">
      <div className="grid-main">
        <div className="mb-14 max-w-3xl">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.22em] text-brand-muted">
            Portfolio
          </span>
          <h1 className="font-display text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Wybrane realizacje z naszej pracowni
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Kazdy projekt powstal dla konkretnej przestrzeni i konkretnych
            potrzeb. Tu zobaczysz styl pracy: proporcje, detale i jakosc
            wykonczenia.
          </p>
        </div>

        <GalleryGrid />

        <section className="mt-14 rounded-3xl border border-border/70 bg-surface-soft p-6 sm:p-8">
          <div className="grid gap-5 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-muted">
                Twoj projekt
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground">
                Chcesz podobny efekt w swoim wnetrzu?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Napisz, jaki mebel planujesz. Przygotujemy propozycje materialow
                i kolejnych krokow realizacji.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                href="/kontakt"
                className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Przejdz do konsultacji
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
