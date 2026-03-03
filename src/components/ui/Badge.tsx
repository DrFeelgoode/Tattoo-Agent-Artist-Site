import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "lime" | "red" | "muted";
  className?: string;
}

export function Badge({
  children,
  variant = "lime",
  className,
}: BadgeProps) {
  const variantStyles = {
    lime: "bg-lime/10 text-lime border-lime/20",
    red: "bg-red/10 text-red border-red/20",
    muted: "bg-muted/10 text-muted border-muted/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border " +
          "px-3 py-1 text-xs font-medium uppercase tracking-wider",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
