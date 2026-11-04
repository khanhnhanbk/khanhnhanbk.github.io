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
        className="mx-auto max-w-5xl rounded-3xl bg-soft px-6 py-14 text-center sm:px-12 sm:py-16 print:px-4 print:py-8"
      >

        <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-ink sm:text-5xl">{contact.title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted">{contact.subtitle}</p>
        <a
          href={ZALO_URL}
          target="_blank"
          rel="noopener"
          className="glass btn mt-9 min-h-14 px-8 text-lg hover:-translate-y-0.5"
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
                className="glass card flex h-full flex-col items-center gap-2 p-5 transition hover:-translate-y-0.5 active:scale-95"
              >
                <Icon name={c.icon} className="h-6 w-6 text-brand" />
                <span className="font-semibold text-ink">{c.label}</span>
                <span className="break-all text-sm text-muted print:break-normal print:text-xs">{c.value}</span>
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
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-card text-brand transition hover:bg-bg"
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
