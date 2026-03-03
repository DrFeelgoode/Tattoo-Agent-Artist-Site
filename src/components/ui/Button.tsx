import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-lime text-black hover:bg-lime/90 font-semibold",
  secondary:
    "bg-charcoal text-cream hover:bg-charcoal/80 " +
    "border border-cream/10",
  outline:
    "border-2 border-lime text-lime hover:bg-lime/10",
  ghost:
    "text-cream hover:text-lime hover:bg-cream/5",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  external,
  onClick,
  type = "button",
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center rounded-lg " +
      "font-medium transition-colors duration-200 " +
      "focus-visible:outline-none focus-visible:ring-2 " +
      "focus-visible:ring-lime focus-visible:ring-offset-2 " +
      "focus-visible:ring-offset-black",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={styles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
