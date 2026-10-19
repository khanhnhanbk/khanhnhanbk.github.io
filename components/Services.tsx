import Icon from "@/components/Icon";
import SectionTitle from "@/components/SectionTitle";
import type { Dictionary } from "@/lib/i18n/vi";

export default function Services({ services }: { services: Dictionary["services"] }) {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionTitle eyebrow={services.eyebrow} title={services.title} subtitle={services.subtitle} />
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.items.map((item) => (
          <li
            key={item.title}
            data-reveal
            className="group relative overflow-hidden rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/[0.06] hover:ring-violet-400/40"
          >
            <div
              className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/20 opacity-0 blur-2xl transition group-hover:opacity-100"
              aria-hidden="true"
            />
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 text-violet-300 ring-1 ring-violet-400/30">
              <Icon name={item.icon} className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 leading-relaxed text-slate-400">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
