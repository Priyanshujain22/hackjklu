export default {
  images: {
    formats: ["image/webp"],
  },
};

export function generateMetadata() {
  return {
    metadataBase: new URL("https://www.hackjklu.com"),
  };
}
