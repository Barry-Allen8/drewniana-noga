export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, src: "/img/Scene 1.jpg", alt: "Realizacja 1", title: "Kuchnia dębowa", category: "Kuchnia" },
  { id: 2, src: "/img/Scene 2.jpg", alt: "Realizacja 2", title: "Szafa wnękowa", category: "Szafa" },
  { id: 3, src: "/img/Scene 3.jpg", alt: "Realizacja 3", title: "Stół jadalniany", category: "Stół" },
  { id: 4, src: "/img/Scene 4.jpg", alt: "Realizacja 4", title: "Komoda orzechowa", category: "Komoda" },
  { id: 5, src: "/img/Scene 5.jpg", alt: "Realizacja 5", title: "Regał na wymiar", category: "Regał" },
  { id: 6, src: "/img/Scene 6.jpg", alt: "Realizacja 6", title: "Zabudowa kuchenna", category: "Kuchnia" },
  { id: 7, src: "/img/Scene 7.jpg", alt: "Realizacja 7", title: "Garderoba", category: "Szafa" },
  { id: 8, src: "/img/Scene 8.jpg", alt: "Realizacja 8", title: "Biurko jesionowe", category: "Biurko" },
  { id: 9, src: "/img/Scene 9.jpg", alt: "Realizacja 9", title: "Łóżko dębowe", category: "Łóżko" },
  { id: 10, src: "/img/Scene 10.jpg", alt: "Realizacja 10", title: "Szafka łazienkowa", category: "Łazienka" },
  { id: 11, src: "/img/Scene 11.jpg", alt: "Realizacja 11", title: "Witryna salonowa", category: "Salon" },
  { id: 12, src: "/img/Scene 12.jpg", alt: "Realizacja 12", title: "Stół konferencyjny", category: "Stół" },
  { id: 13, src: "/img/Scene 13.jpg", alt: "Realizacja 13", title: "Kuchnia minimalistyczna", category: "Kuchnia" },
  { id: 14, src: "/img/Scene 14.jpg", alt: "Realizacja 14", title: "Półki ścienne", category: "Regał" },
  { id: 15, src: "/img/Scene 15.jpg", alt: "Realizacja 15", title: "Szafa przesuwna", category: "Szafa" },
  { id: 16, src: "/img/Scene 16.jpg", alt: "Realizacja 16", title: "Konsola dębowa", category: "Salon" },
];

export const FEATURED_ITEMS = GALLERY_ITEMS.slice(0, 3);
