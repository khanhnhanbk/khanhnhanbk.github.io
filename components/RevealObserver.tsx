"use client";

import { useEffect } from "react";

// Fades in every [data-reveal] element as it scrolls into view. Mounted once per page.
export default function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    document.documentElement.classList.add("js-reveal");

    return () => observer.disconnect();
  }, []);

  return null;
}
