import Icon from "@/components/Icon";
import SectionTitle from "@/components/SectionTitle";
import type { Dictionary } from "@/lib/i18n/vi";

export default function FAQ({ faq }: { faq: Dictionary["faq"] }) {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <SectionTitle center eyebrow={faq.eyebrow} title={faq.title} />
      <div className="mt-12 space-y-3">
        {faq.items.map((item) => (
          <details
            key={item.q}
            data-reveal
            className="glass card group open:border-brand"
          >
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-semibold text-ink [&::-webkit-details-marker]:hidden">
              {item.q}
              <Icon
                name="plus"
                className="h-5 w-5 shrink-0 text-brand transition group-open:rotate-45"
                strokeWidth={2}
              />
            </summary>
            <p className="px-6 pb-5 leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
