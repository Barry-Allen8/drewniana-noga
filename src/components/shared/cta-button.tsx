import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
  href: string;
  label: string;
  tone?: "primary" | "ghost";
  className?: string;
  withIcon?: boolean;
  external?: boolean;
};

export function CtaButton({
  href,
  label,
  tone = "primary",
  className,
  withIcon = true,
  external = false,
}: CtaButtonProps) {
  const isExternal = external || href.startsWith("tel:") || href.startsWith("mailto:");

  return (
    <Button
      asChild
      className={cn(
        "h-11 rounded-full px-6 text-sm tracking-wide transition-transform duration-200 ease-out active:scale-[0.98]",
        tone === "primary"
          ? "bg-foreground text-background hover:bg-foreground/90"
          : "border border-border bg-transparent text-foreground hover:bg-surface-soft",
        className
      )}
    >
      {isExternal ? (
        <a href={href}>
          <span>{label}</span>
          {withIcon ? <ArrowRight className="size-4" /> : null}
        </a>
      ) : (
        <Link href={href}>
          <span>{label}</span>
          {withIcon ? <ArrowRight className="size-4" /> : null}
        </Link>
      )}
    </Button>
  );
}
