import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { followUpMathPoints } from "@/data/features";

export function FollowUpMath() {
  return (
    <SectionWrapper dark>
      <div className="text-center">
        <p className="font-[family-name:var(--font-bebas-neue)] text-2xl uppercase tracking-widest text-lime">
          The math
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-lobster)] text-4xl text-cream sm:text-5xl">
          How automated follow-ups turn into real income
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
          Not promises — just honest if/then math. You decide
          if the numbers make sense for you.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {followUpMathPoints.map((point) => (
          <div
            key={point.title}
            className="rounded-xl border border-cream/10 bg-black/40 p-8"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-lime/10">
              <span className="text-xl font-bold text-lime">
                $
              </span>
            </div>
            <h3 className="text-xl font-semibold leading-snug text-cream">
              {point.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
