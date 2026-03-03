import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { VideoEmbed } from "@/components/ui/VideoEmbed";

export function PlatformDemo() {
  return (
    <SectionWrapper dark>
      <div className="text-center">
        <p className="font-[family-name:var(--font-bebas-neue)] text-lg uppercase tracking-widest text-lime">
          See it in action
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-lobster)] text-3xl text-cream sm:text-4xl">
          From first click to automated follow-up
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          See how it works — from the client&apos;s first click to
          your automated follow-up.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-4xl">
        {/* Replace videoId with actual YouTube ID when available */}
        <VideoEmbed />
      </div>
    </SectionWrapper>
  );
}
