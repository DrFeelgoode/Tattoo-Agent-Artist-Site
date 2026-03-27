import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { inter, lobster, bebasNeue } from "@/lib/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WelcomeGate } from "@/components/popups/WelcomeGate";
import { TimedPopup } from "@/components/popups/TimedPopup";
import { ExitIntentPopup } from "@/components/popups/ExitIntentPopup";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { MicrosoftClarity } from "@/components/analytics/MicrosoftClarity";
import {
  getOrganizationJsonLd,
  getSoftwareApplicationJsonLd,
  getWebSiteJsonLd,
} from "@/lib/structured-data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "Tattoo Agent — The All-in-One Tool for Tattoo Artists",
    template: "%s | Tattoo Agent",
  },
  description:
    "Book more clients. Grow your brand. The all-in-one business " +
    "tool built for independent tattoo artists. Website, booking, " +
    "payments, marketing, CRM — one tool, $99/month.",
  keywords: [
    "tattoo artist business tool",
    "tattoo booking software",
    "tattoo artist website builder",
    "tattoo business management",
    "tattoo appointment scheduling",
    "tattoo artist CRM",
    "tattoo marketing automation",
    "tattoo deposit collection",
    "independent tattoo artist tools",
    "tattoo aftercare automation",
  ],
  metadataBase: new URL("https://tattooagent.art"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tattooagent.art",
    siteName: "Tattoo Agent",
    title:
      "Tattoo Agent — The All-in-One Tool for Tattoo Artists",
    description:
      "Book more clients. Grow your brand. The all-in-one business " +
      "tool built for independent tattoo artists. $99/month.",
    images: [
      {
        url: "/images/brand/logo-full.webp",
        width: 1200,
        height: 630,
        alt: "Tattoo Agent — All-in-one tattoo artist business tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tattoo Agent — The All-in-One Tool for Tattoo Artists",
    description:
      "Book more clients. Grow your brand. The all-in-one business " +
      "tool built for independent tattoo artists. $99/month.",
    images: ["/images/brand/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lobster.variable} ${bebasNeue.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              getSoftwareApplicationJsonLd(),
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebSiteJsonLd()),
          }}
        />
      </head>
      <body className="min-h-screen bg-black text-xl font-[family-name:var(--font-bebas-neue)] text-cream antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="pt-[73px]">
          {children}
        </main>
        <Footer />
        <WelcomeGate />
        <TimedPopup />
        <ExitIntentPopup />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics />
        <MicrosoftClarity />
      </body>
    </html>
  );
}
