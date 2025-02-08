const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  images: {
    formats: ["image/webp"],
  },
});

export function generateMetadata() {
  return {
    metadataBase: new URL('https://www.hackjklu.com'),
  };
}

