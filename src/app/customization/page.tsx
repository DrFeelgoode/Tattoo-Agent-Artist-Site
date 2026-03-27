import type { Metadata } from "next";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FormEmbed } from "@/components/ui/FormEmbed";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Customization Consults",
  description:
    "Need custom changes to your Tattoo Agent setup? Book a " +
    "customization consult with Garrett — $100/hr for website " +
    "tweaks, automation updates, and more.",
};

export default function CustomizationPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24 text-center sm:px-6 lg:px-8">
        <ParallaxImage src="/images/tattoos/tattoo-14.webp" opacity={0.45} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        <div className="relative mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-lobster)] text-4xl text-cream sm:text-5xl">
            Customization consults
          </h1>
          <p className="mt-4 text-lg text-muted">
            Already using Tattoo Agent? Need changes to your
            website, automations, or workflows? Garrett can handle
            it for you.
          </p>
        </div>
      </section>

      {/* How it works */}
      <SectionWrapper dark>
        <div className="mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-2xl uppercase tracking-widest text-lime">
            How it works
          </h2>
          <div className="mt-8 space-y-6 text-cream/90 leading-relaxed">
            <p>
              After your initial setup, you have full access to your
              Tattoo Agent tool. You&apos;re welcome to make changes
              and updates yourself at any time — it&apos;s your
              tool.
            </p>
            <p>
              But if you don&apos;t want to learn how, or you just
              don&apos;t have the time, Garrett offers customization
              consults at{" "}
              <span className="font-semibold text-lime">
                $100/hour
              </span>
              . Book a call, describe what you need, and he&apos;ll
              take care of it.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Website updates",
                desc: "New pages, gallery updates, design changes, layout tweaks.",
              },
              {
                title: "Automation changes",
                desc: "Adjust email sequences, booking flows, follow-up timing, or triggers.",
              },
              {
                title: "New features",
                desc: "Custom forms, landing pages, campaign setups, or integrations.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-cream/10 bg-black/40 p-6"
              >
                <h3 className="font-semibold text-cream">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Booking */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-lobster)] text-3xl text-cream">
            Book a customization consult
          </h2>
          <p className="mt-4 text-muted">
            Pick a time and describe what you need. Garrett will
            review it before the call so you can hit the ground
            running.
          </p>
          <div className="mt-8">
            <FormEmbed
              src="https://link.tattooagent.art/widget/booking/kfNqQfPiSpU31vi6xLSg"
              formId="1772420082385"
              height={1000}
              title="Book a Customization Consult"
              type="booking"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Bottom note */}
      <section className="bg-gradient-to-b from-charcoal to-black px-4 py-16 text-center sm:px-6">
        <div className="mx-auto max-w-2xl">
          <p className="text-muted">
            Questions about what&apos;s included or how it works?{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-lime hover:underline"
            >
              Email Garrett
            </a>{" "}
            and he&apos;ll get back to you.
          </p>
        </div>
      </section>
    </div>
  );
}
