import { cn } from "@/lib/utils";

interface GHLEmbedProps {
  /** Description of what embed goes here */
  embedDescription: string;
  className?: string;
}

/**
 * Placeholder component for GoHighLevel embeds.
 * Garrett will replace the placeholder with actual embed code.
 */
export function GHLEmbed({
  embedDescription,
  className,
}: GHLEmbedProps) {
  return (
    <div
      className={cn(
        "rounded-xl border-2 border-dashed border-lime/30 " +
          "bg-charcoal p-8",
        className,
      )}
    >
      {/* EMBED: Replace this placeholder with the actual booking/form embed code */}
      <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
        <div className="mb-3 text-3xl">📋</div>
        <p className="text-lg font-medium text-cream">
          {embedDescription}
        </p>
        <p className="mt-2 text-sm text-muted">
          Embed code will be placed here
        </p>
      </div>
    </div>
  );
}
