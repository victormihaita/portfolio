"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SITE_NAME, SITE_TITLE, LINKS } from "@/lib/constants";
import { Linkedin, Github, Mail } from "lucide-react";

// Custom easing
const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 pt-16"
    >
      {/* Main content */}
      <motion.div
        className="relative max-w-4xl mx-auto text-center"
        style={{ y, opacity }}
      >
        {/* Profile image */}
        <motion.div
          className="mb-8 inline-block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
        >
          <Image
            src="/profile.jpg"
            alt={SITE_NAME}
            width={160}
            height={160}
            className="rounded-full border-4 border-[var(--glass-border)]"
            priority
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.1 }}
        >
          {SITE_NAME}
        </motion.h1>

        {/* Title */}
        <motion.p
          className="text-2xl sm:text-3xl md:text-4xl font-medium text-[var(--foreground-secondary)] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.2 }}
        >
          {SITE_TITLE}
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl text-[var(--foreground-tertiary)] max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.3 }}
        >
          8 years building products end-to-end. iOS, React, Go, and everything
          in between.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.4 }}
        >
          <Button href={LINKS.linkedin} external variant="primary" size="lg" className="w-[140px]">
            <Linkedin size={20} className="mr-2" />
            LinkedIn
          </Button>
          <Button href={LINKS.github} external variant="secondary" size="lg" className="w-[140px]">
            <Github size={20} className="mr-2" />
            GitHub
          </Button>
          <Button href={LINKS.email} variant="outline" size="lg" className="w-[140px]">
            <Mail size={20} className="mr-2" />
            Email
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-[var(--glass-border)] flex justify-center pt-2"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-[var(--foreground-tertiary)] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
