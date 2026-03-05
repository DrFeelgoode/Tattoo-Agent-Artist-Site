import { Button } from "@/components/ui/Button";

export function InlineWalkthroughCTA() {
  return (
    <section className="bg-black px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
        <p className="flex-1 text-xl text-cream">
          Want to see how it actually works?
          Book a free 15-minute walkthrough.
        </p>
        <Button href="/walkthrough" variant="outline">
          Book a Walkthrough
        </Button>
      </div>
    </section>
  );
}
