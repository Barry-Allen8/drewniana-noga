import type { Metadata } from "next";
import { PriceConfigurator } from "@/components/price-configurator";

export const metadata: Metadata = {
  title: "Wycena",
  description: "Konfigurator ceny mebli na wymiar. Wybierz wymiary i gatunek drewna — dąb, jesion, orzech.",
};

export default function WycenaPage() {
  return (
    <main className="pt-16 md:pt-20">
      <PriceConfigurator />
    </main>
  );
}
