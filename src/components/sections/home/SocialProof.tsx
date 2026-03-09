import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function SocialProof() {
  return (
    <SectionWrapper dark>
      <div className="text-center">
        <p className="font-[family-name:var(--font-bebas-neue)] text-2xl uppercase tracking-widest text-lime">
          Real artists, real results
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-lobster)] text-4xl text-cream sm:text-5xl">
          What artists are saying
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <TestimonialCard key={t.handle} testimonial={t} />
        ))}
      </div>

      <p className="mt-8 text-center text-base text-muted">
        Kipling saw a significant uptick in applications and
        consultations as a direct result of her Tattoo Agent
        site going live.
      </p>
    </SectionWrapper>
  );
}
