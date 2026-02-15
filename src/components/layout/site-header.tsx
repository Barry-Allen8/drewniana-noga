"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

const OFFER_LINKS = [
  { href: "/#oferta", label: "Meble drewniane" },
  { href: "/#proces", label: "Proces realizacji" },
  { href: "/#kontakt-blok", label: "Strefa kontaktu" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/90 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="grid-main flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3"
          onClick={closeMobileMenu}
        >
          <Image
            src="/img/Drewniana noga logo.svg"
            alt="Drewniana Noga logo"
            width={382}
            height={278}
            className="h-10 w-auto object-contain"
            priority
          />
          <div>
            <p className="font-display text-xl font-semibold tracking-[0.08em] text-foreground sm:text-2xl">
              DREWNIANA NOGA
            </p>
            <p className="text-[10px] uppercase tracking-[0.32em] text-brand-muted transition-colors group-hover:text-foreground/70 sm:text-[11px]">
              Pracownia stolarska
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <div className="group relative">
            <button
              type="button"
              className="flex h-11 items-center gap-1 rounded-full px-4 text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
              aria-label="Oferta"
            >
              Oferta
              <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="pointer-events-none absolute right-0 top-full min-w-56 rounded-2xl border border-border/70 bg-background/95 p-2 opacity-0 shadow-[0_14px_40px_-24px_rgba(20,18,16,0.45)] transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
              {OFFER_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block rounded-xl px-3 py-2 text-sm text-foreground/75 transition-colors hover:bg-surface-soft hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {siteConfig.nav.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}

          <a
            href={`tel:${siteConfig.phone}`}
            className="ml-1 inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            {siteConfig.phoneDisplay}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-background/80 text-foreground md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Zamknij menu" : "Otworz menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border/70 bg-background/95 transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-[32rem]" : "max-h-0"
        )}
      >
        <div className="grid-main py-4">
          <ul className="space-y-1">
            {siteConfig.nav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-surface-soft hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 rounded-2xl border border-border/70 bg-surface-soft p-3">
            <p className="px-2 pb-2 text-xs font-medium uppercase tracking-[0.2em] text-brand-muted">
              Oferta
            </p>
            <div className="space-y-1">
              {OFFER_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block rounded-xl px-3 py-2 text-sm text-foreground/80 hover:bg-background hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
