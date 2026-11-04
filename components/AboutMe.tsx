import Icon from "@/components/Icon";
import SectionTitle from "@/components/SectionTitle";
import Tag from "@/components/Tag";
import type { Dictionary } from "@/lib/i18n/vi";

export default function AboutMe({ aboutMe }: { aboutMe: Dictionary["aboutMe"] }) {
  return (
    <section id="about" className="mx-auto max-w-6xl border-t border-line px-4 py-20 sm:px-6">
      <SectionTitle eyebrow={aboutMe.eyebrow} title={aboutMe.title} subtitle={aboutMe.intro} />

      <div className="mt-12 grid gap-10 lg:grid-cols-2 print:mt-6 print:grid-cols-2 print:gap-6">
        <div data-reveal>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
            {aboutMe.experienceTitle}
          </h3>
          <ol className="mt-6 space-y-8 border-l border-line pl-6">
            {aboutMe.experience.map((item) => (
              <li key={item.company} className="relative">
                <span
                  className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full bg-brand ring-4 ring-bg"
                  aria-hidden="true"
                />
                <p className="text-sm text-muted">{item.dates}</p>
                <p className="mt-1 font-semibold text-ink">
                  {item.company} <span className="font-normal text-muted">· {item.role}</span>
                </p>
                <p className="mt-1.5 leading-relaxed text-muted">{item.summary}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-10">
          <div data-reveal>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
              {aboutMe.educationTitle}
            </h3>
            <ul className="mt-6 space-y-3">
              {aboutMe.education.map((item) => (
                <li key={item} className="flex gap-3 text-ink">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={2.2} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
              {aboutMe.skillsTitle}
            </h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {aboutMe.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
