import Image from "next/image";
import { cn } from "@/lib/utils";

type MediaFrameProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function MediaFrame({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: MediaFrameProps) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border/70 bg-surface-soft",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={cn("object-cover", imageClassName)}
        sizes={sizes}
      />
    </figure>
  );
}
