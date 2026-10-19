import "../globals.css";
import { beVietnamPro } from "@/lib/fonts";
import { vi } from "@/lib/i18n/vi";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(vi, "vi");

export default function ViLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="motion-safe:scroll-smooth">
      <body className={`${beVietnamPro.className} antialiased`}>{children}</body>
    </html>
  );
}
