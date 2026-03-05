import { replacedTools } from "@/data/tools";
import { BrandIcon } from "@/components/ui/BrandIcon";

const iconMap: Record<string, string> = {
  instagram: "📱",
  venmo: "💸",
  calendar: "📅",
  gmail: "📧",
  whatsapp: "💬",
  website: "🌐",
};

export function ToolComparison() {
  return (
    <section className="bg-charcoal px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-[family-name:var(--font-bebas-neue)] text-2xl uppercase tracking-widest text-lime">
            Sound familiar?
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-lobster)] text-4xl text-cream sm:text-5xl">
            You&apos;re juggling 6+ apps. We make it one.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            DMs on one app, payments on another, calendar
            somewhere else. It works — until it doesn&apos;t.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-6">
          {/* Tool cards grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {replacedTools.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center gap-2 rounded-lg border border-cream/10 bg-charcoal/50 px-4 py-4 text-center"
              >
                <span className="text-2xl">
                  {iconMap[tool.icon] ?? "🔧"}
                </span>
                <span className="text-base text-muted">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center gap-2 text-lime md:flex-row">
            <span className="hidden text-3xl md:block">→</span>
            <span className="text-3xl md:hidden">↓</span>
          </div>

          {/* Tattoo Agent */}
          <div className="flex flex-col items-center gap-3 rounded-xl border-2 border-lime/30 bg-charcoal px-8 py-8">
            <BrandIcon size={48} />
            <span className="font-[family-name:var(--font-lobster)] text-2xl text-cream">
              Tattoo Agent
            </span>
            <span className="text-base text-lime">
              All in one place
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
