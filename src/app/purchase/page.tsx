import type { Metadata } from "next";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { ExpandableFeatures } from "@/components/ui/ExpandableFeatures";
import { plans } from "@/data/plans";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Choose Your Plan",
  description:
    "Select the right Tattoo Agent plan for your business. " +
    "Start with Artist Essentials, or join the waitlist for " +
    "Growth and Pro+.",
};

export default function PurchasePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24 text-center sm:px-6 lg:px-8">
        <ParallaxImage src="/images/tattoos/tattoo-5.webp" opacity={0.45} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        <div className="relative mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-lobster)] text-4xl text-cream sm:text-5xl">
            Choose your plan
          </h1>
          <p className="mt-4 text-lg text-muted">
            Pick the plan that fits where you are now. You can
            always upgrade later.
          </p>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="bg-charcoal px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={
                "relative flex flex-col rounded-xl border p-8 " +
                (plan.tier === 1
                  ? "border-lime/30 bg-black"
                  : "border-cream/10 bg-black/60")
              }
            >
              {plan.tier === 1 && (
                <span className="absolute -top-3 left-6 rounded-full bg-lime px-3 py-1 text-xs font-bold text-black">
                  Available Now
                </span>
              )}
              {plan.isComingSoon && (
                <span className="absolute -top-3 left-6 rounded-full bg-muted/20 px-3 py-1 text-xs font-medium text-muted">
                  Coming Soon
                </span>
              )}
              <BrandIcon
                size={24}
                className="absolute right-6 top-6 opacity-30"
              />

              <h2 className="mt-2 text-2xl font-bold text-cream">
                {plan.name}
              </h2>
              <p className="mt-1 font-[family-name:var(--font-bebas-neue)] text-sm uppercase tracking-widest text-lime">
                {plan.tagline}
              </p>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-cream">
                  {plan.price}
                </span>
                <span className="text-muted">{plan.priceNote}</span>
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

              <ExpandableFeatures features={plan.features} />

              <div className="mt-auto pt-8">
                {plan.isComingSoon ? (
                  <Button
                    href={`/plans/${plan.id === "pro-plus" ? "pro-plus" : plan.id}`}
                    variant="outline"
                    className="w-full"
                  >
                    Join the Waitlist
                  </Button>
                ) : (
                  <div className="flex flex-col gap-3">
                    <Button
                      href="https://link.tattooagent.art/payment-link/68ef9ef221970927d0e2b688"
                      external
                      className="w-full"
                    >
                      Get Started — Monthly
                    </Button>
                    <Button
                      href="https://link.tattooagent.art/payment-link/68eface067ee3b477f69ead7"
                      external
                      variant="outline"
                      className="w-full"
                    >
                      Get Started — Annual
                      <span className="ml-1 text-xs opacity-70">
                        (save $500)
                      </span>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom info */}
      <section className="bg-gradient-to-b from-charcoal to-black px-4 py-16 text-center sm:px-6">
        <div className="mx-auto max-w-2xl">
          <p className="text-muted">
            Not sure which plan is right?{" "}
            <Link
              href="/walkthrough"
              className="text-lime hover:underline"
            >
              Book a free walkthrough
            </Link>{" "}
            and we&apos;ll help you figure it out.
          </p>
          <p className="mt-4 text-sm text-muted">
            Questions? Reach out at{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-lime hover:underline"
            >
              {SITE.email}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
