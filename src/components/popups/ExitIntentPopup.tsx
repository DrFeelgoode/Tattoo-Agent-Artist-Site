"use client";

import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useExitIntent } from "@/hooks/useExitIntent";
import { Button } from "@/components/ui/Button";
import { BrandIcon } from "@/components/ui/BrandIcon";

export function ExitIntentPopup() {
  const { triggered, dismiss } = useExitIntent();
  const router = useRouter();

  const handleCTA = () => {
    dismiss();
    router.push("/walkthrough");
  };

  return (
    <AnimatePresence>
      {triggered && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            className="fixed inset-0 z-[100] bg-black/70"
          />

          {/* Popup — centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 z-[101] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-lime/20 bg-charcoal p-8"
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
              <h3 className="mt-4 font-[family-name:var(--font-lobster)] text-2xl text-cream">
                Before you go...
              </h3>
              <p className="mt-3 text-sm text-muted">
                Want to see how it works first? Book a free
                walkthrough — no commitment, just a real look at
                what Tattoo Agent can do for your business.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button onClick={handleCTA}>
                  Book a Free Walkthrough
                </Button>
                <button
                  onClick={dismiss}
                  className="text-sm text-muted transition-colors hover:text-cream"
                >
                  No thanks
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
