"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { ABOUT } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            About Me
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="glass-card rounded-2xl p-8 sm:p-10">
            <p className="text-lg text-[var(--foreground-secondary)] leading-relaxed mb-6">
              {ABOUT.intro}
            </p>
            <p className="text-lg text-[var(--foreground-secondary)] leading-relaxed">
              {ABOUT.focus}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
