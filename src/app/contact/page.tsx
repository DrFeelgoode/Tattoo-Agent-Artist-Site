import type { Metadata } from "next";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FormEmbed } from "@/components/ui/FormEmbed";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Tattoo Agent. Questions, feedback, or " +
    "ready to get started — we're here to help.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-4 py-24 text-center sm:px-6 lg:px-8">
        <ParallaxImage src="/images/tattoos/tattoo-11.webp" opacity={0.45} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        <div className="relative mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-lobster)] text-4xl text-cream sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 text-lg text-muted">
            Questions, feedback, or ready to get started — reach out
            however works best for you.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-2xl uppercase tracking-widest text-lime">
              Contact Info
            </h2>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm text-muted">Email</p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-cream hover:text-lime"
                >
                  {SITE.email}
                </a>
              </div>
              <div>
                <p className="text-sm text-muted">Phone</p>
                <a
                  href={`tel:${SITE.phone}`}
                  className="text-cream hover:text-lime"
                >
                  {SITE.phone}
                </a>
              </div>
              <div>
                <p className="text-sm text-muted">Instagram</p>
                <a
                  href={SITE.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream hover:text-lime"
                >
                  {SITE.instagram.handle}
                </a>
              </div>
              <div>
                <p className="text-sm text-muted">Location</p>
                <p className="text-cream">{SITE.location}</p>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-cream/10 bg-charcoal p-6">
              <h3 className="font-semibold text-cream">
                Prefer a live walkthrough?
              </h3>
              <p className="mt-2 text-sm text-muted">
                Book a free walkthrough and Garrett will personally
                walk you through a real artist&apos;s setup.
              </p>
              <a
                href="/walkthrough"
                className="mt-3 inline-block text-sm text-lime hover:underline"
              >
                Book a walkthrough →
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <FormEmbed
              src="https://link.tattooagent.art/widget/form/kKhRCZ8UnMIm5AndDkev"
              formId="kKhRCZ8UnMIm5AndDkev"
              height={901}
              title="Contact"
            />
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
