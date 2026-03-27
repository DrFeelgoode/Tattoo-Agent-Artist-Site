"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { BrandIcon } from "@/components/ui/BrandIcon";

const STORAGE_KEY = "welcomeGateDismissed";

export function WelcomeGate() {
  const [isVisible, setIsVisible] = useState(false);
  const trapRef = useFocusTrap<HTMLDivElement>(isVisible);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;

    // Skip the gate if visitor was referred from tattoo-agent.com
    try {
      const referrer = new URL(document.referrer);
      if (referrer.hostname.includes("tattoo-agent.com")) {
        localStorage.setItem(STORAGE_KEY, "true");
        return;
      }
    } catch {
      // No referrer or invalid URL — continue normally
    }

    const timer = setTimeout(() => setIsVisible(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const handleArtist = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setIsVisible(false);
  };

  const handleClient = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setIsVisible(false);
    window.location.href = "https://tattoo-agent.com";
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Blurred backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Popup */}
          <motion.div
            ref={trapRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="welcome-gate-title"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed left-1/2 top-1/2 z-[201] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-lime/20 bg-charcoal p-8 sm:p-10"
          >
            <div className="text-center">
              <BrandIcon size={56} className="mx-auto" />
              <h2
                id="welcome-gate-title"
                className="mt-5 font-[family-name:var(--font-lobster)] text-3xl text-cream sm:text-4xl"
              >
                Welcome to Tattoo Agent
              </h2>
              <p className="mt-3 text-base text-muted">
                What brings you here today?
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <button
                  onClick={handleArtist}
                  className="w-full rounded-lg bg-lime px-6 py-4 text-lg font-semibold text-black transition-colors hover:bg-lime/90"
                >
                  I&apos;m a tattoo artist looking to
                  grow my business
                </button>
                <button
                  onClick={handleClient}
                  className="w-full rounded-lg border-2 border-cream/20 px-6 py-4 text-lg font-semibold text-cream transition-colors hover:border-lime hover:text-lime"
                >
                  I&apos;m looking for my next
                  tattoo artist
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
