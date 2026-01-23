"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { SITE_NAME, SITE_TITLE, LINKS } from "@/lib/constants";
import { Linkedin, Github, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
            {SITE_NAME}
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-2xl sm:text-3xl md:text-4xl font-medium gradient-text-accent mb-6">
            {SITE_TITLE}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg sm:text-xl text-[var(--foreground-secondary)] max-w-2xl mx-auto mb-10">
            8 years building products end-to-end. iOS, React, Go, and everything in between.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
