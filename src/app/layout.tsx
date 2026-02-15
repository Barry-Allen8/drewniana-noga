import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Toaster } from "sonner";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { absoluteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Drewniana Noga | Meble na wymiar w Bydgoszczy",
    template: "%s | Drewniana Noga",
  },
  description: siteConfig.description,
  keywords: [
    "meble na wymiar",
    "stolarz Bydgoszcz",
    "kuchnia na wymiar",
    "meble drewniane",
    "zabudowy stolarskie",
    "premium furniture",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Drewniana Noga | Meble na wymiar w Bydgoszczy",
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl("/img/Hero image.jpeg"),
        width: 1600,
        height: 1067,
        alt: "Drewniana Noga - nowoczesna kuchnia na wymiar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drewniana Noga | Meble na wymiar w Bydgoszczy",
    description: siteConfig.description,
    images: [absoluteUrl("/img/Hero image.jpeg")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
    image: absoluteUrl("/img/Hero image.jpeg"),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: siteConfig.url,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.addressLocality,
      addressCountry: siteConfig.address.addressCountry,
    },
    openingHours: [siteConfig.openingHoursSchema],
    areaServed: "Bydgoszcz i okolice",
    sameAs: [siteConfig.socials.facebook],
  };

  return (
    <html lang="pl" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${outfit.variable} bg-background font-sans text-foreground antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <SiteHeader />
        <div className="min-h-screen pt-20">{children}</div>
        <SiteFooter />
        <Toaster
          position="bottom-center"
          toastOptions={{
            classNames: {
              toast: "border-border bg-background text-foreground",
              title: "text-foreground",
              description: "text-muted-foreground",
            },
          }}
        />
      </body>
    </html>
  );
}
