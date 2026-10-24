"use client";

import { useEffect } from "react";

// Moves the .glass specular highlight under the pointer. One delegated listener per page.
export default function GlassPointer() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.<HTMLElement>(".glass");
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--gx", `${e.clientX - r.left}px`);
      el.style.setProperty("--gy", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
