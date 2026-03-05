import { Hero } from "@/components/sections/home/Hero";
import { StatsBanner } from "@/components/sections/home/StatsBanner";
import { CostOfNoSystem } from "@/components/sections/home/CostOfNoSystem";
import { ToolComparison } from "@/components/sections/home/ToolComparison";
import { InlineWalkthroughCTA } from "@/components/sections/home/InlineWalkthroughCTA";
import { PlatformDemo } from "@/components/sections/home/PlatformDemo";
import { ProductShowcase } from "@/components/sections/home/ProductShowcase";
import { FollowUpMath } from "@/components/sections/home/FollowUpMath";
import { NoPercentage } from "@/components/sections/home/NoPercentage";
import { SocialProof } from "@/components/sections/home/SocialProof";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { GrowthLadder } from "@/components/sections/home/GrowthLadder";
import { FounderStoryPreview } from "@/components/sections/home/FounderStoryPreview";
import { FAQ } from "@/components/sections/home/FAQ";
import { FinalCTA } from "@/components/sections/home/FinalCTA";
import { StickyMobileCTA } from "@/components/sections/home/StickyMobileCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getFaqJsonLd } from "@/lib/structured-data";
import { faqItems } from "@/data/faq";

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFaqJsonLd(faqItems)),
        }}
      />

      {/* 1. The Guide — here's what you get */}
      <Hero />

      {/* 2. Instant credibility — social proof numbers */}
      <StatsBanner />

      {/* 3. The Problem — fine has a cost */}
      <ScrollReveal>
        <CostOfNoSystem />
      </ScrollReveal>

      {/* 4. The Problem visualized — 6 apps → 1 tool */}
      <ScrollReveal>
        <ToolComparison />
      </ScrollReveal>

      {/* 5. Mid-page CTA break */}
      <InlineWalkthroughCTA />

      {/* 6. The Plan — show it (video) */}
      <ScrollReveal>
        <PlatformDemo />
      </ScrollReveal>

      {/* 7. The Plan — show it (screenshots) */}
      <ScrollReveal>
        <ProductShowcase />
      </ScrollReveal>

      {/* 8. The Plan — prove it (math) */}
      <ScrollReveal>
        <FollowUpMath />
      </ScrollReveal>

      {/* 9. Overcome objections — 0% booking fee */}
      <ScrollReveal>
        <NoPercentage />
      </ScrollReveal>

      {/* 10. Social Proof — testimonials + walkthrough CTA */}
      <ScrollReveal>
        <SocialProof />
      </ScrollReveal>

      {/* 11. The Plan — simplify (3 steps) */}
      <ScrollReveal>
        <HowItWorks />
      </ScrollReveal>

      {/* 12. The Call to Action — plans */}
      <ScrollReveal>
        <GrowthLadder />
      </ScrollReveal>

      {/* 13. Trust — built by people who get it */}
      <ScrollReveal>
        <FounderStoryPreview />
      </ScrollReveal>

      {/* 14. Objection handling */}
      <ScrollReveal>
        <FAQ />
      </ScrollReveal>

      {/* 15. Final push */}
      <ScrollReveal>
        <FinalCTA />
      </ScrollReveal>

      {/* Sticky mobile CTA — fixed positioning */}
      <StickyMobileCTA />
    </main>
  );
}
