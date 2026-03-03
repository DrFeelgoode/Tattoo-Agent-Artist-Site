import type { Metadata } from "next";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FormEmbed } from "@/components/ui/FormEmbed";

export const metadata: Metadata = {
  title: "Book a Free Walkthrough",
  description:
    "See Tattoo Agent in action. Book a free live walkthrough " +
    "and Garrett will personally show you a real artist's setup.",
};

export default function WalkthroughPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-4 py-24 text-center sm:px-6 lg:px-8">
        <ParallaxImage src="/images/tattoos/tattoo-7.webp" opacity={0.45} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        <div className="relative mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-lobster)] text-4xl text-cream sm:text-5xl">
            Book a free walkthrough
          </h1>
          <p className="mt-4 text-lg text-muted">
            See exactly what you&apos;re getting before you commit.
            Garrett will personally walk you through a real
            artist&apos;s setup — no pressure, no pitch.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <FormEmbed
            src="https://link.tattooagent.art/widget/booking/AtudX2MG5QJhQhUfgRbg"
            formId="1772420035994"
            height={1000}
            title="Book a Free Walkthrough"
            type="booking"
          />
        </div>
      </SectionWrapper>

      <SectionWrapper dark>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-xl uppercase tracking-widest text-lime">
            What to expect
          </h2>
          <div className="mt-8 grid gap-6 text-left sm:grid-cols-3">
            {[
              {
                title: "15-30 minutes",
                desc: "Quick and focused. We respect your time.",
              },
              {
                title: "Real artist setup",
                desc: "You'll see an actual live account, not a slide deck.",
              },
              {
                title: "No pressure",
                desc: "Ask questions, see if it fits. That's it.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-semibold text-cream">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
