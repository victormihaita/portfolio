"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { SKILLS } from "@/lib/constants";
import { Smartphone, Globe, Server, Database, Cloud, Bot } from "lucide-react";

const skillCategories = [
  { key: "mobile" as const, label: "Mobile", icon: Smartphone },
  { key: "frontend" as const, label: "Frontend", icon: Globe },
  { key: "backend" as const, label: "Backend", icon: Server },
  { key: "database" as const, label: "Database", icon: Database },
  { key: "cloud" as const, label: "Cloud", icon: Cloud },
  { key: "ai" as const, label: "AI/ML", icon: Bot },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Skills
          </h2>
          <p className="text-[var(--foreground-secondary)] text-center mb-12 max-w-2xl mx-auto">
            Technologies I work with across the stack.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <StaggerItem key={category.key}>
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.label}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {SKILLS[category.key].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm rounded-full bg-[var(--overlay-subtle)] text-[var(--foreground-secondary)] border border-[var(--glass-border)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
