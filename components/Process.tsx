import SectionTitle from "@/components/SectionTitle";
import type { Dictionary } from "@/lib/i18n/vi";

export default function Process({ process }: { process: Dictionary["process"] }) {
  return (
    <section id="process" className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionTitle eyebrow={process.eyebrow} title={process.title} />
        <ol className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Connecting line behind the step numbers on wide screens. */}
          <div
            className="absolute left-6 right-6 top-6 hidden h-px bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 lg:block"
            aria-hidden="true"
          />
          {process.steps.map((step, i) => (
            <li key={step.title} data-reveal className="relative">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-lg font-bold text-white ring-2 ring-violet-400">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-400">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
