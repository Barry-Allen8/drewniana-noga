import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 bg-surface-soft">
      <div className="grid-main py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-2xl font-semibold tracking-[0.08em] text-foreground">
              DREWNIANA NOGA
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Tworzymy meble na wymiar z litego drewna, z naciskiem na proporcje,
              detale i ponadczasowa forme.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-muted">
              Nawigacja
            </p>
            <ul className="mt-4 space-y-2">
              {siteConfig.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-muted">
              Kontakt
            </p>
            <div className="mt-4 space-y-2 text-sm text-foreground/80">
              <p>
                {siteConfig.address.streetAddress}, {siteConfig.address.postalCode}{" "}
                {siteConfig.address.addressLocality}
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="transition-colors hover:text-foreground"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/70 pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Drewniana Noga. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
