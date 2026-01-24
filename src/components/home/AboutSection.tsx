"use client";

import { motion } from "framer-motion";
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
          <div className="glass-card rounded-[32px] p-8 sm:p-10">
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
              <p className="text-sm text-[var(--foreground-tertiary)] mb-3">
                Top Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {ABOUT.topSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 text-sm rounded-full bg-[var(--primary)]/10 text-[var(--primary-hover)] border border-[var(--primary)]/20 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
