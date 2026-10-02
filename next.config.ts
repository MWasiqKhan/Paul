import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 is used for the portrait and book covers so they stay crisp when rotated / zoomed.
    qualities: [75, 90],
  },
};

export default nextConfig;
