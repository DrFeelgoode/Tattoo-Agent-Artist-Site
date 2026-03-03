import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandIconProps {
  size?: number;
  className?: string;
}

/**
 * The Tattoo Agent skull icon — used as a brand accent
 * throughout the site.
 */
export function BrandIcon({ size = 32, className }: BrandIconProps) {
  return (
    <Image
      src="/images/brand/icon.webp"
      alt=""
      width={size}
      height={size}
      className={cn("inline-block", className)}
    />
  );
}
