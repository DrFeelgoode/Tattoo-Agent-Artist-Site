"use client";

import { useEffect, useRef } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, ' +
  '[tabindex]:not([tabindex="-1"])';

/**
 * Trap focus inside a container while active.
 * Returns a ref to attach to the container element.
 */
export function useFocusTrap<T extends HTMLElement>(
  active: boolean,
  onEscape?: () => void,
) {
  const ref = useRef<T>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active) return;

    // Store the element that had focus before trap activated
    previousFocus.current =
      document.activeElement as HTMLElement | null;

    const container = ref.current;
    if (!container) return;

    // Focus the first focusable element inside the trap
    const focusables =
      container.querySelectorAll<HTMLElement>(FOCUSABLE);
    if (focusables.length > 0) {
      focusables[0].focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onEscape) {
        e.preventDefault();
        onEscape();
        return;
      }

      if (e.key !== "Tab") return;

      const currentFocusables =
        container.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (currentFocusables.length === 0) return;

      const first = currentFocusables[0];
      const last =
        currentFocusables[currentFocusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      // Restore focus when trap deactivates
      previousFocus.current?.focus();
    };
  }, [active, onEscape]);

  return ref;
}
