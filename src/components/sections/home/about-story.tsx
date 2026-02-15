import { Check } from "lucide-react";
import { MediaFrame } from "@/components/shared/media-frame";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/shared/motion-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";

const PILLARS = [
  "Jedna osoba prowadzi projekt od pierwszej rozmowy do montazu.",
  "Kazdy detal techniczny jest konsultowany przed produkcja.",
  "Material dobieramy pod obciazenia i charakter wnetrza.",
] as const;

export function AboutStory() {
  return (
    <SectionShell id="proces">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <MotionReveal>
            <SectionHeading
              eyebrow="Jak pracujemy"
              title="Rzemioslo wsparte procesem"
              description="Projekt nie konczy sie na wizualizacji. Prowadzimy go etapami, z czytelnym harmonogramem i odpowiedzialnoscia za kazdy detal wykonania."
            />
          </MotionReveal>

          <MotionStagger as="ul" className="mt-8 space-y-3">
            {PILLARS.map((item) => (
              <MotionStaggerItem
                as="li"
                key={item}
                y={10}
                className="flex items-start gap-3 rounded-xl border border-border/70 bg-surface-soft/60 p-4"
              >
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-foreground">
                  <Check className="size-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-foreground/80">{item}</span>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>

        <MotionStagger className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          <MotionStaggerItem>
            <MediaFrame
              src="/img/image_030.jpg"
              alt="Strefa produkcji mebli w pracowni"
              className="aspect-[4/5]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 34vw"
            />
          </MotionStaggerItem>

          <MotionStaggerItem>
            <MotionStagger className="grid gap-4" delayChildren={0.04} staggerChildren={0.04}>
              <MotionStaggerItem>
                <MediaFrame
                  src="/img/image_031.jpg"
                  alt="Detal drewna i wykonczenia"
                  className="aspect-[4/3]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 24vw"
                />
              </MotionStaggerItem>

              <MotionStaggerItem>
                <article className="rounded-3xl border border-border/70 bg-surface-soft p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-brand-muted">
                    Standard premium
                  </p>
                  <p className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground">
                    Material, proporcje, spokoj.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Dbamy, by forma i funkcja byly rownie mocne. Efekt ma wygladac
                    dobrze dzisiaj i po latach codziennego uzytkowania.
                  </p>
                </article>
              </MotionStaggerItem>
            </MotionStagger>
          </MotionStaggerItem>
        </MotionStagger>
      </div>
    </SectionShell>
  );
}
