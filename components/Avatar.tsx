import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

// Checked at build time: drop public/avatar.jpg in and rebuild to show the photo.
const hasAvatar = fs.existsSync(path.join(process.cwd(), "public/avatar.jpg"));

export default function Avatar({ alt }: { alt: string }) {
  const className = "h-56 w-56 rounded-full sm:h-64 sm:w-64";

  if (hasAvatar) {
    return (
      <Image
        src="/avatar.jpg"
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
      className={`${className} flex items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-600 text-6xl font-bold text-white`}
    >
      KN
    </div>
  );
}
