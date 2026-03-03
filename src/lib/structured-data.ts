import { SITE } from "./constants";

/** Organization JSON-LD for the site */
export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tattoo Agent",
    url: SITE.url,
    logo: `${SITE.url}/images/brand/logo.webp`,
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Holladay",
      addressRegion: "UT",
      addressCountry: "US",
    },
    sameAs: [SITE.instagram.url],
    founder: {
      "@type": "Person",
      name: SITE.founder,
    },
  };
}

/** Product JSON-LD for the Essentials plan */
export function getProductJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Tattoo Agent — Artist Essentials",
    description:
      "All-in-one business management tool for independent " +
      "tattoo artists. Website, booking, payments, messaging, " +
      "marketing, and CRM in one tool.",
    brand: {
      "@type": "Brand",
      name: "Tattoo Agent",
    },
    offers: {
      "@type": "Offer",
      price: "99",
      priceCurrency: "USD",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: `${SITE.url}/plans/essentials`,
    },
  };
}

/** FAQPage JSON-LD */
export function getFaqJsonLd(
  items: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
