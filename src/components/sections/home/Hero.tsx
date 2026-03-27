"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const instant = { duration: 0 };

  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center sm:px-6 lg:px-8">
      {/* Single bold background image with parallax */}
      <ParallaxImage
        src="/images/tattoos/tattoo-3.webp"
        opacity={0.45}
      />

      {/* Gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-lime/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, scale: 0.8 }
          }
          animate={{ opacity: 1, scale: 1 }}
          transition={
            prefersReducedMotion ? instant : { duration: 0.5 }
          }
          className="mb-6"
        >
          <Image
            src="/images/brand/icon.webp"
            alt="Tattoo Agent"
            width={56}
            height={56}
            className="mx-auto drop-shadow-lg"
          />
        </motion.div>

        <motion.h1
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 20 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={
            prefersReducedMotion ? instant : { duration: 0.6 }
          }
          className="font-[family-name:var(--font-lobster)] text-4xl leading-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Book More Clients.
          <br />
          <span className="text-lime">Grow Your Brand.</span>
          <br />
          Master Your Business.
        </motion.h1>

        <motion.p
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 20 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={
            prefersReducedMotion
              ? instant
              : { duration: 0.6, delay: 0.2 }
          }
          className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl"
        >
          The all-in-one tool built for independent tattoo artists.
          Website, booking, payments, marketing — one tool.
        </motion.p>

        <motion.div
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 20 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={
            prefersReducedMotion
              ? instant
              : { duration: 0.6, delay: 0.4 }
          }
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button href="/pricing" size="lg">
            See Plans
          </Button>
          <Button href="/walkthrough" variant="outline" size="lg">
            Book a Free Walkthrough
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
