type Size = "sm" | "md" | "lg" | "xl";

type Props = {
  size?: Size;
  className?: string;
  ariaLabel?: string;
};

const sizes: Record<Size, string> = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-3xl sm:text-4xl",
  xl: "text-5xl sm:text-6xl",
};

export function Logo({
  size = "md",
  className = "",
  ariaLabel = "Tá Online",
}: Props) {
  return (
    <span
      aria-label={ariaLabel}
      className={`font-display inline-flex items-baseline tracking-tight ${sizes[size]} ${className}`}
    >
      <span className="font-semibold">tá</span>
      <span className="text-fg-muted ml-1.5 font-normal">online</span>
      <span className="text-accent font-semibold">.</span>
    </span>
  );
}
