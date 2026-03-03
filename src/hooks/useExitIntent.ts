"use client";

import { useEffect, useState, useCallback } from "react";

function getSessionDismissed(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem("exitIntentDismissed") === "true";
}

/**
 * Detect exit intent (cursor leaving viewport at the top).
 * Desktop only — mobile doesn't have this concept.
 */
export function useExitIntent() {
  const [triggered, setTriggered] = useState(false);
  const [dismissed, setDismissed] = useState(
    () => getSessionDismissed(),
  );

  useEffect(() => {
    if (dismissed) return;

    // Only run on desktop (mouse-based devices)
    if (typeof window === "undefined") return;
    if ("ontouchstart" in window) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when cursor leaves from the top
      if (e.clientY <= 0) {
        setTriggered(true);
      }
    };

    // Delay attaching the listener so it doesn't fire immediately
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dismissed]);

  const dismiss = useCallback(() => {
    setTriggered(false);
    setDismissed(true);
    sessionStorage.setItem("exitIntentDismissed", "true");
  }, []);

  return { triggered: triggered && !dismissed, dismiss };
}
