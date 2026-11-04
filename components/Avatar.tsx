import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

// Checked at build time: drop public/avatar.webp in and rebuild to show the photo.
// Keep it small (512px): images are served as is on GitHub Pages.
const hasAvatar = fs.existsSync(path.join(process.cwd(), "public/avatar.webp"));

export default function Avatar({ alt }: { alt: string }) {
  const className = "h-56 w-56 rounded-full sm:h-64 sm:w-64 print:h-40 print:w-40";

  if (hasAvatar) {
    return (
      <Image
        src="/avatar.webp"
        alt={alt}
        width={256}
        height={256}
        priority
        className={`${className} object-cover`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`${className} flex items-center justify-center bg-soft text-6xl font-extrabold text-brand`}
    >
      KN
    </div>
  );
}
