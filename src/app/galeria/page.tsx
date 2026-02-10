import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";

export const metadata: Metadata = {
  title: "Galeria",
  description: "Portfolio realizacji mebli na wymiar — kuchnie, szafy, stoły, biurka z litego drewna.",
};

export default function GaleriaPage() {
  return (
    <main className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-sm font-medium tracking-[0.25em] text-stone-500">
            PORTFOLIO
          </span>
          <h1 className="font-display text-4xl font-light tracking-wide text-stone-100 sm:text-5xl">
            Nasze realizacje
          </h1>
          <p className="mt-4 mx-auto max-w-xl text-stone-400">
            Każdy mebel projektujemy indywidualnie. Zobacz wybrane projekty z
            naszej pracowni.
          </p>
        </div>

        <GalleryGrid />
      </div>
    </main>
  );
}
