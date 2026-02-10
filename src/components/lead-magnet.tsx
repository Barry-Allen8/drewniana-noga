"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const GUIDE_PDF_PATH = "/lead-magnet/5-sposobow-na-konserwacje-drewna.pdf";

function downloadGuidePdf() {
  const link = document.createElement("a");
  link.href = GUIDE_PDF_PATH;
  link.download = "5-sposobow-na-konserwacje-drewna.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isValid = EMAIL_REGEX.test(email);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid || isLoading) return;

    setIsLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      downloadGuidePdf();
      toast.success("PDF gotowy", {
        description: "Przewodnik został pobrany na Twoje urządzenie.",
      });
      setEmail("");
    } catch {
      toast.error("Coś poszło nie tak", {
        description: "Spróbuj ponownie później.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <motion.section
      className="py-24 md:py-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-stone-800/60 bg-stone-900/30 p-8 backdrop-blur-sm md:p-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full border border-stone-700/50 bg-stone-950/50">
              <FileText className="size-8 text-stone-400" />
            </div>
            <span className="mb-4 block text-sm font-medium tracking-[0.25em] text-stone-500">
              DARMOWA WIEDZA
            </span>
            <h2 className="font-display text-3xl font-light tracking-wide text-stone-100 sm:text-4xl">
              5 Sposobów na konserwację drewna
            </h2>
            <p className="mt-4 text-stone-400">
              Pobierz bezpłatny przewodnik PDF i dowiedz się, jak dbać o meble
              z litego drewna.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Input
              type="email"
              placeholder="Twój adres e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={cn(
                "h-12 flex-1 border-stone-700 bg-stone-950/80 text-stone-100 placeholder:text-stone-500"
              )}
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={!isValid || isLoading}
              className="h-12 rounded-lg bg-stone-100 px-8 text-stone-950 hover:bg-stone-200 disabled:opacity-50"
            >
              {isLoading ? (
                <Loader2 className="size-5 animate-spin" />
              ) : (
                "Pobierz Teraz"
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}
