import Image from "next/image";
import { SectionShell } from "@/components/shared/section-shell";

export function BrandMark() {
  return (
    <SectionShell className="py-10 md:py-12" containerClassName="flex justify-center">
      <div className="relative w-full max-w-lg rounded-3xl border border-border/70 bg-surface-soft/80 px-8 py-8 shadow-[0_24px_60px_-44px_rgba(20,16,13,0.45)]">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
        <Image
          src="/img/Drewniana noga logo.jpg"
          alt="Drewniana Noga"
          width={1612}
          height={1217}
          className="mx-auto h-auto w-full max-w-[220px] object-contain"
          sizes="(max-width: 640px) 60vw, 220px"
        />
      </div>
    </SectionShell>
  );
}
