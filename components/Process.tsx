import SectionTitle from "@/components/SectionTitle";
import type { Dictionary } from "@/lib/i18n/vi";

export default function Process({ process }: { process: Dictionary["process"] }) {
  return (
    <section id="process" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionTitle eyebrow={process.eyebrow} title={process.title} />
        <ol className="relative mt-12 grid gap-8 print:mt-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 print:grid-cols-4 print:gap-4">
          {/* Connecting line behind the step numbers on wide screens. */}
          <div
            className="absolute left-6 right-6 top-6 hidden h-px bg-line lg:block"
            aria-hidden="true"
          />
          {process.steps.map((step, i) => (
            <li key={step.title} data-reveal className="relative">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg font-extrabold text-brand-ink ring-4 ring-bg">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
