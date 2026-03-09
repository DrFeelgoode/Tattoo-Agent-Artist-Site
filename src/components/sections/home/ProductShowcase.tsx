"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";

const artistSites = [
  {
    name: "Jessica Sheahan",
    handle: "@fairytale_tattoos",
    url: "https://fairytaletattoos.com",
  },
  {
    name: "Kipling McClellan",
    handle: "@xx_kipling_xx",
    url: "https://xx-kipling-xx.art",
  },
  {
    name: "Kamila Fuentes",
    handle: "@ink.jinx",
    url: "https://inkjinx.com",
  },
];

export function ProductShowcase() {
  return (
    <SectionWrapper>
      <div className="text-center">
        <p className="font-[family-name:var(--font-bebas-neue)] text-2xl uppercase tracking-widest text-lime">
          Your website
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-lobster)] text-4xl text-cream sm:text-5xl">
          See what artists&apos; sites look like
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
          Every artist gets a custom website — built to match
          their style and optimized to show up on Google.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {artistSites.map((site) => (
          <div key={site.url} className="group">
            <div className="relative overflow-hidden rounded-xl border border-cream/10">
              {/* Iframe preview — non-interactive to avoid scroll hijacking */}
              <div className="aspect-[3/4] overflow-hidden">
                <iframe
                  src={site.url}
                  title={`${site.name}'s website`}
                  className="h-[200%] w-[200%] origin-top-left scale-50 border-0"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
              {/* Clickable overlay */}
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <span className="w-full p-4 text-center text-base font-semibold text-lime">
                  Visit Site →
                </span>
              </a>
            </div>
            <div className="mt-3 text-center">
              <p className="text-base font-semibold text-cream">
                {site.name}
              </p>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-lime hover:underline"
              >
                {site.handle}
              </a>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
