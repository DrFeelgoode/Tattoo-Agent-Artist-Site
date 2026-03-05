"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("section");
    const finalCta = document.getElementById("final-cta");

    if (!hero || !finalCta) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === hero) {
            // Show when hero is NOT visible (scrolled past)
            const finalEl =
              document.getElementById("final-cta");
            const finalVisible = finalEl
              ? finalEl.getBoundingClientRect().top <
                window.innerHeight
              : false;
            setVisible(
              !entry.isIntersecting && !finalVisible,
            );
          }
          if (entry.target === finalCta) {
            // Hide when FinalCTA IS visible
            if (entry.isIntersecting) {
              setVisible(false);
            } else {
              const heroEl = document.querySelector("section");
              if (!heroEl) return;
              const rect = heroEl.getBoundingClientRect();
              const heroVisible =
                rect.bottom > 0 && rect.top < window.innerHeight;
              setVisible(!heroVisible);
            }
          }
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(hero);
    observer.observe(finalCta);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={
        "fixed bottom-0 left-0 right-0 z-50 border-t " +
        "border-cream/10 bg-black/95 px-4 py-3 " +
        "backdrop-blur-sm transition-transform " +
        "duration-300 md:hidden " +
        (visible
          ? "translate-y-0"
          : "translate-y-full")
      }
    >
      <Button href="/purchase" className="w-full">
        Get Started
      </Button>
    </div>
  );
}
