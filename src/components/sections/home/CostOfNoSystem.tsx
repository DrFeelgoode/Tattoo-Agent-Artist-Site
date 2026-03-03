import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { costItems } from "@/data/features";

export function CostOfNoSystem() {
  return (
    <SectionWrapper dark>
      <div className="text-center">
        <p className="font-[family-name:var(--font-bebas-neue)] text-lg uppercase tracking-widest text-lime">
          The reality
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-lobster)] text-3xl text-cream sm:text-4xl">
          You might be managing fine.
          <br />
          But fine has a cost.
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {costItems.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-cream/10 bg-black/40 p-6"
          >
            <span className="text-3xl">{item.icon}</span>
            <h3 className="mt-3 text-lg font-semibold text-cream">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
