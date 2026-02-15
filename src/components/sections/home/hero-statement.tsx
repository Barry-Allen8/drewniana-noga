import { CtaButton } from "@/components/shared/cta-button";
import { MediaFrame } from "@/components/shared/media-frame";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/shared/motion-reveal";

const STATS = [
  { value: "10+", label: "lat doswiadczenia" },
  { value: "250+", label: "realizacji stolarskich" },
  { value: "100%", label: "projektow na wymiar" },
] as const;

export function HeroStatement() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-24 md:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute -left-36 top-24 h-72 w-72 rounded-full bg-brand/12 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-brand-soft/55 blur-3xl" />

      <div className="grid-main">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <MotionStagger className="space-y-8 lg:col-span-6">
            <MotionStaggerItem>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-muted">
                Bespoke Furniture Studio
              </p>
            </MotionStaggerItem>

            <MotionStaggerItem>
              <h1 className="font-display text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Projektujemy i wykonujemy premium meble na wymiar.
              </h1>
            </MotionStaggerItem>

            <MotionStaggerItem>
              <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Wykonujemy kuchnie, zabudowy i meble wolnostojace dla klientow z
                Bydgoszczy i okolic. Proces prowadzimy od pomiaru po finalny
                montaz, bez podwykonawcow.
              </p>
            </MotionStaggerItem>

            <MotionStaggerItem>
              <div className="flex flex-wrap gap-3">
                <CtaButton href="/kontakt" label="Umow konsultacje" />
                <CtaButton
                  href="/galeria"
                  label="Zobacz realizacje"
                  tone="ghost"
                />
              </div>
            </MotionStaggerItem>

            <MotionStaggerItem>
              <dl>
                <MotionStagger
                  className="grid gap-4 sm:grid-cols-3"
                  delayChildren={0.05}
                  staggerChildren={0.04}
                >
                  {STATS.map((item) => (
                    <MotionStaggerItem key={item.label} y={10}>
                      <div className="rounded-2xl border border-border/70 bg-surface-soft px-4 py-5 transition-transform duration-200 ease-out hover:-translate-y-0.5">
                        <dt className="text-xs uppercase tracking-[0.18em] text-brand-muted">
                          {item.label}
                        </dt>
                        <dd className="mt-2 font-display text-2xl font-semibold text-foreground">
                          {item.value}
                        </dd>
                      </div>
                    </MotionStaggerItem>
                  ))}
                </MotionStagger>
              </dl>
            </MotionStaggerItem>
          </MotionStagger>

          <MotionReveal className="lg:col-span-6" delay={0.08}>
            <MediaFrame
              src="/img/Hero image.jpeg"
              alt="Nowoczesna kuchnia wykonana na wymiar"
              className="aspect-[4/5] shadow-[0_30px_80px_-40px_rgba(30,24,20,0.5)] sm:aspect-[5/6]"
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
