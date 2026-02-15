import type { Metadata } from "next";
import { HeroStatement } from "@/components/sections/home/hero-statement";
import { ServicesOverview } from "@/components/sections/home/services-overview";
import { AboutStory } from "@/components/sections/home/about-story";
import { ProjectFlow } from "@/components/sections/home/project-flow";
import { HomeCta } from "@/components/sections/home/home-cta";
import { TrustStrip } from "@/components/sections/home/trust-strip";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Meble na wymiar. Bydgoszcz",
  description:
    "Projektujemy i wykonujemy premium meble na wymiar z litego drewna. Kuchnie, zabudowy i realizacje stolarskie dla klientow prywatnych oraz architektow.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Drewniana Noga | Meble na wymiar. Bydgoszcz",
    description:
      "Kuchnie, zabudowy i meble drewniane projektowane indywidualnie. Konsultacja, produkcja i montaz.",
    url: absoluteUrl("/"),
    images: [
      {
        url: absoluteUrl("/img/Hero image.jpeg"),
        width: 1600,
        height: 1067,
        alt: "Meble na wymiar - Drewniana Noga",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <HeroStatement />
      <ServicesOverview />
      <AboutStory />
      <ProjectFlow />
      <TrustStrip />
      <HomeCta />
    </main>
  );
}
