import { ImageResponse } from "next/og";

// Shared social-preview image (Zalo, Facebook, Messenger link cards) for both locales.
// Kept ASCII-only: the default OG font has no Vietnamese diacritics.
export const alt = "Khanh Nhan — Websites & software for small businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// Rendered once at build time (static export for GitHub Pages).
export const dynamic = "force-static";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #020617 0%, #1e1b4b 55%, #4c1d95 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#a5b4fc", letterSpacing: 4 }}>
          FREELANCE WEB DEVELOPER
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 84, fontWeight: 700 }}>
          Khanh Nhan
        </div>
        <div style={{ display: "flex", marginTop: 16, fontSize: 40, color: "#e2e8f0" }}>
          Website · Web app · Automation
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 56,
            alignSelf: "flex-start",
            padding: "16px 32px",
            borderRadius: 999,
            background: "#0068ff",
            fontSize: 30,
            fontWeight: 600,
          }}
        >
          Zalo: 0349 796 850
        </div>
      </div>
    ),
    size,
  );
}
