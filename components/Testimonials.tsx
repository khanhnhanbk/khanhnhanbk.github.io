import Icon from "@/components/Icon";
import SectionTitle from "@/components/SectionTitle";
import type { Dictionary } from "@/lib/i18n/vi";

export default function Testimonials({ testimonials }: { testimonials: Dictionary["testimonials"] }) {
  if (testimonials.items.length === 0) return null;

  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionTitle center eyebrow={testimonials.eyebrow} title={testimonials.title} />
      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.items.map((t) => (
          <li key={t.name} data-reveal>
            <figure className="glass flex h-full flex-col rounded-2xl p-7">
              <Icon name="quote" className="h-8 w-8 text-violet-400" strokeWidth={2} />
              <blockquote className="mt-4 flex-1 leading-relaxed text-slate-200">{t.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 font-semibold text-white"
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-white">{t.name}</span>
                  <span className="block text-sm text-slate-400">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
