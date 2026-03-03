"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface ParallaxImageProps {
  src: string;
  opacity?: number;
}

/**
 * Background image with parallax scrolling on desktop,
 * fixed position on tablet/mobile.
 */
export function ParallaxImage({
  src,
  opacity = 0.4,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Image moves at 30% of the scroll speed for parallax
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {isDesktop ? (
        <motion.div
          style={{ y, opacity }}
          className="absolute -inset-y-[20%] inset-x-0"
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      ) : (
        <div style={{ opacity }} className="absolute inset-0">
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      )}
    </div>
  );
}
