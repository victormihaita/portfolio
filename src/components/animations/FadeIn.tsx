"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
  amount?: number;
  blur?: boolean;
}

// Custom easing - ease-out-expo for smooth deceleration
const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
  duration = 0.6,
  once = true,
  amount = 0.3,
  blur = false,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  };

  const initial = {
    opacity: 0,
    ...directionOffset[direction],
    ...(blur && { filter: "blur(10px)" }),
  };

  const animate = isInView
    ? {
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
      }
    : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        ease: easeOutExpo,
        delay,
      }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

// Parallax-enabled fade in
interface ParallaxFadeInProps extends FadeInProps {
  parallaxSpeed?: number;
}

export function ParallaxFadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
  duration = 0.6,
  parallaxSpeed = 0.5,
}: ParallaxFadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * parallaxSpeed]);

  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionOffset[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, ease: easeOutExpo, delay }}
      style={{ y, willChange: "transform" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
