import Avatar from "@/components/Avatar";
import Icon from "@/components/Icon";
import { ZALO_URL } from "@/lib/contact";
import type { Dictionary } from "@/lib/i18n/vi";

export default function Hero({ hero }: { hero: Dictionary["hero"] }) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Soft green blobs behind the hero so the glass surfaces have something to blur. */}
      <div className="animate-blob absolute print:hidden -left-32 -top-24 -z-10 h-96 w-96 rounded-full bg-soft blur-3xl" aria-hidden="true" />
      <div className="animate-blob absolute print:hidden -right-24 top-32 -z-10 h-80 w-80 rounded-full bg-brand opacity-15 blur-3xl [animation-delay:-6s]" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-16 pt-12 sm:px-6 md:pt-20 lg:grid-cols-[1.25fr_1fr] lg:pb-24 print:grid-cols-[1fr_auto] print:gap-8 print:pb-6 print:pt-2">
        <div className="text-center lg:text-left print:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-soft px-3.5 py-1.5 text-sm font-semibold text-brand">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-brand" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            {hero.badge}
          </span>

          <h1 className="mt-6 text-[2rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink sm:text-5xl xl:text-[3.5rem] print:text-[2rem]">
            <span className="whitespace-nowrap">{hero.headline}</span>{" "}
            <span className="text-brand">{hero.highlight}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">
            {hero.pitch}
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start print:hidden">
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener"
              className="glass btn min-h-12 px-7 hover:-translate-y-0.5 active:scale-95"
            >
              <Icon name="chat" strokeWidth={2} />
              {hero.ctaPrimary}
            </a>
            <a
              href="#projects"
              className="glass btn-ghost min-h-12 px-7 hover:-translate-y-0.5 active:scale-95"
            >
              {hero.ctaSecondary}
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted lg:justify-start print:mt-4 print:justify-start">
            {hero.checks.map((check) => (
              <li key={check} className="flex items-center gap-1.5">
                <Icon name="check" className="h-4 w-4 text-brand" strokeWidth={2.5} />
                {check}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <div className="animate-float relative">
            <div className="relative rounded-full bg-brand p-1">
              <div className="rounded-full bg-bg p-1">
                <Avatar alt={hero.avatarAlt} />
              </div>
            </div>
          </div>
          <div className="glass card mt-8 px-6 py-4 text-center">
            <p className="text-sm text-muted">{hero.greeting}</p>
            <p className="mt-1 text-lg font-semibold text-ink">{hero.name}</p>
            <p className="mt-1 text-sm text-muted">{hero.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
