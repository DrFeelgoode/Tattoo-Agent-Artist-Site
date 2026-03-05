import type { CostItem, HowItWorksStep, ValuePoint } from "@/types";

export const costItems: CostItem[] = [
  {
    icon: "💬",
    title: "Missed DMs = missed income",
    description:
      "Every DM you miss is a $300–500 tattoo that went to " +
      "someone who responded faster.",
  },
  {
    icon: "💸",
    title: "Deposit chasing wastes your time",
    description:
      "Collecting deposits over Venmo means chasing messages, " +
      "watching for payments, and manually booking — and " +
      "sometimes people just ghost.",
  },
  {
    icon: "👻",
    title: "No follow-ups = forgotten artist",
    description:
      "No follow-up system means past clients who'd happily " +
      "come back just forget about you.",
  },
  {
    icon: "📉",
    title: "Inconsistent posting buries your work",
    description:
      "Inconsistent posting means the algorithm buries your " +
      "work. Consistency is what gets you seen.",
  },
  {
    icon: "🚪",
    title: "Clunky booking loses clients",
    description:
      "Clients who have to DM you to book are more likely " +
      "to give up and go to someone who makes it easier.",
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: 1,
    title: "Pick your plan",
    description:
      "Choose the level that fits where you are right now.",
  },
  {
    step: 2,
    title: "We build your setup",
    description:
      "You go through the onboarding wizard to give us your " +
      "info, then Garrett personally builds your website, " +
      "configures your automations, and makes sure everything " +
      "works. You buy your own domain so you own it.",
  },
  {
    step: 3,
    title: "You tattoo",
    description:
      "Clients book themselves. Deposits get collected " +
      "automatically. Follow-ups go out on their own. Your " +
      "calendar syncs to the one you already use. You focus " +
      "on the art and the clients.",
  },
];

export const followUpMathPoints: ValuePoint[] = [
  {
    title: "2+ extra bookings per month from 6-month follow-ups",
    description:
      "If you tattoo 20 clients a month and just 10% rebook " +
      "from an automatic 6-month follow-up, that's 2 extra " +
      "tattoos a month you didn't have to chase down.",
  },
  {
    title: "20+ extra bookings per year from birthday messages",
    description:
      "If you have 100 past clients and 20% book from a " +
      "birthday text, that's 20 extra tattoos a year — from " +
      "a message you never wrote.",
  },
  {
    title: "A second funnel from your website on Google",
    description:
      "Your website shows up on Google, not just Instagram. " +
      "That's a whole new way people find you that you " +
      "didn't have before.",
  },
  {
    title: "Fewer drop-offs with professional booking",
    description:
      "A professional booking system means fewer people drop " +
      "off between \"I'm interested\" and \"I'm booked.\" " +
      "Instead of DM back-and-forth, they click a link, " +
      "pay their deposit, and they're on your calendar.",
  },
];

export const mathBreakdown = {
  headline: "One extra tattoo covers the whole month",
  subhead:
    "Tattoo Agent costs $99/month. One extra booking — from " +
    "an automated follow-up, a birthday text, or a client " +
    "who found your website on Google — pays for itself.",
  example: {
    title:
      "Here's what happened with one artist's contact list",
    contacts: 417,
    followUpRate: "2.4%",
    extraTattoos: 10,
    avgTattooValue: "$350",
    monthlyRevenue: "$3,500",
    monthlyCost: "$99",
  },
};

export const funnelValuePoints: ValuePoint[] = [
  {
    title: "Professional website",
    description: "Your own site, your own domain, your brand.",
  },
  {
    title: "Automated booking",
    description:
      "Clients apply, pay deposits, and book — without " +
      "the back-and-forth.",
  },
  {
    title: "One inbox for everything",
    description:
      "Instagram DMs, texts, and emails — all in one place.",
  },
  {
    title: "Follow-ups on autopilot",
    description:
      "Aftercare, rebooking nudges, and birthday messages " +
      "that send themselves.",
  },
];
