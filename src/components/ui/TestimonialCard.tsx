import { Card } from "./Card";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <Card className="flex flex-col justify-between">
      <blockquote className="mb-6 text-cream/90 leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime/20 text-lime">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-medium text-cream">
            {testimonial.name}
          </p>
          <a
            href={testimonial.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-lime hover:underline"
          >
            {testimonial.handle}
          </a>
          {testimonial.websiteUrl && (
            <>
              {" "}
              <span className="text-muted">·</span>{" "}
              <a
                href={testimonial.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-cream"
              >
                {testimonial.websiteName}
              </a>
            </>
          )}
        </div>
      </div>
    </Card>
  );
}
