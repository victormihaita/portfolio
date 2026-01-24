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
            <p className="text-lg text-[var(--foreground-secondary)] leading-relaxed mb-6">
              {ABOUT.stack}
            </p>
            <p className="text-lg text-[var(--foreground-secondary)] leading-relaxed mb-8">
              {ABOUT.focus}
            </p>

            <div className="border-t border-[var(--glass-border)] pt-6">
              <p className="text-sm text-[var(--foreground-tertiary)] mb-3">Top Skills</p>
              <div className="flex flex-wrap gap-2">
                {ABOUT.topSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-[var(--primary)]/10 text-[var(--primary-hover)] border border-[var(--primary)]/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
