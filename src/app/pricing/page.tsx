import type { Metadata } from "next";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { plans } from "@/data/plans";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Choose where you want to start. Every plan builds on the " +
    "last. Start with what you need now, upgrade when you're ready.",
};

export default function PricingPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-4 py-24 text-center sm:px-6 lg:px-8">
        <ParallaxImage src="/images/tattoos/tattoo-10.webp" opacity={0.45} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        <div className="relative mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-lobster)] text-4xl text-cream sm:text-5xl">
            Choose where you want to start
          </h1>
          <p className="mt-4 text-lg text-muted">
            Every plan builds on the last. Start with what you need
            now, upgrade when you&apos;re ready.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={
                "relative flex flex-col rounded-xl border p-8 " +
                (plan.tier === 1
                  ? "border-lime/30 bg-charcoal"
                  : "border-cream/10 bg-charcoal/50")
              }
            >
              {plan.tier === 1 && (
                <Badge className="absolute -top-3 left-6">
                  Available Now
                </Badge>
              )}
              {plan.isComingSoon && (
                <Badge
                  variant="muted"
                  className="absolute -top-3 left-6"
                >
                  Coming Soon
                </Badge>
              )}
              <BrandIcon
                size={24}
                className="absolute right-6 top-6 opacity-30"
              />

              <p className="mt-2 font-[family-name:var(--font-bebas-neue)] text-sm uppercase tracking-widest text-lime">
                Stage {plan.tier}: {plan.tagline}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-cream">
                {plan.name}
              </h2>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-cream">
                  {plan.price}
                </span>
                <span className="text-muted">
                  {plan.priceNote}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted">
                + $500 one-time setup (waived with annual
                prepayment)
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                {plan.description}
              </p>

              {plan.tier === 2 && (
                <p className="mt-3 text-sm font-medium text-lime">
                  Everything in Artist Essentials, plus:
                </p>
              )}
              {plan.tier === 3 && (
                <p className="mt-3 text-sm font-medium text-lime">
                  Everything in Essentials & Growth, plus:
                </p>
              )}

              <ul className="mt-6 flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li
                    key={f.feature}
                    className="flex items-start gap-2 text-sm"
                  >
                    <span className="mt-0.5 text-lime">✓</span>
                    <div>
                      <span className="font-medium text-cream">
                        {f.feature}
                      </span>
                      <span className="text-muted">
                        {" "}
                        — {f.outcome}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <Button
                  href={plan.cta.href}
                  variant={
                    plan.tier === 1 ? "primary" : "outline"
                  }
                  className="w-full"
                >
                  {plan.cta.label}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <section className="bg-gradient-to-b from-charcoal to-black px-4 py-16 text-center sm:px-6">
        <p className="text-muted">
          Not sure which plan is right?{" "}
          <a href="/walkthrough" className="text-lime hover:underline">
            Book a free walkthrough
          </a>{" "}
          and we&apos;ll help you figure it out.
        </p>
      </section>
    </main>
  );
}
