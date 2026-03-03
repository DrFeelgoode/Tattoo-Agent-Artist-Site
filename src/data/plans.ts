import type { Plan } from "@/types";

export const plans: Plan[] = [
  {
    id: "essentials",
    name: "Artist Essentials",
    tagline: "Get Consistently Booked",
    price: "$99",
    priceNote: "/month",
    description:
      "Convert more inquiries into booked appointments. " +
      "Keep your schedule consistently full instead of swinging " +
      "between swamped and empty.",
    features: [
      {
        feature: "Professional custom website",
        outcome:
          "Clients take you seriously and book on the spot " +
          "instead of \"thinking about it\"",
      },
      {
        feature: "Automated booking + deposits",
        outcome:
          "Instead of messaging back and forth and watching " +
          "Venmo, clients pay and book through one link. " +
          "You get notified when it's done.",
      },
      {
        feature: "Unified messaging hub",
        outcome:
          "Never miss a booking inquiry again, whether it " +
          "comes from Instagram, text, or email",
      },
      {
        feature: "Email & SMS marketing",
        outcome:
          "Stay in your past clients' minds so they come " +
          "back and refer friends",
      },
      {
        feature: "Social media scheduler",
        outcome:
          "Post consistently without thinking about it — " +
          "consistency is what the algorithm rewards",
      },
      {
        feature: "Aftercare automation",
        outcome:
          "Six emails over two months checking on healing — " +
          "without you typing a word",
      },
      {
        feature: "6-month follow-up",
        outcome:
          "An automatic nudge that brings past clients " +
          "back for more ink",
      },
      {
        feature: "Birthday texts & emails",
        outcome:
          "A hundred past clients, a hundred reminders " +
          "every year, zero effort on your end",
      },
      {
        feature: "Calendar sync",
        outcome:
          "Your appointments sync to your Google or Apple " +
          "calendar — no double bookings, and you don't have " +
          "to check a new app to see your schedule",
      },
      {
        feature: "Client self-service",
        outcome:
          "Clients reschedule and cancel through their " +
          "own email links — you're not the middleman anymore",
      },
      {
        feature: "Payment processing",
        outcome:
          "Integrated with Stripe. You keep 100% minus " +
          "standard Stripe fees. No cut to Tattoo Agent.",
      },
      {
        feature: "Complete CRM",
        outcome:
          "Every client's history, notes, and preferences " +
          "in one place — not scattered across DMs and texts",
      },
    ],
    cta: { label: "Get Started", href: "/purchase" },
    isComingSoon: false,
    tier: 1,
  },
  {
    id: "growth",
    name: "Artist Growth",
    tagline: "Grow Your Brand & Revenue",
    price: "$399",
    priceNote: "/month",
    description:
      "Build income streams beyond tattooing. Reach more " +
      "people. Make money even without someone in the chair.",
    features: [
      {
        feature: "Merch store (print-on-demand)",
        outcome:
          "Your art on shirts, stickers, prints — " +
          "earning while you sleep",
      },
      {
        feature: "AI assistant for clients",
        outcome:
          "Clients get instant answers about aftercare, " +
          "pricing, and booking — even at 2am",
      },
      {
        feature: "AI-powered ad campaigns",
        outcome:
          "Reach new clients on Instagram, Facebook, " +
          "TikTok, Google — with AI that optimizes so " +
          "you're not wasting money",
      },
    ],
    cta: { label: "Join the Waitlist", href: "/plans/growth" },
    isComingSoon: true,
    tier: 2,
  },
  {
    id: "pro-plus",
    name: "Artist Pro+",
    tagline: "We Run Your Business",
    price: "$1,499",
    priceNote: "/month",
    description:
      "You tattoo. We handle everything else. For artists " +
      "who have the income but not the time or desire to " +
      "manage the business side.",
    features: [
      {
        feature: "Managed social media",
        outcome:
          "We post for you — consistent content, " +
          "on schedule, on brand",
      },
      {
        feature: "Managed ad campaigns",
        outcome:
          "We run your ads, track what works, and " +
          "optimize so you don't have to think about it",
      },
      {
        feature: "Client interactions",
        outcome:
          "We handle inquiries, scheduling coordination, " +
          "and follow-ups on your behalf",
      },
      {
        feature: "Website updates",
        outcome:
          "Need a new page, gallery update, or design " +
          "tweak? We take care of it.",
      },
      {
        feature: "Marketing messages",
        outcome:
          "Flash day promos, booking announcements, " +
          "newsletters — we write them and send them",
      },
    ],
    cta: { label: "Join the Waitlist", href: "/plans/pro-plus" },
    isComingSoon: true,
    tier: 3,
  },
];
