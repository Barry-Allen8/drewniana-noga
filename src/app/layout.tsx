import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Toaster } from "sonner";
import { Navbar } from "@/components/navbar";
import { ContactFooter } from "@/components/contact-footer";
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
  title: {
    default: "DREWNIANA NOGA | Meble na wymiar. Bydgoszcz.",
    template: "%s | DREWNIANA NOGA",
  },
  description:
    "Premium meble na wymiar. Bespoke furniture w Bydgoszczy. Dąb, jesion, orzech — lite drewno. Piękna 13, 85-303 Bydgoszcz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="dark scroll-smooth">
      <body
        className={`${cormorant.variable} ${outfit.variable} font-sans antialiased bg-stone-950 text-stone-200`}
      >
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <ContactFooter />
        <Toaster
          position="bottom-center"
          toastOptions={{
            classNames: {
              toast:
                "bg-stone-900 border-stone-700 text-stone-100",
              title: "text-stone-100",
              description: "text-stone-400",
            },
          }}
        />
      </body>
    </html>
  );
}
