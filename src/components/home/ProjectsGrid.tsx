"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  ScaleStaggerItem,
} from "@/components/animations/StaggerContainer";
import { InteractiveCard } from "@/components/ui/Card";
import { PROJECTS } from "@/lib/constants";
import { ExternalLink } from "lucide-react";

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 px-6 bg-[var(--background-elevated)]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Projects
          </h2>
          <p className="text-[var(--foreground-secondary)] text-center mb-12 max-w-2xl mx-auto">
            A selection of products I&apos;ve helped build and ship.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ScaleStaggerItem key={project.id} className="h-full">
              <InteractiveCard
                href={project.url}
                className="h-full flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    {project.wip && (
                      <span className="px-2 py-0.5 text-[10px] font-semibold uppercase rounded bg-amber-500/20 text-amber-400">
                        WIP
                      </span>
                    )}
                  </div>
                  {project.url && (
                    <ExternalLink
                      size={18}
                      className="text-[var(--foreground-tertiary)] flex-shrink-0 group-hover:text-[var(--primary)] transition-colors"
                    />
                  )}
                </div>

                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--primary)]/20 text-[var(--primary-hover)] mb-4 w-fit">
                  {project.role}
                </span>

                <p className="text-[var(--foreground-secondary)] text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-lg bg-[var(--overlay-subtle)] text-[var(--foreground-tertiary)] border border-[var(--glass-border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </InteractiveCard>
            </ScaleStaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
