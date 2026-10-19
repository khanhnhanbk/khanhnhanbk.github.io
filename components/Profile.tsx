import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import FloatingZalo from "@/components/FloatingZalo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import RevealObserver from "@/components/RevealObserver";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import type { Dictionary } from "@/lib/i18n/vi";
import { buildJsonLd, type Locale } from "@/lib/metadata";

export default function Profile({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <div id="top" className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(dict, locale)) }}
      />
      <Header header={dict.header} languageSwitch={dict.languageSwitch} locale={locale} />
      <main>
        <Hero hero={dict.hero} />
        <Stats stats={dict.stats} />
        <Services services={dict.services} />
        <Projects projects={dict.projects} />
        <Testimonials testimonials={dict.testimonials} />
        <Process process={dict.process} />
        <AboutMe aboutMe={dict.aboutMe} />
        <FAQ faq={dict.faq} />
        <Contact contact={dict.contact} />
      </main>
      <Footer footer={dict.footer} languageSwitch={dict.languageSwitch} locale={locale} />
      <FloatingZalo label={dict.footer.floatingZalo} />
      <RevealObserver />
    </div>
  );
}
