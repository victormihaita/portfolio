"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { LINKS } from "@/lib/constants";
import { Mail, Linkedin } from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="py-24 px-6 bg-[var(--background-elevated)]">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let&apos;s Work Together
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-lg text-[var(--foreground-secondary)] mb-8 max-w-xl mx-auto">
            Currently open to new opportunities. Feel free to reach out if
            you&apos;d like to discuss a project or just say hello.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={LINKS.email} variant="primary" size="lg">
              <Mail size={20} className="mr-2" />
              Get in Touch
            </Button>
            <Button href={LINKS.linkedin} external variant="outline" size="lg">
              <Linkedin size={20} className="mr-2" />
              Connect on LinkedIn
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
