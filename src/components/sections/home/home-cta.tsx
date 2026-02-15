import { CtaButton } from "@/components/shared/cta-button";
import { MotionStagger, MotionStaggerItem } from "@/components/shared/motion-reveal";
import { SectionShell } from "@/components/shared/section-shell";

export function HomeCta() {
  return (
    <SectionShell id="kontakt-blok" className="pt-0">
      <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-foreground px-6 py-12 text-background sm:px-10 sm:py-16 lg:px-16">
        <div className="pointer-events-none absolute -right-24 top-0 h-56 w-56 rounded-full bg-brand/25 blur-3xl" />

        <MotionStagger className="relative grid gap-8 lg:grid-cols-12 lg:items-end">
          <MotionStaggerItem className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-background/70">
              Rozpocznij projekt
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Opowiedz nam o swojej przestrzeni. Przygotujemy realny plan realizacji.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-background/80 sm:text-base">
              Otrzymasz konkret: zakres prac, propozycje materialow, termin i
              orientacyjny budzet bez niedomowien.
            </p>
          </MotionStaggerItem>

          <MotionStaggerItem className="lg:col-span-4">
            <MotionStagger className="flex flex-wrap gap-3 lg:justify-end">
              <MotionStaggerItem y={8}>
                <CtaButton
                  href="/kontakt"
                  label="Napisz do nas"
                  className="bg-background text-foreground hover:bg-background/90"
                />
              </MotionStaggerItem>
              <MotionStaggerItem y={8}>
                <CtaButton
                  href="tel:724239328"
                  label="Zadzwon"
                  tone="ghost"
                  withIcon={false}
                  className="border-background/40 text-background hover:bg-background/10"
                />
              </MotionStaggerItem>
            </MotionStagger>
          </MotionStaggerItem>
        </MotionStagger>
      </div>
    </SectionShell>
  );
}
