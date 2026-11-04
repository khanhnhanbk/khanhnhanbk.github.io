import Icon from "@/components/Icon";
import SectionTitle from "@/components/SectionTitle";
import type { Dictionary } from "@/lib/i18n/vi";

export default function Services({ services }: { services: Dictionary["services"] }) {
  return (
    <section id="services" className="mx-auto max-w-6xl border-t border-line px-4 py-20 sm:px-6">
      <SectionTitle eyebrow={services.eyebrow} title={services.title} subtitle={services.subtitle} />
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 print:mt-6 print:grid-cols-3 print:gap-3">
        {services.items.map((item) => (
          <li
            key={item.title}
            data-reveal
            className="glass card p-6 transition hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft text-brand">
              <Icon name={item.icon} className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
