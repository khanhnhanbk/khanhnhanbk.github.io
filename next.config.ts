import type { NextConfig } from "next";

// Static export for GitHub Pages (https://khanhnhanbk.github.io), built by
// .github/workflows/pages.yml. No server: images are served as is.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
