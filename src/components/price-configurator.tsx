"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Ruler, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
const WOOD_TYPES = [
  { value: "dab", label: "Dąb", multiplier: 1.35 },
  { value: "jesion", label: "Jesion", multiplier: 1.2 },
  { value: "orzech", label: "Orzech", multiplier: 1.45 },
] as const;

const BASE_PRICE = 850;
const PRICE_PER_CM2 = 0.12;

function calculatePrice(
  width: number,
  height: number,
  woodMultiplier: number
): number {
  const area = width * height;
  const baseAreaPrice = area * PRICE_PER_CM2;
  const woodAdjusted = baseAreaPrice * woodMultiplier;
  return Math.round(BASE_PRICE + woodAdjusted);
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function PriceConfigurator() {
  const [width, setWidth] = useState(80);
  const [height, setHeight] = useState(45);
  const [woodType, setWoodType] = useState<(typeof WOOD_TYPES)[number]["value"]>(
    "dab"
  );

  const wood = WOOD_TYPES.find((w) => w.value === woodType) ?? WOOD_TYPES[0];
  const price = calculatePrice(width, height, wood.multiplier);

  return (
    <motion.section
      className="py-24 md:py-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.span
            className="mb-4 block text-sm font-medium tracking-[0.25em] text-stone-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            KONFIGURATOR
          </motion.span>
          <motion.h2
            className="font-display text-3xl font-light tracking-wide text-stone-100 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Konfigurator Ceny
          </motion.h2>
          <motion.p
            className="mt-4 max-w-xl mx-auto text-stone-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Dopasuj wymiary i gatunek drewna. Cena aktualizuje się na bieżąco.
          </motion.p>
        </div>

        <motion.div
          className="rounded-2xl border border-stone-800/60 bg-stone-900/50 p-8 backdrop-blur-sm md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-8">
              <div>
                <div className="mb-4 flex items-center gap-2 text-stone-400">
                  <Ruler className="size-4" />
                  <span className="text-sm font-medium tracking-wide">
                    Szerokość
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[width]}
                    onValueChange={([v]) => setWidth(v)}
                    min={40}
                    max={200}
                    step={5}
                    className="flex-1"
                  />
                  <div className="flex shrink-0 items-center gap-1">
                    <Input
                      type="number"
                      value={width}
                      onChange={(e) =>
                        setWidth(Math.min(200, Math.max(40, +e.target.value)))}
                      className="h-10 w-16 border-stone-700 bg-stone-950/80 text-center text-stone-100"
                    />
                    <span className="text-sm text-stone-500">cm</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-4 flex items-center gap-2 text-stone-400">
                  <Ruler className="size-4" />
                  <span className="text-sm font-medium tracking-wide">
                    Wysokość
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[height]}
                    onValueChange={([v]) => setHeight(v)}
                    min={30}
                    max={120}
                    step={5}
                    className="flex-1"
                  />
                  <div className="flex shrink-0 items-center gap-1">
                    <Input
                      type="number"
                      value={height}
                      onChange={(e) =>
                        setHeight(Math.min(120, Math.max(30, +e.target.value)))}
                      className="h-10 w-16 border-stone-700 bg-stone-950/80 text-center text-stone-100"
                    />
                    <span className="text-sm text-stone-500">cm</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-4 flex items-center gap-2 text-stone-400">
                  <Palette className="size-4" />
                  <span className="text-sm font-medium tracking-wide">
                    Gatunek drewna
                  </span>
                </div>
                <Select
                  value={woodType}
                  onValueChange={(v) =>
                    setWoodType(v as (typeof WOOD_TYPES)[number]["value"])}
                >
                  <SelectTrigger className="h-12 w-full border-stone-700 bg-stone-950/80 text-stone-100">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {WOOD_TYPES.map((w) => (
                      <SelectItem key={w.value} value={w.value}>
                        {w.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-xl border border-stone-800/50 bg-stone-950/30 p-8">
              <p className="mb-2 text-sm text-stone-500">Szacowana cena</p>
              <motion.p
                key={price}
                className="font-display text-4xl font-light tracking-wide text-stone-100 md:text-5xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {formatPrice(price)}
              </motion.p>
              <p className="mt-4 text-sm text-stone-500">
                {width} × {height} cm · {wood.label}
              </p>
              <Button
                className="mt-8 h-12 w-full rounded-lg bg-stone-100 text-stone-950 hover:bg-stone-200"
                asChild
              >
                <a href="tel:724239328">Zapytaj o wycenę</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
