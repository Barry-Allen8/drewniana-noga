export const siteConfig = {
  name: "Drewniana Noga",
  legalName: "Drewniana Noga Meble Na Wymiar",
  description:
    "Premium meble na wymiar z litego drewna. Projekty i realizacje kuchni, zabudow i mebli wolnostojacych w Bydgoszczy i okolicy.",
  url: "https://drewniananoga.com.pl",
  locale: "pl_PL",
  phone: "+48724239328",
  phoneDisplay: "+48 724 239 328",
  email: "drewniana.noga@wp.pl",
  openingHoursDisplay: "Poniedzialek - Piatek: 7:00 - 15:00",
  openingHoursSchema: "Mo-Fr 07:00-15:00",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Piekna+13%2C+85-303+Bydgoszcz",
  address: {
    streetAddress: "Piekna 13",
    postalCode: "85-303",
    addressLocality: "Bydgoszcz",
    addressCountry: "PL",
  },
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=100063868723924",
  },
  nav: [
    { href: "/", label: "Strona glowna" },
    { href: "/galeria", label: "Galeria" },
    { href: "/wycena", label: "Wycena" },
    { href: "/kontakt", label: "Kontakt" },
  ] as const,
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
