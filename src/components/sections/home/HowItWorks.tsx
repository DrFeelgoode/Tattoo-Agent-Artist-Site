import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { howItWorksSteps } from "@/data/features";

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      {/* Background tattoo image */}
      <ParallaxImage src="/images/tattoos/tattoo-4.webp" opacity={0.45} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-[family-name:var(--font-bebas-neue)] text-lg uppercase tracking-widest text-lime">
            Simple setup
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-lobster)] text-3xl text-cream sm:text-4xl">
            How it works
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {howItWorksSteps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-lime bg-lime/10">
                <span className="font-[family-name:var(--font-bebas-neue)] text-2xl text-lime">
                  {step.step}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-cream">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
