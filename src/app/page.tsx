import { Hero } from "@/components/sections/home/Hero";
import { CostOfNoSystem } from "@/components/sections/home/CostOfNoSystem";
import { GrowthLadder } from "@/components/sections/home/GrowthLadder";
import { PlatformDemo } from "@/components/sections/home/PlatformDemo";
import { FollowUpMath } from "@/components/sections/home/FollowUpMath";
import { SocialProof } from "@/components/sections/home/SocialProof";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { FounderStoryPreview } from "@/components/sections/home/FounderStoryPreview";
import { FAQ } from "@/components/sections/home/FAQ";
import { FinalCTA } from "@/components/sections/home/FinalCTA";
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
      <Hero />
      <ScrollReveal>
        <CostOfNoSystem />
      </ScrollReveal>
      <ScrollReveal>
        <GrowthLadder />
      </ScrollReveal>
      <ScrollReveal>
        <PlatformDemo />
      </ScrollReveal>
      <ScrollReveal>
        <FollowUpMath />
      </ScrollReveal>
      <ScrollReveal>
        <SocialProof />
      </ScrollReveal>
      <ScrollReveal>
        <HowItWorks />
      </ScrollReveal>
      <ScrollReveal>
        <FounderStoryPreview />
      </ScrollReveal>
      <ScrollReveal>
        <FAQ />
      </ScrollReveal>
      <ScrollReveal>
        <FinalCTA />
      </ScrollReveal>
    </main>
  );
}
