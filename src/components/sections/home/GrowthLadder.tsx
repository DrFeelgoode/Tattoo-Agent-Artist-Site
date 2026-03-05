"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { ExpandableFeatures } from "@/components/ui/ExpandableFeatures";
import { plans } from "@/data/plans";

export function GrowthLadder() {
  return (
    <SectionWrapper dark>
      <div className="text-center">
        <p className="font-[family-name:var(--font-bebas-neue)] text-2xl uppercase tracking-widest text-lime">
          Business Growth Ladder
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-lobster)] text-4xl text-cream sm:text-5xl">
          Choose where you want to start
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Every plan builds on the last. Start with what you
          need now, upgrade when you&apos;re ready.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={
              "relative flex flex-col rounded-xl border p-6 " +
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

            <p className="mt-2 font-[family-name:var(--font-bebas-neue)] text-base uppercase tracking-widest text-lime">
              Stage {plan.tier}
            </p>
            <h3 className="mt-1 text-xl font-bold text-cream">
              {plan.tagline}
            </h3>
            <p className="text-base text-muted">{plan.name}</p>

            <p className="mt-3 text-base leading-relaxed text-muted">
              {plan.description}
            </p>

            <ExpandableFeatures features={plan.features} />

            <div className="mt-auto pt-6">
              <Button
                href={`/plans/${plan.id}`}
                variant={
                  plan.tier === 1 ? "primary" : "outline"
                }
                className="w-full"
              >
                Learn More →
              </Button>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
