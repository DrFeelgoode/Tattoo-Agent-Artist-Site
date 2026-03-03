import type { Metadata } from "next";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Button } from "@/components/ui/Button";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { funnelValuePoints } from "@/data/features";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Get Started with Tattoo Agent",
  description:
    "The all-in-one business tool for independent tattoo artists. " +
    "Website, booking, payments, marketing — one tool, $99/month.",
};

export default function GetStartedPage() {
  return (
    <main>
      {/* Funnel Hero */}
      <section className="relative overflow-hidden px-4 py-24 text-center sm:px-6 lg:px-8">
        {/* Background tattoo image */}
        <ParallaxImage src="/images/tattoos/tattoo-13.webp" opacity={0.45} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        <div className="relative mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-lobster)] text-4xl leading-tight text-cream sm:text-5xl md:text-6xl">
            Stop chasing DMs.{" "}
            <span className="text-lime">Start booking.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            The all-in-one tool that handles your website, booking,
            payments, and marketing — so you can focus on tattooing.
          </p>
          <div className="mt-8">
            <Button href="/walkthrough" size="lg">
              Book a Free Walkthrough
            </Button>
          </div>
        </div>
      </section>

      {/* Value Points */}
      <section className="bg-charcoal px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
          {funnelValuePoints.map((point) => (
            <div key={point.title} className="flex gap-4">
              <span className="mt-1 text-lg text-lime">✓</span>
              <div>
                <h3 className="text-lg font-semibold text-cream">
                  {point.title}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Proof */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <blockquote className="rounded-xl border border-cream/10 bg-charcoal p-8 text-center">
            <p className="text-lg leading-relaxed text-cream/90">
              &ldquo;{testimonials[0].quote}&rdquo;
            </p>
            <footer className="mt-4">
              <p className="font-medium text-cream">
                {testimonials[0].name}
              </p>
              <a
                href={testimonials[0].instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-lime"
              >
                {testimonials[0].handle}
              </a>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Video */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <VideoEmbed />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-b from-charcoal to-black px-4 py-24 text-center sm:px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-[family-name:var(--font-lobster)] text-3xl text-cream sm:text-4xl">
            Ready to see how it works?
          </h2>
          <p className="mt-4 text-muted">
            Book a free walkthrough — no commitment, no pressure.
            Just a real look at what Tattoo Agent can do for you.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/walkthrough" size="lg">
              Book a Free Walkthrough
            </Button>
            <Button href="/purchase" variant="outline" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
