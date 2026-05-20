import type { ReactNode } from "react";

type Variant = "default" | "surface" | "primary" | "transparent";

type Props = {
  children: ReactNode;
  id?: string;
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
};

export function Section({
  children,
  id,
  variant = "default",
  className = "",
  ariaLabel,
}: Props) {
  const bg: Record<Variant, string> = {
    default: "bg-bg text-fg",
    surface: "bg-surface text-fg",
    primary: "bg-primary text-primary-fg",
    transparent: "",
  };
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`relative py-20 sm:py-28 ${bg[variant]} ${className}`}
    >
      {children}
    </section>
  );
}
