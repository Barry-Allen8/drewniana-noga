import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  as?: "section" | "div";
  id?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
};

export function SectionShell({
  as,
  id,
  className,
  containerClassName,
  children,
}: SectionShellProps) {
  const Tag = as ?? "section";

  return (
    <Tag id={id} className={cn("section-space", className)}>
      <div className={cn("grid-main", containerClassName)}>{children}</div>
    </Tag>
  );
}
