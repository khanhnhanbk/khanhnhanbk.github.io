import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Icon from "@/components/Icon";
import SectionTitle from "@/components/SectionTitle";
import Tag from "@/components/Tag";
import { PROJECT_LINKS } from "@/lib/contact";
import type { Dictionary } from "@/lib/i18n/vi";

// Checked at build time, like Avatar: drop public/projects/<id>.jpg|png|webp in and rebuild.
function findScreenshot(id: string): string | undefined {
  for (const ext of ["jpg", "png", "webp"]) {
    if (fs.existsSync(path.join(process.cwd(), "public/projects", `${id}.${ext}`))) {
      return `/projects/${id}.${ext}`;
    }
  }
}

export default function Projects({ projects }: { projects: Dictionary["projects"] }) {
  return (
    <section id="projects" className="mx-auto max-w-6xl border-t border-line px-4 py-20 sm:px-6">
      <SectionTitle eyebrow={projects.eyebrow} title={projects.title} />
      <ul className="mt-12 grid gap-8 md:grid-cols-2 print:mt-6 print:grid-cols-2 print:gap-4">
        {projects.items.map((project) => {
          const href = PROJECT_LINKS[project.id];
          const screenshot = findScreenshot(project.id);
          const story = [
            { label: projects.problemLabel, text: project.problem },
            { label: projects.solutionLabel, text: project.solution },
            { label: projects.resultLabel, text: project.result },
          ];
          return (
            <li
              key={project.id}
              data-reveal
              className="glass card group flex flex-col overflow-hidden"
            >
              {/* Browser-window frame around the screenshot (or a gradient placeholder). */}
              <div className="border-b border-line bg-soft print:hidden">
                <div className="flex gap-1.5 px-4 py-3" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-line" />
                  <span className="h-2.5 w-2.5 rounded-full bg-line" />
                  <span className="h-2.5 w-2.5 rounded-full bg-line" />
                </div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  {screenshot ? (
                    <Image
                      src={screenshot}
                      alt={project.title}
                      fill
                      sizes="(min-width: 768px) 560px, 100vw"
                      className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-soft">
                      <Icon name="globe" className="h-16 w-16 text-brand opacity-40" strokeWidth={1.2} />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
                <dl className="mt-4 flex-1 space-y-3">
                  {story.map((s) => (
                    <div key={s.label}>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-brand">{s.label}</dt>
                      <dd className="mt-0.5 leading-relaxed text-muted">{s.text}</dd>
                    </div>
                  ))}
                </dl>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </ul>
                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener"
                    className="glass btn mt-6 min-h-11 w-fit px-5 text-sm"
                  >
                    {projects.viewLive}
                    <Icon name="external" className="h-4 w-4" strokeWidth={2} />
                  </a>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
