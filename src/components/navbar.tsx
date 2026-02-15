"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Strona Główna" },
  { href: "/galeria", label: "Galeria" },
  { href: "/wycena", label: "Wycena" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-stone-800/40 bg-stone-950/70 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMobile}
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <Image
            src="/img/Drewniana noga logo.jpg"
            alt="Drewniana Noga logo"
            width={1612}
            height={1217}
            className="h-10 w-auto grayscale brightness-0 invert"
            priority
          />
          <span className="hidden font-display text-lg font-light tracking-[0.25em] text-stone-100 sm:inline">
            DREWNIANA NOGA
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm tracking-wide transition-colors",
                    isActive
                      ? "text-stone-100"
                      : "text-stone-400 hover:text-stone-200"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-4 -bottom-px h-px bg-stone-300"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="flex size-10 items-center justify-center text-stone-300 md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-stone-800/40 bg-stone-950/90 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMobile}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-sm tracking-wide transition-colors",
                        isActive
                          ? "bg-stone-800/40 text-stone-100"
                          : "text-stone-400 hover:bg-stone-800/20 hover:text-stone-200"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
