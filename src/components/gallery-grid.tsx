"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GALLERY_ITEMS } from "@/lib/gallery-data";
import { Lightbox } from "@/components/lightbox";

export function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onClose = useCallback(() => setActiveIndex(null), []);
  const onPrev = useCallback(
    () =>
      setActiveIndex((prev) =>
        prev !== null
          ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
          : null
      ),
    []
  );
  const onNext = useCallback(
    () =>
      setActiveIndex((prev) =>
        prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null
      ),
    []
  );

  // Columns vary by breakpoint — but we use CSS columns for true masonry
  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {GALLERY_ITEMS.map((item, i) => (
          <motion.div
            key={item.id}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border/70 bg-surface-soft break-inside-avoid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: (i % 6) * 0.05, duration: 0.5 }}
            onClick={() => setActiveIndex(i)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={i % 3 === 0 ? 800 : i % 3 === 1 ? 600 : 700}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-xs tracking-[0.2em] text-background/80">
                {item.category}
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-background">
                {item.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <Lightbox
        items={GALLERY_ITEMS}
        activeIndex={activeIndex}
        onClose={onClose}
        onPrev={onPrev}
        onNext={onNext}
      />
    </>
  );
}
