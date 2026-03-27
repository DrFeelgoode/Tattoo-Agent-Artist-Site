import type { Metadata } from "next";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { FormEmbed } from "@/components/ui/FormEmbed";
import { getBreadcrumbJsonLd } from "@/lib/structured-data";
import { plans } from "@/data/plans";

export const metadata: Metadata = {
  title: "Artist Pro+ — $1,499/month (Coming Soon)",
  description:
    "The done-for-you tier for tattoo artists. You tattoo, we " +
    "handle everything else. Managed social media, ads, client " +
    "interactions, and more. Coming soon.",
};

export default function ProPlusPage() {
  const plan = plans.find((p) => p.id === "pro-plus")!;

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbJsonLd([
              { name: "Home", href: "/" },
              { name: "Pricing", href: "/pricing" },
              { name: "Artist Pro+", href: "/plans/pro-plus" },
            ]),
          ),
        }}
      />
      <section className="relative overflow-hidden px-4 py-24 text-center sm:px-6 lg:px-8">
        <ParallaxImage src="/images/tattoos/tattoo-15.webp" opacity={0.45} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        <div className="relative mx-auto max-w-3xl">
          <Badge variant="muted">Coming Soon</Badge>
          <h1 className="mt-4 font-[family-name:var(--font-lobster)] text-4xl text-cream sm:text-5xl">
            {plan.name}
          </h1>
          <p className="mt-2 font-[family-name:var(--font-bebas-neue)] text-2xl uppercase tracking-widest text-lime">
            {plan.tagline}
          </p>
          <p className="mt-4 text-lg text-muted">
            {plan.description}
          </p>
          <div className="mt-6 flex items-baseline justify-center gap-2">
            <span className="text-5xl font-bold text-cream">
              {plan.price}
            </span>
            <span className="text-lg text-muted">
              {plan.priceNote}
            </span>
          </div>
          <p className="mt-2 text-sm text-muted">
            + $500 one-time setup fee (waived with annual
            prepayment)
          </p>
        </div>
      </section>

      <SectionWrapper dark>
        <h2 className="text-center font-[family-name:var(--font-lobster)] text-3xl text-cream">
          Everything in Essentials & Growth, plus
        </h2>
        <div className="mx-auto mt-12 max-w-2xl">
          {plan.features.map((f) => (
            <div
              key={f.feature}
              className="flex gap-4 border-b border-cream/10 py-6 last:border-0"
            >
              <span className="mt-1 text-lime">✓</span>
              <div>
                <h3 className="font-semibold text-cream">
                  {f.feature}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {f.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-lobster)] text-3xl text-cream">
            Get early access
          </h2>
          <p className="mt-4 text-muted">
            Artist Pro+ is launching later in 2026. Join the
            waitlist for early access and launch pricing.
          </p>
          <div className="mt-8">
            <FormEmbed
              src="https://link.tattooagent.art/widget/form/6zCAoOk7ImgqrJ4wcCjK"
              formId="6zCAoOk7ImgqrJ4wcCjK"
              height={821}
              title="Artist Pro+ Waitlist"
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
