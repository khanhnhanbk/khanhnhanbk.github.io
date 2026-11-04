import type { Dictionary } from "./vi";

export const en: Dictionary = {
  meta: {
    title: "Websites & web apps for small businesses — Khanh Nhan, Freelance Developer",
    description:
      "Business websites, online stores, management software and automation tools built to order. Free consultation and quote.",
    keywords: [
      "freelance web developer Vietnam",
      "website design",
      "landing page",
      "web app development",
      "management software",
      "Next.js developer",
    ],
    ogLocale: "en_US",
  },
  header: {
    logo: "Khanh Nhan",
    nav: [
      { href: "#services", label: "Services" },
      { href: "#projects", label: "Projects" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Contact" },
    ],
    cta: "Chat on Zalo",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
  },
  languageSwitch: "Switch language",
  hero: {
    badge: "Available for projects · Free consultation",
    headline: "Websites & software",
    highlight: "for shops and small businesses",
    pitch:
      "Great on phones, easy to find on Google, with a clear quote before any work. Tell me your idea — I handle everything technical.",
    ctaPrimary: "Free consultation on Zalo",
    ctaSecondary: "See projects",
    checks: ["Quote before any work", "Regular demos", "Support after launch"],
    greeting: "Hi, I'm",
    name: "Nguyen Van Khanh Nhan",
    role: "Full-stack Developer · B.Eng. Computer Science, HCMUT",
    avatarAlt: "Photo of Nguyen Van Khanh Nhan",
  },
  stats: {
    items: [
      { value: "1+ yr", label: "building software for international tech companies" },
      { value: "< 24h", label: "reply time" },
      { value: "Free", label: "consultation & quote" },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "How can I help?",
    subtitle:
      "No coding knowledge needed — tell me your business goal and I'll suggest a solution that fits your budget.",
    items: [
      {
        icon: "globe",
        title: "Business websites & landing pages",
        description:
          "Customers find you on Google, browse your products and message you in one tap. Looks great on every phone.",
      },
      {
        icon: "cart",
        title: "Online stores & booking",
        description:
          "Product catalog, cart, appointment booking, orders straight from your own site — no marketplace fees.",
      },
      {
        icon: "dashboard",
        title: "Management software",
        description:
          "Orders, customers, inventory, staff and revenue reports in one place — instead of scattered notebooks and spreadsheets.",
      },
      {
        icon: "bolt",
        title: "Automation & AI",
        description:
          "Automatic Excel processing, scheduled reports, chatbots for customer questions — hours of manual work saved every week.",
      },
      {
        icon: "wrench",
        title: "Fixes & upgrades",
        description:
          "Slow site, broken mobile layout, missing features? I'll review it and quote a quick fix.",
      },
      {
        icon: "search",
        title: "Domain, hosting & SEO",
        description:
          "Domain (.vn/.com), hosting, Google Maps and Google Analytics set up so your site runs reliably.",
      },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "Things I've built",
    viewLive: "View live",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    resultLabel: "Result",
    items: [
      {
        id: "han-ngu",
        title: "Hán Ngữ Studio",
        problem: "Vietnamese learners of Chinese lacked a free, easy tool for handwriting practice.",
        solution: "A web app that generates printable A4 handwriting sheets and segments Chinese text automatically.",
        result: "Runs entirely in the browser, nothing to install, free for everyone.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Python (FastAPI)", "Vercel"],
      },
      {
        id: "language-platform",
        title: "Language Learning Platform",
        problem: "Needed a language-learning platform with learning paths, exercises and progress tracking.",
        solution: "Courses, lessons, vocabulary and auto-graded quizzes, Duolingo-style.",
        result: "Learners see their progress clearly; new courses and content are easy to add.",
        tags: ["ASP.NET Core", "Entity Framework Core", "Next.js", "SQL Server"],
      },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "What clients say",
    items: [],
  },
  process: {
    eyebrow: "Process",
    title: "A clear, transparent way of working",
    steps: [
      {
        title: "Free consultation",
        description: "Tell me what you need over Zalo or a call; I'll suggest the right solution.",
      },
      {
        title: "Quote & timeline",
        description: "A detailed written quote with agreed scope and delivery date before any work starts.",
      },
      {
        title: "Build & demo",
        description: "You see regular demos and can give feedback while the work is in progress.",
      },
      {
        title: "Hand-over & support",
        description: "Full hand-over, a walkthrough on how to use it, and bug-fix support once it's live.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        q: "How long does a website take?",
        a: "A landing page usually takes 3–5 days, a business website 1–2 weeks, management software 3–6 weeks. The exact timeline is written in the quote.",
      },
      {
        q: "How does payment work?",
        a: "As agreed in the written quote, before any work starts.",
      },
      {
        q: "I'm not technical — is that a problem?",
        a: "Not at all. Just describe your business; I take care of the technical side and show you how to update content yourself.",
      },
      {
        q: "Can you help with domain and hosting?",
        a: "Yes. I'll recommend and register a domain (.vn, .com) and suitable hosting; you pay those fees directly to the provider.",
      },
      {
        q: "What if something needs fixing after hand-over?",
        a: "I fix bugs after hand-over; the support period is stated in the quote. New features or maintenance are quoted per request.",
      },
      {
        q: "Do I own the website?",
        a: "Yes. You own all the source code, the domain and the data.",
      },
    ],
  },
  aboutMe: {
    eyebrow: "About me",
    title: "A software engineer who works like a partner",
    intro:
      "I'm Khanh Nhan, a Computer Science engineer from HCMC University of Technology. I've built software at AvePoint, FPT Software and Paradox.AI — and I bring the same standards to your project.",
    experienceTitle: "Experience",
    experience: [
      {
        company: "AvePoint",
        role: "Software Developer",
        dates: "03/2025 – 05/2026",
        summary:
          "Built features for FLY, an enterprise cloud-migration platform (SharePoint, OneDrive, Google Drive).",
      },
      {
        company: "FPT Software",
        role: "Full-stack Developer Intern",
        dates: "02/2025 – 04/2025",
        summary: "Built a hiring platform with ASP.NET Core and Angular.",
      },
      {
        company: "Paradox.AI",
        role: "Backend Developer Intern",
        dates: "09/2024 – 01/2025",
        summary: "Built REST APIs with Python/Django for AI products.",
      },
    ],
    educationTitle: "Education & achievements",
    education: [
      "B.Eng. Computer Science (Applied AI), HCMC University of Technology – VNU, GPA 3.5/4",
      "First Prize, National Mathematics Competition (2019)",
      "Silver Medal, Hanoi Open Mathematics Competition (2018)",
      "TOEIC 750",
    ],
    skillsTitle: "Technologies",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Vue.js",
      "Tailwind CSS",
      "C# / ASP.NET Core",
      "Python",
      "Django",
      "FastAPI",
      "PostgreSQL",
      "SQL Server",
      "Redis",
      "Docker",
      "Vercel",
    ],
  },
  contact: {
    title: "Ready for a website of your own?",
    subtitle: "Message me on Zalo for a free consultation and quote. I usually reply within 24 hours.",
    cta: "Message on Zalo",
    zalo: "Zalo",
    phone: "Phone",
    email: "Email",
    facebook: "Facebook",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  footer: {
    copyright: "Nguyen Van Khanh Nhan",
    tagline: "Websites & software built to order",
    floatingZalo: "Chat on Zalo",
  },
};
