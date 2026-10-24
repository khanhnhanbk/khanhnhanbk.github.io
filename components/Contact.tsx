import Icon, { type IconName } from "@/components/Icon";
import {
  EMAIL,
  FACEBOOK_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  PHONE,
  PHONE_DISPLAY,
  ZALO_URL,
} from "@/lib/contact";
import type { Dictionary } from "@/lib/i18n/vi";

type Channel = { label: string; value?: string; href: string; external: boolean; icon: IconName };

export default function Contact({ contact }: { contact: Dictionary["contact"] }) {
  const channels: Channel[] = [
    { label: contact.zalo, value: PHONE_DISPLAY, href: ZALO_URL, external: true, icon: "chat" },
    { label: contact.phone, value: PHONE_DISPLAY, href: `tel:${PHONE}`, external: false, icon: "phone" },
    { label: contact.email, value: EMAIL, href: `mailto:${EMAIL}`, external: false, icon: "mail" },
  ];
  const socials: Channel[] = [
    { label: contact.facebook, href: FACEBOOK_URL, external: true, icon: "facebook" as const },
    { label: contact.github, href: GITHUB_URL, external: true, icon: "github" as const },
    { label: contact.linkedin, href: LINKEDIN_URL, external: true, icon: "linkedin" as const },
  ].filter((s) => s.href);

  return (
    <section id="contact" className="px-4 py-24 sm:px-6">
      <div
        data-reveal
        className="relative isolate mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 px-6 py-14 text-center shadow-2xl shadow-violet-600/30 sm:px-12 sm:py-20"
      >
        <div className="bg-grid absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
        <div className="absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl" aria-hidden="true" />

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">{contact.title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">{contact.subtitle}</p>
        <a
          href={ZALO_URL}
          target="_blank"
          rel="noopener"
          className="mt-9 inline-flex min-h-14 items-center gap-2 rounded-full bg-white px-8 text-lg font-semibold text-violet-700 shadow-xl transition hover:scale-[1.03]"
        >
          <Icon name="chat" strokeWidth={2.2} />
          {contact.cta}
        </a>

        <ul className="mt-12 grid gap-3 sm:grid-cols-3">
          {channels.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener" } : {})}
                className="glass flex h-full flex-col items-center gap-2 rounded-2xl bg-white/10 p-5 hover:-translate-y-0.5 hover:bg-white/20 active:scale-95"
              >
                <Icon name={c.icon} className="h-6 w-6 text-white" />
                <span className="font-semibold text-white">{c.label}</span>
                <span className="break-all text-sm text-white/75">{c.value}</span>
              </a>
            </li>
          ))}
        </ul>

        {socials.length > 0 && (
          <ul className="mt-8 flex justify-center gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={s.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white/25"
                >
                  <Icon name={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
