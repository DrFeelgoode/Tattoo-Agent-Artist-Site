import { cn } from "@/lib/utils";

interface VideoEmbedProps {
  /** YouTube video URL or video ID */
  videoId?: string;
  title?: string;
  className?: string;
}

export function VideoEmbed({
  videoId,
  title = "Platform walkthrough",
  className,
}: VideoEmbedProps) {
  if (!videoId) {
    return (
      <div
        className={cn(
          "flex aspect-video items-center justify-center " +
            "rounded-xl border-2 border-dashed border-cream/20 " +
            "bg-charcoal",
          className,
        )}
      >
        <div className="text-center">
          <div className="mb-2 text-4xl">🎬</div>
          <p className="text-sm text-muted">
            Video embed placeholder
          </p>
          <p className="mt-1 text-xs text-muted/60">
            YouTube video ID will go here
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("aspect-video overflow-hidden rounded-xl", className)}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}
