"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Palette, Ruler } from "lucide-react";
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
  { value: "dab", label: "Dab", multiplier: 1.35 },
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="rounded-3xl border border-border/70 bg-background p-6 shadow-[0_16px_40px_-30px_rgba(24,20,15,0.35)] md:p-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-7">
            <div>
              <div className="mb-4 flex items-center gap-2 text-muted-foreground">
                <Ruler className="size-4" />
                <span className="text-sm font-medium tracking-wide">Szerokosc</span>
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
                      setWidth(Math.min(200, Math.max(40, +e.target.value || 0)))}
                    className="h-10 w-16 border-border bg-background text-center text-foreground"
                  />
                  <span className="text-sm text-muted-foreground">cm</span>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-2 text-muted-foreground">
                <Ruler className="size-4" />
                <span className="text-sm font-medium tracking-wide">Wysokosc</span>
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
                      setHeight(Math.min(120, Math.max(30, +e.target.value || 0)))}
                    className="h-10 w-16 border-border bg-background text-center text-foreground"
                  />
                  <span className="text-sm text-muted-foreground">cm</span>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-2 text-muted-foreground">
                <Palette className="size-4" />
                <span className="text-sm font-medium tracking-wide">Gatunek drewna</span>
              </div>
              <Select
                value={woodType}
                onValueChange={(v) =>
                  setWoodType(v as (typeof WOOD_TYPES)[number]["value"])}
              >
                <SelectTrigger className="h-12 w-full border-border bg-background text-foreground">
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

          <div className="flex flex-col justify-between rounded-2xl border border-border/70 bg-surface-soft p-6 lg:col-span-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-muted">
                Orientacyjna wycena
              </p>
              <motion.p
                key={price}
                className="mt-4 font-display text-5xl font-semibold tracking-tight text-foreground"
                initial={{ opacity: 0.6, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {formatPrice(price)}
              </motion.p>
              <p className="mt-3 text-sm text-muted-foreground">
                Parametry: {width} x {height} cm, {wood.label}.
              </p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                To kalkulacja pogladowa. Koncowa cena zalezy od konstrukcji,
                rodzaju wykonczenia i warunkow montazu.
              </p>
            </div>

            <Button
              className="mt-8 h-11 w-full rounded-full bg-foreground text-background hover:bg-foreground/90"
              asChild
            >
              <Link href="/kontakt">Zapytaj o dokladna oferte</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
