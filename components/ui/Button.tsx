import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onPrimary";
type Size = "md" | "lg";

type Props = {
  href: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-fg hover:opacity-95 shadow-sm hover:shadow-md",
  secondary:
    "bg-card text-fg border border-line hover:border-primary/40 hover:bg-surface",
  ghost: "text-primary hover:bg-primary/5",
  onPrimary:
    "bg-primary-fg text-primary hover:opacity-95 shadow-sm hover:shadow-md",
};

const sizeStyles: Record<Size, string> = {
  md: "px-6 py-3 text-sm sm:text-base",
  lg: "px-8 py-4 text-base sm:text-lg",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  children,
  ...rest
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
  const target = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};
  return (
    <a
      href={href}
      className={`${base} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...target}
      {...rest}
    >
      {children}
    </a>
  );
}
