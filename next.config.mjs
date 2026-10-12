/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // The hero and footer share one large photo and it is the single heaviest
    // asset on the page. AVIF first, WebP as the fallback.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
