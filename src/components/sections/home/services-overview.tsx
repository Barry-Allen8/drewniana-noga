import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/shared/motion-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";

const SERVICES = [
  {
    id: "01",
    title: "Meble drewniane",
    description:
      "Stoly, zabudowy i bryly z litego drewna, projektowane pod konkretne materialy i proporcje wnatrza.",
    href: "/galeria",
  },
  {
    id: "02",
    title: "Meble na wymiar",
    description:
      "Kompleksowe realizacje do domow i apartamentow: od pomiaru przez projekt po montaz.",
    href: "/wycena",
  },
  {
    id: "03",
    title: "Kuchnie premium",
    description:
      "Zabudowy kuchenne o wysokiej trwalosci, z ergonomia dopasowana do codziennego rytmu domownikow.",
    href: "/kontakt",
  },
  {
    id: "04",
    title: "Wspolpraca z architektami",
    description:
      "Transparentny proces, dokumentacja techniczna i spojnosc realizacji z zalozeniami projektu.",
    href: "/kontakt",
  },
] as const;

export function ServicesOverview() {
  return (
    <SectionShell id="oferta" className="border-y border-border/70 bg-surface-soft/80">
      <MotionReveal>
        <SectionHeading
          eyebrow="Zakres uslug"
          title="Cztery obszary, jeden standard wykonania"
          description="Realizujemy pojedyncze meble i cale strefy zabudowy. Kazdy projekt ma indywidualny rysunek, wycene i harmonogram."
        />
      </MotionReveal>

      <MotionStagger className="mt-12 grid gap-4 md:grid-cols-2">
        {SERVICES.map((service) => (
          <MotionStaggerItem key={service.id}>
            <Link
              href={service.href}
              className="group block rounded-2xl border border-border/70 bg-background p-6 transition-[border-color,background-color,transform] duration-200 ease-out hover:-translate-y-1 hover:border-brand/40 hover:bg-brand-soft/30 active:scale-[0.98] sm:p-7"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-brand-muted">
                {service.id}
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {service.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                Sprawdz zakres
                <ArrowUpRight className="size-4 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </MotionStaggerItem>
        ))}
      </MotionStagger>
    </SectionShell>
  );
}
