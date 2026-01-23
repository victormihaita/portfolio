"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SITE_NAME, SITE_TITLE, LINKS } from "@/lib/constants";
import { Linkedin, Github, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {SITE_NAME}
        </motion.h1>

        <motion.p
          className="text-2xl sm:text-3xl md:text-4xl font-medium gradient-text-accent mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          {SITE_TITLE}
        </motion.p>

        <motion.p
          className="text-lg sm:text-xl text-[var(--foreground-secondary)] max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          8 years building products end-to-end. iOS, React, Go, and everything in between.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <Button href={LINKS.linkedin} external variant="primary" size="lg">
            <Linkedin size={20} className="mr-2" />
            LinkedIn
          </Button>
          <Button href={LINKS.github} external variant="secondary" size="lg">
            <Github size={20} className="mr-2" />
            GitHub
          </Button>
          <Button href={LINKS.email} variant="outline" size="lg">
            <Mail size={20} className="mr-2" />
            Email
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
