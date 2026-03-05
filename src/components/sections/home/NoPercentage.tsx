import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function NoPercentage() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-[family-name:var(--font-bebas-neue)] text-2xl uppercase tracking-widest text-lime">
          No hidden fees
        </p>
        <p className="mt-6 font-[family-name:var(--font-lobster)] text-7xl text-lime sm:text-8xl md:text-9xl">
          0%
        </p>
        <h2 className="mt-4 font-[family-name:var(--font-lobster)] text-4xl text-cream sm:text-5xl">
          We don&apos;t take a cut of your bookings
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
          Tattoo Agent charges a flat $99/month. No percentage
          of your bookings, no transaction fees beyond standard
          Stripe processing (2.9% + 30&cent;). Every dollar you
          earn is yours.
        </p>
        <div className="mx-auto mt-8 max-w-lg rounded-xl border border-cream/10 bg-charcoal p-6">
          <p className="text-lg font-semibold text-cream">
            Other booking tools take 5–10% per transaction
          </p>
          <p className="mt-3 text-base text-muted">
            10% of a $100 deposit = $10 gone every booking.
            If you&apos;re booking more than 10 clients a
            month, you&apos;re losing over $100/month just
            in fees. With Tattoo Agent, that money stays
            in your pocket.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
