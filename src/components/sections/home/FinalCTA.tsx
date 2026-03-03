import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Button } from "@/components/ui/Button";
import { BrandIcon } from "@/components/ui/BrandIcon";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-charcoal to-black px-4 py-24 sm:px-6 lg:px-8">
      {/* Background tattoo image */}
      <ParallaxImage src="/images/tattoos/tattoo-2.webp" opacity={0.45} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      <div className="relative mx-auto max-w-3xl text-center">
        <BrandIcon size={40} className="mx-auto mb-5 opacity-80" />
        <h2 className="font-[family-name:var(--font-lobster)] text-3xl text-cream sm:text-4xl md:text-5xl">
          Ready to grow your tattoo business?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
          See what Tattoo Agent can do for you — book a free
          walkthrough or pick a plan and get started.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/purchase" size="lg">
            Get Started
          </Button>
          <Button href="/walkthrough" variant="outline" size="lg">
            Book a Free Walkthrough
          </Button>
        </div>
      </div>
    </section>
  );
}
