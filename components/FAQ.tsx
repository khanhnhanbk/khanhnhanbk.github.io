import Icon from "@/components/Icon";
import SectionTitle from "@/components/SectionTitle";
import type { Dictionary } from "@/lib/i18n/vi";

export default function FAQ({ faq }: { faq: Dictionary["faq"] }) {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <SectionTitle center eyebrow={faq.eyebrow} title={faq.title} />
      <div className="mt-12 space-y-3">
        {faq.items.map((item) => (
          <details
            key={item.q}
            data-reveal
            className="glass group rounded-2xl open:bg-white/[0.06] open:border-violet-400/30"
          >
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-semibold text-white [&::-webkit-details-marker]:hidden">
              {item.q}
              <Icon
                name="plus"
                className="h-5 w-5 shrink-0 text-violet-300 transition group-open:rotate-45"
                strokeWidth={2}
              />
            </summary>
            <p className="px-6 pb-5 leading-relaxed text-slate-400">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
