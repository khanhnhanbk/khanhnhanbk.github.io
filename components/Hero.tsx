import Avatar from "@/components/Avatar";
import Icon from "@/components/Icon";
import { ZALO_URL } from "@/lib/contact";
import type { Dictionary } from "@/lib/i18n/vi";

export default function Hero({ hero }: { hero: Dictionary["hero"] }) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Backdrop: grid fading out from the top, plus slow-moving colour blobs. */}
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" aria-hidden="true" />
      <div className="animate-blob absolute -left-32 -top-24 -z-10 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl" aria-hidden="true" />
      <div className="animate-blob absolute -right-24 top-32 -z-10 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl [animation-delay:-6s]" aria-hidden="true" />
      <div className="animate-blob absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl [animation-delay:-12s]" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-16 sm:px-6 md:pt-24 lg:grid-cols-[1.25fr_1fr] lg:pb-28">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3.5 py-1.5 text-sm font-medium text-emerald-300 ring-1 ring-emerald-400/30">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {hero.badge}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {hero.headline} <span className="text-gradient">{hero.highlight}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-300 lg:mx-0">
            {hero.pitch}
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-7 font-semibold text-white shadow-xl shadow-violet-500/25 transition hover:brightness-110"
            >
              <Icon name="chat" strokeWidth={2} />
              {hero.ctaPrimary}
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white/5 px-7 font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/10"
            >
              {hero.ctaSecondary}
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400 lg:justify-start">
            {hero.checks.map((check) => (
              <li key={check} className="flex items-center gap-1.5">
                <Icon name="check" className="h-4 w-4 text-emerald-400" strokeWidth={2.5} />
                {check}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <div className="animate-float relative">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400 opacity-70 blur-xl" aria-hidden="true" />
            <div className="relative rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400 p-1">
              <div className="rounded-full bg-slate-950 p-1">
                <Avatar alt={hero.avatarAlt} />
              </div>
            </div>
          </div>
          <div className="mt-8 rounded-2xl bg-white/5 px-6 py-4 text-center ring-1 ring-white/10 backdrop-blur">
            <p className="text-sm text-slate-400">{hero.greeting}</p>
            <p className="mt-1 text-lg font-semibold text-white">{hero.name}</p>
            <p className="mt-1 text-sm text-slate-400">{hero.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
