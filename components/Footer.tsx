import LanguageSwitch from "@/components/LanguageSwitch";
import type { Dictionary } from "@/lib/i18n/vi";
import type { Locale } from "@/lib/metadata";

export default function Footer({
  footer,
  languageSwitch,
  locale,
}: {
  footer: Dictionary["footer"];
  languageSwitch: string;
  locale: Locale;
}) {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 pb-24 pt-8 text-sm text-slate-500 sm:flex-row sm:px-6 sm:pb-8">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} {footer.copyright} · {footer.tagline}
        </p>
        <LanguageSwitch locale={locale} label={languageSwitch} />
      </div>
    </footer>
  );
}
