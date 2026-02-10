"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const isValid =
    form.name.trim().length > 1 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.message.trim().length > 5;

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid || isLoading) return;

    setIsLoading(true);
    try {
      // Simulate sending
      await new Promise((r) => setTimeout(r, 1000));
      toast.success("Wiadomość wysłana!", {
        description: "Odezwiemy się w ciągu 24 godzin.",
      });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast.error("Coś poszło nie tak", {
        description: "Spróbuj ponownie później.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="contact-name"
            className="text-sm font-medium tracking-wide text-stone-400"
          >
            Imię i nazwisko *
          </label>
          <Input
            id="contact-name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Jan Kowalski"
            className="h-12 border-stone-700 bg-stone-950/80 text-stone-100 placeholder:text-stone-600"
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="contact-email"
            className="text-sm font-medium tracking-wide text-stone-400"
          >
            E-mail *
          </label>
          <Input
            id="contact-email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="jan@email.pl"
            className="h-12 border-stone-700 bg-stone-950/80 text-stone-100 placeholder:text-stone-600"
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="contact-phone"
          className="text-sm font-medium tracking-wide text-stone-400"
        >
          Telefon{" "}
          <span className="text-stone-600">(opcjonalnie)</span>
        </label>
        <Input
          id="contact-phone"
          type="tel"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          placeholder="+48 123 456 789"
          className="h-12 border-stone-700 bg-stone-950/80 text-stone-100 placeholder:text-stone-600"
          disabled={isLoading}
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="contact-message"
          className="text-sm font-medium tracking-wide text-stone-400"
        >
          Wiadomość *
        </label>
        <textarea
          id="contact-message"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Opisz swój projekt..."
          rows={5}
          disabled={isLoading}
          className="w-full rounded-md border border-stone-700 bg-stone-950/80 px-3 py-3 text-sm text-stone-100 placeholder:text-stone-600 transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:opacity-50"
        />
      </div>

      <Button
        type="submit"
        disabled={!isValid || isLoading}
        className="h-12 w-full rounded-lg bg-stone-100 px-8 text-stone-950 hover:bg-stone-200 disabled:opacity-50 sm:w-auto"
      >
        {isLoading ? (
          <Loader2 className="size-5 animate-spin" />
        ) : (
          <>
            Wyślij wiadomość
            <Send className="ml-2 size-4" />
          </>
        )}
      </Button>
    </motion.form>
  );
}
