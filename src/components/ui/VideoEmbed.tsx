"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface VideoEmbedProps {
  /** YouTube video ID (the part after v= or youtu.be/) */
  videoId?: string;
  title?: string;
  className?: string;
}

export function VideoEmbed({
  videoId,
  title = "Platform walkthrough",
  className,
}: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

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

  if (isPlaying) {
    return (
      <div
        className={cn(
          "aspect-video overflow-hidden rounded-xl",
          className,
        )}
      >
        <iframe
          src={
            `https://www.youtube.com/embed/${videoId}` +
            "?autoplay=1&rel=0"
          }
          title={title}
          allow={
            "accelerometer; autoplay; clipboard-write; " +
            "encrypted-media; gyroscope; picture-in-picture"
          }
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handlePlay}
      aria-label={`Play video: ${title}`}
      className={cn(
        "group relative block w-full cursor-pointer " +
          "aspect-video overflow-hidden rounded-xl " +
          "focus-visible:outline-none focus-visible:ring-2 " +
          "focus-visible:ring-lime focus-visible:ring-offset-2 " +
          "focus-visible:ring-offset-black",
        className,
      )}
    >
      {/* YouTube thumbnail */}
      <Image
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 896px"
        className="object-cover transition-transform duration-300
          group-hover:scale-105"
        priority={false}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black/30 transition-colors
          duration-300 group-hover:bg-black/20"
      />

      {/* Play button */}
      <div
        className="absolute inset-0 flex items-center
          justify-center"
      >
        <div
          className="flex h-16 w-16 items-center justify-center
            rounded-full bg-lime shadow-lg transition-transform
            duration-300 group-hover:scale-110 sm:h-20 sm:w-20"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="ml-1 h-7 w-7 sm:h-8 sm:w-8"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7L8 5z" fill="black" />
          </svg>
        </div>
      </div>
    </button>
  );
}
