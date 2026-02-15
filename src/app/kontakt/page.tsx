import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Skontaktuj sie z pracownia Drewniana Noga. Konsultacje projektowe, pomiar i realizacja mebli na wymiar w Bydgoszczy.",
  alternates: {
    canonical: "/kontakt",
  },
  openGraph: {
    title: "Kontakt | Drewniana Noga",
    description:
      "Masz projekt mebli na wymiar? Napisz lub zadzwon. Odpowiadamy zwykle w ciagu 24 godzin roboczych.",
    url: absoluteUrl("/kontakt"),
    images: [
      {
        url: absoluteUrl("/img/Hero image.jpeg"),
        width: 1600,
        height: 1067,
        alt: "Kontakt z pracownia Drewniana Noga",
      },
    ],
  },
};

export default function KontaktPage() {
  return (
    <main className="pb-16 pt-28 md:pb-24 md:pt-32">
      <div className="grid-main">
        <div className="mb-14 max-w-3xl">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.22em] text-brand-muted">
            Kontakt
          </span>
          <h1 className="font-display text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Porozmawiajmy o Twoim projekcie
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Przeslij krotki opis, wymiary lub inspiracje. Wrocimy z propozycja
            kolejnych krokow i orientacyjnym zakresem realizacji.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <aside className="space-y-4 lg:col-span-4">
            <article className="rounded-2xl border border-border/70 bg-surface-soft p-6">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                Dane kontaktowe
              </h2>
              <ul className="mt-6 space-y-4 text-sm text-foreground/85">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                  <a
                    href={siteConfig.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    {siteConfig.address.streetAddress}, {siteConfig.address.postalCode}{" "}
                    {siteConfig.address.addressLocality}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-brand" />
                  <a href={`tel:${siteConfig.phone}`} className="transition-colors hover:text-foreground">
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-brand" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="transition-colors hover:text-foreground"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span>{siteConfig.openingHoursDisplay}</span>
                </li>
              </ul>
            </article>

            <article className="rounded-2xl border border-border/70 bg-background p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-muted">
                Czas odpowiedzi
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Na formularze odpowiadamy zwykle w ciagu 24 godzin roboczych.
                Pilne sprawy najlepiej zglaszac telefonicznie.
              </p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="mt-5 inline-flex h-10 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Zadzwon teraz
              </a>
            </article>
          </aside>

          <section className="lg:col-span-8">
            <div className="rounded-2xl border border-border/70 bg-background p-6 sm:p-8">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                Formularz zapytania
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Im wiecej szczegolow podasz, tym szybciej przygotujemy konkretna
                odpowiedz.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
