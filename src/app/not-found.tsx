import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <span className="text-6xl">💀</span>
      <h1 className="mt-6 font-[family-name:var(--font-lobster)] text-5xl text-cream">
        404
      </h1>
      <p className="mt-4 text-lg text-muted">
        This page wandered off. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/">Go Home</Button>
        <Button href="/contact" variant="outline">
          Contact Us
        </Button>
      </div>
    </div>
  );
}
