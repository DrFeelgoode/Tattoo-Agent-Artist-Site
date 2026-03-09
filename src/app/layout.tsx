import type { Metadata } from "next";
import { inter, lobster, bebasNeue } from "@/lib/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WelcomeGate } from "@/components/popups/WelcomeGate";
import { TimedPopup } from "@/components/popups/TimedPopup";
import { ExitIntentPopup } from "@/components/popups/ExitIntentPopup";
import {
  getOrganizationJsonLd,
  getProductJsonLd,
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
    "payments, marketing — one tool.",
  metadataBase: new URL("https://tattooagent.art"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tattooagent.art",
    siteName: "Tattoo Agent",
    title:
      "Tattoo Agent — The All-in-One Tool for Tattoo Artists",
    description:
      "Book more clients. Grow your brand. The all-in-one business " +
      "tool built for independent tattoo artists.",
    images: [
      {
        url: "/images/brand/logo-full.webp",
        width: 1200,
        height: 630,
        alt: "Tattoo Agent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tattoo Agent — The All-in-One Tool for Tattoo Artists",
    description:
      "Book more clients. Grow your brand. The all-in-one business " +
      "tool built for independent tattoo artists.",
    images: ["/images/brand/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
            __html: JSON.stringify(getProductJsonLd()),
          }}
        />
      </head>
      <body className="min-h-screen bg-black text-xl font-[family-name:var(--font-bebas-neue)] text-cream antialiased">
        <Navbar />
        <div className="pt-[73px]">{children}</div>
        <Footer />
        <WelcomeGate />
        <TimedPopup />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
