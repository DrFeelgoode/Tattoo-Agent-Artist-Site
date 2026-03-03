import type { NavLink } from "@/types";

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Plans",
    href: "/pricing",
    children: [
      { label: "Artist Essentials", href: "/plans/essentials" },
      { label: "Artist Growth", href: "/plans/growth" },
      { label: "Artist Pro+", href: "/plans/pro-plus" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const footerNavLinks = {
  product: [
    { label: "Artist Essentials", href: "/plans/essentials" },
    { label: "Artist Growth", href: "/plans/growth" },
    { label: "Artist Pro+", href: "/plans/pro-plus" },
    { label: "Pricing", href: "/pricing" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Book a Walkthrough", href: "/walkthrough" },
    { label: "Customization Consults", href: "/customization" },
  ],
  resources: [
    {
      label: "Find an Artist",
      href: "https://tattoo-agent.com",
      external: true,
    },
  ],
  legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
} as const;
