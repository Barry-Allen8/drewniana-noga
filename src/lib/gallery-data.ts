export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
}

const GALLERY_IMAGE_FILES = [
  "Hero image.jpeg",
  "image_001.jpg",
  "image_002.jpg",
  "image_003.jpg",
  "image_004.jpg",
  "image_005.jpg",
  "image_006.jpg",
  "image_007.jpg",
  "image_008.jpg",
  "image_009.jpg",
  "image_010.jpg",
  "image_011.jpg",
  "image_012.jpg",
  "image_013.jpg",
  "image_014.jpg",
  "image_015.jpg",
  "image_016.jpg",
  "image_017.jpg",
  "image_018.jpg",
  "image_019.jpg",
  "image_020.jpg",
  "image_021.jpg",
  "image_022.jpg",
  "image_023.jpg",
  "image_024.jpg",
  "image_025.jpg",
  "image_026.jpg",
  "image_027.jpg",
  "image_028.jpg",
  "image_029.jpg",
  "image_030.jpg",
  "image_031.jpg",
  "image_032.jpg",
  "image_033.jpg",
  "image_034.jpg",
  "image_035.jpg",
  "image_036.jpg",
  "image_037.jpg",
  "image_038.jpg",
  "image_039.jpg",
  "image_040.jpg",
  "image_041.jpg",
  "image_042.jpg",
  "image_043.jpg",
  "image_044.jpg",
  "image_045.jpg",
  "image_046.jpg",
] as const;

export const GALLERY_ITEMS: GalleryItem[] = GALLERY_IMAGE_FILES.map(
  (fileName, index) => {
    const number = String(index + 1).padStart(2, "0");
    return {
      id: index + 1,
      src: `/img/${fileName}`,
      alt: `Realizacja ${number}`,
      title: `Realizacja ${number}`,
      category: "Meble na wymiar",
    };
  }
);

export const FEATURED_ITEMS = GALLERY_ITEMS.slice(0, 3);
