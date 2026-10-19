"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import LanguageSwitch from "@/components/LanguageSwitch";
import { ZALO_URL } from "@/lib/contact";
import type { Dictionary } from "@/lib/i18n/vi";
import type { Locale } from "@/lib/metadata";

export default function Header({
  header,
  languageSwitch,
  locale,
}: {
  header: Dictionary["header"];
  languageSwitch: string;
  locale: Locale;
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const zaloButton = (
    <a
      href={ZALO_URL}
      target="_blank"
      rel="noopener"
      onClick={close}
      className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110"
    >
      <Icon name="chat" className="h-4 w-4" strokeWidth={2} />
      {header.cta}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="text-lg font-bold tracking-tight text-white">
          {header.logo}
          <span className="text-gradient">.</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {header.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitch locale={locale} label={languageSwitch} />
          {zaloButton}
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? header.closeMenu : header.openMenu}
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-slate-200 hover:bg-white/10 md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-slate-950 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {header.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-lg px-2 py-3 text-base font-medium text-slate-200 hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
              <LanguageSwitch locale={locale} label={languageSwitch} />
              {zaloButton}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
