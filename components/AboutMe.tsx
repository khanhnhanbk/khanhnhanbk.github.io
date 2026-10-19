import Icon from "@/components/Icon";
import SectionTitle from "@/components/SectionTitle";
import Tag from "@/components/Tag";
import type { Dictionary } from "@/lib/i18n/vi";

export default function AboutMe({ aboutMe }: { aboutMe: Dictionary["aboutMe"] }) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionTitle eyebrow={aboutMe.eyebrow} title={aboutMe.title} subtitle={aboutMe.intro} />

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div data-reveal>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            {aboutMe.experienceTitle}
          </h3>
          <ol className="mt-6 space-y-8 border-l border-white/15 pl-6">
            {aboutMe.experience.map((item) => (
              <li key={item.company} className="relative">
                <span
                  className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-indigo-400 to-fuchsia-400 ring-4 ring-slate-950"
                  aria-hidden="true"
                />
                <p className="text-sm text-slate-500">{item.dates}</p>
                <p className="mt-1 font-semibold text-white">
                  {item.company} <span className="font-normal text-slate-400">· {item.role}</span>
                </p>
                <p className="mt-1.5 leading-relaxed text-slate-400">{item.summary}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-10">
          <div data-reveal>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              {aboutMe.educationTitle}
            </h3>
            <ul className="mt-6 space-y-3">
              {aboutMe.education.map((item) => (
                <li key={item} className="flex gap-3 text-slate-300">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-violet-400" strokeWidth={2.2} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
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
