import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { followUpMathPoints } from "@/data/features";

export function FollowUpMath() {
  return (
    <SectionWrapper>
      <div className="text-center">
        <p className="font-[family-name:var(--font-bebas-neue)] text-lg uppercase tracking-widest text-lime">
          The math
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-lobster)] text-3xl text-cream sm:text-4xl">
          How automated follow-ups turn into real income
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Not promises — just honest if/then math. You decide if
          the numbers make sense for you.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {followUpMathPoints.map((point) => (
          <div key={point.title} className="flex gap-4">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-lime/10">
              <span className="text-sm font-bold text-lime">
                $
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cream">
                {point.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
