import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/shared/motion-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";

const STEPS = [
  {
    step: "01",
    title: "Konsultacja i pomiar",
    details: "Rozmawiamy o potrzebach i ustalamy realne parametry projektu.",
  },
  {
    step: "02",
    title: "Koncepcja i wycena",
    details: "Otrzymujesz zakres materialow, harmonogram i transparentna wycene.",
  },
  {
    step: "03",
    title: "Produkcja",
    details: "Elementy powstaja w pracowni z kontrola wymiarow i dopasowan.",
  },
  {
    step: "04",
    title: "Montaz i odbior",
    details: "Realizacje konczymy montazem, regulacja i finalnym dopracowaniem.",
  },
] as const;

export function ProjectFlow() {
  return (
    <SectionShell className="bg-brand-soft/40">
      <MotionReveal>
        <SectionHeading
          eyebrow="Proces"
          title="Przewidywalna realizacja od pierwszej rozmowy"
          description="Kazdy etap ma jasno zdefiniowany rezultat, dlatego wiesz, co dzieje sie z projektem na kazdym kroku."
        />
      </MotionReveal>

      <MotionStagger as="ol" className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((item) => (
          <MotionStaggerItem as="li" key={item.step} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-border/70 bg-background p-6 transition-transform duration-200 ease-out hover:-translate-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-muted">
                {item.step}
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.details}
              </p>
            </article>
          </MotionStaggerItem>
        ))}
      </MotionStagger>
    </SectionShell>
  );
}
