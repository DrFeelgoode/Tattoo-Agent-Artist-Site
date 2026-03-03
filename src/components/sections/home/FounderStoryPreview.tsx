import Link from "next/link";
import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function FounderStoryPreview() {
  return (
    <SectionWrapper dark>
      <div className="mx-auto max-w-4xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Photo */}
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/images/founders/garrett-kip-snow.webp"
              alt="Garrett and Kipling McClellan"
              width={600}
              height={400}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="text-center lg:text-left">
            <p className="font-[family-name:var(--font-bebas-neue)] text-lg uppercase tracking-widest text-lime">
              The backstory
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-lobster)] text-3xl text-cream sm:text-4xl">
              Built for a tattoo artist,
              <br />
              by her brother
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              I built Tattoo Agent for my sister. She&apos;s a tattoo
              artist who was spending more time chasing Venmo deposits
              and answering DMs than creating art. So I built a tool
              that handles that for her — and now it&apos;s available
              to any independent artist who wants the same thing.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block text-lime transition-colors hover:text-lime/80"
            >
              Read the full story →
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
