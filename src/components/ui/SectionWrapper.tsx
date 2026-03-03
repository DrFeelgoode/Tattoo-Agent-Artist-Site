import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function SectionWrapper({
  children,
  className,
  id,
  dark = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "px-4 py-16 sm:px-6 md:py-24 lg:px-8",
        dark ? "bg-charcoal" : "bg-black",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
