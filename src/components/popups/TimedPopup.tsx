"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { Button } from "@/components/ui/Button";
import { BrandIcon } from "@/components/ui/BrandIcon";

const POPUP_DELAY_MS = 45000; // 45 seconds
const STORAGE_KEY = "timedPopupDismissed";

export function TimedPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const dismiss = useCallback(() => {
    setIsVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "true");
  }, []);

  const trapRef = useFocusTrap<HTMLDivElement>(
    isVisible,
    dismiss,
  );

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const handleCTA = () => {
    dismiss();
    router.push("/walkthrough");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            className="fixed inset-0 z-[100] bg-black/70"
            aria-hidden="true"
          />

          {/* Popup — centered */}
          <motion.div
            ref={trapRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="timed-popup-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 z-[101] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-cream/10 bg-charcoal p-8"
          >
            <button
              onClick={dismiss}
              className="absolute right-4 top-4 text-muted transition-colors hover:text-cream"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="text-center">
              <BrandIcon size={48} className="mx-auto" />
              <h3
                id="timed-popup-title"
                className="mt-4 font-[family-name:var(--font-lobster)] text-2xl text-cream"
              >
                Want to see the tool in action?
              </h3>
              <p className="mt-3 text-sm text-muted">
                Book a free walkthrough and Garrett will personally
                show you a real artist&apos;s setup. No commitment,
                no pitch — just a look at what it does.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button onClick={handleCTA}>
                  Book a Free Walkthrough
                </Button>
                <button
                  onClick={dismiss}
                  className="text-sm text-muted transition-colors hover:text-cream"
                >
                  Maybe later
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
