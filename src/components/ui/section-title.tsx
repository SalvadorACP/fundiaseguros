import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionTitleProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div className={cn("flex flex-col gap-4", align === "center" && "items-center text-center", className)} {...props}>
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{eyebrow}</p> : null}
      <Heading className="text-balance font-serif text-4xl leading-tight tracking-[-0.035em] text-primary sm:text-5xl">{title}</Heading>
      {description ? <p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground">{description}</p> : null}
    </div>
  );
}
