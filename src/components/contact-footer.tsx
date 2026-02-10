"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ContactFooter() {
  return (
    <motion.footer
      className="border-t border-stone-800/60 bg-stone-950 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div className="space-y-1">
            <p className="font-display text-2xl font-light tracking-wide text-stone-100">
              DREWNIANA NOGA
            </p>
            <p className="text-sm text-stone-500">Meble na wymiar</p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <a
              href="https://maps.google.com/?q=Piekna+13+Bydgoszcz"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 text-stone-400 transition-colors hover:text-stone-200 md:justify-start"
            >
              <MapPin className="size-5 shrink-0 text-stone-500 transition-colors group-hover:text-stone-400" />
              <span className="text-sm">
                Piękna 13, 85-303 Bydgoszcz
              </span>
            </a>
            <a
              href="tel:724239328"
              className="group flex items-center justify-center gap-3 text-stone-400 transition-colors hover:text-stone-200 md:justify-start"
            >
              <Phone className="size-5 shrink-0 text-stone-500 transition-colors group-hover:text-stone-400" />
              <span className="text-sm">724 239 328</span>
            </a>
          </div>

          <Button
            asChild
            className={cn(
              "h-12 rounded-lg bg-stone-100 px-8 text-stone-950",
              "hover:bg-stone-200 transition-colors"
            )}
          >
            <a href="tel:724239328">Zadzwoń Teraz</a>
          </Button>
        </div>

        <div className="mt-12 border-t border-stone-800/50 pt-8 text-center">
          <p className="text-xs text-stone-600">
            © {new Date().getFullYear()} DREWNIANA NOGA. Wszystkie prawa
            zastrzeżone.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
