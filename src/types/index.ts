export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface Plan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceNote?: string;
  description: string;
  features: PlanFeature[];
  cta: {
    label: string;
    href: string;
  };
  isComingSoon: boolean;
  tier: 1 | 2 | 3;
}

export interface PlanFeature {
  feature: string;
  outcome: string;
}

export interface Testimonial {
  name: string;
  handle: string;
  instagramUrl: string;
  quote: string;
  websiteUrl?: string;
  websiteName?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}

export interface CostItem {
  icon: string;
  title: string;
  description: string;
}

export interface ValuePoint {
  title: string;
  description: string;
}
