import Link from "next/link";
import { Building2, CalendarClock, ShieldCheck } from "lucide-react";
import {
  MotionStagger,
  MotionStaggerItem,
} from "@/components/shared/motion-reveal";
import { SectionShell } from "@/components/shared/section-shell";

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    title: "Precyzyjna dokumentacja",
    description: "Kazdy projekt prowadzimy na potwierdzonych wymiarach i uzgodnieniach.",
  },
  {
    icon: CalendarClock,
    title: "Realne terminy",
    description: "Harmonogram ustalamy przed startem i raportujemy postep realizacji.",
  },
  {
    icon: Building2,
    title: "Wspolpraca B2B i prywatna",
    description: "Obslugujemy inwestorow prywatnych, architektow i firmy wykonawcze.",
  },
] as const;

export function TrustStrip() {
  return (
    <SectionShell className="pt-0">
      <div className="rounded-3xl border border-border/70 bg-surface-soft p-6 sm:p-8">
        <MotionStagger className="grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-8">
          <MotionStaggerItem className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-muted">
              Dlaczego klienci wracaja
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground">
              Jakosc, ktora zostaje na lata
            </h2>
          </MotionStaggerItem>

          <MotionStaggerItem className="lg:col-span-7">
            <MotionStagger as="ul" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TRUST_ITEMS.map((item) => (
                <MotionStaggerItem
                  as="li"
                  key={item.title}
                  y={10}
                  className="rounded-2xl border border-border/70 bg-background p-4 transition-transform duration-200 ease-out hover:-translate-y-1"
                >
                  <item.icon className="size-5 text-brand" />
                  <p className="mt-3 text-sm font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {item.description}
                  </p>
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          </MotionStaggerItem>

          <MotionStaggerItem className="lg:col-span-2 lg:text-right">
            <Link
              href="/kontakt"
              className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-[background-color,transform] duration-200 ease-out hover:bg-foreground/90 active:scale-[0.98]"
            >
              Umow rozmowe
            </Link>
          </MotionStaggerItem>
        </MotionStagger>
      </div>
    </SectionShell>
  );
}
