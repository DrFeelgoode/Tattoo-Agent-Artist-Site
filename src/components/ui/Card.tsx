import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({
  children,
  className,
  hover = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-cream/10 bg-charcoal p-6",
        hover && "transition-colors duration-200 hover:border-lime/30",
        className,
      )}
    >
      {children}
    </div>
  );
}
