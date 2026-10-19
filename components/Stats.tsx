import type { Dictionary } from "@/lib/i18n/vi";

export default function Stats({ stats }: { stats: Dictionary["stats"] }) {
  return (
    <section className="border-y border-white/10 bg-white/[0.02]">
      <ul
        className={`mx-auto grid max-w-6xl gap-px px-4 sm:px-6 ${
          stats.items.length === 3 ? "sm:grid-cols-3" : "grid-cols-2 lg:grid-cols-4"
        }`}
      >
        {stats.items.map((stat) => (
          <li key={stat.label} data-reveal className="px-2 py-8 text-center sm:px-4">
            <p className="text-gradient text-3xl font-bold sm:text-4xl">{stat.value}</p>
            <p className="mt-2 text-sm leading-snug text-slate-400">{stat.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
