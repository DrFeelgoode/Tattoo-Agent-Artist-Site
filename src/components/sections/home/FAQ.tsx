import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/data/faq";

export function FAQ() {
  return (
    <SectionWrapper dark>
      <div className="text-center">
        <p className="font-[family-name:var(--font-bebas-neue)] text-2xl uppercase tracking-widest text-lime">
          FAQ
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-lobster)] text-4xl text-cream sm:text-5xl">
          Common questions
        </h2>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <Accordion items={faqItems} />
      </div>
    </SectionWrapper>
  );
}
