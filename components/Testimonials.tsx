import Icon from "@/components/Icon";
import SectionTitle from "@/components/SectionTitle";
import type { Dictionary } from "@/lib/i18n/vi";

export default function Testimonials({ testimonials }: { testimonials: Dictionary["testimonials"] }) {
  if (testimonials.items.length === 0) return null;

  return (
    <section id="testimonials" className="mx-auto max-w-6xl border-t border-line px-4 py-20 sm:px-6">
      <SectionTitle center eyebrow={testimonials.eyebrow} title={testimonials.title} />
      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.items.map((t) => (
          <li key={t.name} data-reveal>
            <figure className="glass card flex h-full flex-col p-7">
              <Icon name="quote" className="h-8 w-8 text-brand" strokeWidth={2} />
              <blockquote className="mt-4 flex-1 leading-relaxed text-ink">{t.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-soft font-semibold text-brand"
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-ink">{t.name}</span>
                  <span className="block text-sm text-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
