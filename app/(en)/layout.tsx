import "../globals.css";
import { beVietnamPro } from "@/lib/fonts";
import { en } from "@/lib/i18n/en";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(en, "en");

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="motion-safe:scroll-smooth">
      <body className={`${beVietnamPro.className} antialiased`}>{children}</body>
    </html>
  );
}
