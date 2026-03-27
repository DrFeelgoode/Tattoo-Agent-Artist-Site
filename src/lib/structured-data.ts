import { SITE } from "./constants";

/** Organization JSON-LD for the site */
export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tattoo Agent",
    url: SITE.url,
    logo: `${SITE.url}/images/brand/logo-full.webp`,
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
      jobTitle: "Founder & CEO",
    },
    foundingDate: "2025",
    numberOfEmployees: { "@type": "QuantitativeValue", value: 1 },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      email: SITE.email,
      contactType: "customer support",
      availableLanguage: "English",
    },
  };
}

/** SoftwareApplication JSON-LD — more specific than Product */
export function getSoftwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Tattoo Agent",
    applicationCategory: "BusinessApplication",
    applicationSubCategory:
      "Tattoo Artist Business Management Tool",
    operatingSystem: "Web",
    description:
      "All-in-one business management tool built specifically " +
      "for independent tattoo artists. Includes professional " +
      "custom website, automated booking with deposits, unified " +
      "messaging hub (Instagram DMs, SMS, email), email & SMS " +
      "marketing, social media scheduling, aftercare automation, " +
      "6-month follow-ups, birthday messages, calendar sync, " +
      "client CRM, and payment processing via Stripe. Artists " +
      "keep 100% of earnings minus standard Stripe fees.",
    url: SITE.url,
    offers: [
      {
        "@type": "Offer",
        name: "Artist Essentials",
        price: "99",
        priceCurrency: "USD",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: `${SITE.url}/plans/essentials`,
        description:
          "Website, booking, payments, messaging, marketing, " +
          "and CRM in one tool. $99/month.",
      },
      {
        "@type": "Offer",
        name: "Artist Growth",
        price: "399",
        priceCurrency: "USD",
        availability: "https://schema.org/PreOrder",
        url: `${SITE.url}/plans/growth`,
        description:
          "Everything in Essentials plus merch store, AI " +
          "business assistant, ad campaigns, and QuickBooks. " +
          "$399/month. Coming soon.",
      },
      {
        "@type": "Offer",
        name: "Artist Pro+",
        price: "1499",
        priceCurrency: "USD",
        availability: "https://schema.org/PreOrder",
        url: `${SITE.url}/plans/pro-plus`,
        description:
          "Done-for-you tier. Managed social media, ads, " +
          "client interactions, and marketing. $1,499/month. " +
          "Coming soon.",
      },
    ],
    featureList: [
      "Professional custom website with artist's own domain",
      "Automated booking with deposit collection",
      "Payment processing via Stripe (0% platform fee)",
      "Unified messaging hub (Instagram DMs, SMS, email)",
      "Email & SMS marketing campaigns",
      "Social media scheduling (Instagram, Facebook, TikTok)",
      "Automated aftercare email sequences",
      "6-month follow-up rebooking nudges",
      "Birthday text & email automation",
      "Google Calendar & Apple Calendar sync",
      "Complete client CRM with history and notes",
      "Client self-service (reschedule/cancel)",
    ],
    screenshot: `${SITE.url}/images/brand/logo-full.webp`,
    author: {
      "@type": "Organization",
      name: "Tattoo Agent",
      url: SITE.url,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "3",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Jessica Sheahan",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Tattoo Agent completely streamlined my business. " +
          "It manages everything I need in one place — " +
          "bookings, calendar, messages from every platform, " +
          "and even social media posts.",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Kipling McClellan",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Tattoo Agent has taken a huge weight off my " +
          "shoulders. My workload feels manageable, my stress " +
          "is lower, and I finally have more time to pour " +
          "into my art.",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Kamila Fuentes",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "With how easy it has been for DMs to slip through " +
          "the cracks, the way Tattoo Agent streamlines the " +
          "whole process is incredibly helpful. I feel way " +
          "more efficient as an artist and business person.",
      },
    ],
  };
}

/** WebSite JSON-LD with search action for sitelinks */
export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tattoo Agent",
    url: SITE.url,
    description: SITE.description,
    publisher: {
      "@type": "Organization",
      name: "Tattoo Agent",
      url: SITE.url,
    },
  };
}

/** BreadcrumbList JSON-LD for navigation hierarchy */
export function getBreadcrumbJsonLd(
  items: { name: string; href: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.href}`,
    })),
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
