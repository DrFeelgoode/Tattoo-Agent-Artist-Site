import type { Metadata } from "next";
import Image from "next/image";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Tattoo Agent — built by Garrett McClellan " +
    "for his sister Kipling, a professional tattoo artist.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24 text-center sm:px-6 lg:px-8">
        <ParallaxImage src="/images/tattoos/tattoo-12.webp" opacity={0.45} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        <div className="relative mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-lobster)] text-4xl text-cream sm:text-5xl">
            Built for a tattoo artist,
            <br />
            by her brother
          </h1>
          <p className="mt-6 text-lg text-muted">
            Tattoo Agent didn&apos;t start as a business idea.
            It started as a problem I watched my sister deal with
            every single day.
          </p>
        </div>
      </section>

      {/* Origin Story with Photo */}
      <SectionWrapper dark>
        <div className="mx-auto max-w-5xl">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            {/* Photo */}
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/founders/garrett-kip-studio.webp"
                alt="Garrett and Kipling McClellan"
                width={600}
                height={450}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            {/* Story */}
            <div>
              <h2 className="font-[family-name:var(--font-bebas-neue)] text-2xl uppercase tracking-widest text-lime">
                The Origin Story
              </h2>
              <div className="mt-6 space-y-6 text-cream/90 leading-relaxed">
                <p>
                  My sister Kipling is a professional tattoo artist.
                  She&apos;s talented, passionate, and her clients
                  love her work. But I kept watching her spend more
                  time on the business side than on the art.
                </p>
                <p>
                  Late nights answering Instagram DMs. Chasing Venmo
                  deposits and manually tracking who paid.
                  Coordinating schedules through back-and-forth
                  messages. Stressing about posting consistently on
                  social media. The business side was stealing her
                  time and energy.
                </p>
                <p>
                  I have a background in engineering — MS in
                  Biomedical Engineering from Georgia Tech with a
                  machine learning emphasis. I know Python,
                  JavaScript, and how to build software. When I saw
                  what Kipling was dealing with, I thought: there
                  has to be a better way.
                </p>
                <p>
                  So I built one. With Kipling&apos;s direct input
                  on what artists actually need — not what a tech
                  company thinks they need — I put together a tool
                  that handles the business side so she could focus
                  on what she does best.
                </p>
                <p>
                  That tool became Tattoo Agent. And now it&apos;s
                  available to any independent artist who wants the
                  same thing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Kipling's Role */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-2xl uppercase tracking-widest text-lime">
            Kipling&apos;s Role
          </h2>
          <div className="mt-6 space-y-6 text-cream/90 leading-relaxed">
            <p>
              Kipling isn&apos;t just the inspiration — she&apos;s
              the co-developer. Every feature in Tattoo Agent was
              built with her direct input. She tests everything from
              the artist&apos;s perspective and tells me when
              something doesn&apos;t work the way artists actually
              work.
            </p>
            <p>
              That&apos;s why Tattoo Agent feels different from
              generic business tools. It wasn&apos;t designed by
              people guessing what artists need. It was designed by
              an artist and an engineer working together.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper dark>
        <div className="mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-2xl uppercase tracking-widest text-lime">
            What Drives Us
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Artists own everything",
                desc: "Your domain, your designs, your client relationships. We provide the tool — you own the business.",
              },
              {
                title: "Honest, not hype",
                desc: "No inflated claims or impossible promises. We show you real math and let you decide.",
              },
              {
                title: "Built for independents",
                desc: "Not chains, not salons — specifically for independent tattoo artists managing their own business.",
              },
              {
                title: "Simple by design",
                desc: "If it's not easy to use between appointments on an iPad, it's not ready to ship.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-cream/10 bg-charcoal p-6"
              >
                <h3 className="font-semibold text-cream">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-gradient-to-b from-charcoal to-black px-4 py-24 text-center sm:px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-[family-name:var(--font-lobster)] text-3xl text-cream sm:text-4xl">
            Want to see what we built?
          </h2>
          <p className="mt-4 text-muted">
            Book a free walkthrough and we&apos;ll show you a real
            artist&apos;s setup.
          </p>
          <div className="mt-8">
            <Button href="/walkthrough" size="lg">
              Book a Free Walkthrough
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted">
            Or reach out directly:{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-lime hover:underline"
            >
              {SITE.email}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
