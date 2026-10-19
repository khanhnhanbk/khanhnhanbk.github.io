import type { Metadata } from "next";
import {
  EMAIL,
  FACEBOOK_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  PHONE,
  SITE_URL,
} from "@/lib/contact";
import type { Dictionary } from "@/lib/i18n/vi";

export type Locale = "vi" | "en";

export const LOCALE_PATHS: Record<Locale, string> = { vi: "/", en: "/en" };

export function buildMetadata(dict: Dictionary, locale: Locale): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: {
      canonical: LOCALE_PATHS[locale],
      languages: { vi: LOCALE_PATHS.vi, en: LOCALE_PATHS.en },
    },
    openGraph: {
      type: "website",
      title: dict.meta.title,
      description: dict.meta.description,
      locale: dict.meta.ogLocale,
      url: LOCALE_PATHS[locale],
    },
    twitter: { card: "summary_large_image" },
  };
}

// schema.org data so Google can show the business name, contact and services.
export function buildJsonLd(dict: Dictionary, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${dict.hero.name} — ${dict.footer.tagline}`,
    description: dict.meta.description,
    url: new URL(LOCALE_PATHS[locale], SITE_URL).toString(),
    image: new URL("/avatar.jpg", SITE_URL).toString(),
    telephone: PHONE,
    email: EMAIL,
    areaServed: "VN",
    inLanguage: locale,
    founder: { "@type": "Person", name: dict.hero.name, jobTitle: dict.hero.role },
    sameAs: [FACEBOOK_URL, GITHUB_URL, LINKEDIN_URL].filter(Boolean),
  };
}
