import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { plans } from "@/data/plans";

export const metadata: Metadata = {
  title: "Artist Essentials — $99/month",
  description:
    "Everything to run a professional tattoo business. Website, " +
    "booking, payments, messaging, marketing, and client " +
    "management in one tool.",
};

export default function EssentialsPage() {
  const plan = plans.find((p) => p.id === "essentials")!;

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24 text-center sm:px-6 lg:px-8">
        <ParallaxImage src="/images/tattoos/tattoo-8.webp" opacity={0.45} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        <div className="relative mx-auto max-w-3xl">
          <Badge>Available Now</Badge>
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
          <div className="mt-8">
            <Button href="/purchase" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Feature-Outcome Grid */}
      <SectionWrapper dark>
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-lobster)] text-3xl text-cream">
            Everything you get
          </h2>
          <p className="mt-2 text-muted">
            Every feature exists to solve a specific problem.
            Here&apos;s what each one actually does for you.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {plan.features.map((f) => (
            <div
              key={f.feature}
              className="rounded-xl border border-cream/10 bg-black/40 p-6"
            >
              <h3 className="font-semibold text-lime">
                {f.feature}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {f.outcome}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Booking Flow */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-lobster)] text-3xl text-cream">
            How booking works for your clients
          </h2>
          <p className="mt-2 text-muted">
            From application to aftercare — here&apos;s the full
            automated flow.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl">
          {[
            {
              step: "1",
              title: "Client applies on your website",
              desc: "They fill out a form with their tattoo idea, reference images, and placement.",
            },
            {
              step: "2",
              title: "Instant confirmation email",
              desc: "The client gets an automatic email confirming their application was received.",
            },
            {
              step: "3",
              title: "You review and decide",
              desc: "Accept, request more info, or decline — one tap. Everything after is automated.",
            },
            {
              step: "4",
              title: "Client books and pays deposit",
              desc: "Accepted clients get a link to pick their appointment time and pay their deposit. No DM coordination needed.",
            },
            {
              step: "5",
              title: "Automated reminders",
              desc: "3 days before and 1 day before — reminders go out automatically to prevent no-shows.",
            },
            {
              step: "6",
              title: "Aftercare chain",
              desc: "After the appointment: thank-you email, then 6 aftercare emails over 2 months checking on healing.",
            },
            {
              step: "7",
              title: "6-month follow-up",
              desc: "An automatic nudge inviting them back for more ink. Clients who loved your work get reminded you exist.",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 pb-8">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime/10">
                <span className="text-sm font-bold text-lime">
                  {item.step}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-cream">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-gradient-to-b from-charcoal to-black px-4 py-24 text-center sm:px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-[family-name:var(--font-lobster)] text-3xl text-cream sm:text-4xl">
            Ready to get consistently booked?
          </h2>
          <p className="mt-4 text-muted">
            Book a free walkthrough and see exactly what
            you&apos;re getting.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/purchase" size="lg">
              Get Started
            </Button>
            <Button
              href="/walkthrough"
              variant="outline"
              size="lg"
            >
              Book a Free Walkthrough
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
